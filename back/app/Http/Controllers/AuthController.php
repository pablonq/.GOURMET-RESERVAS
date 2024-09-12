<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        $user = User::create($fields);
 /* Después de crear el usuario,
 el método genera un token para el usuario utilizando el método createToken del objeto $user. 
 El token se crea con el nombre del usuario como su nombre.
  */       $token = $user->createToken($request->name);
/* Devuelve una matriz que contiene el objeto de usuario recién creado y la versión de texto sin formato del token.
 Estos datos se utilizan para autenticar al usuario y proporcionarles acceso a recursos protegidos en la aplicación.
 */        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required'
        ]);

        // Busca al usuario en la base de datos utilizando el correo electrónico proporcionado en la solicitud.
        $user = User::where('email', $request->email)->first();
        
        // Si no se encuentra ningún usuario con ese correo electrónico, o si la contraseña proporcionada no coincide
        // con la contraseña almacenada en la base de datos para ese usuario, la función devuelve una matriz de errores.
        if (!$user || !Hash::check($request->password, $user->password)) {
            return [
                'errors' => [
                'email' => ['The provided credentials are incorrect.']
                ]
            ];
            
        }
        // Si se encuentra un usuario y la contraseña coincide, la función genera un token para el usuario utilizando el método createToken del objeto $user.
        // El token se crea con el nombre del usuario como su nombre.
        $token = $user->createToken($user->name);

        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return [
            'message' => 'You are logged out.' 
        ];
    }
}