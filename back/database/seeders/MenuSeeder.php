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
        $menu->nombre = 'Menu 1';
        $menu->descripcion = 'Descripcion del menu 1';
        $menu->tipo = 'tipo 1';
        $menu->imagen = 'null';
        $menu->idRestaurante = 3;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 2';
        $menu->descripcion = 'Descripcion del menu 2';
        $menu->tipo = 'tipo 2';
        $menu->imagen = 'null';
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
