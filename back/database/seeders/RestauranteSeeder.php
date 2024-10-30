<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Restaurante;

class RestauranteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'MORRIGAN';
        
        $restaurante->descripcion = 'CERVECERIA - ESPACIO CULTURAL';
        $restaurante->tipo = 'CERVECERIA';
        $restaurante->telefono = '2994444444';
        $restaurante->email = 'morri@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 50;
        
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Morgan Bar Cervecero';
        
        $restaurante->descripcion = 'Bar Cervecero';
        $restaurante->tipo = 'CERVECERIA';
        $restaurante->telefono = '2994444444';
        $restaurante->email = 'morgan@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 80;
       
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'JACC Isla Cervecera';
        
        $restaurante->descripcion = 'Bar Cervecero';
        $restaurante->tipo = 'CERVECERIA';
        $restaurante->telefono = '2994444444';
        $restaurante->email = 'jacc@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 80;
        
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'La Toscana';
        
        $restaurante->descripcion = 'Quesería Ventimiglia - Horno a Leña - Eventos & Catering';
        $restaurante->tipo = 'Restaurant';
        $restaurante->telefono = '299234569';
        $restaurante->email = 'toscana@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 115;
        
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        
    }
}
