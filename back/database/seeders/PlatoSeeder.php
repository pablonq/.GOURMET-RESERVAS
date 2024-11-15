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
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpizza-napolitana-770x485.jpeg?alt=media&token=0a905566-5c18-418e-a176-9e269929e4ce';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Desayuno Completo';
        $plato->descripcion = 'Huevos revueltos, tocino, wafles, café y jugo de naranja.';
        $plato->precio = 9000;
        $plato->informacionNutricional = 'Calorías: 550';
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ff3dafc52-f892-47c3-a3de-2dfa2c674640?alt=media&token=8b96a38b-804b-4cca-8798-1d04157168d4';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Bife de Chorizo';
        $plato->descripcion = 'Chorizo	Jugoso bife de chorizo a la parrilla, acompañado de papas fritas y ensalada.';
        $plato->precio = 20000;
        $plato->informacionNutricional = 'Calorías: 450';
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F825bc9e6-178f-4142-b4ef-3667ca2b012e?alt=media&token=f38386a5-e14c-4d5a-b3d4-e541e9f58ad3';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Ensalada De Garbanzos';
        $plato->descripcion = 'garbanzo, latas de garbanzos,pepinos persas, tomates, cebolla morada,taza de aceite de oliva,jugo de limón, Queso Fresco';
        $plato->precio = 4500;
        $plato->informacionNutricional = ' fibra, proteínas y muchos minerales ';
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F06aefbad-8dba-4f5a-9cc5-8e6dc8b2a274?alt=media&token=099040a3-0b4b-4b43-bf16-616866b566bf';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Pollo y guarnicion';
        $plato->descripcion = 'Filete de pollo con verduras';
        $plato->precio = 12000;
        $plato->informacionNutricional = 'cal 850';
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F10e7fd97-d4a4-416a-a2ad-68b56c3fdbe9?alt=media&token=632e4c5d-560b-4381-93e7-f5d643b522b0';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Peras al almibar';
        $plato->descripcion = 'Peras en almíbar de vino blanco y canela';
        $plato->precio = 4500;
        $plato->informacionNutricional = 'cal 450';
        $plato->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ff18d17b8-6b27-472a-b58e-28e116370ccb?alt=media&token=3b81e531-f50d-4d69-a8c2-1ba1cecbbbc9';


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 1';
        $plato->descripcion = 'Descripción 1';
        $plato->precio = 10;
        $plato->informacionNutricional = 'Informacion nutricional 1';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 2';
        $plato->descripcion = 'Descripción 2';
        $plato->precio = 1200;
        $plato->informacionNutricional = 'Informacion nutricional 2';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 3';
        $plato->descripcion = 'Descripción 3';
        $plato->precio = 100;
        $plato->informacionNutricional = 'Informacion nutricional 3';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 1';
        $plato->descripcion = 'Descripción 1';
        $plato->precio = 10;
        $plato->informacionNutricional = 'Informacion nutricional 1';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 2';
        $plato->descripcion = 'Descripción 2';
        $plato->precio = 1200;
        $plato->informacionNutricional = 'Informacion nutricional 2';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 3';
        $plato->descripcion = 'Descripción 3';
        $plato->precio = 100;
        $plato->informacionNutricional = 'Informacion nutricional 3';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 1';
        $plato->descripcion = 'Descripción 1';
        $plato->precio = 10;
        $plato->informacionNutricional = 'Informacion nutricional 1';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 2';
        $plato->descripcion = 'Descripción 2';
        $plato->precio = 1200;
        $plato->informacionNutricional = 'Informacion nutricional 2';
        $plato->imagen = null;


        $plato->save();

        $plato = new Plato();
        $plato->nombrePlato = 'Plato 3';
        $plato->descripcion = 'Descripción 3';
        $plato->precio = 100;
        $plato->informacionNutricional = 'Informacion nutricional 3';
        $plato->imagen = null;


        $plato->save();
    }
}
