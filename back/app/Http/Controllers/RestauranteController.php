<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Restaurante;
use App\Models\AtencionRestaurante;
use App\Models\Reserva;
use Illuminate\Http\Request;

class RestauranteController extends Controller
{
  public function indexRestaurante()
  {
    return Restaurante::all();
  }

  public function diasHorarios(Request $request)
  {
    $fields = $request->validate([
      'idRestaurante' => 'required|integer',
      'horarios' => 'array',
      'horarios.*.day' => 'nullable|string',
      'horarios.*.startTime1' => 'nullable|string',
      'horarios.*.endTime1' => 'nullable|string',
      'horarios.*.startTime2' => 'nullable|string',
      'horarios.*.endTime2' => 'nullable|string',
    ]);
    foreach ($fields['horarios'] as $horario) {
      AtencionRestaurante::create([
        'dia' => $horario['day'],
        'startTime1' => $horario['startTime1'],
        'endTime1' => $horario['endTime1'],
        'startTime2' => $horario['startTime2'],
        'endTime2' => $horario['endTime2'],
        'idRestaurante' => $fields['idRestaurante']
      ]);
    }
    return response()->json($fields);
  }

  public function totalReservas($idRestaurante)
  {
    $total = Reserva::where('idRestaurante', $idRestaurante)->count();

    return response()->json(['total' => $total], 200);
  }
}
