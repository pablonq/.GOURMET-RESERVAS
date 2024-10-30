<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Restaurante;
use App\Models\Usuario;
use App\Models\Direccione;
class DireccioneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
     /*  $usuarios = Usuario::take(1)->get(); // Suponiendo que tienes algunos usuarios creados

      foreach ($usuarios as $usuario) {
          $usuario->direccion()->create([
              'calle' => 'Intendente Carro' . $usuario->id,
              'altura' => rand(1890, 1900),
              'ciudad' => 'Neuquén' . $usuario->id,
              'provincia' => 'Neuquén' . $usuario->id,
              'pais' => 'Argentina' . $usuario->id,
          ]);
      } */

      $restaurante = Restaurante::find(1); // Suponiendo que tienes algunos restaurantes creados

      
          Direccione::create([
            'direccionable_id' => $restaurante->id, // ID del restaurante
                'direccionable_type' => Restaurante::class, // Tipo de modelo polimórfico
              'calle' => 'Gobernador Elordi ',
              'altura' => '39',
              'ciudad' => 'Neuquén',
              'provincia' => 'Neuquén',
              'pais' => 'Argentina',
          ]);
      

          $restaurante = Restaurante::find(2);

      
       Direccione::create([
            'direccionable_id' => $restaurante->id, // ID del restaurante
                'direccionable_type' => Restaurante::class, // Tipo de modelo polimórfico
              'calle' => 'Rio Negro',
              'altura' => '2221',
              'ciudad' => 'Neuquén',
              'provincia' => 'Neuquén',
              'pais' => 'Argentina',
          ]);
      
          $restaurante = Restaurante::find(3);
      
      
          Direccione::create([
            'direccionable_id' => $restaurante->id, // ID del restaurante
                'direccionable_type' => Restaurante::class, // Tipo de modelo polimórfico
              'calle' => 'Mar del Sur',
              'altura' => '45',
              'ciudad' => 'Neuquén',
              'provincia' => 'Neuquén',
              'pais' => 'Argentina',
          ]);
      

      $restaurante = Restaurante::find(4);

      Direccione::create([
        'direccionable_id' => $restaurante->id, // ID del restaurante
            'direccionable_type' => Restaurante::class, // Tipo de modelo polimórfico
        
        'calle' => 'Juan Julián Lastra',
        'altura' => '175',
        'ciudad' => 'Neuquén',
        'provincia' => 'Neuquén',
        'pais' => 'Argentina',
    ]);
      
        
      }

    }
