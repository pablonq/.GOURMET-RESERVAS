<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Persona;

class PersonaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $persona = new Persona();
        $persona->nombre = 'Pablo';
        $persona->apellido = 'Navarro';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'pablo@mail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'Lionel';
        $persona->apellido = 'Messi';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'messi@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'Diego';
        $persona->apellido = 'Maradona';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'maradona@mail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'Mario';
        $persona->apellido = 'Kempes';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'kempes@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'Marcelo';
        $persona->apellido = 'Gallardo';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'gallardo@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'Enzo';
        $persona->apellido = 'Francescoli';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'francescoli@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'David';
        $persona->apellido = 'Gilmour';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'gilmour@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'Roger';
        $persona->apellido = 'Waters';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'waters@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'Jimmy';
        $persona->apellido = 'Page';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'page@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        $persona = new Persona();
        $persona->nombre = 'Robert';
        $persona->apellido = 'Plant';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'plant@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

    }
}
