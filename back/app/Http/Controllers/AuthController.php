<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Models\Usuario;
use App\Models\Restaurante;

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
          'avatar'=> 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
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
        'avatar' => null,
        'fechaRegistro' => now(),
        
    ]);
    // Si se proporcionó un avatar, lo procesamos y guardamos
    if ($request->hasFile('avatar')) {
      $avatarPath = $request->file('avatar')->store('avatars', 'public');
      $usuario->avatar = $avatarPath;
      $usuario->save();
  }

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
            'contrasenia' => 'required|confirmed',
            'capacidadTotal'=> 'required|max:11',
            'diasAtencion'=> 'required',
            'horarioApertura'=> 'required', 
            'horarioCierre'=> 'required',
            'imagenesPortada'=> 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'latitud'=> 'required',
            'longitud'=> 'required',
            'descrpcion'=> 'required',
            'aceptaEventos'=> 'required',
            'fechaRegistro' => now(),
            'fechaBaja' => null, // Inicialmente no tiene fecha de baja

        ]);
try{
        $restaurante = Restaurante::create($fields);
 /* Después de crear el usuario,
 el método genera un token para el usuario utilizando el método createToken del objeto $user. 
 El token se crea con el nombre del usuario como su nombre.
  */       $token = $restaurante->createToken($restaurante->nombreRes);
/* Devuelve una matriz que contiene el objeto de usuario recién creado y la versión de texto sin formato del token.
 Estos datos se utilizan para autenticar al usuario y proporcionarles acceso a recursos protegidos en la aplicación.
 */        return [
            'nombreRes' => $restaurante,
            'token' => $token->plainTextToken
        ];
    }catch (\Exception $e) {
      Log::error('Error registrando restaurante: ' . $e->getMessage());
      return response()->json(['error' => 'Error al registrar restaurante.'], 500);
  }
}
    public function loginUsuarios(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:usuarios',
            'contrasenia' => 'required'
        ]);

        // Busca al usuario en la base de datos utilizando el correo electrónico proporcionado en la solicitud.
        $usuario = Usuario::where('email', $fields['email'])->first();
        
        // Si no se encuentra ningún usuario con ese correo electrónico, o si la contraseña proporcionada no coincide
        // con la contraseña almacenada en la base de datos para ese usuario, la función devuelve una matriz de errores.
        if (!$usuario || !Hash::check($fields['contrasenia'], $usuario->contrasenia)) {
            /* return [
                'errors' => [
                'email' => ['Validación incorrecta']
                ]
            ]; */
            return response()->json(['error' => 'Credenciales inválidas'], 401);
            
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

    public function loginRestaurantes(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:restaurantes',
            'contrasenia' => 'required'
        ]);

        // Busca al usuario en la base de datos utilizando el correo electrónico proporcionado en la solicitud.
        $restaurante = Restaurante::where('email', $fields['email'])->first();
        
        // Si no se encuentra ningún usuario con ese correo electrónico, o si la contraseña proporcionada no coincide
        // con la contraseña almacenada en la base de datos para ese usuario, la función devuelve una matriz de errores.
        if (!$restaurante || !Hash::check($fields['contrasenia'], $restaurante->contrasenia)) {
           /*  return [
                'errors' => [
                'email' => ['Validación incorrecta']
                ]
            ]; */
            return response()->json(['error' => 'Credenciales inválidas'], 401);
            
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