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
use App\Http\Controllers\ReseniaController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UsuarioController;

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
  Route::get('/traerUsuario/{id}', [UsuarioController::class, 'getUsuario']);
  Route::get('/indexDireccionUsuario/{id}', [UsuarioController::class, 'indexDireccionUsuario'])->name('indexDireccionUsuario.usuario')->middleware('auth:sanctum');
  Route::PUT('/actualizarUsuario/{id}', [UsuarioController::class, 'actualizarUsuario'])->name('actualizarUsuario.usuario')->middleware('auth:sanctum');
  Route::DELETE('/borrarUsuario/{id}', [UsuarioController::class, 'borrarUsuario'])->name('borrarUsuario.usuario')->middleware('auth:sanctum');
 
});

// Rutas de autenticación y registro de restaurantes
Route::prefix('restaurantes')->group(function () {
  Route::get('/indexRestaurantes', [RestauranteController::class, 'indexRestaurantes'])->name('index.restaurantes');
  Route::get('/mostrarRestaurante/{id}', [RestauranteController::class, 'getRestaurante'])->name('getRestaurante.restaurante');
  Route::PUT('/actualizarRestaurante/{id}', [RestauranteController::class, 'actualizarRestaurante'])->name('actualizarRestaurante.restaurante')->middleware('auth:sanctum');
  Route::get('/mostrarDuenio/{id}', [RestauranteController::class, 'getDuenio'])->name('getDuenio.restaurante')->middleware('auth:sanctum');
  Route::DELETE('/borrarRestaurante/{id}', [RestauranteController::class, 'borrarRestaurante'])->name('borrarRestaurante.restaurante')->middleware('auth:sanctum');
  Route::post('/mesas', [MesaController::class,  'registerMesa'])->name('register.Mesa')->middleware('auth:sanctum');
  Route::get('/indexMesas', [MesaController::class, 'index'])->name('index.Mesa')->middleware('auth:sanctum');
  Route::patch('/ocuparMesa/{mesa}', [MesaController::class, 'ocuparMesa'])->name('ocupar.Mesa');
  Route::patch('/habilitarMesa/{mesa}', [MesaController::class, 'habilitarMesa'])->name('habilitar.Mesa');
  Route::delete('/eliminar/{mesa}', [MesaController::class, 'destroyMesa'])->name('eliminar.Mesa');
  Route::get('/ultimaMesa/{id}',  [MesaController::class, 'getUltimaMesa'])->name('ultima.Mesa');
  Route::get('/indexRestaurante', [RestauranteController::class, 'traerRestaurante'])->name('index.Restaurante');
  Route::get('/indexImagenesRestaurante', [ImagenesRestauranteController::class, 'indexImagenesRestaurante'])->name('imagenes.Restaurante');
  Route::post('/register', [AuthController::class, 'registerRestaurante'])->name('register.restaurante');
  Route::post('/login', [AuthController::class, 'loginRestaurante'])->name('login.restaurante');
  Route::post('/diasHorarios', [RestauranteController::class, 'diasHorarios'])->name('diasHorarios.Restaurante')->middleware('auth:sanctum');
  Route::get('/mesasDisponibles', [MesaController::class, 'obtenerMesasDisponiblesEnFecha']);
  Route::get('/diasHorariosRestaurante/{id}', [AtencionRestauranteController::class, 'indexDiasHorarios']);
  Route::PUT('/actualizarDiasHorarios', [AtencionRestauranteController::class, 'actualizarDiasHorarios'])->name('actualizarDiasHorarios.restaurante')->middleware('auth:sanctum');
  Route::get('/indexMenu/{id}', [MenuController::class, 'indexMenu'])->name('indexMenu.Restaurante');
  Route::get('/mostrarMenu/{id}', [MenuController::class, 'getMenu'])->name('getMenu.Restaurante')->middleware('auth:sanctum');
  Route::DELETE('/borrarMenu/{id}', [MenuController::class, 'borrarMenu'])->name('borrarMenu.Restaurante')->middleware('auth:sanctum');
  Route::PUT('/actualizarMenu/{id}', [MenuController::class, 'actualizarMenu'])->name('actualizarMenu.Restaurante')->middleware('auth:sanctum');
  Route::post('/crearMenu', [MenuController::class, 'crearMenu'])->name('crearMenu.Restaurante')->middleware('auth:sanctum');
  Route::get('/indexPlatos/{id}', [PlatoController::class, 'indexPlatos'])->name('indexPlatos.Restaurante');
  Route::get('/indexPlatosMenus/{id}', [PlatoController::class, 'indexPlatosMenus'])->name('indexPlatosMenus.Restaurante')->middleware('auth:sanctum');
  Route::post('/crearPlato', [PlatoController::class, 'crearPlato'])->name('crearPlato.Restaurante')->middleware('auth:sanctum');
  Route::get('/mostrarPlato/{id}', [PlatoController::class, 'getPlato'])->name('getPlato.Restaurante')->middleware('auth:sanctum');
  Route::PUT('/editarPlato/{id}', [PlatoController::class, 'editarPlato'])->name('editarPlato.Restaurante')->middleware('auth:sanctum');
  Route::DELETE('/borrarPlato/{id}', [PlatoController::class, 'borrarPlato'])->name('borrarPlato.Restaurante')->middleware('auth:sanctum');
  Route::get('/reserva/{id}',  [ReservaController::class, 'getReserva']);
  Route::get('/reservasRestaurantes/{id}',  [ReservaController::class, 'getReservasPorRestaurante']);
  Route::get('/reservasCliente/{id}',  [ReservaController::class, 'getReservasPorCliente']);
  Route::PUT('/cancelarReserva/{id}',  [ReservaController::class, 'cancelarReserva']);
  Route::get('/totalReservas/{idRestaurante}', [RestauranteController::class, 'totalReservas']);
  Route::post('/filtrarRestaurantesConMesas', [RestauranteController::class, 'filtrarRestaurantesConMesasDisponibles']);
  Route::get('/promedioPuntuacion/{idRestaurante}', [RestauranteController::class, 'CalcularPuntuacionTotalRestaurante']);

  Route::post('/crearUnaResenia', [ReseniaController::class, 'crearResenia']);
  Route::get('/traerResenias/{idRestaurante}', [ReseniaController::class, 'traerReseniaRestaurante']);
  Route::get('/traerReseniasUsuario/{idUsuario}', [ReseniaController::class, 'getReseniasUsuario']); 
  Route::get('/reseniaReserva/{idResenia}', [ReseniaController::class, 'getReseniaPorReserva']);
  Route::post('/responderResenia/{idResenia}', [ReseniaController::class, 'responderResenia']);

  Route::get('/indexDireccionesRestaurantes', [RestauranteController::class, 'indexDireccionesRestaurantes'])->name('indexDireccionesRestaurantes.Restaurante');
  Route::get('/mostrarDireccionRestaurante/{id}', [RestauranteController::class, 'getDireccionRestaurante'])->name('getDireccionRestaurante.Restaurante');  
  Route::get('/traerTags', [TagController::class, 'indexTags']);
  Route::post('/crearTag', [TagController::class, 'crearTag']);

  Route::post('/filtrarRestaurantesPorTags', [RestauranteController::class, 'filtrarPorTags']);
  Route::get('/totalReservasPorPeriodo/{idRestaurante}/{fechaInicio}/{fechaFin}',  [ReservaController::class, 'getTotalReservasPorPeriodo']);
  Route::get('/obtenerCalificacion/{idRestaurante}',  [RestauranteController::class, 'ObtenerDistribucionCalificaciones']);
});

Route::get('/pago/exito', [PagoController::class, 'exito'])->name('pago.exito');
Route::get('/pago/fallo', [PagoController::class, 'fallo'])->name('pago.fallo');
Route::get('/pago/pendiente', [PagoController::class, 'pendiente'])->name('pago.pendiente');
Route::post('/pago/createPreference', [PagoController::class, 'createPreference']);
Route::post('/pago/guardarPago', [PagoController::class, 'guardarPago']);
Route::get('/pago/confirmacionPago/{paymentId}', [PagoController::class, 'confirmacionPago']);
