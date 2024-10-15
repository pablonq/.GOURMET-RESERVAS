<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Notificacion;
use App\Models\Reserva;
use App\Notifications\ReservaNotification;
use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Log;

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

        $user = Usuario::find($idUsuario);
        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado.'], 404);
        }

        $user->notify(new ReservaNotification($reserva));

        Log::info('Notificación enviada a usuario: ' . $user->email);

        return response()->json(['message' => 'Notificación enviada y guardada.'], 200);
    }
}
