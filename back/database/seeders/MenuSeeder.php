<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Menu;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menu = new Menu();
        $menu->nombre = 'Mediodia';
        $menu->descripcion = 'De Lunes a Viernes de 12 a 15 hs, ALMORZA EN EL SPAZIO';
        $menu->tipo = 'almuerzo';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F10e7fd97-d4a4-416a-a2ad-68b56c3fdbe9?alt=media&token=632e4c5d-560b-4381-93e7-f5d643b522b0';
        $menu->idRestaurante = 1;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Entradas';
        $menu->descripcion = 'Comienza tu experiencia con nuestras deliciosas entradas';
        $menu->tipo = 'Entradas';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F718e29fd-4d42-4ce0-a5ac-aaa460a99f7a?alt=media&token=c0ffdf93-f026-4611-a259-c14a3afd0e9c';
        $menu->idRestaurante = 1;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 3';
        $menu->descripcion = 'Descripcion del menu 3';
        $menu->tipo = 'tipo 3';
        $menu->imagen = 'null';
        $menu->idRestaurante = 1;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 4';
        $menu->descripcion = 'Descripcion del menu 4';
        $menu->tipo = 'tipo 4';
        $menu->imagen = 'null';
        $menu->idRestaurante = 1;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 5';
        $menu->descripcion = 'Descripcion del menu 5';
        $menu->tipo = 'tipo 5';
        $menu->imagen = 'null';
        $menu->idRestaurante = 1;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 1';
        $menu->descripcion = 'Descripcion del menu 1';
        $menu->tipo = 'tipo 1';
        $menu->imagen = 'null';
        $menu->idRestaurante = 2;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 2';
        $menu->descripcion = 'Descripcion del menu 2';
        $menu->tipo = 'tipo 2';
        $menu->imagen = 'null';
        $menu->idRestaurante = 2;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 3';
        $menu->descripcion = 'Descripcion del menu 3';
        $menu->tipo = 'tipo 3';
        $menu->imagen = 'null';
        $menu->idRestaurante = 2;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 4';
        $menu->descripcion = 'Descripcion del menu 4';
        $menu->tipo = 'tipo 4';
        $menu->imagen = 'null';
        $menu->idRestaurante = 2;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 5';
        $menu->descripcion = 'Descripcion del menu 5';
        $menu->tipo = 'tipo 5';
        $menu->imagen = 'null';
        $menu->idRestaurante = 2;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Pizza Gourmet';
        $menu->descripcion = 'Pizza todo variedad';
        $menu->tipo = 'Pizzas';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fa12c5ee3-94bf-4464-9cb3-e3f5d11cb42f?alt=media&token=eb44ac9d-a988-465b-aa87-a1ac9a829650';
        $menu->idRestaurante = 3;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Sandwich Fast Food';
        $menu->descripcion = 'Sandwich especiales de la casa';
        $menu->tipo = 'Sandwich';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fe0be79df-24c2-44c0-ae22-152ec7baa2ee?alt=media&token=d8a164e2-d565-4de0-8a9d-70d6176b58c1';
        $menu->idRestaurante = 3;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Carnes';
        $menu->descripcion = 'combinaciones únicas de carnes y salsas que te sorprenderan';
        $menu->tipo = 'Carnes';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F432aa2b5-df83-42f6-bacc-ac66ecaf6b16?alt=media&token=ee90332f-2052-4199-9c83-aaaaa839505b';
        $menu->idRestaurante = 3;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 4';
        $menu->descripcion = 'Descripcion del menu 4';
        $menu->tipo = 'tipo 4';
        $menu->imagen = 'null';
        $menu->idRestaurante = 3;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Desayuno';
        $menu->descripcion = 'Explora una variedad de sabores en nuestro menú de desayunos. ';
        $menu->tipo = 'Desayuno';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ff9e18001-b49a-4142-9d85-4032418760eb?alt=media&token=6018581d-e405-440a-b3f8-23c92888d1ad';
        $menu->idRestaurante = 3;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 1';
        $menu->descripcion = 'Descripcion del menu 1';
        $menu->tipo = 'tipo 1';
        $menu->imagen = 'null';
        $menu->idRestaurante = 4;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 2';
        $menu->descripcion = 'Descripcion del menu 2';
        $menu->tipo = 'tipo 2';
        $menu->imagen = 'null';
        $menu->idRestaurante = 4;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 3';
        $menu->descripcion = 'Descripcion del menu 3';
        $menu->tipo = 'tipo 3';
        $menu->imagen = 'null';
        $menu->idRestaurante = 4;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 4';
        $menu->descripcion = 'Descripcion del menu 4';
        $menu->tipo = 'tipo 4';
        $menu->imagen = 'null';
        $menu->idRestaurante = 4;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 5';
        $menu->descripcion = 'Descripcion del menu 5';
        $menu->tipo = 'tipo 5';
        $menu->imagen = 'null';
        $menu->idRestaurante = 4;
        $menu->save();
    }
}
