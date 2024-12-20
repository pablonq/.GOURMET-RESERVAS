<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Models\Usuario;
use App\Models\Restaurante;
use App\Models\ImagenesRestaurante;
use Illuminate\Support\Facades\DB;
use App\Models\Duenio;


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
        'calle' => 'required|max:255',
            'altura' => 'required|max:255',
            'ciudad' => 'required|max:255',
            'provincia' => 'required|max:255',
            'pais' => 'required|max:255',
        'nombreUsuario' => 'required|max:255|unique:usuarios,nombreUsuario',
        'contrasenia' => 'required|confirmed|min:4',
        'avatarUrl'=> 'required',
          
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
        'avatarUrl' => $fields['avatarUrl'],
        'fechaRegistro' => now(),
        
        
      ]);
      $usuario->direccion()->create([
        'calle' => $fields['calle'],
        'altura' => $fields['altura'],
        'ciudad' => $fields['ciudad'],
        'provincia' => $fields['provincia'],
        'pais' => $fields['pais'],
    ]);
   

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
            'calle' => 'required|max:255',
            'altura' => 'required|max:255',
            'ciudad' => 'required|max:255',
            'provincia' => 'required|max:255',
            'pais' => 'required|max:255',
            'descripcion' => 'required|max:255',
            'tipo' => 'required|max:255',
            'telefono' => 'required|max:255',
            'email' => 'required|email|unique:restaurantes',
            'contrasenia' => 'required|confirmed|min:4',
            'capacidadTotal'=> 'required|max:11',
            
            'imagenUrl'=> 'required',
          
            'aceptaEventos'=> 'required|in:si,no',
            'fechaBaja' => 'nullable|date', // Inicialmente no tiene fecha de baja
            'fechaAlta' => now(),

            'nombreDuenio' => 'required|max:255',
        'apellidoDuenio' => 'required|max:255',
        'fechaNacimientoDuenio' => 'required|date',
        'emailDuenio' => 'required|email|unique:personas,email',
        'telefonoDuenio' => 'required|max:255',
        
        'dniDuenio' => 'required|max:255',
        ]);
        
        
        /* \Log::info('Campo aceptaEventos: ' . $fields['aceptaEventos']); */
        
      
        $restaurante = Restaurante::create([
        'nombreRes' => $fields['nombreRes'],
        
        'descripcion' => $fields['descripcion'],
        'tipo' => $fields['tipo'],
        'telefono' => $fields['telefono'],
        'email' => $fields['email'],
        'contrasenia' => bcrypt($fields['contrasenia']),
        'capacidadTotal' => $fields['capacidadTotal'],
        
        'aceptaEventos' => $fields['aceptaEventos'],
        'fechaBaja' => null, // Inicialmente no tiene fecha de baja
        'fechaAlta' => now(),
       
    ]);

    $restaurante->direccion()->create([
      'calle' => $fields['calle'],
      'altura' => $fields['altura'],
      'ciudad' => $fields['ciudad'],
      'provincia' => $fields['provincia'],
      'pais' => $fields['pais'],
  ]);

    $imagenRestaurante = ImagenesRestaurante::create([
      'imagenUrl' => $fields['imagenUrl'],
       'idRestaurante' => $restaurante->id,

    ]);
    $persona = Persona::create([
      'nombre' => $fields['nombreDuenio'],
      'apellido' => $fields['apellidoDuenio'],
      'dni' => $fields['dniDuenio'],
      'fechaNac' => $fields['fechaNacimientoDuenio'],
      'email' => $fields['emailDuenio'],
      'telefono' => $fields['telefonoDuenio'],
      
  ]);
  $duenio = Duenio::create([
    'dni' => $fields['dniDuenio'],
    'idPersona' => $persona->id,
    'idRestaurante' => $restaurante->id,
    
  ]);

 
        $token = $restaurante->createToken($restaurante->nombreRes);
      
/* \Log::info('Token creado para el restaurante: ' . $restaurante->nombreRes); */


return [
  
'restaurante' => $restaurante,
'token' => $token->plainTextToken,
'duenio' => $duenio
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