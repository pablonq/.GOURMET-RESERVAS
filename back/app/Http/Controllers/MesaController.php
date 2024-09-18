<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mesa;

class MesaController extends Controller
{
    public function index()
    {
        return Mesa::all();
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

    public function reservarMesa(Request $request, Mesa $mesa)
    {

        $fields = $request->validate([
            'estado' => 'required',
        ]);

        if ($fields['estado'] === 0) {
            $mesa->estado = $fields['estado'];
            $mesa->save();
        } else {
            return response()->json(['error' => 'El estado debe ser falso para reservar'], 400);
        }

        return response()->json(['message' => 'Mesa reservada', 'mesa' => $mesa], 200);
    }

    public function habilitarMesa(Request $request, Mesa $mesa)
    {

        $fields = $request->validate([
            'estado' => 'required',
        ]);

        if ($fields['estado'] === 1) {
            $mesa->estado = $fields['estado'];
            $mesa->save();
        } else {
            return response()->json(['error' => 'El estado debe ser true para habilitar'], 400);
        }

        return response()->json(['message' => 'Mesa Habilitada', 'mesa' => $mesa], 200);
    }

    public function destroyMesa(Mesa $mesa)
    {

        $mesa->delete();

        return ['message' => 'Mesa borrada'];
    }
}
