<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ImagenesRestaurante;
use Illuminate\Http\Request;

class ImagenesRestauranteController extends Controller
{
    public function indexImagenesRestaurante()
    {
        $imagenes = ImagenesRestaurante::all();
        return response()->json($imagenes);
    }


}
