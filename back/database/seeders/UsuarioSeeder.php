<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Usuario;

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
        $usuario->idPersona = 1;
        $usuario->save();

        $usuarios = [
            [
              'nombreUsuario' => 'jacky',
              'contrasenia' => bcrypt('1234'),
              'avatarUrl' => NULL,
              'fechaRegistro' => now(),
              'fechaBaja' => NULL,
              'rol' => 'usuario',
              'idPersona' => 22
            ],

            [
              'nombreUsuario' => 'emily',
              'contrasenia' => bcrypt('1234'),
              'avatarUrl' => NULL,
              'fechaRegistro' => now(),
              'fechaBaja' => NULL,
              'rol' => 'usuario',
              'idPersona' => 23
            ],

            [
              'nombreUsuario' => 'john',
              'contrasenia' => bcrypt('1234'),
              'avatarUrl' => NULL,
              'fechaRegistro' => now(),
              'fechaBaja' => NULL,
              'rol' => 'usuario',
              'idPersona' => 24
            ],

            [
              'nombreUsuario' => 'sarah',
              'contrasenia' => bcrypt('1234'),
              'avatarUrl' => NULL,
              'fechaRegistro' => now(),
              'fechaBaja' => NULL,
              'rol' => 'usuario',
              'idPersona' => 25
            ],

            [
              'nombreUsuario' => 'michael',
              'contrasenia' => bcrypt('1234'),
              'avatarUrl' => NULL,
              'fechaRegistro' => now(),
              'fechaBaja' => NULL,
              'rol' => 'usuario',
              'idPersona' => 26
            ],
          ];

          for ($i = 6; $i <= 100; $i++) {
            $usuarios[] = [
              'nombreUsuario' => 'Persona' . $i,
              'contrasenia' => bcrypt('1234'),
              'avatarUrl' => NULL,
              'fechaRegistro' => now(),
              'fechaBaja' => NULL,
              'rol' => 'usuario',
              'idPersona' => $i+21 ,
            ];
    }

    foreach ($usuarios as $datos) {
      $usuario = new Usuario();
      $usuario->nombreUsuario = $datos['nombreUsuario'];
      $usuario->contrasenia = $datos['contrasenia'];
      $usuario->avatarUrl = $datos['avatarUrl'];
      $usuario->fechaRegistro = $datos['fechaRegistro'];
      $usuario->fechaBaja = $datos['fechaBaja'];
      $usuario->rol = $datos['rol'];
      $usuario->idPersona = $datos['idPersona'];
      $usuario->save();
    }
    }
}
