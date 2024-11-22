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
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class, 

      'calle' => 'Juan Julián Lastra',
      'altura' => '175',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(5);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Juan Bautista Alberdi',
      'altura' => ' 297',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);


    $restaurante = Restaurante::find(6);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Juan Julián Lastra ',
      'altura' => '1020',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(7);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Almirante Brown',
      'altura' => '434',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(8);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Hipólito Yrigoyen',
      'altura' => '399',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);
    
    $restaurante = Restaurante::find(9);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,
      
      'calle' => 'General Fernández Oro',
      'altura' => '230',
      'ciudad' => 'Cipolletti',
      'provincia' => 'Rio Negro',
      'pais' => 'Argentina',
    ]);
    $restaurante = Restaurante::find(10);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'San Luis ',
      'altura' => '630',
      'ciudad' => 'Cipolletti',
      'provincia' => 'Río Negro',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(11);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => ' Av. Mengelle',
      'altura' => '670',
      'ciudad' => 'Cipolletti',
      'provincia' => 'Río Negro',
      'pais' => 'Argentina',
    ]);


    
    $restaurante = Restaurante::find(12);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Av. Belgrano',
      'altura' => '282',
      'ciudad' => 'Plottier',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(13);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Rivadavia',
      'altura' => '171',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(14);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Almirante Brown',
      'altura' => '205',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(15);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Entre Rios',
      'altura' => '507',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(16);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Santa Fe',
      'altura' => '383',
      'ciudad' => 'Neuquén',
      'provincia' => 'Neuquén',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(17);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'General Roca',
      'altura' => '320',
      'ciudad' => 'Cipolletti',
      'provincia' => 'Río Negro',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(18);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'General José de San Martín',
      'altura' => '531',
      'ciudad' => 'General Roca',
      'provincia' => 'Río Negro',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(19);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'La Pampa',
      'altura' => '1571',
      'ciudad' => 'General Roca',
      'provincia' => 'Río Negro',
      'pais' => 'Argentina',
    ]);

    $restaurante = Restaurante::find(20);
    Direccione::create([
      'direccionable_id' => $restaurante->id,
      'direccionable_type' => Restaurante::class,

      'calle' => 'Coronel Rodhe',
      'altura' => '708',
      'ciudad' => 'General Roca',
      'provincia' => 'Río Negro',
      'pais' => 'Argentina',
    ]);
  }
}
