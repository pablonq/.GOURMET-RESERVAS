<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\Request;
use App\Models\Direccione;

class UsuarioController extends Controller
{
    public function getUsuario($id)
    {
        $unUsuario = Persona::find($id);

        if (!$unUsuario) {
            return response()->json(['message' => 'No se encontró el usuario.'], 404);
        }

        return response()->json($unUsuario, 200); 
    }

    public function indexDireccionUsuario($id) {
      $direccion = Direccione::where('direccionable_type', Usuario::class)
                  ->where('direccionable_id', $id)
                  ->first(['calle','altura', 'ciudad', 'provincia', 'pais']); // Selecciona solo los campos necesarios
  
      if ($direccion) {
          return response()->json($direccion);
      } else {
          return response()->json(['message' => 'Dirección no encontrada'], 404);
      }
  }
  
}
