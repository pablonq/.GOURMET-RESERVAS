<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Mesa;

class MesaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      {
        
        $restaurantCapacities = [
            50, 80, 80, 90, 60, 100, 70, 80, 70, 30,
            50, 50, 70, 60, 40, 50, 60, 50, 40, 50
        ];

        
        $tableDistributions = [
          ['cantidadPersonas' => 2, 'percentage' => 0.4],  // 40% tables for 2 people
          ['cantidadPersonas' => 4, 'percentage' => 0.3],  // 30% tables for 4 people
          ['cantidadPersonas' => 6, 'percentage' => 0.2],  // 20% tables for 6 people
          ['cantidadPersonas' => 8, 'percentage' => 0.1],  // 10% tables for 8+ people
      ];

      $mesas = [];

      
      foreach ($restaurantCapacities as $restaurantId => $capacity) {
          $restaurantId++; 
          $numeroMesa = 1; 

          foreach ($tableDistributions as $distribution) {
              
              $totalSeats = $capacity * $distribution['percentage'];
              $tableSize = $distribution['cantidadPersonas'];
              $tableCount = floor($totalSeats / $tableSize);

              for ($i = 0; $i < $tableCount; $i++) {
                  $mesas[] = [
                      'numeroMesa' => $numeroMesa,
                      'cantidadPersonas' => $tableSize,
                      'estado' => 'Disponible',
                      'idRestaurante' => $restaurantId,
                  ];
                  $numeroMesa++;
              }
          }
      }

      
      DB::table('mesas')->insert($mesas);
  }
    }
}
