<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Plato;
use App\Models\Tag;

class PlatoTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      
      $tagIds = Tag::pluck('id')->toArray();

      
      if (empty($tagIds)) {
          $this->command->warn('No se encontraron tags en la base de datos.');
          return;
      }

      
      $platos = Plato::all();

      foreach ($platos as $plato) {
          
          $randomTags = array_rand(array_flip($tagIds), rand(2, 4)); 
          $randomTags = (array) $randomTags; 

          
          $plato->tags()->attach($randomTags);
      }

      
  }
}
