<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Models\Reserva;
use Illuminate\Support\Facades\Log;


class ReservaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
{
    Carbon::setLocale('es'); 

    $start_date = Carbon::create(2024, 11, 4, 0, 0, 0);
    $end_date = Carbon::create(2024, 12, 4, 0, 0, 0); 

    
    $restaurantes = [
        1 => [ // Restaurante 1
            'martes' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']

            ],
            'miércoles' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'jueves' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'viernes' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'sábado' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
                     
          ],

        2 => [ // Restaurante 2
          'lunes' => [
            ['08:30:00', '14:00:00'],
            ['17:00:00', '23:30:00']
          ],
            'martes' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'miércoles' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'jueves' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'viernes' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'sábado' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'domingo' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
        ],

        3 => [ // Restaurante 3
            'martes' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'miércoles' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'jueves' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'viernes' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'sábado' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
            ],
            'domingo' => [
                ['08:30:00', '14:00:00'],
                ['17:00:00', '23:30:00']
              
            ],
        ],

        4 => [ // Restaurante 4
            'lunes' => [
              ['12:00:00', '15:30:00'],
                ['19:30:00', '23:30:00']
            ],
            'martes' => [
              ['12:00:00', '15:30:00'],
              ['19:30:00', '23:30:00']
            ],
            'miércoles' => [
              ['11:00:00', '15:30:00'],
              ['19:30:00', '23:30:00']
            ],
            'jueves' => [
              ['11:00:00', '15:30:00'],
              ['19:30:00', '23:30:00']
            ],
            'viernes' => [
              ['11:00:00', '15:30:00'],
              ['19:30:00', '23:30:00']
            ],
            'sábado' => [
                ['12:00:00', '15:30:00'],
                ['19:30:00', '23:30:00']
            ],
            'domingo' => [
                ['12:00:00', '15:30:00'],
                ['19:30:00', '23:30:00']
              
            ]
        ],

        5 => [ // Restaurante 5
          'sábado' => [
            ['10:00:00', '15:30:00'],
                ['20:00:00', '23:30:00']
          ],
           'lunes' => [
            ['08:00:00', '23:30:00']
                
          ],
            'martes' => [
              ['08:00:00', '23:30:00']
            ],
            'miércoles' => [
              ['08:00:00', '23:30:00']
            ],
            'jueves' => [
              ['08:00:00', '23:30:00']
            ],
            'viernes' => [
              ['08:00:00', '23:30:00']
            ],
            ],

        6 => [ // Restaurante 6
          'sábado' => [
                ['12:30:00', '15:00:00'],
                ['20:30:00', '23:30:00']
            ],
          'domingo' => [
            ['12:30:00', '15:00:00'],
            ['20:30:00', '23:30:00']
          ],
          'lunes' => [
            ['12:30:00', '15:00:00'],
            ['20:30:00', '23:30:00']
          ],
           
            'martes' => [
              ['12:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'miércoles' => [
              ['12:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'jueves' => [
              ['12:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'viernes' => [
              ['12:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            
            
        ],

        7 => [ // Restaurante 7
            'lunes' => [
              ['12:30:00', '15:00:00'],
                ['20:30:00', '23:30:00']
            ],
            'martes' => [
              ['12:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'miércoles' => [
              ['12:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'jueves' => [
              ['12:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'viernes' => [
              ['12:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'sábado' => [
                ['12:30:00', '15:00:00'],
                ['20:30:00', '23:30:00']
            ],
            'domingo' => [
              ['20:30:00', '23:30:00']
            ]
        ],
        8 => [ // Restaurante 8
          'lunes' => [
            ['07:00:00', '12:00:00'],
              
          ],
          'martes' => [
            ['07:00:00', '12:00:00'],
          ],
          'miércoles' => [
            ['07:00:00', '12:00:00'],
          ],
          'jueves' => [
            ['07:00:00', '12:00:00'],
          ],
          'viernes' => [
            ['07:00:00', '12:00:00'],
          ],
          'sábado' => [
            ['07:00:00', '12:00:00'],
          ],
          'domingo' => [
            ['07:00:00', '12:00:00'],
          ]
      ],
        9 => [ // Restaurante 9
            'martes' => [
                
                ['20:30:00', '23:30:00']
            ],
            'miércoles' => [
                ['11:30:00', '15:00:00'],
                ['20:30:00', '23:30:00']
            ],
            'jueves' => [
              ['11:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'viernes' => [
              ['11:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'sábado' => [
              ['11:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
            'domingo' => [
              ['11:30:00', '15:00:00'],
              ['20:30:00', '23:30:00']
            ],
        ],

        10 => [ // Restaurante 10
              
          'martes' => [
              
            ['08:00:00', '13:00:00']
          ],
          'miércoles' => [
            ['08:00:00', '13:00:00']
          ],
          'jueves' => [
            ['08:00:00', '13:00:00']
          ],
          'viernes' => [
            ['08:00:00', '13:00:00']
          ],
          'sábado' => [
            ['20:00:00', '23:30:00'],
              
          ],
          'domingo' => [
            ['11:00:00', '15:00:00'],
            
          ],
      ],

        11 => [ // Restaurante 11
            'lunes' => [
              ['09:00:00', '23:30:00'],
            ],
            'martes' => [
              ['09:00:00', '23:30:00'],
            ],
            'miércoles' => [
              ['09:00:00', '23:30:00'],
            ],
            'jueves' => [
              ['09:00:00', '23:30:00'],
            ],
            'viernes' => [
              ['08:00:00', '23:30:00'],
            ],
            'sábado' => [
                ['09:00:00', '23:30:00'],
                
            ],
            'domingo' => [
                ['18:00:00', '23:30:00'],
                
            ],
            
          ],

        12 => [ // Restaurante 12
            
            'martes' => [
              ['20:00:00', '23:30:00'],
            ],
            'miércoles' => [
              ['20:00:00', '23:30:00'],
            ],
            'jueves' => [
              ['20:00:00', '23:30:00'],
            ],
            'viernes' => [
              ['20:00:00', '23:30:00'],
            ],
            'sábado' => [
                ['20:00:00', '23:30:00'],
                
            ],
            'domingo' => [
              ['20:00:00', '23:30:00'],
            ],
            
          ],

        13 => [ // Restaurante 13
            'lunes' => [
              ['08:00:00', '23:30:00'],
            ],
            'martes' => [
              ['08:00:00', '23:30:00'],
            ],
            'jueves' => [
              ['08:00:00', '23:30:00'],
            ],
            'viernes' => [
              ['08:00:00', '23:30:00'],
            ],
            'sábado' => [
                ['08:00:00', '23:30:00'],
                
            ],
            
          ],

          14 => [ // Restaurante 14
            'lunes' => [
              ['08:00:00', '23:30:00'],
            ],
            'martes' => [
              ['08:00:00', '23:30:00'],
            ],
            'miercoles' => [
              ['08:00:00', '23:30:00'],
            ],
            'jueves' => [
              ['08:00:00', '23:30:00'],
            ],
            'viernes' => [
              ['08:00:00', '23:30:00'],
            ],
            'sábado' => [
                ['08:00:00', '23:30:00'],
                
            ],
            
          ],

          15 => [ // Restaurante 15
            'lunes' => [
              ['08:00:00', '20:30:00'],
            ],
            'martes' => [
              ['08:00:00', '20:30:00'],
            ],
            'miercoles' => [
              ['08:00:00', '20:30:00'],
            ],
            'jueves' => [
              ['08:00:00', '20:30:00'],
            ],
            'viernes' => [
              ['08:00:00', '20:30:00'],
            ],
            'sábado' => [
                ['08:00:00', '23:30:00'],
                
            ],
            
          ],

          16 => [ // Restaurante 16
            'lunes' => [
              ['08:00:00', '23:30:00'],
            ],
            'martes' => [
              ['08:00:00', '23:30:00'],
            ],
            'miercoles' => [
              ['08:00:00', '23:30:00'],
            ],
            'jueves' => [
              ['08:00:00', '23:30:00'],
            ],
            'viernes' => [
              ['08:00:00', '23:30:00'],
            ],
            'sábado' => [
              ['08:00:00', '23:30:00'],
            ]
            
          ],

          17 => [ // Restaurante 17
            'lunes' => [
              ['08:00:00', '23:30:00'],
            ],
            'martes' => [
              ['08:00:00', '23:30:00'],
            ],
            'jueves' => [
              ['08:00:00', '23:30:00'],
            ],
            'viernes' => [
              ['08:00:00', '23:30:00'],
            ],
            'sábado' => [
                ['08:00:00', '23:30:00'],
                
            ],
            'domingo' => [
              ['17:00:00', '23:30:00'],
            ]
            
          ],

          18 => [ // Restaurante 18
            'lunes' => [
              ['12:00:00', '21:00:00'],
            ],
            'martes' => [
              ['12:00:00', '21:00:00'],
            ],
            'miercoles' => [
              ['18:00:00', '23:30:00'],
            ],
            'jueves' => [
              ['18:00:00', '23:30:00'],
            ],
            'viernes' => [
              ['18:00:00', '23:30:00'],
            ],
            'sábado' => [
                ['18:00:00', '23:30:00'],
                
            ],
          ],

          19 => [ // Restaurante 19
            'lunes' => [
              ['12:00:00', '16:00:00'],
                ['20:30:00', '23:30:00'],
            ],
            'martes' => [
              ['12:00:00', '16:00:00'],
                ['20:30:00', '23:30:00'],
            ],
            'miercoles' => [
              ['12:00:00', '16:00:00'],
                ['20:30:00', '23:30:00'],
            ],
            'jueves' => [
              ['12:00:00', '16:00:00'],
                ['20:30:00', '23:30:00'],
            ],
            'viernes' => [
              ['12:00:00', '16:00:00'],
                ['20:30:00', '23:30:00'],
            ],
            'sábado' => [
                ['12:00:00', '16:00:00'],
                ['20:30:00', '23:30:00'],
                
            ],
            'domingo' => [
              ['12:00:00', '16:00:00'],
                ['20:30:00', '23:30:00'],
            ]
          ],

          20 => [ // Restaurante 20
            'lunes' => [
              ['18:30:00', '23:30:00'],
            ],
            'martes' => [
              ['18:30:00', '23:30:00'],
            ],
            'miercoles' => [
              ['18:30:00', '23:30:00'],
            ],
            'jueves' => [
              ['18:30:00', '23:30:00'],
            ],  
            'viernes' => [
              ['18:30:00', '23:30:00'],
            ],
            'sábado' => [
                ['18:30:00', '23:30:00'],
                
            ],
            'domingo' => [
              ['18:30:00', '23:30:00'],
            ]
          ],
    ];

    foreach ($restaurantes as $idRestaurante => $horarios) {
      
  
      $current_date = $start_date->copy(); 
      while ($current_date->lte($end_date)) {
          $dayOfWeek = $current_date->locale('es')->isoFormat('dddd');
          $dayOfWeek = strtolower($dayOfWeek); 
  
          if (array_key_exists($dayOfWeek, $horarios)) {
              foreach ($horarios[$dayOfWeek] as $timeSlot) {
                  $start_time = Carbon::createFromTimeString($timeSlot[0]);
                  $end_time = Carbon::createFromTimeString($timeSlot[1]);
  
                  
                  $available_slots = [];
                  $current_slot = $start_time->copy();
                  while ($current_slot->lte($end_time)) {
                      $available_slots[] = $current_slot->copy();
                      $current_slot->addMinutes(30);
                  }
  
                  $reservationsPerDay = rand(1, 4); 
                  for ($i = 0; $i < $reservationsPerDay; $i++) {
                      
                      $random_start = $available_slots[array_rand($available_slots)];
  
                      
                      $random_duration = rand(1, 4) * 30; 
                      $random_end = $random_start->copy()->addMinutes($random_duration);
  
                      
                      if ($random_end->lte($end_time)) {
                          try {
                              $reserva = new \App\Models\Reserva();
                              $reserva->fechaReserva = $current_date->toDateString();
                              $reserva->horaReserva = $random_start->format('H:i:s');
                              $reserva->horaFinReserva = $random_end->format('H:i:s');
                              $reserva->estado = rand(1, 100) <= 10 ? 'cancelada' : 'procesada'; // 10% cancelada, 90% procesada
                              $reserva->idRestaurante = $idRestaurante;
                              $reserva->notaEspecial = 'Sin comentarios';
                              $reserva->idUsuario = rand(1, 102);
  
                              
                              $reserva->save();
                          } catch (\Exception $e) {
                              Log::error("Error al guardar reserva: " . $e->getMessage());
                          }
                      } else {
                          Log::info("Reserva descartada: Hora fin {$random_end->format('H:i:s')} fuera de rango para Restaurante {$idRestaurante}");
                      }
                  }
              }
          }
  
          $current_date->addDay();
      }
  }
  
  }
  
}


    
    



    /* $reserva = new \App\Models\Reserva();
$reserva->fechaReserva = '2024-07-10';
$reserva->horaReserva = '12:00:00';
$reserva->horaFinReserva = '13:00:00';
$reserva->estado = 'cancelada';
$reserva->notaEspecial = 'Sin comentarios';
$reserva->idRestaurante = 1;
$reserva->idUsuario = 2;
$reserva->save(); */




