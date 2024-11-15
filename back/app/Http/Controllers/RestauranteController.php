<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Restaurante;
use App\Models\AtencionRestaurante;
use Illuminate\Http\Request;
use App\Models\ImagenesRestaurante;
use App\Models\Reserva;
use App\Models\Direccione;
use App\Models\Mesa;
use App\Models\Resenia;
use App\Models\Persona;
use App\Models\Duenio;

class RestauranteController extends Controller
{
  public function indexRestaurantes()
  {
    $restaurantes = Restaurante::all();
    /* \Log::info('restaurantes: ' . $restaurantes);  */
    return response()->json($restaurantes, 200);
  }

  public function traerRestaurante()
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


  public function getDireccionRestaurante($id)
  {
    $direccion = Direccione::where('direccionable_type', Restaurante::class)
      ->where('direccionable_id', $id)->get();
    return response()->json($direccion);
  }

  public function getDuenio($id)
  {
    $duenio = Duenio::where('idRestaurante', $id)->get(['dni', 'idPersona']);
    if ($duenio->isEmpty()) {
      return response()->json(['dni' => null, 'persona' => null], 200);
    }
    $dniDuenio = $duenio[0]->dni;
    $personaId = $duenio[0]->idPersona;
    $persona = Persona::where('id', $personaId)->get();
    /* \Log::info('duenio: ' . $dniDuenio); */
    return response()->json(['dni' => $dniDuenio, 'persona' => $persona], 200);
  }

  public function actualizarRestaurante(Request $request, $id)
  {
    $restaurante = Restaurante::findOrFail($id);

    $fields = $request->validate([
        'nombreRes' => 'required|max:255',
        'calle' => 'required|max:255',
        'altura' => 'required|max:255',
        'ciudad' => 'required|max:255',
        'provincia' => 'required|max:255',
        'pais' => 'required|max:255',
        'descripcion' => 'required|max:255',
        'tipo' => 'required|max:255',
        'telefono' => 'required|max:255',
        'email' => [
            'required',
            'email',
            Rule::unique('restaurantes', 'email')->ignore($restaurante->id, 'id')
        ],
        'contrasenia' => 'sometimes|confirmed|min:4',
        'capacidadTotal' => 'required|integer',
        'imagenUrl'=> 'nullable|string',
        'aceptaEventos' => 'required|in:si,no',
        'nombreDuenio' => 'required|max:255',
        'apellidoDuenio' => 'required|max:255',
        'fechaNacimientoDuenio' => 'required|date',
        'emailDuenio' => 'nullable|email',
        'telefonoDuenio' => 'required|max:255',
        
        'dniDuenio' => 'required|max:255',
    ]);

    $restauranteData = $request->only(['nombreRes', 'descripcion', 'tipo', 'telefono', 'email', 'capacidadTotal', 'aceptaEventos']);
    $personaData = $request->only(['nombreDuenio', 'apellidoDuenio', 'fechaNacimientoDuenio', 'emailDuenio', 'telefonoDuenio']);
    $duenioData = $request->only(['dniDuenio']);
    $direccionData = $request->only(['calle', 'altura', 'ciudad', 'provincia', 'pais']);

    if ($request->filled('contrasenia')) {
      $restauranteData['contrasenia'] = bcrypt($request->contrasenia);
    }

    DB::transaction(function () use ($restaurante, $restauranteData, $duenioData, $personaData, $direccionData) {

        $duenio = $restaurante->duenio;
        
        if ($duenio) {
          $duenio->update(['dni'=> $duenioData['dniDuenio']]);
          // Actualizar la persona asociada al dueño
          $persona = $duenio->persona;
           
          if ($persona) {
            $persona->update([
                'nombre' => $personaData['nombreDuenio'],
                'apellido' => $personaData['apellidoDuenio'],
                'fechaNac' => $personaData['fechaNacimientoDuenio'],
                'email' => $personaData['emailDuenio'],
                'telefono' => $personaData['telefonoDuenio'],
                ]);
            } else {
                throw new \Exception('Persona no encontrada para el ID especificado en Duenio');
            }
        } else {
            throw new \Exception('Dueño no encontrado para el restaurante');
        }

      $duenio = $restaurante->duenio;

      if ($duenio) {
        $duenio->update(['dni' => $duenioData['dniDuenio']]);
        // Actualizar la persona asociada al dueño
        $persona = $duenio->persona;

        if ($persona) {
          $persona->update([
            'nombre' => $personaData['nombreDuenio'],
            'apellido' => $personaData['apellidoDuenio'],
            'fechaNac' => $personaData['fechaNacimientoDuenio'],
            'email' => $personaData['emailDuenio'],
            'telefono' => $personaData['telefonoDuenio'],
            'ciudad' => $personaData['ciudadDuenio'],
          ]);
        } else {
          throw new \Exception('Persona no encontrada para el ID especificado en Duenio');
        }
      } else {
        throw new \Exception('Dueño no encontrado para el restaurante');
      }

      $direccion = $restaurante->direccion;
      if ($direccion) {
        $direccion->update($direccionData);
      } else {
        throw new \Exception('Dirección no encontrada para el restaurante');
      }
    });

    return response()->json(['message' => 'Usuario actualizado correctamente.'], 200);
  }

  public function borrarRestaurante($id)
  {
    // Iniciar una transacción para mantener la consistencia
    DB::transaction(function () use ($id) {
      $restaurante = Restaurante::findOrFail($id);

      $imagenesRestaurante = ImagenesRestaurante::where('idRestaurante', $id);
      $imagenesRestaurante->delete();

      $duenio = $restaurante->duenio;
      if ($duenio) {
        $persona = $duenio->persona;
        if ($persona) {
          $persona->delete();
        }
        $duenio->delete();
      }

      $direccion = $restaurante->direccion;
      if ($direccion) {
        $direccion->delete();
      }
      $restaurante->delete();
    });

    return response()->json(['message' => 'Restaurante y todos los datos relacionados eliminados exitosamente.'], 200);
  }

  public function indexDireccionesRestaurantes()
  {

    $direcciones = Direccione::where('direccionable_type', Restaurante::class)->get();
    /* \Log::info('ciudades: ' . $direcciones);  */
    return response()->json($direcciones, 200);
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

  public function obtenerDistribucionCalificaciones($idRestaurante)
  {
    $resenias = Resenia::where('idRestaurante', $idRestaurante)->get();
    $distribucion = [1 => 0, 2 => 0, 3 => 0, 4 => 0, 5 => 0];

    foreach ($resenias as $resenia) {
      $calificacion = $resenia['calificacion'];
      if (isset($distribucion[$calificacion])) {
        $distribucion[$calificacion]++;
      }
    }

    $result = array_values($distribucion);
    return response()->json($result, 200);
  }
}
