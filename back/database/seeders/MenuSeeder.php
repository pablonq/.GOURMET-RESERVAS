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
        $menu->nombre = 'Menu 1';
        $menu->descripcion = 'Descripcion del menu 1';
        $menu->tipo = 'tipo 1';
        $menu->imagen = 'null';
        $menu->idRestaurante = 1;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 2';
        $menu->descripcion = 'Descripcion del menu 2';
        $menu->tipo = 'tipo 2';
        $menu->imagen = 'null';
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
        $menu->nombre = 'Menu 3';
        $menu->descripcion = 'Descripcion del menu 3';
        $menu->tipo = 'tipo 3';
        $menu->imagen = 'null';
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
        $menu->nombre = 'Menu 5';
        $menu->descripcion = 'Descripcion del menu 5';
        $menu->tipo = 'tipo 5';
        $menu->imagen = 'null';
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
