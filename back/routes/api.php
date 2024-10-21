<?php

use App\Http\Controllers\AtencionRestauranteController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImagenesRestauranteController;
use App\Http\Controllers\MesaController;
use App\Http\Controllers\PagoController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\RestauranteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PlatoController;

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
  Route::post('/registerReserva', [ReservaController::class, 'registerReserva'])->name('register.reserva');
});

// Rutas de autenticación y registro de restaurantes
Route::prefix('restaurantes')->group(function () {
  Route::get('/mostrarRestaurante/{id}', [RestauranteController::class, 'getRestaurante'])->name('getRestaurante.restaurante');
  Route::post('/mesas', [MesaController::class,  'registerMesa'])->name('register.Mesa')->middleware('auth:sanctum');
  Route::get('/indexMesas', [MesaController::class, 'index'])->name('index.Mesa')->middleware('auth:sanctum');
  Route::patch('/ocuparMesa/{mesa}', [MesaController::class, 'ocuparMesa'])->name('ocupar.Mesa');
  Route::patch('/habilitarMesa/{mesa}', [MesaController::class, 'habilitarMesa'])->name('habilitar.Mesa');
  Route::delete('/eliminar/{mesa}', [MesaController::class, 'destroyMesa'])->name('eliminar.Mesa');
  Route::get('/ultimaMesa/{id}',  [MesaController::class, 'getUltimaMesa'])->name('ultima.Mesa');
  Route::get('/indexRestaurante', [RestauranteController::class, 'indexRestaurante'])->name('index.Restaurante');
  Route::get('/indexImagenesRestaurante', [ImagenesRestauranteController::class, 'indexImagenesRestaurante'])->name('imagenes.Restaurante');
  Route::post('/register', [AuthController::class, 'registerRestaurante'])->name('register.restaurante');
  Route::post('/login', [AuthController::class, 'loginRestaurante'])->name('login.restaurante');
  Route::post('/diasHorarios', [RestauranteController::class, 'diasHorarios'])->name('diasHorarios.Restaurante')->middleware('auth:sanctum');
  Route::get('/mesasDisponibles', [MesaController::class, 'obtenerMesasDisponiblesEnFecha']);
  Route::get('/diasHorariosRestaurante/{id}', [AtencionRestauranteController::class, 'indexDiasHorarios']);
  Route::get('/indexMenu/{id}', [MenuController::class, 'indexMenu'])->name('indexMenu.Restaurante')->middleware('auth:sanctum');
  Route::get('/mostrarMenu/{id}', [MenuController::class, 'getMenu'])->name('getMenu.Restaurante')->middleware('auth:sanctum');
  Route::DELETE('/borrarMenu/{id}', [MenuController::class, 'borrarMenu'])->name('borrarMenu.Restaurante')->middleware('auth:sanctum');
  Route::PUT('/actualizarMenu/{id}', [MenuController::class, 'actualizarMenu'])->name('actualizarMenu.Restaurante')->middleware('auth:sanctum');
  Route::post('/crearMenu', [MenuController::class, 'crearMenu'])->name('crearMenu.Restaurante')->middleware('auth:sanctum');
  Route::get('/indexPlatos/{id}', [PlatoController::class, 'indexPlatos'])->name('indexPlatos.Restaurante')->middleware('auth:sanctum');
  Route::get('/indexPlatosMenus/{id}', [PlatoController::class, 'indexPlatosMenus'])->name('indexPlatosMenus.Restaurante')->middleware('auth:sanctum');
  Route::post('/crearPlato', [PlatoController::class, 'crearPlato'])->name('crearPlato.Restaurante')->middleware('auth:sanctum');
  Route::get('/mostrarPlato/{id}', [PlatoController::class, 'getPlato'])->name('getPlato.Restaurante')->middleware('auth:sanctum');
  Route::PUT('/editarPlato/{id}', [PlatoController::class, 'editarPlato'])->name('editarPlato.Restaurante')->middleware('auth:sanctum');
  Route::DELETE('/borrarPlato/{id}', [PlatoController::class, 'borrarPlato'])->name('borrarPlato.Restaurante')->middleware('auth:sanctum');
  Route::get('/reserva/{id}',  [ReservaController::class, 'getReserva']);
  Route::get('/reservasRestaurantes/{id}',  [ReservaController::class, 'getReservasPorRestaurante']);
  Route::get('/reservasCliente/{id}',  [ReservaController::class, 'getReservasPorCliente']);
  Route::PUT('/cancelarReserva/{id}',  [ReservaController::class, 'cancelarReserva']);
});

Route::get('/pago/exito', [PagoController::class, 'exito'])->name('pago.exito');
Route::get('/pago/fallo', [PagoController::class, 'fallo'])->name('pago.fallo');
Route::get('/pago/pendiente', [PagoController::class, 'pendiente'])->name('pago.pendiente');
Route::post('/pago/createPreference', [PagoController::class, 'createPreference']);
Route::post('/pago/guardarPago', [PagoController::class, 'guardarPago']);
Route::get('/pago/confirmacionPago/{paymentId}', [PagoController::class, 'confirmacionPago']);
