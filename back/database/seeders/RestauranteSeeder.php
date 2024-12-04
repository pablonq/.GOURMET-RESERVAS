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
      /* 1 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Spazio Morrigan';
        $restaurante->descripcion = 'CERVECERIA - ESPACIO CULTURAL';
        $restaurante->tipo = 'Bar restaurante';
        $restaurante->telefono = '2994444444';
        $restaurante->email = 'morri@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 50;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        /* 2 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Morgan';
        $restaurante->descripcion = 'Bar Cervecero';
        $restaurante->tipo = 'Pizzeria';
        $restaurante->telefono = '2994444444';
        $restaurante->email = 'morgan@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 80;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        /* 3 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'JACC';
        $restaurante->descripcion = 'Bar Cervecero';
        $restaurante->tipo = 'Pizzeria';
        $restaurante->telefono = '2994444444';
        $restaurante->email = 'jacc@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 80;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        /* 4 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'La Toscana';
        $restaurante->descripcion = 'Quesería Ventimiglia - Horno a Leña - Eventos & Catering';
        $restaurante->tipo = 'Familiar';
        $restaurante->telefono = '299234569';
        $restaurante->email = 'toscana@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 90;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        /* 5 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Estación Q';
        $restaurante->descripcion = 'Ofrece buenos cócteles ,Ofrece platos vegetarianos';
        $restaurante->tipo = 'Familiar';
        $restaurante->telefono = '02994432353';
        $restaurante->email = 'estacion@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 60;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

            /* 6 */  
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'El Boliche de Alberto';
        $restaurante->descripcion = 'La parrilla es una pasión argentina. Contamos con más de 35 años de experiencia ';
        $restaurante->tipo = 'Parrilla';
        $restaurante->telefono = '0299 448-6360';
        $restaurante->email = 'elbolichearlberto@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 100;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        /* 7 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Franz y Peppone';
        $restaurante->descripcion = 'Historica pizzería Franz y Peppone, con más de 30 años de experiencia ';
        $restaurante->tipo = 'Pizzeria';
        $restaurante->telefono = ' 0299 443-2385';
        $restaurante->email = 'franz@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal = 70;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        /* 8 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Dorado';
        $restaurante->descripcion = 'desayunos,meriendas,almuerzos,cocteles';
        $restaurante->tipo = 'Familiar';
        $restaurante->telefono = '0299 502-6743';
        $restaurante->email = 'dorado@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =80;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'si';
        $restaurante->save();

        /* 9 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Noble Campo';
        $restaurante->descripcion = 'Es un restaurante que cuenta con mas de 12 años de experiencia, muy reconocido en nuestro Alto Valle. Su carta se destaca por la parrilla gourmet y cocina italiana.';
        $restaurante->tipo = 'Gourmet';
        $restaurante->telefono = '2995082121';
        $restaurante->email = 'noble@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =70;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 10 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Marga';
        $restaurante->descripcion = 'Este restaurante es una elección muy buena si lo que te apetece es cocina argentina';
        $restaurante->tipo = 'Gourmet';
        $restaurante->telefono = '2995153912';
        $restaurante->email = 'marga@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =30;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 11 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Donato';
        $restaurante->descripcion = 'Resto Bar Cervecero';
        $restaurante->tipo = 'Pizzeria';
        $restaurante->telefono = '2995464570';
        $restaurante->email = 'donato@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =50;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 12 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Inda';
        $restaurante->descripcion = 'Resto Bar';
        $restaurante->tipo = 'Pizzeria';
        $restaurante->telefono = '2994011992';
        $restaurante->email = 'inda@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =50;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 13 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Casa Juez';
        $restaurante->descripcion = 'Resto Café';
        $restaurante->tipo = 'Fusion';
        $restaurante->telefono = '2994011992';
        $restaurante->email = 'juez@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =70;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 14 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Ache';
        $restaurante->descripcion = 'Comparte un excelente lugar con una amplia carta en variedades de pizza';
        $restaurante->tipo = 'bar restaurante';
        $restaurante->telefono = '2995850002';
        $restaurante->email = 'ache@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =60;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 15 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Magnolia';
        $restaurante->descripcion = 'Café y Bistro';
        $restaurante->tipo = 'Gourmet';
        $restaurante->telefono = '2994064287';
        $restaurante->email = 'magnolia@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =40;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 16 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Faraon';
        $restaurante->descripcion = 'Comida Arabe';
        $restaurante->tipo = 'Tematico';
        $restaurante->telefono = '2994477938';
        $restaurante->email = 'faraon@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =50;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 17 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = '1946';
        $restaurante->descripcion = 'Bar y Resto';
        $restaurante->tipo = 'Gourmet';
        $restaurante->telefono = '2994583444';
        $restaurante->email = '1946@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =60;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 18 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Natural Mystic';
        $restaurante->descripcion = 'Bar';
        $restaurante->tipo = 'Pizzeria';
        $restaurante->telefono = '2991583444';
        $restaurante->email = 'natural@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =50;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 19 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Lopez';
        $restaurante->descripcion = 'Resto';
        $restaurante->tipo = 'de autor';
        $restaurante->telefono = '298154405110';
        $restaurante->email = 'lopez@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =40;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

        /* 20 */
        $restaurante = new Restaurante();
        $restaurante->nombreRes = 'Berlin';
        $restaurante->descripcion = 'Resto Bar';
        $restaurante->tipo = 'buffet';
        $restaurante->telefono = '2984591574';
        $restaurante->email = 'berlin@mail.com';
        $restaurante->contrasenia = bcrypt('1234');
        $restaurante->capacidadTotal =50;
        $restaurante->fechaBaja = null;
        $restaurante->fechaAlta = now();
        $restaurante->rol = 'restaurante';
        $restaurante->aceptaEventos = 'no';
        $restaurante->save();

    }
}
