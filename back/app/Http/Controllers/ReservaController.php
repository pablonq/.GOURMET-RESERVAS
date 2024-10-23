<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Jobs\SendReservationReminder;
use App\Models\Reserva;
use App\Notifications\ReservaNotification;
use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Log;
use App\Models\notification;
use App\Models\Persona;
use App\Models\Restaurante;
use Illuminate\Support\Facades\Mail;

class ReservaController extends Controller
{
    public function registerReserva(Request $request)
    {

        $fields = $request->validate([
            'fechaReserva' => 'required|date',
            'horaReserva' => 'required|date_format:H:i',
            'horaFinReserva' => 'required|date_format:H:i',
            'estado' => 'required|string',
            'notaEspecial' => 'string',
            'mesas.*.idMesa' => 'required|integer',
            'idRestaurante' => 'required|integer',
            'idUsuario' => 'required|integer',
        ]);

        $reserva = new Reserva();
        $reserva->fechaReserva = $fields['fechaReserva'];
        $reserva->horaReserva = $fields['horaReserva'];
        $reserva->horaFinReserva = $fields['horaFinReserva'];
        $reserva->estado = $fields['estado'];
        $reserva->notaEspecial = $fields['notaEspecial'];
        $reserva->idRestaurante = $fields['idRestaurante'];
        $reserva->idUsuario = $fields['idUsuario'];
        $reserva->save();

        foreach ($fields['mesas'] as $mesa) {
            $reserva->mesas()->attach($mesa['idMesa']);
        }


        return response()->json($reserva, 201);
    }

    public function confirmReservation($reservationId)
    {
        $reserva = Reserva::find($reservationId);
        if (!$reserva) {
            return response()->json(['error' => 'Reserva no encontrada.'], 404);
        }

        $idUsuario = $reserva->idUsuario;

        $user = Persona::find($idUsuario);
        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado.'], 404);
        }

        //El Job enviara la notificación al usuario
        SendReservationReminder::dispatch($reserva, 'confirmation');

        return response()->json(['message' => 'Notificación enviada y guardada.'], 200);
    }


    public function getReservasPorRestaurante($idRestaurante)
    {
        $reservas = Reserva::with('mesas')
            ->where('idRestaurante', $idRestaurante)->get();


        if ($reservas->isEmpty()) {
            return response()->json(['message' => 'No se encontraron reservas para este restaurante.'], 404);
        }

        return response()->json($reservas, 200);
    }


    public function getReservasPorCliente($idUsuario)
    {
        $reservas = Reserva::with(['restaurantes', 'mesas'])
            ->where('idUsuario', $idUsuario)
            ->get();

        if ($reservas->isEmpty()) {
            return response()->json(['message' => 'No se encontraron reservas para este cliente.'], 404);
        }

        return response()->json($reservas, 200);
    }


    public function getReserva($idReserva)
    {
        $reserva = Reserva::find($idReserva);

        if (!$reserva) {
            return response()->json(['error' => 'Reserva no encontrada.'], 404);
        }

        return response()->json($reserva, 200);
    }

    public function cancelarReserva($idReserva)
    {
        $reserva = Reserva::find($idReserva);

        if (!$reserva) {
            return response()->json(['error' => 'Reserva no encontrada.'], 404);
        }

        if ($reserva->estado === "procesada") {
            $reserva->estado = "cancelada";
            $reserva->save();

            return response()->json(['message' => 'Reserva cancelada correctamente.', 'reserva' => $reserva], 200);
        }

        return response()->json(['message' => 'No se puede cancelar la reserva ya que no está en estado procesada.'], 400);
    }
}
