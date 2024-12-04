<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RestauranteSeeder::class,
           MenuSeeder::class,
            PlatoSeeder::class,
            PlatoMenuSeeder::class,
            PlatoRestauranteSeeder::class,
            ImagenesRestaurantesSeeder::class,
            AtencionRestauranteSeeder::class,
            PersonaSeeder::class ,
            DuenioSeeder::class,
            UsuarioSeeder::class,
            DireccioneSeeder::class,
            ReservaSeeder::class,
            ReseniaSeeder::class,
            MesaSeeder::class,
            ReservaMesaSeeder::class,
            TagSeeder::class,
            PlatoTagSeeder::class 
        ]);
    }
}
