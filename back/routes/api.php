<?php

use App\Http\Controllers\MesaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('mesas', MesaController::class);
