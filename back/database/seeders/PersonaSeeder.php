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

        /*Restaurante 1*/
        $persona = new Persona();
        $persona->nombre = 'Lionel';
        $persona->apellido = 'Messi';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'messi@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /*Restaurante 2*/
        $persona = new Persona();
        $persona->nombre = 'Diego';
        $persona->apellido = 'Maradona';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'maradona@mail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /* Restaurante 3*/
        $persona = new Persona();
        $persona->nombre = 'Mario';
        $persona->apellido = 'Kempes';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'kempes@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /* Restaurante 4*/
        $persona = new Persona();
        $persona->nombre = 'Marcelo';
        $persona->apellido = 'Gallardo';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'gallardo@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /* Restaurante 5*/
        $persona = new Persona();
        $persona->nombre = 'Enzo';
        $persona->apellido = 'Francescoli';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'francescoli@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /* Restaurante 6*/
        $persona = new Persona();
        $persona->nombre = 'David';
        $persona->apellido = 'Gilmour';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'gilmour@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /* Restaurante 7*/
        $persona = new Persona();
        $persona->nombre = 'Roger';
        $persona->apellido = 'Waters';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'waters@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /* Restaurante 8*/
        $persona = new Persona();
        $persona->nombre = 'Jimmy';
        $persona->apellido = 'Page';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'page@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /* Restaurante 9*/
        $persona = new Persona();
        $persona->nombre = 'Robert';
        $persona->apellido = 'Plant';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'plant@gmail.com';
        $persona->telefono = '123456789';
        $persona->save();

        /* Restaurante 10*/
        $persona = new Persona();
        $persona->nombre = 'John';
        $persona->apellido = 'Lennon';
        $persona->fechaNac = '2020-12-12';
        $persona->email = 'lennon@mail.com';
        $persona->telefono = '123456789';
        $persona->save();
        
        /* Restaurante 11*/
        $persona = new Persona();
        $persona->nombre = 'Alice';
        $persona->apellido = 'Johnson';
        $persona->fechaNac = '1987-03-25';
        $persona->email = 'alice.johnson@mail.com';
        $persona->telefono = '555123456';
        $persona->save();

        /* Restaurante 12*/
        $persona = new Persona();
        $persona->nombre = 'Bob';
        $persona->apellido = 'Smith';
        $persona->fechaNac = '1992-07-14';
        $persona->email = 'bob.smith@mail.com';
        $persona->telefono = '555987654';
        $persona->save();
        
        /* Restaurante 13*/
        $persona = new Persona();
        $persona->nombre = 'Catherine';
        $persona->apellido = 'Brown';
        $persona->fechaNac = '1985-11-20';
        $persona->email = 'catherine.brown@mail.com';
        $persona->telefono = '555543219';
        $persona->save();
              
        /* Restaurante 14*/
        $persona = new Persona();
        $persona->nombre = 'David';
        $persona->apellido = 'Wilson';
        $persona->fechaNac = '1990-04-10';
        $persona->email = 'daniel.wilson@mail.com';
        $persona->telefono = '555321654';
        $persona->save();
              
        /* Restaurante 15*/
        $persona = new Persona();
        $persona->nombre = 'Eleanor';
        $persona->apellido = 'Taylor';
        $persona->fechaNac = '1995-09-08';
        $persona->email = 'eleanor.taylor@mail.com';
        $persona->telefono = '555654987';
        $persona->save();
              
        /* Restaurante 16*/
        $persona = new Persona();
        $persona->nombre = 'Frank';
        $persona->apellido = 'Anderson';
        $persona->fechaNac = '1980-01-15';
        $persona->email = 'frank.anderson@mail.com';
        $persona->telefono = '555456789';
        $persona->save();
              
        /* Restaurante 17*/
        $persona = new Persona();
        $persona->nombre = 'Grace';
        $persona->apellido = 'Harris';
        $persona->fechaNac = '1993-06-22';
        $persona->email = 'grace.harris@mail.com';
        $persona->telefono = '555789123';
        $persona->save();
              
        /* Restaurante 18*/
        $persona = new Persona();
        $persona->nombre = 'Henry';
        $persona->apellido = 'Clark';
        $persona->fechaNac = '1988-09-05';
        $persona->email = 'henry.clark@mail.com';
        $persona->telefono = '555987654';
        $persona->save();
        
        /* Restaurante 19*/
        $persona = new Persona();
        $persona->nombre = 'Isabella';
        $persona->apellido = 'White';
        $persona->fechaNac = '1997-05-11';
        $persona->email = 'isabella.white@mail.com';
        $persona->telefono = '555876543';
        $persona->save();
        
        /* Restaurante 20*/
        $persona = new Persona();
        $persona->nombre = 'Jack';
        $persona->apellido = 'Clark';
        $persona->fechaNac = '1983-02-18';
        $persona->email = 'jack.clark@mail.com';
        $persona->telefono = '555987321';
        $persona->save();
        
        $personas = [
          ['nombre' => 'Jacky', 'apellido' => 'Clarky', 'fechaNac' => '1983-02-18', 'email' => 'jacky.clarky@mail.com', 'telefono' => '555987321'],
          ['nombre' => 'Emily', 'apellido' => 'Smith', 'fechaNac' => '1990-07-22', 'email' => 'emily.smith@mail.com', 'telefono' => '555123456'],
          ['nombre' => 'John', 'apellido' => 'Doe', 'fechaNac' => '1985-03-14', 'email' => 'john.doe@mail.com', 'telefono' => '555654321'],
          ['nombre' => 'Sarah', 'apellido' => 'Johnson', 'fechaNac' => '1992-11-30', 'email' => 'sarah.johnson@mail.com', 'telefono' => '555678912'],
          ['nombre' => 'Michael', 'apellido' => 'Williams', 'fechaNac' => '1978-05-25', 'email' => 'michael.williams@mail.com', 'telefono' => '555789123'],
          
      ];

      for ($i = 6; $i <= 100; $i++) {
          $personas[] = [
              'nombre' => 'Persona' . $i,
              'apellido' => 'Apellido' . $i,
              'fechaNac' => '1980-' . str_pad(mt_rand(1, 12), 2, '0', STR_PAD_LEFT) . '-' . str_pad(mt_rand(1, 28), 2, '0', STR_PAD_LEFT),
              'email' => 'persona' . $i . '@mail.com',
              'telefono' => '555' . mt_rand(100000, 999999),
          ];
      }

      foreach ($personas as $datos) {
          $persona = new Persona();
          $persona->nombre = $datos['nombre'];
          $persona->apellido = $datos['apellido'];
          $persona->fechaNac = $datos['fechaNac'];
          $persona->email = $datos['email'];
          $persona->telefono = $datos['telefono'];
          $persona->save();
      }
    }
}
