<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Mesa;

class MesaController extends Controller
{
    public function index()
    {

        if (Auth::check()) {

            $user = Auth::user();
            $restauranteId = $user->id;

            $mesas = Mesa::where('idRestaurante', $restauranteId)->get();

            return response()->json($mesas);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function registerMesa(Request $request)
    {

        $fields = $request->validate([
            'mesasData.*.numeroMesa' => 'required|integer',
            'mesasData.*.cantidadPersonas' => 'required|integer',
            'mesasData.*.estado' => 'required',
            'mesasData.*.idRestaurante' => 'required|integer'
        ]);

        $mesas = [];

        foreach ($fields['mesasData'] as $mesaData) {
            $mesa = Mesa::create([
                'numeroMesa' => $mesaData['numeroMesa'],
                'cantidadPersonas' => $mesaData['cantidadPersonas'],
                'estado' => $mesaData['estado'],
                'idRestaurante' => $mesaData['idRestaurante']
            ]);

            $mesas[] = $mesa;
        }
        return response()->json($mesas);
    }

    public function showMesa(Mesa $mesa)
    {

        return [$mesa];
    }

    public function updateMesa(Request $request, Mesa $mesa)
    {

        $fields = $request->validate([
            'numeroMesa' => 'required',
            'cantidadPerson' => 'required',
            'estado' => 'required',
            'idRestaurante' => 'required',
        ]);

        $mesa->update($fields);

        return [$mesa];
    }

    public function ocuparMesa(Request $request, Mesa $mesa)
    {

        $fields = $request->validate([
            'estado' => 'required',
        ]);

        if ($fields['estado'] === "ocupada") {
            $mesa->estado = $fields['estado'];
            $mesa->save();
        } else {
            return response()->json(['error' => 'El estado debe ser falso para reservar'], 400);
        }

        return response()->json(['message' => 'Mesa ocupada', 'mesa' => $mesa], 200);
    }

    public function habilitarMesa(Request $request, Mesa $mesa)
    {

        $fields = $request->validate([
            'estado' => 'required',
        ]);

        if ($fields['estado'] === "disponible") {
            $mesa->estado = $fields['estado'];
            $mesa->save();
        } else {
            return response()->json(['error' => 'El estado debe ser ocupada para habilitar'], 400);
        }

        return response()->json(['message' => 'Mesa Habilitada', 'mesa' => $mesa], 200);
    }

    public function getUltimaMesa($id)
    {
        $ultimaMesa = Mesa::where('idRestaurante', $id)
            ->max('numeroMesa');
        return response()->json(['ultimaMesa' => $ultimaMesa ?: 0]);
    }

    public function obtenerMesasDisponiblesEnFecha(Request $request)
    {

        $request->validate([
            'fecha' => 'required|date',
            'hora' => 'required',
            'idRestaurante' => 'required|integer',
        ]);

        $fecha = $request->input('fecha');
        $hora = $request->input('hora');
        $idRestaurante = $request->input('idRestaurante');

        // obtener mesas disponibles en tal fecha
        $mesasDisponibles = Mesa::where('estado', 'disponible')
            ->where('idRestaurante', $idRestaurante)
            ->whereDoesntHave('reservas', function ($query) use ($fecha, $hora) {
                $query->where('fechaReserva', $fecha)
                    ->where(function ($q) use ($hora) {
                        $q->where('horaReserva', '<=', $hora) 
                            ->where('horaFinReserva', '>', $hora); 
                    });
            })
            ->get();

        return response()->json($mesasDisponibles);
    }

    public function destroyMesa(Mesa $mesa)
    {

        $mesa->delete();

        return ['message' => 'Mesa borrada'];
    }
    
}
