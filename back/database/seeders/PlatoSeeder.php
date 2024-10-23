<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Plato;

class PlatoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plato = new Plato();
        $plato->nombrePlato = 'pizza Napolitana';
        $plato->descripcion = 'Nuestra clásica pizza con salsa de tomate, mozzarella fresca y albahaca.';
        $plato->precio = 12000;
        $plato->informacionNutricional = 'calorias 300';
        $plato->tag = 'tag 1';
        $plato->categoria = 'pizzas';
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fce89eeaf-9354-4137-8750-d91620aa30ec?alt=media&token=1c32f72d-829f-44ef-aa3d-9bb7298d0088';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Desayuno Completo';
        $plato->descripcion = 'Huevos revueltos, tocino, wafles, café y jugo de naranja.';
        $plato->precio = 9000;
        $plato->informacionNutricional = 'Calorías: 550';
        $plato->tag = 'tag 2';
        $plato->categoria = 'Desayuno';
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ff3dafc52-f892-47c3-a3de-2dfa2c674640?alt=media&token=8b96a38b-804b-4cca-8798-1d04157168d4';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Bife de Chorizo';
        $plato->descripcion = 'Chorizo	Jugoso bife de chorizo a la parrilla, acompañado de papas fritas y ensalada.';
        $plato->precio = 20000;
        $plato->informacionNutricional = 'Calorías: 450';
        $plato->tag = 'tag 3';
        $plato->categoria = 'Carnes';
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F825bc9e6-178f-4142-b4ef-3667ca2b012e?alt=media&token=f38386a5-e14c-4d5a-b3d4-e541e9f58ad3';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 1';
        $plato->descripcion = 'Descripción 1';
        $plato->precio = 10;
        $plato->informacionNutricional = 'Informacion nutricional 1';
        $plato->tag = 'tag 1';
        $plato->categoria = 'Categoria 1';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 2';
        $plato->descripcion = 'Descripción 2';
        $plato->precio = 1200;
        $plato->informacionNutricional = 'Informacion nutricional 2';
        $plato->tag = 'tag 2';
        $plato->categoria = 'Categoria 2';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 3';
        $plato->descripcion = 'Descripción 3';
        $plato->precio = 100;
        $plato->informacionNutricional = 'Informacion nutricional 3';
        $plato->tag = 'tag 3';
        $plato->categoria = 'Categoria 3';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 1';
        $plato->descripcion = 'Descripción 1';
        $plato->precio = 10;
        $plato->informacionNutricional = 'Informacion nutricional 1';
        $plato->tag = 'tag 1';
        $plato->categoria = 'Categoria 1';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 2';
        $plato->descripcion = 'Descripción 2';
        $plato->precio = 1200;
        $plato->informacionNutricional = 'Informacion nutricional 2';
        $plato->tag = 'tag 2';
        $plato->categoria = 'Categoria 2';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 3';
        $plato->descripcion = 'Descripción 3';
        $plato->precio = 100;
        $plato->informacionNutricional = 'Informacion nutricional 3';
        $plato->tag = 'tag 3';
        $plato->categoria = 'Categoria 3';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 1';
        $plato->descripcion = 'Descripción 1';
        $plato->precio = 10;
        $plato->informacionNutricional = 'Informacion nutricional 1';
        $plato->tag = 'tag 1';
        $plato->categoria = 'Categoria 1';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 2';
        $plato->descripcion = 'Descripción 2';
        $plato->precio = 1200;
        $plato->informacionNutricional = 'Informacion nutricional 2';
        $plato->tag = 'tag 2';
        $plato->categoria = 'Categoria 2';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 3';
        $plato->descripcion = 'Descripción 3';
        $plato->precio = 100;
        $plato->informacionNutricional = 'Informacion nutricional 3';
        $plato->tag = 'tag 3';
        $plato->categoria = 'Categoria 3';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 1';
        $plato->descripcion = 'Descripción 1';
        $plato->precio = 10;
        $plato->informacionNutricional = 'Informacion nutricional 1';
        $plato->tag = 'tag 1';
        $plato->categoria = 'Categoria 1';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 2';
        $plato->descripcion = 'Descripción 2';
        $plato->precio = 1200;
        $plato->informacionNutricional = 'Informacion nutricional 2';
        $plato->tag = 'tag 2';
        $plato->categoria = 'Categoria 2';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 3';
        $plato->descripcion = 'Descripción 3';
        $plato->precio = 100;
        $plato->informacionNutricional = 'Informacion nutricional 3';
        $plato->tag = 'tag 3';
        $plato->categoria = 'Categoria 3';
        $plato->imagen = null;


        $plato->save();
    }
}
