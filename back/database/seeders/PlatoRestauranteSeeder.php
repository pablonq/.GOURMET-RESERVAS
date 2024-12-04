<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlatoRestauranteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $asignaciones = [];

      
      
      for ($restauranteId = 1; $restauranteId <= 5; $restauranteId++) {
          
          $startPlatoId = ($restauranteId - 1) * 12 + 1; 
          $endPlatoId = $startPlatoId + 11; 

          
          if ($endPlatoId > 60) {
              $endPlatoId = 60;
          }

          
          for ($platoId = $startPlatoId; $platoId <= $endPlatoId; $platoId++) {
              $asignaciones[] = [
                  'restaurante_id' => $restauranteId,
                  'plato_id' => $platoId,
              ];
          }
      }

      
      DB::table('plato_restaurante')->insert($asignaciones);

      $asignaciones2 = [];

      
      for ($restauranteId = 6; $restauranteId <= 20; $restauranteId++) {
      
          $startPlatoId = ($restauranteId - 6) * 18 + 61; 
          $endPlatoId = $startPlatoId + 17; 

          
          if ($endPlatoId > 330) {
              $endPlatoId = 330;
          }

          
          for ($platoId = $startPlatoId; $platoId <= $endPlatoId; $platoId++) {
              $asignaciones2[] = [
                  'restaurante_id' => $restauranteId,
                  'plato_id' => $platoId,
              ];
          }
      }

      
      DB::table('plato_restaurante')->insert($asignaciones2);
    }
}
