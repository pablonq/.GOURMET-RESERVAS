<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\Request;

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
}
