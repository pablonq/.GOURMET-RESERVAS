<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Restaurante;
//use Illuminate\Http\Request;

class RestauranteController extends Controller
{
    public function indexRestaurante()
    {
        return Restaurante::all();
    }
}
