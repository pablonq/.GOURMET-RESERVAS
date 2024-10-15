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
}
