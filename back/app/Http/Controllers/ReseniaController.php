<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ImagenesRestaurante;
use App\Models\Resenia;
use Illuminate\Http\Request;

class ReseniaController extends Controller
{
    public function crearResenia(Request $request)
    {
        $validated = $request->validate([
            'calificacion' => 'required|integer|min:1|max:5',
            'comentario' => 'required|string|max:255',
            'imagen' => 'nullable|string',
            'idRestaurante' => 'required|integer',
            'idUsuario' => 'required|integer',
            'idReserva' => 'required|integer'
        ]);

        $resenia = Resenia::create($request->only('calificacion', 'comentario', 'idRestaurante', 'idUsuario', 'idReserva'));


        // if ($request->has('imagen')) {
        ImagenesRestaurante::create([
            'imagenUrl' =>  $validated['imagen'],
            'idRestaurante' =>  $validated['idRestaurante'],
        ]);
        // }


        return response()->json(['message' => 'Reseña creada con éxito'], 201);
    }

    public function traerReseniaRestaurante($idRestaurante)
    {
        $resenias =  Resenia::where('idRestaurante', $idRestaurante)
            ->with(['reserva', 'usuario'])
            ->get();
        return response()->json($resenias);
    }

    public function getReseniasUsuario($idUsuario)
    {
        $resenias =  Resenia::where('idUsuario', $idUsuario)->get();
        return response()->json($resenias);
    }

  
    public function getReseniaPorReserva($idReserva)
    {
        $resenia = Resenia::where('idReserva', $idReserva)->first();
        return response()->json($resenia);
    }

    public function responderResenia(Request $request, $idResenia)
    {
        $resenia = Resenia::find($idResenia);
        $resenia->respuestaDuenio = $request->input('respuestaDuenio');
        $resenia->save();

        return response()->json(['message' => 'Respuesta guardada con éxito']);
    }
}
