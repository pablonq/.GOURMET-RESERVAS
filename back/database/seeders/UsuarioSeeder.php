<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Usuario;
use App\Models\Persona;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuario = new Usuario();
        $usuario->nombreUsuario = 'pablon';
        $usuario->contrasenia = bcrypt('1234');
        $usuario->avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/usuarios%2Fd1534b5c-1342-48f0-8b6f-decafa58b5e8?alt=media&token=db37f910-baed-4e2d-9275-32dd1ec7b7bc';
        $usuario->fechaRegistro = now();
        $usuario->fechaBaja = null;
        $usuario->rol = 'usuario';
        $usuario->idPersona = 21;
        $usuario->save();

        $usuario = new Usuario();
        $usuario->nombreUsuario = 'pau';
        $usuario->contrasenia = bcrypt('1234');
        $usuario->avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/usuarios%2F2d4f3773-a6c7-47bc-8b64-eb92ba2c2f29?alt=media&token=78d3914b-7b57-472b-9d3a-6f123e6cc2f3';
        $usuario->fechaRegistro = now();
        $usuario->fechaBaja = null;
        $usuario->rol = 'usuario';
        $usuario->idPersona = 22;
        $usuario->save();


        $personas = Persona::where('id', '>', 22)->get();
          
            

    foreach ($personas as $datos) {
      $usuario = new Usuario();
      $usuario->nombreUsuario = $datos['nombre'].'_'.$datos['apellido'];
      $usuario->contrasenia = bcrypt('1234');
      $usuario->avatarUrl = null;
      $usuario->fechaRegistro = now();
      $usuario->fechaBaja = null;
      $usuario->rol = 'usuario';
      $usuario->idPersona = $datos['id'];
      $usuario->save();
    }
    }
}
