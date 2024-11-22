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

    }
}
