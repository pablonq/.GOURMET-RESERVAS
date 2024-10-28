<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            'vegetariano',
            'sin gluten',
            'vegano',
            'sin lactosa',
            'organico',
            'picante',
            'dulces',
            'salado',
            'mariscos',
            'bajo en calorías',
            'alto en proteína',
            'gourmet',
            'mexicano',
            'mediterranea',
            'italiana',
            'china',
            'a la parrilla',
            'frito',
            'crudo',
            'alto en fibra',
            'bajo en carbohidratos',
            'bajo en sodio',
            'clasico',
            'ceto',
            'paleo',
            'plato del dia',
            'popular',
            'carne',
            'pollo',
            'pescado',
            'pastas',
            'verduras',
        ];

        foreach ($tags as $tagNombre) {
            $tag= new Tag();
            $tag->nombreTag = $tagNombre;
            $tag->save();
        }
    }
}
