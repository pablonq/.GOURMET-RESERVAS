<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AtencionRestaurante;
use Illuminate\Http\Request;

class AtencionRestauranteController extends Controller
{
    public function indexDiasHorarios($restauranteId)
    {
        $diasHorarios = AtencionRestaurante::where('idRestaurante', $restauranteId)->get();
        return response()->json($diasHorarios);
    }

    public function actualizarDiasHorarios(Request $request) {
      // Validación de los datos recibidos
      $fields = $request->validate([
          'idRestaurante' => 'required|integer',
          'horarios' => 'array',
          'horarios.*.dia' => 'nullable|string',
          'horarios.*.startTime1' => 'nullable|string',
          'horarios.*.endTime1' => 'nullable|string',
          'horarios.*.startTime2' => 'nullable|string',
          'horarios.*.endTime2' => 'nullable|string',
      ]);
  
      // Loguear el array de campos como JSON
      \Log::info('Campo : ' . json_encode($fields)); 
  
      $idRestaurante = $fields['idRestaurante'];
  
      // 1. Eliminar los horarios existentes del restaurante
      AtencionRestaurante::where('idRestaurante', $idRestaurante)->delete();
  
      // 2. Crear los nuevos horarios
      foreach ($fields['horarios'] as $horario) {
          AtencionRestaurante::create([
              'dia' => $horario['dia'],
              'startTime1' => $horario['startTime1'],
              'endTime1' => $horario['endTime1'],
              'startTime2' => $horario['startTime2'],
              'endTime2' => $horario['endTime2'],
              'idRestaurante' => $idRestaurante
          ]);
      }
  
      // Devolver la respuesta con los datos actualizados
      return response()->json(['message' => 'Horarios actualizados correctamente', 'data' => $fields]);
  }
  
}
