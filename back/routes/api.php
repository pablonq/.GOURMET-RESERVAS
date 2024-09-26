<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImagenesRestauranteController;
use App\Http\Controllers\MesaController;
use App\Http\Controllers\RestauranteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Rutas accesibles solo con autenticación (usuarios y restaurantes)
Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', function (Request $request) {
    return $request->user();
  })->name('user.details');

  // Rutas de cierre de sesión
  Route::post('/logout/usuario', [AuthController::class, 'logoutUsuario'])->name('logout.usuario');
  Route::post('/logout/restaurante', [AuthController::class, 'logoutRestaurante'])->name('logout.restaurante');
});

// Rutas de autenticación y registro de usuarios
Route::prefix('usuarios')->group(function () {
  Route::post('/register', [AuthController::class, 'registerUsuario'])->name('register.usuario');
  Route::post('/login', [AuthController::class, 'loginUsuarios'])->name('login.usuario');
});

// Rutas de autenticación y registro de restaurantes
Route::prefix('restaurantes')->group(function () {
  Route::post('/mesas', [MesaController::class,  'registerMesa'])->name('register.Mesa')->middleware('auth:sanctum');
  Route::get('/indexMesas', [MesaController::class, 'index'])->name('index.Mesa')->middleware('auth:sanctum');
  Route::patch('/reservarMesa/{mesa}', [MesaController::class, 'reservarMesa'])->name('reservar.Mesa');
  Route::patch('/habilitarMesa/{mesa}', [MesaController::class, 'habilitarMesa'])->name('habilitar.Mesa');
  Route::delete('/eliminar/{mesa}', [MesaController::class, 'destroyMesa'])->name('eliminar.Mesa');
  Route::get('/ultimaMesa/{id}',  [MesaController::class, 'getUltimaMesa'])->name('ultima.Mesa');
  Route::get('/indexRestaurante', [RestauranteController::class, 'indexRestaurante'])->name('index.Restaurante');
  Route::get('/indexImagenesRestaurante', [ImagenesRestauranteController::class, 'indexImagenesRestaurante'])->name('imagenes.Restaurante');
  Route::post('/register', [AuthController::class, 'registerRestaurante'])->name('register.restaurante');
  Route::post('/login', [AuthController::class, 'loginRestaurante'])->name('login.restaurante');
});
