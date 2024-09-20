<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Models\Usuario;
use App\Models\Restaurante;
use Illuminate\Support\Facades\DB;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
  public function registerUsuario(Request $request)
  {
    
      $fields = $request->validate([
        'nombre' => 'required|max:255',
        'apellido' => 'required|max:255',
        'fechaNac' => 'required|date',
        'email' => 'required|email|unique:personas,email',
        'telefono' => 'required|max:255',
        'ciudad' => 'required|max:255',
        'nombreUsuario' => 'required|max:255|unique:usuarios,nombreUsuario',
        'contrasenia' => 'required|confirmed|min:4',
        'avatar'=> 'reuired',
          
      ]);
      //try{
        $persona = Persona::create([
          'nombre' => $fields['nombre'],
          'apellido' => $fields['apellido'],
          'fechaNac' => $fields['fechaNac'],
          'email' => $fields['email'],
          'telefono' => $fields['telefono'],
          'ciudad' => $fields['ciudad'],
      ]);

    $usuario = Usuario::create([
      'idPersona' => $persona->id,
      'nombreUsuario' => $fields['nombreUsuario'],
      'contrasenia' => bcrypt($fields['contrasenia']),
      'avatar' => $fields['avatar'],
      'fechaRegistro' => now(),
      
      
  ]);
  // Si se proporcionó un avatar, lo procesamos y guardamos
  /* if ($request->hasFile('avatar')) {
    $avatarPath = $request->file('avatar')->store('avatars', 'public');
    $usuario->avatar = $avatarPath;
    $usuario->save();
} */

/* Después de crear el usuario,
el método genera un token para el usuario utilizando el método createToken del objeto $user. 
El token se crea con el nombre del usuario como su nombre.
*/       $token = $usuario->createToken($usuario->nombreUsuario);
/* Devuelve una matriz que contiene el objeto de usuario recién creado y la versión de texto sin formato del token.
Estos datos se utilizan para autenticar al usuario y proporcionarles acceso a recursos protegidos en la aplicación.
*/        /* return [
          'noombreUsuario' => $usuario,
          'token' => $token->plainTextToken
                  ]; */
                  return [
                    
          'usuario' => $usuario,
          'token' => $token->plainTextToken,
      ];
  
}
    public function registerRestaurante(Request $request)
    {
        $fields = $request->validate([
            'nombreRes' => 'required|max:255',
            'direccion' => 'required|max:255',
            'descripcion' => 'required|max:255',
            'tipo' => 'required|max:255',
            'telefono' => 'required|max:255',
            'email' => 'required|email|unique:restaurantes',
            'contrasenia' => 'required|confirmed|min:4',
            'capacidadTotal'=> 'required|max:11',
            /* 'diasAtencion'=> 'required',
            'horaApertura'=> 'required', 
            'horaCierre'=> 'required', */
            'imagen'=> 'required',
            /* 'latitud' => 'required|numeric',
            'longitud' => 'required|numeric', */
            'aceptaEventos'=> 'required|in:si,no',
            'fechaBaja' => 'nullable|date', // Inicialmente no tiene fecha de baja
            'fechaAlta' => now(),

        ]);
        
        
        /* \Log::info('Campo aceptaEventos: ' . $fields['aceptaEventos']); */
        
        
        /* $coordenadas = "POINT({$fields['longitud']} {$fields['latitud']})"; */
    
        
        /* if ($request->hasFile('imagen')) {
          $imagenPath = $request->file('imagen')->store('imagen', 'public');
          $restaurante->imagen = $imagenPath;
          $restaurante->save();
      } */
      
        $restaurante = Restaurante::create([
        'nombreRes' => $fields['nombreRes'],
        'direccion' => $fields['direccion'],
        'descripcion' => $fields['descripcion'],
        'tipo' => $fields['tipo'],
        'telefono' => $fields['telefono'],
        'email' => $fields['email'],
        'contrasenia' => bcrypt($fields['contrasenia']),
        'capacidadTotal' => $fields['capacidadTotal'],
        /* 'diasAtencion' => is_array($fields['diasAtencion']) ? implode(',', $fields['diasAtencion']) : $fields['diasAtencion'], // Convierte array a string,
        'horaApertura' => $fields['horaApertura'],
        'horaCierre' => $fields['horaCierre'], */
        'imagen' => $fields['imagen'],
        /* 'coordenadas' => DB::raw("ST_GeomFromText('$coordenadas', 4326)"), */
        'aceptaEventos' => $fields['aceptaEventos'],
        'fechaBaja' => null, // Inicialmente no tiene fecha de baja
        'fechaAlta' => now(),
       
    ]);

 
        $token = $restaurante->createToken($restaurante->nombreRes);
      
/* \Log::info('Token creado para el restaurante: ' . $restaurante->nombreRes); */


return [
  
'restaurante' => $restaurante,
'token' => $token->plainTextToken,
];
  
    
}
    public function loginUsuarios(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email|exists:personas,email',
            'contrasenia' => 'required'
        ]);

        // Busca al usuario en la base de datos utilizando el correo electrónico proporcionado en la solicitud.
        $persona = Persona::where('email', $fields['email'])->first();

        if (!$persona) {
          return response()->json(['error' => 'Email no encontrado'], 404);
      }
      $usuario = Usuario::where('idPersona', $persona->id)->first();

      if (!$usuario) {
        return response()->json(['error' => 'Usuario no encontrado para este email'], 404);
    }

    if (!Hash::check($fields['contrasenia'], $usuario->contrasenia)) {
      return response()->json(['error' => 'Contraseña incorrecta'], 401);
  }

      
        
      
        // Si se encuentra un usuario y la contraseña coincide, la función genera un token para el usuario utilizando el método createToken del objeto $user.
        // El token se crea con el nombre del usuario como su nombre.
        $token = $usuario->createToken($usuario->nombreUsuario);

        /* return [
            'nombreUsuario' => $usuario,
            'token' => $token->plainTextToken
        ]; */
        return response()->json([
          
          'usuario' => $usuario,
          'token' => $token->plainTextToken,
      ]);
    }

    public function loginRestaurante(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email|exists:restaurantes,email',
            'contrasenia' => 'required'
        ]);

        // Busca al usuario en la base de datos utilizando el correo electrónico proporcionado en la solicitud.
        $restaurante = Restaurante::where('email', $fields['email'])->first();
        
        // Si no se encuentra ningún usuario con ese correo electrónico, o si la contraseña proporcionada no coincide
        // con la contraseña almacenada en la base de datos para ese usuario, la función devuelve una matriz de errores.
        if (!$restaurante){
          return response()->json(['error' => 'Email no encontrado'], 404);
        } 
        
        if(!Hash::check($fields['contrasenia'], $restaurante->contrasenia)) {
           /*  return [
                'errors' => [
                'email' => ['Validación incorrecta']
                ]
            ]; */
            return response()->json(['error' => 'Contraseña incorrecta'], 401);
            
        }
        // Si se encuentra un usuario y la contraseña coincide, la función genera un token para el usuario utilizando el método createToken del objeto $user.
        // El token se crea con el nombre del usuario como su nombre.
        $token = $restaurante->createToken($restaurante->nombreRes);

        /* return [
            'nombreRestaurante' => $restaurante,
            'token' => $token->plainTextToken
        ]; */
        return response()->json([
          
          'restaurante' => $restaurante,
          'token' => $token->plainTextToken,
      ]);
    }

    public function logoutUsuario(Request $request)
    {
        // Revocamos todos los tokens del usuario actual
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Usuario desconectado exitosamente.'
        ], 200);
    }

    public function logoutRestaurante(Request $request)
    {
        // Revocamos todos los tokens del restaurante actual
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Restaurante desconectado exitosamente.'
        ], 200);
    }
}