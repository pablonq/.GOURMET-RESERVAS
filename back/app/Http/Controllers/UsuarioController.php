<?php

namespace App\Http\Controllers;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\Request;
use App\Models\Direccione;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UsuarioController extends Controller
{
    public function getUsuario($id)
    {
        $usuario = Usuario::find($id);
        $idPersona = $usuario->idPersona;
        /* \Log::info('idPersona: ' . $idPersona); */
        $persona = Persona::where('id', $idPersona)->first();


        if (!$usuario) {
            return response()->json(['message' => 'No se encontró el usuario.'], 404);
        }

        return response()->json(['usuario' => $usuario, 'persona' => $persona], 200); 
    }

    public function indexDireccionUsuario($id) {
      $direccion = Direccione::where('direccionable_type', Usuario::class)
                  ->where('direccionable_id', $id)
                  ->first(['calle','altura', 'ciudad', 'provincia', 'pais']);
  
      if ($direccion) {
          return response()->json($direccion);
      } else {
          return response()->json(['message' => 'Dirección no encontrada', 'direccion' => null],200);
      }
  }

  public function actualizarUsuario(Request $request, $id) {
    
    $usuario = Usuario::findOrFail($id);

    // Validaciones con reglas condicionales
    $fields = $request->validate([
        'nombre' => 'required|max:255',
        'apellido' => 'required|max:255',
        'fechaNac' => 'required|date',
        'email' => [
            'required', 
            'email', 
            Rule::unique('personas', 'email')->ignore($usuario->idPersona, 'id')
        ],
        'telefono' => 'required|max:255',
        'calle' => 'required|max:255',
        'altura' => 'required|max:255',
        'ciudad' => 'required|max:255',
        'provincia' => 'required|max:255',
        'pais' => 'required|max:255',
        'nombreUsuario' => [
            'required', 
            'max:255', 
            Rule::unique('usuarios', 'nombreUsuario')->ignore($usuario->id)
        ],
        'contrasenia' => 'sometimes|confirmed|min:4',
        'avatarUrl'=> 'required|string',
    ]);
    
    // Prepara datos para actualización
    $usuarioData = $request->only(['nombreUsuario', 'avatarUrl']);
    $personaData = $request->only(['nombre', 'apellido', 'fechaNac', 'email', 'telefono']);
    $direccionData = $request->only(['calle', 'altura', 'ciudad', 'provincia', 'pais']);

    // Si se envía una nueva contraseña, la ciframos
    if ($request->filled('contrasenia')) {
        $usuarioData['contrasenia'] = bcrypt($request->contrasenia);
    }

    // Actualizar los datos en una transacción
    DB::transaction(function () use ($usuario, $usuarioData, $personaData, $direccionData) {
        $usuario->update($usuarioData);

        // Actualizar datos de persona y dirección asociados
        $usuario->persona()->update($personaData);
        $usuario->direccion()->update($direccionData);
    });

    return response()->json(['message' => 'Usuario actualizado correctamente.'], 200);
}

public function borrarUsuario($id) {
  Log::info('id: ' . $id);
    $usuario = Usuario::findOrFail($id);
    $idPersona = $usuario->idPersona;
    $persona = Persona::where('id', $idPersona)->first();
    $direccion = Direccione::where('direccionable_type', Usuario::class)
                  ->where('direccionable_id', $id);

    $usuario->delete();
    $persona->delete();
    $direccion->delete();
    return response()->json(['message' => 'Usuario borrado exitosamente.'], 200);
}
  
}
