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
        $restaurante->nombreRes = 'Spazio Morrigan';
        $restaurante->descripcion = 'CERVECERIA - ESPACIO CULTURAL';
        $restaurante->tipo = 'Bar restaurante';
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
        $restaurante->tipo = 'Pizzeria';
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
        $restaurante->tipo = 'Pizzeria';
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
        $restaurante->tipo = 'Familiar';
        $restaurante->telefono = '299234569';
        $restaurante->email = 'toscana@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 115;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Restaurante Estación Q';
        $restaurante->descripcion = 'Ofrece buenos cócteles ,Ofrece platos vegetarianos';
        $restaurante->tipo = 'Familiar';
        $restaurante->telefono = '02994432353';
        $restaurante->email = 'estacion@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 120;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

              
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'El Boliche de Alberto "Parrilla"';
        $restaurante->descripcion = 'La parrilla es una pasión argentina. Contamos con más de 35 años de experiencia ';
        $restaurante->tipo = 'Parrilla';
        $restaurante->telefono = '0299 448-6360';
        $restaurante->email = 'elbolichearlberto@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 200;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Franz y Peppone"';
        $restaurante->descripcion = 'Historica pizzería Franz y Peppone, con más de 30 años de experiencia ';
        $restaurante->tipo = 'Pizzeria';
        $restaurante->telefono = ' 0299 443-2385';
        $restaurante->email = 'franz@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 200;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Dorado"';
        $restaurante->descripcion = 'desayunos,meriendas,almuerzos,cocteles';
        $restaurante->tipo = 'Familiar';
        $restaurante->telefono = '0299 502-6743';
        $restaurante->email = 'dorado@gmail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =120;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Noble Campo"';
        $restaurante->descripcion = 'Es un restaurante que cuenta con mas de 12 años de experiencia, muy reconocido en nuestro Alto Valle. Su carta se destaca por la parrilla gourmet y cocina italiana.';
        $restaurante->tipo = 'Gourmet';
        $restaurante->telefono = '2995082121';
        $restaurante->email = 'noble@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =100;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

    }
}
