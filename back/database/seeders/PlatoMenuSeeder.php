<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlatoMenuSeeder extends Seeder
{
    public function run()
    {
        $asignaciones = [];

        
        
        for ($menuId = 1; $menuId <= 110; $menuId++) {
            
            $startPlatoId = ($menuId - 1) * 3 + 1; 
            $endPlatoId = $startPlatoId + 2; 

            
            if ($endPlatoId > 330) {
                $endPlatoId = 330;
            }

            
            for ($platoId = $startPlatoId; $platoId <= $endPlatoId; $platoId++) {
                $asignaciones[] = [
                    'menu_id' => $menuId,
                    'plato_id' => $platoId,
                ];
            }
        }

        
        DB::table('plato_menu')->insert($asignaciones);
    }
}
