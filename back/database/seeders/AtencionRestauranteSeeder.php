<?php

namespace Database\Seeders;

use App\Models\AtencionRestaurante;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AtencionRestauranteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Martes';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 1;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Miércoles';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 1;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Jueves';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 1;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Viernes';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 1;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Sábado';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:45:00';
        $horarios->idRestaurante = 1;
        $horarios->save();


        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Lunes';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 2;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Martes';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 2;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Miércoles';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 2;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Jueves';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 2;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Viernes';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 2;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Sábado';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:45:00';
        $horarios->idRestaurante = 2;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Domingo';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:45:00';
        $horarios->idRestaurante = 2;
        $horarios->save();


        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Martes';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Miércoles';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Jueves';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Viernes';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:30:00';
        $horarios->idRestaurante = 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Sábado';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:45:00';
        $horarios->idRestaurante = 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Domingo';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2 = '17:00:00';
        $horarios->endTime2 = '23:45:00';
        $horarios->idRestaurante = 3;
        $horarios->save();

        $horarios = [
          // Sábado
          [
              'dia' => 'Sábado',
              'startTime1' => '12:00:00',
              'endTime1' => '15:30:00',
              'startTime2' => '19:30:00',
              'endTime2' => '00:00:00',
              'idRestaurante' => 4,
          ],
          // Domingo
          [
              'dia' => 'Domingo',
              'startTime1' => '12:00:00',
              'endTime1' => '15:30:00',
              'startTime2' => '19:30:00',
              'endTime2' => '00:00:00',
              'idRestaurante' => 4,
          ],
          // Lunes
          [
              'dia' => 'Lunes',
              'startTime1' => '12:00:00',
              'endTime1' => '15:30:00',
              'startTime2' => '19:30:00',
              'endTime2' => '00:00:00',
              'idRestaurante' => 4,
          ],
          // Martes
          [
              'dia' => 'Martes',
              'startTime1' => '12:00:00',
              'endTime1' => '15:30:00',
              'startTime2' => '19:30:00',
              'endTime2' => '00:00:00',
              'idRestaurante' => 4,
          ],
          // Miércoles
          [
              'dia' => 'Miércoles',
              'startTime1' => '11:00:00',
              'endTime1' => '15:30:00',
              'startTime2' => '19:30:00',
              'endTime2' => '00:00:00',
              'idRestaurante' => 4,
          ],
          // Jueves
          [
              'dia' => 'Jueves',
              'startTime1' => '11:00:00',
              'endTime1' => '15:30:00',
              'startTime2' => '19:00:00',
              'endTime2' => '00:00:00',
              'idRestaurante' => 4,
          ],
          // Viernes
          [
              'dia' => 'Viernes',
              'startTime1' => '11:00:00',
              'endTime1' => '15:30:00',
              'startTime2' => '19:30:00',
              'endTime2' => '00:00:00',
              'idRestaurante' => 4,
          ],

           // Sábado
           [
            'dia' => 'Sábado',
            'startTime1' => '10:00:00',
            'endTime1' => '15:30:00',
            'startTime2' => '20:00:00',
            'endTime2' => '23:30:00',
            'idRestaurante' => 5,
        ],
        // Domingo (Cerrado)
        [
            'dia' => 'Domingo',
            'startTime1' => null,
            'endTime1' => null,
            'startTime2' => null,
            'endTime2' => null,
            'idRestaurante' => 5,
        ],
        // Lunes
        [
            'dia' => 'Lunes',
            'startTime1' => '08:00:00',
            'endTime1' => '23:30:00',
            'startTime2' => null,
            'endTime2' => null,
            'idRestaurante' => 5,
        ],
        // Martes
        [
            'dia' => 'Martes',
            'startTime1' => '08:15:00',
            'endTime1' => '23:30:00',
            'startTime2' => null,
            'endTime2' => null,
            'idRestaurante' => 5,
        ],
        // Miércoles
        [
            'dia' => 'Miércoles',
            'startTime1' => '08:15:00',
            'endTime1' => '23:30:00',
            'startTime2' => null,
            'endTime2' => null,
            'idRestaurante' => 5,
        ],
        // Jueves
        [
            'dia' => 'Jueves',
            'startTime1' => '08:15:00',
            'endTime1' => '23:30:00',
            'startTime2' => null,
            'endTime2' => null,
            'idRestaurante' => 5,
        ],
        // Viernes
        [
            'dia' => 'Viernes',
            'startTime1' => '08:15:00',
            'endTime1' => '23:30:00',
            'startTime2' => null,
            'endTime2' => null,
            'idRestaurante' => 5,
        ],

        //Sabado
        [
            'dia' => 'Sabado',
            'startTime1' => '12:30:00',
            'endTime1' => '15:00:00',
            'startTime2' => '20:30:00',
            'endTime2' => '00:00:00',
            'idRestaurante' => 6,
        ],

        // Domingo 
        [
            'dia' => 'Domingo',
            'startTime1' => '12:30:00',
            'endTime1' => '15:00:00',
            'startTime2' => '20:30:00',
            'endTime2' => '00:00:00',
            'idRestaurante' => 6,
        ],

        // Lunes
        [
            'dia' => 'Lunes',
            'startTime1' => '12:30:00',
            'endTime1' => '15:00:00',
            'startTime2' => '20:30:00',
            'endTime2' => '00:00:00',
            'idRestaurante' => 6,
        ],

        // Martes
        [
            'dia' => 'Martes',
            'startTime1' => '12:30:00',
            'endTime1' => '15:00:00',
            'startTime2' => '20:30:00',
            'endTime2' => '00:00:00',
            'idRestaurante' => 6,
        ],

        // Miercoles
        [
            'dia' => 'Miercoles',
            'startTime1' => '12:30:00',
            'endTime1' => '15:00:00',
            'startTime2' => '20:30:00',
            'endTime2' => '00:00:00',
            'idRestaurante' => 6,
        ],

        // Jueves
        [
            'dia' => 'Jueves',
            'startTime1' => '12:30:00',
            'endTime1' => '15:00:00',
            'startTime2' => '20:30:00',
            'endTime2' => '00:00:00',
            'idRestaurante' => 6,
        ],

        // Viernes
        [
            'dia' => 'Viernes',
            'startTime1' => '12:30:00',
            'endTime1' => '15:00:00',
            'startTime2' => '20:30:00',
            'endTime2' => '00:00:00',
            'idRestaurante' => 6,
        ],

        //Sabado
        [
          'dia' => 'Sabado',
          'startTime1' => '12:30:00',
          'endTime1' => '15:00:00',
          'startTime2' => '20:30:00',
          'endTime2' => '00:00:00',
          'idRestaurante' => 7,
      ],

      // Domingo 
      [
          'dia' => 'Domingo',
          'startTime1' => null,
          'endTime1' => null,
          'startTime2' => '20:30:00',
          'endTime2' => '00:00:00',
          'idRestaurante' => 7,
      ],

      // Lunes
      [
          'dia' => 'Lunes',
          'startTime1' => '12:30:00',
          'endTime1' => '15:00:00',
          'startTime2' => '20:30:00',
          'endTime2' => '00:00:00',
          'idRestaurante' => 7,
      ],

      // Martes
      [
          'dia' => 'Martes',
          'startTime1' => '12:30:00',
          'endTime1' => '15:00:00',
          'startTime2' => '20:30:00',
          'endTime2' => '00:00:00',
          'idRestaurante' => 7,
      ],

      // Miercoles
      [
          'dia' => 'Miercoles',
          'startTime1' => '12:30:00',
          'endTime1' => '15:00:00',
          'startTime2' => '20:30:00',
          'endTime2' => '00:00:00',
          'idRestaurante' => 7,
      ],

      // Jueves
      [
          'dia' => 'Jueves',
          'startTime1' => '12:30:00',
          'endTime1' => '15:00:00',
          'startTime2' => '20:30:00',
          'endTime2' => '00:00:00',
          'idRestaurante' => 7,
      ],

      // Viernes
      [
          'dia' => 'Viernes',
          'startTime1' => '12:30:00',
          'endTime1' => '15:00:00',
          'startTime2' => '20:30:00',
          'endTime2' => '00:00:00',
          'idRestaurante' => 7,
      ],
       //Sabado
       [
        'dia' => 'Sabado',
        'startTime1' => '07:00:00',
        'endTime1' => '12:00:00',
        'startTime2' => null,
        'endTime2' => null,
        'idRestaurante' => 8,
    ],

    // Domingo 
    [
        'dia' => 'Domingo',
        'startTime1' => '07:00:00',
        'endTime1' => '12:00:00',
        'startTime2' => null,
        'endTime2' => null,
        'idRestaurante' => 8,
    ],

    // Lunes
    [
        'dia' => 'Lunes',
        'startTime1' => '07:00:00',
        'endTime1' => '12:00:00',
        'startTime2' => null,
        'endTime2' => null,
        'idRestaurante' => 8,
    ],

    // Martes
    [
        'dia' => 'Martes',
        'startTime1' => '07:00:00',
        'endTime1' => '12:00:00',
        'startTime2' => null,
        'endTime2' => null,
        'idRestaurante' => 8,
    ],

    // Miercoles
    [
        'dia' => 'Miercoles',
        'startTime1' => '07:00:00',
        'endTime1' => '12:00:00',
        'startTime2' => null,
        'endTime2' => null,
        'idRestaurante' => 8,
    ],

    // Jueves
    [
        'dia' => 'Jueves',
        'startTime1' => '07:00:00',
        'endTime1' => '12:00:00',
        'startTime2' => null,
        'endTime2' => null,
        'idRestaurante' => 8,
    ],

    // Viernes
    [
        'dia' => 'Viernes',
        'startTime1' => '07:00:00',
        'endTime1' => '12:00:00',
        'startTime2' => null,
        'endTime2' => null,
        'idRestaurante' => 8,
    ],

    // Sábado
    [
      'dia' => 'Sábado',
      'startTime1' => '11:00:00',
      'endTime1' => '15:00:00',
      'startTime2' => '20:30:00',
      'endTime2' => '01:00:00',
      'idRestaurante' => 9,
  ],
  // Domingo
  [
      'dia' => 'Domingo',
      'startTime1' => '11:00:00',
      'endTime1' => '15:00:00',
      'startTime2' => '20:30:00',
      'endTime2' => '01:00:00',
      'idRestaurante' => 9,
  ],
  // Lunes (Cerrado)
  [
      'dia' => 'Lunes',
      'startTime1' => null,
      'endTime1' => null,
      'startTime2' => null,
      'endTime2' => null,
      'idRestaurante' => 9,
  ],
  // Martes
  [
      'dia' => 'Martes',
      'startTime1' => null,
      'endTime1' => null,
      'startTime2' => '20:30:00',
      'endTime2' => '01:00:00',
      'idRestaurante' => 9,
  ],
  // Miércoles
  [
      'dia' => 'Miércoles',
      'startTime1' => '11:30:00',
      'endTime1' => '15:00:00',
      'startTime2' => '20:30:00',
      'endTime2' => '01:00:00',
      'idRestaurante' => 9,
  ],
  // Jueves
  [
      'dia' => 'Jueves',
      'startTime1' => '11:30:00',
      'endTime1' => '15:00:00',
      'startTime2' => '20:30:00',
      'endTime2' => '01:00:00',
      'idRestaurante' => 9,
  ],
  // Viernes
  [
      'dia' => 'Viernes',
      'startTime1' => '11:30:00',
      'endTime1' => '15:00:00',
      'startTime2' => '20:30:00',
      'endTime2' => '01:00:00',
      'idRestaurante' => 9,
  ],

  // Sábado
  [
    'dia' => 'Sábado',
    'startTime1' => null,
    'endTime1' => null,
    'startTime2' => '20:30:00',
    'endTime2' => '01:00:00',
    'idRestaurante' => 10,
],
// Domingo
[
    'dia' => 'Domingo',
    'startTime1' => '11:00:00',
    'endTime1' => '15:00:00',
    'startTime2' => null,
    'endTime2' => null,
    'idRestaurante' => 10,
],
// Lunes (Cerrado)
[
    'dia' => 'Lunes',
    'startTime1' => null,
    'endTime1' => null,
    'startTime2' => null,
    'endTime2' => null,
    'idRestaurante' => 10,
],
// Martes
[
    'dia' => 'Martes',
    'startTime1' => '08:00:00',
    'endTime1' => '13:00:00',
    'startTime2' => null,
    'endTime2' => null,
    'idRestaurante' => 10,
],
// Miércoles
[
    'dia' => 'Miércoles',
    'startTime1' => '08:00:00',
    'endTime1' => '13:00:00',
    'startTime2' => null,
    'endTime2' => null,
    'idRestaurante' => 10,
],
// Jueves
[
    'dia' => 'Jueves',
    'startTime1' => '08:00:00',
    'endTime1' => '13:00:00',
    'startTime2' => null,
    'endTime2' => null,
    'idRestaurante' => 10,
],
// Viernes
[
    'dia' => 'Viernes',
    'startTime1' => '08:00:00',
    'endTime1' => '13:00:00',
    'startTime2' => null,
    'endTime2' => null,
    'idRestaurante' => 10,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '09:00:00',
  'endTime1' => '13:00:00',
  'startTime2' => '13:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 11,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => '18:00:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 11,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '09:00:00',
  'endTime1' => '13:00:00',
  'startTime2' => '13:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 11,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '09:00:00',
  'endTime1' => '13:00:00',
  'startTime2' => '13:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 11,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '09:00:00',
  'endTime1' => '13:00:00',
  'startTime2' => '13:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 11,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '09:00:00',
  'endTime1' => '13:00:00',
  'startTime2' => '13:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 11,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '09:00:00',
  'endTime1' => '13:00:00',
  'startTime2' => '13:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 11,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => '20:00:00',
  'endTime2' => '03:00:00',
  'idRestaurante' => 12,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => '20:00:00',
  'endTime2' => '01:00:00',
  'idRestaurante' => 12,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 12,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => '20:00:00',
  'endTime2' => '01:00:00',
  'idRestaurante' => 12,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => '20:00:00',
  'endTime2' => '01:00:00',
  'idRestaurante' => 12,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => '20:00:00',
  'endTime2' => '01:00:00',
  'idRestaurante' => 12,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => '20:00:00',
  'endTime2' => '01:00:00',
  'idRestaurante' => 12,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 13,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 13,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 13,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 13,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 13,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 13,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 13,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 14,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 14,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 14,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 14,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 14,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 14,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '08:00:00',
  'endTime1' => '12:00:00',
  'startTime2' => '12:01:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 14,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '08:00:00',
  'endTime1' => '20:30:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 15,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 15,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '08:00:00',
  'endTime1' => '20:30:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 15,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '08:00:00',
  'endTime1' => '20:30:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 15,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '08:00:00',
  'endTime1' => '20:30:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 15,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '08:00:00',
  'endTime1' => '20:30:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 15,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '08:00:00',
  'endTime1' => '20:30:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 15,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '08:00:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 16,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 16,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '08:00:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 16,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '08:00:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 16,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '08:00:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 16,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '08:00:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 16,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '08:00:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 16,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '08:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 17,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => '17:00:00',
  'endTime2' => '01:00:00',
  'idRestaurante' => 17,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '08:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 17,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '08:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 17,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '08:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 17,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '08:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 17,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '08:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 17,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '18:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 18,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => null,
  'endTime1' => null,
  'startTime2' => NULL,
  'endTime2' => null,
  'idRestaurante' => 18,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '12:00:00',
  'endTime1' => '21:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 18,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '12:00:00',
  'endTime1' => '21:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 18,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '18:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 18,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '18:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 18,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '18:00:00',
  'endTime1' => '01:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 18,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '12:00:00',
  'endTime1' => '16:00:00',
  'startTime2' => '20:30:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 19,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => '12:00:00',
  'endTime1' => '16:00:00',
  'startTime2' => '20:30:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 19,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '12:00:00',
  'endTime1' => '16:00:00',
  'startTime2' => '20:30:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 19,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '12:00:00',
  'endTime1' => '16:00:00',
  'startTime2' => '20:30:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 19,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '12:00:00',
  'endTime1' => '16:00:00',
  'startTime2' => '20:30:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 19,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '12:00:00',
  'endTime1' => '16:00:00',
  'startTime2' => '20:30:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 19,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '12:00:00',
  'endTime1' => '16:00:00',
  'startTime2' => '20:30:00',
  'endTime2' => '00:00:00',
  'idRestaurante' => 19,
],

// Sábado
[
  'dia' => 'Sábado',
  'startTime1' => '18:30:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 20,
],
// Domingo
[
  'dia' => 'Domingo',
  'startTime1' => '18:30:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 20,
],
// Lunes 
[
  'dia' => 'Lunes',
  'startTime1' => '18:30:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 20,
],
// Martes
[
  'dia' => 'Martes',
  'startTime1' => '18:30:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 20,
],
// Miércoles
[
  'dia' => 'Miércoles',
  'startTime1' => '18:30:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 20,
],
// Jueves
[
  'dia' => 'Jueves',
  'startTime1' => '18:30:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 20,
],
// Viernes
[
  'dia' => 'Viernes',
  'startTime1' => '18:30:00',
  'endTime1' => '00:00:00',
  'startTime2' => null,
  'endTime2' => null,
  'idRestaurante' => 20,
],
    ];
    foreach ($horarios as $horariosData) {
      $horarios = new AtencionRestaurante();
      $horarios->dia = $horariosData['dia'];
      $horarios->startTime1 = $horariosData['startTime1'];
      $horarios->endTime1 = $horariosData['endTime1'];
      $horarios->startTime2 = $horariosData['startTime2'];
      $horarios->endTime2 = $horariosData['endTime2'];
      $horarios->idRestaurante = $horariosData['idRestaurante'];
      
   
      $horarios->save();
    }
  }
}
