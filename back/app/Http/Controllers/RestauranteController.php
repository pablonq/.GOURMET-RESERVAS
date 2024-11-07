<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Restaurante;
use App\Models\AtencionRestaurante;
use Illuminate\Http\Request;
use App\Models\ImagenesRestaurante;
use App\Models\Reserva;
use App\Models\Direccione;
use App\Models\Mesa;
use App\Models\Resenia;

class RestauranteController extends Controller
{
  public function indexRestaurante()
  {
     $restaurantes = Restaurante::with('direccion')->get();;

        // calculo el promedio de puntuacion
        foreach ($restaurantes as $restaurante) {
          $resenias = Resenia::where('idRestaurante', $restaurante->id)->get();
          $totalResenias = $resenias->count();
  
          if ($totalResenias > 0) {
              $puntuacionTotal = $resenias->sum('calificacion');
              $promedio = $puntuacionTotal / $totalResenias;
          } else {
              $promedio = 0; 
          }
  
          $restaurante->promedioPuntuacion = $promedio;
          $restaurante->ciudad = $restaurante->direccion->ciudad ?? null;
      }
  
      return response()->json($restaurantes, 200);
  }

  public function getRestaurante($id)
  {
    $restaurante = Restaurante::find($id);
    $imagenRestaurante = ImagenesRestaurante::where('idRestaurante', $id)->get();
    return response()->json([
      'restaurante' => $restaurante,
      'imagen' => $imagenRestaurante,
    ]);
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


  public function indexDireccionesRestaurantes()
  {


    // Filtramos las direcciones que pertenecen al modelo `Restaurante`
    $direcciones = Direccione::where('direccionable_type', Restaurante::class)->get();

    // Retornamos la colección de direcciones asociadas a restaurantes
    return response()->json($direcciones);
  }

  public function filtrarPorTags(Request $request)
  {
    $tagsSeleccionados = $request->input('tags');

    $restaurantes = Restaurante::whereHas('platos.tags', function ($query) use ($tagsSeleccionados) {
      $query->whereIn('tags.id', $tagsSeleccionados);
    })->get();

    return response()->json($restaurantes);
  }

  public function filtrarRestaurantesConMesasDisponibles(Request $request)
  {
    $request->validate([
      'fecha' => 'required|date',
      'hora' => 'required',
    ]);

    $fecha = $request->input('fecha');
    $hora = $request->input('hora');

    $restaurantes = Restaurante::all();
    $restaurantesConMesasDisponibles = [];

    foreach ($restaurantes as $restaurante) {
      $mesasDisponibles = Mesa::where('estado', 'disponible')
        ->where('idRestaurante', $restaurante->id)
        ->whereDoesntHave('reservas', function ($query) use ($fecha, $hora) {
          $query->where('fechaReserva', $fecha)
            ->where(function ($q) use ($hora) {
              $q->where('horaReserva', '<=', $hora)
                ->where('horaFinReserva', '>', $hora);
            });
        })
        ->count();

      if ($mesasDisponibles > 0) {
        $restaurante->mesas_disponibles = $mesasDisponibles;
        $restaurantesConMesasDisponibles[] = $restaurante;
      }
    }

    return response()->json($restaurantesConMesasDisponibles);
  }

  public function CalcularPuntuacionTotalRestaurante($idRestaurante)
  {

    $resenias = Resenia::where('idRestaurante', $idRestaurante)->get();
    $totalResenias = $resenias->count();

    if ($totalResenias === 0) {
      return response()->json(['promedio' => 0], 200);
    }

    $puntuacionTotal = 0;

    foreach ($resenias as $resenia) {
      $puntuacionTotal += $resenia['calificacion'];
    };

    $promedio = $puntuacionTotal / $totalResenias;

    return response()->json(['promedio' => $promedio], 200);
  }

}
