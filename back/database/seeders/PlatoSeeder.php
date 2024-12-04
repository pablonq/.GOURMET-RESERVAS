<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Plato;
use DB;

class PlatoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      /** Restaurante 1 Menu 1 */
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

        /** Restaurante 1 Menu 2 */
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
/** Restaurante 1 Menu 3 */
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
/** Restaurante 1 Menu 4 */
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
/** Restaurante 2 Menu 1 */
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

        /** Restaurante 2 Menu 2 */
        $platos = [
          
          [
            'nombrePlato' => 'Plato 1',
            'descripcion' => 'Descripción 1',
            'precio' => 10,
            'informacionNutricional' => 'Informacion nutricional 1',
            'imagen' => null,
            
          ],
          [
            'nombrePlato' => 'Plato 2',
            'descripcion' => 'Descripción 2',
            'precio' => 1200,
            'informacionNutricional' => 'Informacion nutricional 2',
            'imagen' => null,
          ],
          [
            'nombrePlato' => 'Plato 3',
            'descripcion' => 'Descripción 3',
            'precio' => 100,
            'informacionNutricional' => 'Informacion nutricional 3',
            'imagen' => null,
          ],
          /** Restaurante 2 Menu 3 */
          [
            'nombrePlato' => 'Plato 1',
            'descripcion' => 'Descripción 1',
            'precio' => 10,
            'informacionNutricional' => 'Informacion nutricional 1',
            'imagen' => null,
          ],
          [
            'nombrePlato' => 'Plato 2',
            'descripcion' => 'Descripción 2',
            'precio' => 1200,
            'informacionNutricional' => 'Informacion nutricional 2',
            'imagen' => null,
          ],
          [
            'nombrePlato' => 'Plato 3',
            'descripcion' => 'Descripción 3',
            'precio' => 100,
            'informacionNutricional' => 'Informacion nutricional 3',
            'imagen' => null,
          ],
          /** Restaurante 2 Menu 4 */
          [
            'nombrePlato' => 'Plato 1',
            'descripcion' => 'Descripción 1',
            'precio' => 10,
            'informacionNutricional' => 'Informacion nutricional 1',
            'imagen' => null,
          ],
          [
            'nombrePlato' => 'Plato 2',
            'descripcion' => 'Descripción 2',
            'precio' => 1200,
            'informacionNutricional' => 'Informacion nutricional 2',
            'imagen' => null,
          ],
          [
            'nombrePlato' => 'Plato 3',
            'descripcion' => 'Descripción 3',
            'precio' => 100,
            'informacionNutricional' => 'Informacion nutricional 3',
            'imagen' => null,
          ],
          /** Restaurante 3 Menu 1 */
          [
            'nombrePlato' => 'Cerveza Artesanal IPA',
            'descripcion' => 'Una cerveza artesanal con intensos aromas a lúpulo y un toque cítrico.',
            'precio' => 120,
            'informacionNutricional' => '200 kcal por 500 ml',
            'imagen' => null,
        ],
        [
            'nombrePlato' => 'Cerveza Lager Clásica',
            'descripcion' => 'Refrescante y ligera, perfecta para cualquier ocasión.',
            'precio' => 100,
            'informacionNutricional' => '180 kcal por 500 ml',
            'imagen' => null,
        ],
        [
            'nombrePlato' => 'Cerveza Stout Oscura',
            'descripcion' => 'Cerveza oscura con notas de café y chocolate.',
            'precio' => 150,
            'informacionNutricional' => '250 kcal por 500 ml',
            'imagen' => null,
        ],
        /** Restaurante 3 Menu 2 */
        [
          'nombrePlato' => 'Pizza Margherita Gourmet',
          'descripcion' => 'Base de tomate italiano, mozzarella fresca y albahaca orgánica.',
          'precio' => 200,
          'informacionNutricional' => '600 kcal por porción',
          'imagen' => null,
      ],
      [
          'nombrePlato' => 'Pizza de Prosciutto y Rúcula',
          'descripcion' => 'Mozzarella, prosciutto importado, rúcula fresca y aceite de oliva extra virgen.',
          'precio' => 250,
          'informacionNutricional' => '700 kcal por porción',
          'imagen' => null,
      ],
      [
          'nombrePlato' => 'Pizza Cuatro Quesos',
          'descripcion' => 'Mezcla de quesos mozzarella, gorgonzola, parmesano y fontina.',
          'precio' => 280,
          'informacionNutricional' => '800 kcal por porción',
          'imagen' => null,
      ],

      /** Restaurante 3 Menu 3 */
      [
        'nombrePlato' => 'Cheeseburger Clásico',
        'descripcion' => 'Hamburguesa de res con queso cheddar, lechuga, tomate y salsa especial.',
        'precio' => 120,
        'informacionNutricional' => '450 kcal',
        'imagen' => null,
    ],
    [
        'nombrePlato' => 'Sandwich de Pollo BBQ',
        'descripcion' => 'Jugoso pollo a la parrilla con salsa BBQ, cebolla caramelizada y pan tostado.',
        'precio' => 140,
        'informacionNutricional' => '400 kcal',
        'imagen' => null,
    ],
    [
        'nombrePlato' => 'Hot Dog Americano',
        'descripcion' => 'Salchicha ahumada, queso derretido y salsa de mostaza con papas fritas.',
        'precio' => 100,
        'informacionNutricional' => '300 kcal',
        'imagen' => null,
    ],

    /** Restaurante 3 Menu 4 */
    [
      'nombrePlato' => 'Bife de Chorizo',
      'descripcion' => 'Corte premium de res a la parrilla, servido con puré de papas y ensalada.',
      'precio' => 350,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Costillas de Cerdo BBQ',
      'descripcion' => 'Costillas glaseadas en salsa BBQ, acompañadas de ensalada coleslaw.',
      'precio' => 320,
      'informacionNutricional' => '900 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Medallones de Lomo',
      'descripcion' => 'Medallones de lomo de res en salsa de champiñones, con puré de papas.',
      'precio' => 400,
      'informacionNutricional' => '750 kcal',
      'imagen' => null,
  ],

    /** Restaurante 4 Menu 1 */
    [
      'nombrePlato' => 'Plato 1',
      'descripcion' => 'Descripción 1',
      'precio' => 10,
      'informacionNutricional' => 'Informacion nutricional 1',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 2',
      'descripcion' => 'Descripción 2',
      'precio' => 1200,
      'informacionNutricional' => 'Informacion nutricional 2',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 3',
      'descripcion' => 'Descripción 3',
      'precio' => 100,
      'informacionNutricional' => 'Informacion nutricional 3',
      'imagen' => null,
    ],
    /** Restaurante 4 Menu 2  */
    [
      'nombrePlato' => 'Huevos Rancheros',
      'descripcion' => 'Huevos fritos sobre tortillas de maíz con salsa ranchera, frijoles y queso fresco.',
      'precio' => 80,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pancakes con Miel',
      'descripcion' => 'Torre de pancakes esponjosos acompañados de miel de maple y fruta fresca.',
      'precio' => 90,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tostadas con Aguacate',
      'descripcion' => 'Pan tostado con aguacate cremoso, semillas de chía y un toque de limón.',
      'precio' => 70,
      'informacionNutricional' => '250 kcal',
      'imagen' => null,
  ],
    /** Restaurante 4 Menu 3  */
    [
      'nombrePlato' => 'Plato 1',
      'descripcion' => 'Descripción 1',
      'precio' => 10,
      'informacionNutricional' => 'Informacion nutricional 1',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 2',
      'descripcion' => 'Descripción 2',
      'precio' => 1200,
      'informacionNutricional' => 'Informacion nutricional 2',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 3',
      'descripcion' => 'Descripción 3',
      'precio' => 100,
      'informacionNutricional' => 'Informacion nutricional 3',
      'imagen' => null,
    ],
    /** Restaurante 4 Menu 4  */
    [
      'nombrePlato' => 'Plato 1',
      'descripcion' => 'Descripción 1',
      'precio' => 10,
      'informacionNutricional' => 'Informacion nutricional 1',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 2',
      'descripcion' => 'Descripción 2',
      'precio' => 1200,
      'informacionNutricional' => 'Informacion nutricional 2',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 3',
      'descripcion' => 'Descripción 3',
      'precio' => 100,
      'informacionNutricional' => 'Informacion nutricional 3',
      'imagen' => null,
    ],
    /** Restaurante 5 Menu 1  */
    [
      'nombrePlato' => 'Bife de Chorizo',
      'descripcion' => 'Corte premium de res a la parrilla, servido con puré de papas y ensalada.',
      'precio' => 350,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Costillas de Cerdo BBQ',
      'descripcion' => 'Costillas glaseadas en salsa BBQ, acompañadas de ensalada coleslaw.',
      'precio' => 320,
      'informacionNutricional' => '900 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Medallones de Lomo',
      'descripcion' => 'Medallones de lomo de res en salsa de champiñones, con puré de papas.',
      'precio' => 400,
      'informacionNutricional' => '750 kcal',
      'imagen' => null,
  ],
    /** Restaurante 5 Menu 2  */
    [
      'nombrePlato' => 'Plato 1',
      'descripcion' => 'Descripción 1',
      'precio' => 10,
      'informacionNutricional' => 'Informacion nutricional 1',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 2',
      'descripcion' => 'Descripción 2',
      'precio' => 1200,
      'informacionNutricional' => 'Informacion nutricional 2',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 3',
      'descripcion' => 'Descripción 3',
      'precio' => 100,
      'informacionNutricional' => 'Informacion nutricional 3',
      'imagen' => null,
    ],
    /** Restaurante 5 Menu 3  */
    [
      'nombrePlato' => 'Plato 1',
      'descripcion' => 'Descripción 1',
      'precio' => 10,
      'informacionNutricional' => 'Informacion nutricional 1',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 2',
      'descripcion' => 'Descripción 2',
      'precio' => 1200,
      'informacionNutricional' => 'Informacion nutricional 2',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 3',
      'descripcion' => 'Descripción 3',
      'precio' => 100,
      'informacionNutricional' => 'Informacion nutricional 3',
      'imagen' => null,
    ],
    /** Restaurante 5 Menu 4  */
    [
      'nombrePlato' => 'Plato 1',
      'descripcion' => 'Descripción 1',
      'precio' => 10,
      'informacionNutricional' => 'Informacion nutricional 1',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 2',
      'descripcion' => 'Descripción 2',
      'precio' => 1200,
      'informacionNutricional' => 'Informacion nutricional 2',
      'imagen' => null,
    ],
    [
      'nombrePlato' => 'Plato 3',
      'descripcion' => 'Descripción 3',
      'precio' => 100,
      'informacionNutricional' => 'Informacion nutricional 3',
      'imagen' => null,
    ],
    /** Restaurante 6 Menu 1 */
    [
      'nombrePlato' => 'Huevos Rancheros',
      'descripcion' => 'Huevos fritos sobre tortillas de maíz con salsa ranchera, frijoles y queso fresco.',
      'precio' => 80,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pancakes con Miel',
      'descripcion' => 'Torre de pancakes esponjosos acompañados de miel de maple y fruta fresca.',
      'precio' => 90,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tostadas con Aguacate',
      'descripcion' => 'Pan tostado con aguacate cremoso, semillas de chía y un toque de limón.',
      'precio' => 70,
      'informacionNutricional' => '250 kcal',
      'imagen' => null,
  ],
    /** Restaurante 6 Menu 2  */
    [
      'nombrePlato' => 'Pollo a la Parrilla',
      'descripcion' => 'Pechuga de pollo a la parrilla acompañada de vegetales salteados y arroz.',
      'precio' => 150,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pasta Alfredo',
      'descripcion' => 'Pasta con cremosa salsa Alfredo y queso parmesano.',
      'precio' => 140,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Filete de Pescado',
      'descripcion' => 'Filete de pescado al limón con puré de papas y ensalada.',
      'precio' => 160,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
    /** Restaurante 6 Menu 3  */
    [
      'nombrePlato' => 'Risotto de Champiñones',
      'descripcion' => 'Risotto cremoso con champiñones frescos y un toque de trufa.',
      'precio' => 180,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Salmón a la Mantequilla',
      'descripcion' => 'Filete de salmón en mantequilla de hierbas con espárragos y quinoa.',
      'precio' => 250,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Bistec con Salsa de Vino',
      'descripcion' => 'Bistec jugoso acompañado de salsa de vino tinto, papas al romero y verduras asadas.',
      'precio' => 300,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
    /** Restaurante 6 Menu 4  */
    [
      'nombrePlato' => 'Ensalada de Quinoa y Aguacate',
      'descripcion' => 'Quinoa cocida con aguacate fresco, espinacas, tomate cherry y aderezo de limón.',
      'precio' => 120,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Bowl de Vegetales Asados',
      'descripcion' => 'Mix de vegetales asados como zanahoria, calabacín y berenjena, servido con hummus.',
      'precio' => 110,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hamburguesa de Garbanzos',
      'descripcion' => 'Hamburguesa vegana con garbanzos, lechuga, tomate y pan integral.',
      'precio' => 130,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
    /** Restaurante 6 Menu 5 */
    [
      'nombrePlato' => 'Mini Hamburguesa con Papas',
      'descripcion' => 'Hamburguesa de carne con queso y papas fritas, tamaño especial para niños.',
      'precio' => 90,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tiras de Pollo Empanizadas',
      'descripcion' => 'Tiras de pollo empanizado con ketchup y ensalada de zanahoria.',
      'precio' => 85,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Macarrones con Queso',
      'descripcion' => 'Pasta corta con salsa cremosa de queso cheddar.',
      'precio' => 80,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
    /** Restaurante 6 Menu 6 */
    [
      'nombrePlato' => 'Paella Española',
      'descripcion' => 'Arroz tradicional con mariscos, pollo y verduras, al estilo español.',
      'precio' => 180,
      'informacionNutricional' => '600 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Sushi Variado',
      'descripcion' => 'Selección de rolls de sushi, incluyendo makis y nigiris.',
      'precio' => 200,
      'informacionNutricional' => '300 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pasta Carbonara Italiana',
      'descripcion' => 'Espaguetis con salsa cremosa de huevo, queso parmesano y panceta.',
      'precio' => 150,
      'informacionNutricional' => '550 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 7 Menu 1 */
    [
      'nombrePlato' => 'Pizza Margarita',
      'descripcion' => 'Base de tomate, mozzarella fresca y albahaca.',
      'precio' => 150,
      'informacionNutricional' => '400 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Napolitana',
      'descripcion' => 'Base de tomate, anchoas, aceitunas negras y orégano.',
      'precio' => 160,
      'informacionNutricional' => '450 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Pepperoni',
      'descripcion' => 'Mozzarella derretida, rodajas de pepperoni y un toque de orégano.',
      'precio' => 170,
      'informacionNutricional' => '500 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 7 Menu 2  */
    [
      'nombrePlato' => 'Pizza Americana',
      'descripcion' => 'Base de tomate, mozzarella, pepperoni y maíz dulce.',
      'precio' => 180,
      'informacionNutricional' => '550 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Hawaiana',
      'descripcion' => 'Base de tomate, mozzarella, jamón y piña.',
      'precio' => 170,
      'informacionNutricional' => '500 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Mexicana',
      'descripcion' => 'Mozzarella, jalapeños, chorizo y frijoles.',
      'precio' => 190,
      'informacionNutricional' => '600 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 7 Menu 3  */
    [
      'nombrePlato' => 'Pizza Cuatro Quesos',
      'descripcion' => 'Mozzarella, parmesano, gorgonzola y fontina.',
      'precio' => 200,
      'informacionNutricional' => '650 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Tres Quesos',
      'descripcion' => 'Mozzarella, cheddar y queso azul.',
      'precio' => 180,
      'informacionNutricional' => '600 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza de Queso Provolone',
      'descripcion' => 'Base de tomate, queso provolone y mozzarella.',
      'precio' => 190,
      'informacionNutricional' => '620 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 7 Menu 4  */
    [
      'nombrePlato' => 'Pizza del Chef',
      'descripcion' => 'Mozzarella, prosciutto, rúcula y aceite de trufa.',
      'precio' => 220,
      'informacionNutricional' => '700 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Especial de la Casa',
      'descripcion' => 'Base de tomate, mozzarella, jamón serrano, aceitunas y huevo.',
      'precio' => 210,
      'informacionNutricional' => '650 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Gourmet de la Casa',
      'descripcion' => 'Base blanca con queso brie, pera caramelizada y nueces.',
      'precio' => 240,
      'informacionNutricional' => '750 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 7 Menu 5 */
    [
      'nombrePlato' => 'Pizza de Verduras Asadas',
      'descripcion' => 'Base de tomate, mozzarella, calabacín, berenjena y pimientos asados.',
      'precio' => 170,
      'informacionNutricional' => '450 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza de Espinaca y Champiñones',
      'descripcion' => 'Base de tomate, mozzarella, espinacas frescas y champiñones.',
      'precio' => 160,
      'informacionNutricional' => '400 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Margarita Vegana',
      'descripcion' => 'Base de tomate, queso vegano y albahaca.',
      'precio' => 180,
      'informacionNutricional' => '380 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 7 Menu 6 */
    [
      'nombrePlato' => 'Pizza de Pollo y Tocino',
      'descripcion' => 'Mozzarella, pollo desmenuzado, tocino crujiente y salsa BBQ.',
      'precio' => 200,
      'informacionNutricional' => '700 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza de Carne Asada',
      'descripcion' => 'Mozzarella, tiras de carne asada, pimientos y cebolla caramelizada.',
      'precio' => 220,
      'informacionNutricional' => '750 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza de Chorizo y Salami',
      'descripcion' => 'Base de tomate, mozzarella, rodajas de chorizo y salami picante.',
      'precio' => 210,
      'informacionNutricional' => '680 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 8 Menu 1 */
    [
      'nombrePlato' => 'Parrillada Mixta',
      'descripcion' => 'Carne de res, pollo y cerdo a la parrilla, acompañada de chorizo y vegetales asados.',
      'precio' => 550,
      'informacionNutricional' => '1200 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Costillar Asado',
      'descripcion' => 'Costillar de cerdo jugoso con salsa BBQ y papas al horno.',
      'precio' => 600,
      'informacionNutricional' => '1500 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Brochetas Familiares',
      'descripcion' => 'Brochetas de carne, pollo y vegetales acompañadas de arroz y salsas.',
      'precio' => 500,
      'informacionNutricional' => '1000 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 8 Menu 2  */
    [
      'nombrePlato' => 'Mini Hamburguesa',
      'descripcion' => 'Hamburguesa pequeña con queso, lechuga y papas fritas.',
      'precio' => 90,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Nuggets de Pollo',
      'descripcion' => 'Nuggets crujientes acompañados de puré de papa y salsa de ketchup.',
      'precio' => 85,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Spaghetti Infantil',
      'descripcion' => 'Spaghetti con salsa de tomate y queso parmesano.',
      'precio' => 80,
      'informacionNutricional' => '380 kcal',
      'imagen' => null,
  ],
    /** Restaurante 8 Menu 3  */
    [
      'nombrePlato' => 'Lasaña Clásica',
      'descripcion' => 'Lasaña de carne con capas de pasta, bechamel y queso.',
      'precio' => 150,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pasta Alfredo y Ensalada César',
      'descripcion' => 'Fettuccine Alfredo acompañado de ensalada César.',
      'precio' => 160,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Espagueti Boloñesa con Ensalada Mixta',
      'descripcion' => 'Espagueti con salsa boloñesa acompañado de una ensalada fresca.',
      'precio' => 140,
      'informacionNutricional' => '750 kcal',
      'imagen' => null,
  ],
    /** Restaurante 8 Menu 4  */
    [
      'nombrePlato' => 'Cheeseburger Familiar',
      'descripcion' => 'Hamburguesa de res con queso cheddar, lechuga y tomate. Incluye papas fritas.',
      'precio' => 180,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hamburguesa BBQ',
      'descripcion' => 'Hamburguesa de res con salsa BBQ, cebolla caramelizada y tocino.',
      'precio' => 200,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hamburguesa Vegetariana',
      'descripcion' => 'Hamburguesa de garbanzos con aguacate, tomate y lechuga.',
      'precio' => 170,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
    /** Restaurante 8 Menu 5 */
    [
      'nombrePlato' => 'Pollo Relleno al Horno',
      'descripcion' => 'Pechuga de pollo rellena de queso y espinacas, con puré de papa.',
      'precio' => 250,
      'informacionNutricional' => '650 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Carne Asada con Verduras',
      'descripcion' => 'Filete de res a la parrilla acompañado de verduras asadas.',
      'precio' => 300,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Salmón Glaseado con Miel y Limón',
      'descripcion' => 'Salmón fresco glaseado con miel y limón, servido con quinoa.',
      'precio' => 280,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
    /** Restaurante 8 Menu 6 */
    [
      'nombrePlato' => 'Pizza Gigante de Pepperoni',
      'descripcion' => 'Base de tomate, mozzarella y rodajas de pepperoni.',
      'precio' => 300,
      'informacionNutricional' => '1500 kcal por pizza',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Gigante de Carnes',
      'descripcion' => 'Base de tomate, mozzarella, chorizo, salami y carne molida.',
      'precio' => 350,
      'informacionNutricional' => '1800 kcal por pizza',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Gigante de Quesos',
      'descripcion' => 'Base de tomate, mozzarella, queso azul, parmesano y cheddar.',
      'precio' => 320,
      'informacionNutricional' => '1700 kcal por pizza',
      'imagen' => null,
  ],
    /** Restaurante 9 Menu 1 */
    [
      'nombrePlato' => 'Tarta de Espinaca y Queso',
      'descripcion' => 'Base de masa crujiente rellena de espinaca salteada y queso mozzarella.',
      'precio' => 12000,
      'informacionNutricional' => '400 kcal por porción',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ftarta1_nobleCampo.png?alt=media&token=671cbf37-9f62-4ba8-aaf1-8d973b12ad74',
  ],
  [
      'nombrePlato' => 'Tarta de Calabaza y Ricota',
      'descripcion' => 'Relleno suave de calabaza con queso ricota y especias.',
      'precio' => 13000,
      'informacionNutricional' => '450 kcal por porción',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ftarta2_nobleCampo.png?alt=media&token=7b87312f-387f-4b3c-ac6a-2bbe66321ea8',
  ],
  [
      'nombrePlato' => 'Tarta de Pollo y Verduras',
      'descripcion' => 'Tarta casera con pollo desmenuzado, zanahoria y cebolla.',
      'precio' => 15000,
      'informacionNutricional' => '500 kcal por porción',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ftarta3_nobleCampo.png?alt=media&token=bd9039bf-8c07-459a-84ba-ec3ead94a460',
  ],
    /** Restaurante 9 Menu 2  */
    [
      'nombrePlato' => 'Fettuccine Alfredo',
      'descripcion' => 'Fettuccine en cremosa salsa Alfredo con queso parmesano.',
      'precio' => 16000,
      'informacionNutricional' => '650 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpastas1_nobleCampo.png?alt=media&token=c01a62af-4795-450e-9da7-b31c183a4c2d',
  ],
  [
      'nombrePlato' => 'Ravioles de Espinaca y Ricota',
      'descripcion' => 'Ravioles caseros rellenos de espinaca y ricota, servidos con salsa de tomate.',
      'precio' => 18000,
      'informacionNutricional' => '600 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpastas2_nobleCampo.png?alt=media&token=c700cb83-b954-4697-a4e1-b1ad6d08ad41',
  ],
  [
      'nombrePlato' => 'Espagueti a la Carbonara',
      'descripcion' => 'Espagueti con salsa de huevo, queso y panceta.',
      'precio' => 15000,
      'informacionNutricional' => '700 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpastas3_nobleCampo.png?alt=media&token=0a10af78-09b9-4a42-a92c-cd597b07ab30',
  ],
    /** Restaurante 9 Menu 3  */
    [
      'nombrePlato' => 'Salmón a la Parrilla',
      'descripcion' => 'Salmón fresco a la parrilla acompañado de espárragos y puré.',
      'precio' => 25000,
      'informacionNutricional' => '500 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpescados1_nobleCampo.png?alt=media&token=c556fc9c-7db1-46f5-8601-6d5b1cb191c1',
  ],
  [
      'nombrePlato' => 'Filete de Merluza al Limón',
      'descripcion' => 'Filete de merluza con limón y hierbas, servido con arroz blanco.',
      'precio' => 22000,
      'informacionNutricional' => '450 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpescados2_nobleCampo.png?alt=media&token=aa024294-8f39-4f94-aa36-8ba5edca8ecb',
  ],
  [
      'nombrePlato' => 'Trucha al Horno',
      'descripcion' => 'Trucha al horno con mantequilla y perejil, acompañada de papas doradas.',
      'precio' => 24000,
      'informacionNutricional' => '550 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpescados3_nobleCampo.png?alt=media&token=a53fb13a-d75b-4857-a8b9-e145b3650906',
  ],
    /** Restaurante 9 Menu 4  */
    [
      'nombrePlato' => 'Bife de Chorizo',
      'descripcion' => 'Corte de carne a la parrilla acompañado de puré de papas.',
      'precio' => 30000,
      'informacionNutricional' => '700 kcal',
      'imagen' =>'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fcarnes1_nobleCampo.png?alt=media&token=f5a4c128-3a1f-4c65-923c-d72f884f260e',
  ],
  [
      'nombrePlato' => 'Costillas de Cerdo BBQ',
      'descripcion' => 'Costillas glaseadas en salsa BBQ con ensalada coleslaw.',
      'precio' => 32000,
      'informacionNutricional' => '900 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fcarnes2_nobleCampo.png?alt=media&token=33e5a76f-e238-4d68-bbca-6dec70f17e13',
  ],
  [
      'nombrePlato' => 'Medallones de Lomo',
      'descripcion' => 'Medallones de lomo con salsa de champiñones, servidos con verduras al vapor.',
      'precio' => 40000,
      'informacionNutricional' => '750 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fcarnes3_nobleCampo.png?alt=media&token=3097f4b7-5c70-4186-8ed3-8d499ab699f5',
  ],
    /** Restaurante 9 Menu 5 */
    [
      'nombrePlato' => 'Tiramisú',
      'descripcion' => 'Postre italiano con capas de mascarpone, café y bizcocho.',
      'precio' => 9000,
      'informacionNutricional' => '300 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpostre1_nobleCampo.png?alt=media&token=56fc5ac9-9001-4119-b578-5c8b353f466b',
  ],
  [
      'nombrePlato' => 'Flan Casero',
      'descripcion' => 'Flan de huevo con caramelo y un toque de vainilla.',
      'precio' => 8000,
      'informacionNutricional' => '250 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpostre2_nobleCampo.png?alt=media&token=07a956ed-07d9-48bb-97cb-ada5bc1b135d',
  ],
  [
      'nombrePlato' => 'Brownie con Helado',
      'descripcion' => 'Brownie de chocolate caliente acompañado de helado de vainilla.',
      'precio' => 10000,
      'informacionNutricional' => '450 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpostre3_nobleCampo.png?alt=media&token=121f722d-3c90-4cc8-b454-57c880110f06',
  ],
    /** Restaurante 9 Menu 6 */
    [
      'nombrePlato' => 'Camarones al Ajillo',
      'descripcion' => 'Camarones salteados en mantequilla, ajo y perejil, servidos con pan.',
      'precio' => 18000,
      'informacionNutricional' => '400 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fmariscos1_nobleCampo.png?alt=media&token=bbbf9680-ecf6-44e7-9f5c-da000c254489',
  ],
  [
      'nombrePlato' => 'Paella de Mariscos',
      'descripcion' => 'Arroz tradicional con camarones, mejillones y calamares.',
      'precio' => 30000,
      'informacionNutricional' => '600 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fmariscos2_nobleCampo.png?alt=media&token=fd890b2a-2c52-45f2-8a3a-8676b8179973',
  ],
  [
      'nombrePlato' => 'Ceviche Mixto',
      'descripcion' => 'Ceviche fresco con pescado, camarones y pulpo, acompañado de chips de maíz.',
      'precio' => 20000,
      'informacionNutricional' => '350 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fmariscos3_nobleCampo.png?alt=media&token=8e72095b-b2c8-4223-abb9-4bda09841104',
  ],
    /** Restaurante 10 Menu 1 */
    [
      'nombrePlato' => 'Camarones al Ajillo',
      'descripcion' => 'Camarones salteados en mantequilla, ajo y perejil, servidos con pan.',
      'precio' => 180,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Paella de Mariscos',
      'descripcion' => 'Arroz tradicional con camarones, mejillones y calamares.',
      'precio' => 300,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Ceviche Mixto',
      'descripcion' => 'Ceviche fresco con pescado, camarones y pulpo, acompañado de chips de maíz.',
      'precio' => 200,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
    /** Restaurante 10 Menu 2  */
    [
      'nombrePlato' => 'Ensalada de Quinoa y Aguacate',
      'descripcion' => 'Quinoa cocida con aguacate fresco, espinacas, tomate cherry y aderezo de limón.',
      'precio' => 120,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Bowl de Vegetales Asados',
      'descripcion' => 'Mix de vegetales asados como zanahoria, calabacín y berenjena, servido con hummus.',
      'precio' => 110,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hamburguesa de Garbanzos',
      'descripcion' => 'Hamburguesa vegana con garbanzos, lechuga, tomate y pan integral.',
      'precio' => 130,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
    /** Restaurante 10 Menu 3  */
    [
      'nombrePlato' => 'Ravioles de Trufa Negra',
      'descripcion' => 'Ravioles caseros rellenos de ricota y trufa negra con salsa cremosa de parmesano.',
      'precio' => 320,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Risotto al Azafrán',
      'descripcion' => 'Risotto cremoso infusionado con azafrán y terminado con queso pecorino.',
      'precio' => 300,
      'informacionNutricional' => '650 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Filetto al Marsala',
      'descripcion' => 'Medallones de ternera en salsa de vino Marsala, acompañados de polenta cremosa.',
      'precio' => 350,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
    /** Restaurante 10 Menu 4  */
    [
      'nombrePlato' => 'Ramen de Cerdo Tonkotsu',
      'descripcion' => 'Caldo cremoso con fideos, chashu de cerdo, huevo marinado y alga nori.',
      'precio' => 250,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Sushi Sashimi Deluxe',
      'descripcion' => 'Selección premium de sashimi de salmón, atún y hamachi.',
      'precio' => 280,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pad Thai de Camarones',
      'descripcion' => 'Fideos de arroz salteados con camarones, tofu, cacahuates y salsa de tamarindo.',
      'precio' => 260,
      'informacionNutricional' => '550 kcal',
      'imagen' => null,
  ],
    /** Restaurante 10 Menu 5 */
    [
      'nombrePlato' => 'Bife de Chorizo',
      'descripcion' => 'Corte de carne a la parrilla acompañado de puré de papas.',
      'precio' => 300,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Costillas de Cerdo BBQ',
      'descripcion' => 'Costillas glaseadas en salsa BBQ con ensalada coleslaw.',
      'precio' => 320,
      'informacionNutricional' => '900 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Medallones de Lomo',
      'descripcion' => 'Medallones de lomo con salsa de champiñones, servidos con verduras al vapor.',
      'precio' => 400,
      'informacionNutricional' => '750 kcal',
      'imagen' => null,
  ],
    /** Restaurante 10 Menu 6 */
    [
      'nombrePlato' => 'Crema de Calabaza y Jengibre',
      'descripcion' => 'Sopa cremosa de calabaza con un toque de jengibre fresco.',
      'precio' => 120,
      'informacionNutricional' => '250 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pavo al Estilo Navideño',
      'descripcion' => 'Pavo horneado con hierbas y servido con puré de batatas.',
      'precio' => 350,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pie de Manzana y Canela',
      'descripcion' => 'Postre clásico de temporada con relleno de manzanas y un toque de canela.',
      'precio' => 150,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
    /** Restaurante 11 Menu 1 */
    [
      'nombrePlato' => 'Pizza Napolitana y 6 Empanadas',
      'descripcion' => 'Pizza clásica napolitana acompañada de 6 empanadas de carne.',
      'precio' => 300,
      'informacionNutricional' => '1000 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Cuatro Quesos y 6 Empanadas de Pollo',
      'descripcion' => 'Pizza de cuatro quesos acompañada de 6 empanadas rellenas de pollo.',
      'precio' => 320,
      'informacionNutricional' => '1100 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Vegetariana y 6 Empanadas de Espinaca',
      'descripcion' => 'Pizza con vegetales frescos y 6 empanadas rellenas de espinaca.',
      'precio' => 290,
      'informacionNutricional' => '950 kcal',
      'imagen' => null,
  ],
    /** Restaurante 11 Menu 2  */
    [
      'nombrePlato' => 'Cheeseburger Familiar',
      'descripcion' => 'Hamburguesa de res con queso cheddar, lechuga y tomate. Incluye papas fritas.',
      'precio' => 180,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hamburguesa BBQ',
      'descripcion' => 'Hamburguesa de res con salsa BBQ, cebolla caramelizada y tocino.',
      'precio' => 200,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hamburguesa Vegetariana',
      'descripcion' => 'Hamburguesa de garbanzos con aguacate, tomate y lechuga.',
      'precio' => 170,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
    /** Restaurante 11 Menu 3  */
    [
      'nombrePlato' => 'Empanada de Carne Clásica',
      'descripcion' => 'Rellena de carne molida, cebolla y especias.',
      'precio' => 40,
      'informacionNutricional' => '200 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Empanada Caprese',
      'descripcion' => 'Rellena de mozzarella, tomate y albahaca.',
      'precio' => 45,
      'informacionNutricional' => '220 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Empanada de Pollo al Curry',
      'descripcion' => 'Rellena de pollo en salsa de curry suave.',
      'precio' => 50,
      'informacionNutricional' => '250 kcal',
      'imagen' => null,
  ],
    /** Restaurante 11 Menu 4  */
    [
      'nombrePlato' => 'Combo Cheeseburger y Papas',
      'descripcion' => 'Hamburguesa con queso cheddar, acompañada de papas fritas.',
      'precio' => 220,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo BBQ Burger y Aros de Cebolla',
      'descripcion' => 'Hamburguesa con salsa BBQ, tocino y aros de cebolla crujientes.',
      'precio' => 250,
      'informacionNutricional' => '850 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo Veggie Burger y Ensalada',
      'descripcion' => 'Hamburguesa vegetariana con aguacate, tomate y lechuga, acompañada de ensalada fresca.',
      'precio' => 230,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
    /** Restaurante 11 Menu 5 */
    [
      'nombrePlato' => 'Combo Todo Incluido 1',
      'descripcion' => 'Entrante (ensalada César), plato principal (pollo a la parrilla) y postre (flan casero).',
      'precio' => 350,
      'informacionNutricional' => '1200 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo Todo Incluido 2',
      'descripcion' => 'Entrante (sopa de calabaza), plato principal (salmón al horno) y postre (brownie con helado).',
      'precio' => 400,
      'informacionNutricional' => '1300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo Todo Incluido 3',
      'descripcion' => 'Entrante (brochetas de vegetales), plato principal (bife de chorizo) y postre (tiramisu).',
      'precio' => 450,
      'informacionNutricional' => '1400 kcal',
      'imagen' => null,
  ],
    /** Restaurante 11 Menu 6 */
    [
      'nombrePlato' => 'Asado Familiar',
      'descripcion' => 'Costillas, chorizo, morcilla y vegetales asados para compartir.',
      'precio' => 600,
      'informacionNutricional' => '1500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Cordero al Horno',
      'descripcion' => 'Pierna de cordero horneada con papas al romero.',
      'precio' => 700,
      'informacionNutricional' => '1600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Paella de Domingo',
      'descripcion' => 'Paella mixta con mariscos, pollo y verduras.',
      'precio' => 550,
      'informacionNutricional' => '1200 kcal',
      'imagen' => null,
  ],
    /** Restaurante 12 Menu 1 */
    [
      'nombrePlato' => 'Combo Cheeseburger Clásica',
      'descripcion' => 'Hamburguesa clásica con queso, papas fritas y bebida.',
      'precio' => 220,
      'informacionNutricional' => '900 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo Pizza Clásica',
      'descripcion' => 'Pizza margarita individual con bebida.',
      'precio' => 250,
      'informacionNutricional' => '950 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo Pollo Clásico',
      'descripcion' => 'Pechuga de pollo a la parrilla con ensalada y bebida.',
      'precio' => 230,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
    /** Restaurante 12 Menu 2  */
    [
      'nombrePlato' => 'Hot Dog Clásico con Papas',
      'descripcion' => 'Hot dog con mostaza, ketchup y papas fritas.',
      'precio' => 120,
      'informacionNutricional' => '650 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hot Dog BBQ con Papas',
      'descripcion' => 'Hot dog con salsa BBQ, cebolla caramelizada y papas fritas.',
      'precio' => 140,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hot Dog Mexicano con Papas',
      'descripcion' => 'Hot dog con jalapeños, queso cheddar y papas fritas.',
      'precio' => 150,
      'informacionNutricional' => '750 kcal',
      'imagen' => null,
  ],
    /** Restaurante 12 Menu 3  */
    [
      'nombrePlato' => 'Pizza Margarita',
      'descripcion' => 'Base de tomate, mozzarella fresca y albahaca.',
      'precio' => 150,
      'informacionNutricional' => '400 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Napolitana',
      'descripcion' => 'Base de tomate, anchoas, aceitunas negras y orégano.',
      'precio' => 160,
      'informacionNutricional' => '450 kcal por porción',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Pepperoni',
      'descripcion' => 'Mozzarella derretida, rodajas de pepperoni y un toque de orégano.',
      'precio' => 170,
      'informacionNutricional' => '500 kcal por porción',
      'imagen' => null,
  ],
    /** Restaurante 12 Menu 4  */
    [
      'nombrePlato' => 'Combo Nuggets 10 Piezas',
      'descripcion' => '10 nuggets de pollo crujientes con papas fritas y bebida.',
      'precio' => 200,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo Nuggets 15 Piezas',
      'descripcion' => '15 nuggets de pollo crujientes con papas fritas y bebida.',
      'precio' => 250,
      'informacionNutricional' => '1000 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo Nuggets 20 Piezas',
      'descripcion' => '20 nuggets de pollo crujientes con papas fritas y bebida.',
      'precio' => 300,
      'informacionNutricional' => '1200 kcal',
      'imagen' => null,
  ],
    /** Restaurante 12 Menu 5 */
    [
      'nombrePlato' => 'Pollo Frito Clásico',
      'descripcion' => 'Dos piezas de pollo frito con papas fritas.',
      'precio' => 180,
      'informacionNutricional' => '900 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pollo Frito Picante',
      'descripcion' => 'Dos piezas de pollo frito picante con ensalada coleslaw.',
      'precio' => 200,
      'informacionNutricional' => '950 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pollo Frito Familiar',
      'descripcion' => 'Seis piezas de pollo frito con papas fritas y ensalada.',
      'precio' => 400,
      'informacionNutricional' => '1800 kcal',
      'imagen' => null,
  ],
    /** Restaurante 12 Menu 6 */
    [
      'nombrePlato' => 'Combo Cheeseburger y Papas',
      'descripcion' => 'Hamburguesa con queso cheddar, acompañada de papas fritas.',
      'precio' => 220,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo BBQ Burger y Aros de Cebolla',
      'descripcion' => 'Hamburguesa con salsa BBQ, tocino y aros de cebolla crujientes.',
      'precio' => 250,
      'informacionNutricional' => '850 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Combo Veggie Burger y Ensalada',
      'descripcion' => 'Hamburguesa vegetariana con aguacate, tomate y lechuga, acompañada de ensalada fresca.',
      'precio' => 230,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
    /** Restaurante 13 Menu 1 */
    [
      'nombrePlato' => 'Tacos de Pato Pekín',
      'descripcion' => 'Tortillas de arroz rellenas de pato laqueado, pepino y salsa hoisin.',
      'precio' => 25000,
      'informacionNutricional' => '600 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FfusionAsiatica1_casaJuez.png?alt=media&token=9c1898e1-6c17-4a5a-a54e-10901dcc13f1',
  ],
  [
      'nombrePlato' => 'Bao de Cerdo BBQ',
      'descripcion' => 'Panecillos al vapor rellenos de cerdo glaseado con salsa de barbacoa asiática.',
      'precio' => 22000,
      'informacionNutricional' => '550 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FfusionAsiatica2_casaJuez.png?alt=media&token=4ba51cee-ea9a-4ae5-8ddd-7a487b49f00e',
  ],
  [
      'nombrePlato' => 'Ensalada de Fideos de Arroz',
      'descripcion' => 'Fideos de arroz con edamame, zanahorias y aderezo de jengibre y sésamo.',
      'precio' => 18000,
      'informacionNutricional' => '400 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FfusionAsiatica3_casaJuez.png?alt=media&token=a4891e14-6d9a-4d88-acaa-1f49fb162d2b',
  ],
    /** Restaurante 13 Menu 2  */
        [
    'nombrePlato' => 'Hummus y Pan Pita',
    'descripcion' => 'Hummus cremoso servido con pan pita fresco y aceite de oliva.',
    'precio' => 12000,
    'informacionNutricional' => '300 kcal',
    'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FMediterr%C3%A1neoOriental1_casaJuez.png?alt=media&token=b1bbb57a-cad6-4687-8b8d-1206ff5c4237',
],
[
    'nombrePlato' => 'Cordero al Estilo Marroquí',
    'descripcion' => 'Cordero especiado servido con cuscús y vegetales asados.',
    'precio' => 28000,
    'informacionNutricional' => '700 kcal',
    'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FMediterr%C3%A1neoOriental2_casaJuez.png?alt=media&token=560841a6-be02-4567-b2b9-4214bb3443e2',
],
[
    'nombrePlato' => 'Ensalada Tabulé',
    'descripcion' => 'Ensalada fresca de trigo bulgur, tomate, perejil y limón.',
    'precio' => 15000,
    'informacionNutricional' => '350 kcal',
    'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FMediterr%C3%A1neoOriental3_casaJuez.png?alt=media&token=3d7d1d14-843c-49c0-b553-f3d3b6e0342d',
],
    /** Restaurante 13 Menu 3  */
    [
      'nombrePlato' => 'Rollitos de Sushi con Ceviche',
      'descripcion' => 'Rollitos de sushi rellenos de ceviche peruano de pescado y aguacate.',
      'precio' => 25000,
      'informacionNutricional' => '400 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FlatinoAsia1_casaJuez.png?alt=media&token=2e355983-d199-40ff-8c72-d968ae8ab792',
  ],
  [
      'nombrePlato' => 'Arroz Chaufa con Carne',
      'descripcion' => 'Arroz salteado al estilo peruano con carne, huevo y especias chinas.',
      'precio' => 22000,
      'informacionNutricional' => '650 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FlatinoAsia2_casaJuez.png?alt=media&token=8654aca6-a8ab-4504-8897-c0b4f3c34c8d',
  ],
  [
      'nombrePlato' => 'Tiradito Nikkei',
      'descripcion' => 'Láminas de pescado fresco con salsa de soja, ají amarillo y sésamo.',
      'precio' => 24000,
      'informacionNutricional' => '350 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FlatinoAsia3_casaJuez.png?alt=media&token=d7ee8035-4734-44ea-87c8-5ab026077cca',
  ],
    /** Restaurante 13 Menu 4  */
    [
      'nombrePlato' => 'Burrito Teriyaki',
      'descripcion' => 'Tortilla rellena de pollo teriyaki, arroz jazmín y vegetales.',
      'precio' => 20000,
      'informacionNutricional' => '600 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FtexMexOriental1_casaJuez.png?alt=media&token=9d7c57d3-e717-4af1-a367-d0d04a64460f',
  ],
  [
      'nombrePlato' => 'Tacos de Cerdo a la Coreana',
      'descripcion' => 'Tacos con cerdo al estilo coreano, kimchi y salsa picante.',
      'precio' => 23000,
      'informacionNutricional' => '650 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FtexMexOriental2_casaJuez.png?alt=media&token=bbe11936-8f5f-45f4-8595-6a228f06b883',
  ],
  [
      'nombrePlato' => 'Nachos con Salsa Hoisin',
      'descripcion' => 'Nachos crujientes con carne, queso y salsa hoisin.',
      'precio' => 21000,
      'informacionNutricional' => '700 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FtexMexOriental3_casaJuez.png?alt=media&token=ef8b3ee2-b6c3-4e14-8fca-29baf1da1ae7',
  ],
    /** Restaurante 13 Menu 5 */
    [
      'nombrePlato' => 'Pizza de Sushi',
      'descripcion' => 'Base de arroz crujiente cubierta con salmón, aguacate y salsa de soja.',
      'precio' => 26000,
      'informacionNutricional' => '400 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FItalianoJapon%C3%A9s1_casaJuez.png?alt=media&token=7ca260fd-c0c6-4f5b-a57e-7d6c664d441d',
  ],
  [
      'nombrePlato' => 'Risotto de Miso',
      'descripcion' => 'Risotto cremoso infusionado con miso y decorado con setas japonesas.',
      'precio' => 28000,
      'informacionNutricional' => '600 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FItalianoJapon%C3%A9s2_casaJuez.png?alt=media&token=f9fc872c-374f-4d73-8cab-67377457977f',
  ],
  [
      'nombrePlato' => 'Spaghetti con Algas Nori',
      'descripcion' => 'Spaghetti en salsa de soja y jengibre, decorado con algas nori.',
      'precio' => 24000,
      'informacionNutricional' => '550 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FItalianoJapon%C3%A9s3_casaJuez.png?alt=media&token=58ee5a1c-8c67-465b-99c5-a7941948d259',
  ],
    /** Restaurante 13 Menu 6 */
    [
      'nombrePlato' => 'Curry de Pollo con Coco',
      'descripcion' => 'Pollo en curry especiado con leche de coco y acompañado de arroz basmati.',
      'precio' => 23000,
      'informacionNutricional' => '700 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FIndiaCaribe%C3%B1o1_casaJuez.png?alt=media&token=120b1a49-6e65-4041-aab3-0a9132327763',
  ],
  [
      'nombrePlato' => 'Plátanos Fritos con Masala',
      'descripcion' => 'Plátanos dulces fritos con un toque de especias Masala.',
      'precio' => 15000,
      'informacionNutricional' => '450 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FIndiaCaribe%C3%B1o2_casaJuez.png?alt=media&token=bcc18caf-7510-49c6-a23d-4d6778515f90',
  ],
  [
      'nombrePlato' => 'Camarones al Curry Jerk',
      'descripcion' => 'Camarones al estilo Jerk con curry y arroz de coco.',
      'precio' => 27000,
      'informacionNutricional' => '600 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FIndiaCaribe%C3%B1o3_casaJuez.png?alt=media&token=af6c57e9-7c6e-4ee4-9ad6-b840f8239fcb',
  ],
    /** Restaurante 14 Menu 1 */
    [
      'nombrePlato' => 'Alitas BBQ',
      'descripcion' => 'Alitas de pollo marinadas en salsa BBQ, acompañadas de bastones de apio.',
      'precio' => 15000,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Nachos con Queso',
      'descripcion' => 'Totopos crujientes con queso derretido, jalapeños y salsa pico de gallo.',
      'precio' => 130,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tabla de Quesos y Embutidos',
      'descripcion' => 'Selección de quesos curados, jamón serrano y chorizo.',
      'precio' => 180,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
    /** Restaurante 14 Menu 2  */
    [
      'nombrePlato' => 'Hamburguesa Clásica',
      'descripcion' => 'Hamburguesa de res con queso cheddar, lechuga, tomate y cebolla.',
      'precio' => 200,
      'informacionNutricional' => '850 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hot Dog Tradicional',
      'descripcion' => 'Hot dog con salchicha alemana, mostaza, ketchup y papas fritas.',
      'precio' => 150,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Papas Fritas con Bacon y Queso',
      'descripcion' => 'Papas fritas cubiertas con queso cheddar derretido y trozos de bacon.',
      'precio' => 170,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
    /** Restaurante 14 Menu 3  */
    [
      'nombrePlato' => 'Tostada de Jamón Ibérico',
      'descripcion' => 'Tostada crujiente con jamón ibérico y un toque de tomate fresco.',
      'precio' => 140,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Croquetas de Bacalao',
      'descripcion' => 'Croquetas de bacalao con alioli casero.',
      'precio' => 120,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pinchos de Tortilla Española',
      'descripcion' => 'Porciones de tortilla española acompañadas de pimientos del padrón.',
      'precio' => 150,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
    /** Restaurante 14 Menu 4  */
    [
      'nombrePlato' => 'Pizza Compartida',
      'descripcion' => 'Pizza tamaño familiar con ingredientes al gusto.',
      'precio' => 350,
      'informacionNutricional' => '1200 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Plato de Nachos Party',
      'descripcion' => 'Nachos con guacamole, queso cheddar, carne molida y jalapeños.',
      'precio' => 300,
      'informacionNutricional' => '1000 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Brochetas de Pollo y Vegetales',
      'descripcion' => 'Brochetas de pollo marinadas acompañadas de salsa de yogur.',
      'precio' => 280,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
    /** Restaurante 14 Menu 5 */
    [
      'nombrePlato' => 'Martini de Camarones',
      'descripcion' => 'Camarones marinados en salsa cóctel servidos en una copa de martini.',
      'precio' => 200,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Bruschettas Gourmet',
      'descripcion' => 'Bruschettas con tomate, albahaca, queso de cabra y un toque de aceite de oliva.',
      'precio' => 180,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Mini Tacos de Salmón',
      'descripcion' => 'Mini tacos rellenos de salmón ahumado con salsa tártara.',
      'precio' => 220,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
    /** Restaurante 14 Menu 6 */
    [
      'nombrePlato' => 'Rollitos Primavera',
      'descripcion' => 'Rollitos fritos rellenos de vegetales frescos con salsa agridulce.',
      'precio' => 130,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tablita After',
      'descripcion' => 'Tabla con quesos, frutas y frutos secos ideal para compartir.',
      'precio' => 250,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Ceviche de Pescado',
      'descripcion' => 'Ceviche fresco marinado con limón y servido con chips de maíz.',
      'precio' => 200,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
    /** Restaurante 15 Menu 1 */
    [
      'nombrePlato' => 'Bowl de Açaí',
      'descripcion' => 'Açaí cremoso con frutas frescas, granola y semillas de chía.',
      'precio' => 150,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tostadas de Aguacate',
      'descripcion' => 'Pan integral con aguacate, rodajas de tomate y un toque de limón.',
      'precio' => 120,
      'informacionNutricional' => '250 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Smoothie Verde',
      'descripcion' => 'Batido de espinacas, manzana, plátano y jengibre.',
      'precio' => 100,
      'informacionNutricional' => '200 kcal',
      'imagen' => null,
  ],
    /** Restaurante 15 Menu 2  */
    [
      'nombrePlato' => 'Huevos Benedictinos',
      'descripcion' => 'Huevos escalfados sobre muffins ingleses, con salsa holandesa.',
      'precio' => 200,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Panqueques con Miel de Maple',
      'descripcion' => 'Panqueques esponjosos acompañados de miel de maple y frutas.',
      'precio' => 180,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tarta de Espinacas y Queso',
      'descripcion' => 'Tarta salada casera rellena de espinacas y queso ricota.',
      'precio' => 190,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
    /** Restaurante 15 Menu 3  */
    [
      'nombrePlato' => 'Ensalada César con Pollo',
      'descripcion' => 'Ensalada clásica con pechuga de pollo a la parrilla y aderezo César.',
      'precio' => 180,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Sándwich Integral de Pavo',
      'descripcion' => 'Sándwich de pan integral con pavo, espinacas y mostaza.',
      'precio' => 160,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Sopa de Verduras',
      'descripcion' => 'Sopa ligera de verduras frescas y hierbas.',
      'precio' => 140,
      'informacionNutricional' => '200 kcal',
      'imagen' => null,
  ],
    /** Restaurante 15 Menu 4  */
    [
      'nombrePlato' => 'Brownie con Helado',
      'descripcion' => 'Brownie de chocolate tibio acompañado de helado de vainilla.',
      'precio' => 150,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Cheesecake de Frutas',
      'descripcion' => 'Cheesecake cremoso decorado con frutas frescas.',
      'precio' => 140,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Café Latte con Muffin',
      'descripcion' => 'Café latte espumoso acompañado de un muffin de arándanos.',
      'precio' => 130,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
    /** Restaurante 15 Menu 5 */
    [
      'nombrePlato' => 'Scones con Mermelada',
      'descripcion' => 'Scones recién horneados servidos con mermelada y crema.',
      'precio' => 120,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tarta de Limón',
      'descripcion' => 'Tarta de limón con base crujiente y merengue suave.',
      'precio' => 150,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Macarons Variados',
      'descripcion' => 'Selección de macarons de diferentes sabores.',
      'precio' => 180,
      'informacionNutricional' => '200 kcal',
      'imagen' => null,
  ],
    /** Restaurante 15 Menu 6 */
    [
      'nombrePlato' => 'Filete Mignon',
      'descripcion' => 'Filete de res con salsa de vino tinto y papas gratinadas.',
      'precio' => 400,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Risotto de Champiñones',
      'descripcion' => 'Risotto cremoso con setas frescas y queso parmesano.',
      'precio' => 350,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Salmón en Salsa de Eneldo',
      'descripcion' => 'Salmón fresco acompañado de salsa de eneldo y espárragos.',
      'precio' => 370,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
    /** Restaurante 16 Menu 1 */
    [
      'nombrePlato' => 'Hummus Clásico',
      'descripcion' => 'Hummus cremoso de garbanzos con aceite de oliva y pimentón.',
      'precio' => 120,
      'informacionNutricional' => '200 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tabulé Fresco',
      'descripcion' => 'Ensalada de trigo bulgur con tomate, perejil y limón.',
      'precio' => 100,
      'informacionNutricional' => '180 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Baba Ganoush',
      'descripcion' => 'Crema de berenjenas asadas con tahini y ajo.',
      'precio' => 110,
      'informacionNutricional' => '150 kcal',
      'imagen' => null,
  ],
    /** Restaurante 16 Menu 2  */
    [
      'nombrePlato' => 'Shawarma de Pollo',
      'descripcion' => 'Tiras de pollo marinadas con especias árabes, servidas en pan pita.',
      'precio' => 180,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Shawarma de Res',
      'descripcion' => 'Carne de res al estilo shawarma con ensalada y salsa tahini.',
      'precio' => 200,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Shawarma Mixto',
      'descripcion' => 'Combinación de pollo y res con vegetales frescos y salsa de yogur.',
      'precio' => 220,
      'informacionNutricional' => '550 kcal',
      'imagen' => null,
  ],
    /** Restaurante 16 Menu 3  */
    [
      'nombrePlato' => 'Kebab de Cordero',
      'descripcion' => 'Brochetas de cordero marinadas en especias árabes, acompañadas de arroz basmati.',
      'precio' => 250,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Falafel',
      'descripcion' => 'Croquetas de garbanzos fritas con salsa tahini.',
      'precio' => 150,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Arroz con Almendras',
      'descripcion' => 'Arroz basmati con almendras tostadas y un toque de canela.',
      'precio' => 200,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
    /** Restaurante 16 Menu 4  */ 
    [
      'nombrePlato' => 'Mezze de Entradas',
      'descripcion' => 'Hummus, baba ganoush, tabulé y pan pita.',
      'precio' => 300,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Plato Mixto Árabe',
      'descripcion' => 'Falafel, kebab de cordero, arroz con almendras y ensalada.',
      'precio' => 400,
      'informacionNutricional' => '850 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Degustación de Postres Árabes',
      'descripcion' => 'Selección de dulces árabes tradicionales como baklava y maamoul.',
      'precio' => 200,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
    /** Restaurante 16 Menu 5 */
    [
      'nombrePlato' => 'Cordero al Estilo Magrebí',
      'descripcion' => 'Cordero guisado con especias árabes y ciruelas pasas.',
      'precio' => 450,
      'informacionNutricional' => '900 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tajín de Pollo con Limón y Olivas',
      'descripcion' => 'Plato tradicional de pollo cocido lentamente en tajín con limones encurtidos.',
      'precio' => 400,
      'informacionNutricional' => '850 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Lubina al Horno con Especias',
      'descripcion' => 'Pescado lubina cocido al horno con un toque de harissa.',
      'precio' => 480,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
    /** Restaurante 16 Menu 6 */
    [
      'nombrePlato' => 'Baklava Tradicional',
      'descripcion' => 'Hojaldre relleno de frutos secos y bañado en miel.',
      'precio' => 120,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Maamoul de Dátiles',
      'descripcion' => 'Galletas árabes rellenas de dátiles dulces.',
      'precio' => 100,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Basbousa',
      'descripcion' => 'Bizcocho de sémola empapado en almíbar de azahar.',
      'precio' => 110,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
    /** Restaurante 17 Menu 1 */
    [
      'nombrePlato' => 'Pierna de Cordero Asada',
      'descripcion' => 'Pierna de cordero marinada con especias medievales, servida con vegetales al horno.',
      'precio' => 45000,
      'informacionNutricional' => '900 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FMedievalFest%C3%ADndelRey1_1946.png?alt=media&token=e3534563-0039-4194-8c5d-9c43edd8df89',
  ],
  [
      'nombrePlato' => 'Jabalí al Estilo Real',
      'descripcion' => 'Carne de jabalí braseada con hierbas aromáticas y acompañada de pan rústico.',
      'precio' => 50000,
      'informacionNutricional' => '1000 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FMedievalFest%C3%ADndelRey2_1946.png?alt=media&token=413b6c63-caa5-498e-b392-f6fe6a7fadbd',
  ],
  [
      'nombrePlato' => 'Tarta de Manzanas con Miel',
      'descripcion' => 'Postre medieval con manzanas caramelizadas y miel natural.',
      'precio' => 20000,
      'informacionNutricional' => '450 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FMedievalFest%C3%ADndelRey3_1946.png?alt=media&token=7293ef2e-568c-4875-a4a8-afc373c49b7f',
  ],
    /** Restaurante 17 Menu 2  */
    [
      'nombrePlato' => 'Estofado del Tesoro',
      'descripcion' => 'Estofado de mariscos y pescado con un toque de ron.',
      'precio' => 35000,
      'informacionNutricional' => '600 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FPirataBanquetedelCapit%C3%A1n1_1946.png?alt=media&token=cc150990-bb05-4e4b-bde6-0cb8080aaf82',
  ],
  [
      'nombrePlato' => 'Piernas de Pollo del Corsario',
      'descripcion' => 'Piernas de pollo marinadas con especias caribeñas, servidas con arroz con coco.',
      'precio' => 30000,
      'informacionNutricional' => '700 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FPirataBanquetedelCapit%C3%A1n2_1946.png?alt=media&token=122d910c-fc9d-4636-97f9-d9fd1aa55f8f',
  ],
  [
      'nombrePlato' => 'Banana Flameada con Ron',
      'descripcion' => 'Plátano flameado con ron oscuro y acompañado de helado de vainilla.',
      'precio' => 18000,
      'informacionNutricional' => '500 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FPirataBanquetedelCapit%C3%A1n3_1946.png?alt=media&token=fc53b616-c42f-44bd-811f-626b683a4537',
  ],
    /** Restaurante 17 Menu 3  */
    [
      'nombrePlato' => 'Tacos Galácticos',
      'descripcion' => 'Tacos con tortilla azul, carne especiada y salsa luminosa de yogur y menta.',
      'precio' => 25000,
      'informacionNutricional' => '500 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FEspacialComidaIntergal%C3%A1ctica1_1946.png?alt=media&token=1745138d-94b4-4a57-a4ef-27da33abc09d',
  ],
  [
      'nombrePlato' => 'Pasta Nebulosa',
      'descripcion' => 'Pasta teñida de colores galácticos con una salsa cremosa estelar.',
      'precio' => 30000,
      'informacionNutricional' => '700 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FEspacialComidaIntergal%C3%A1ctica2_1946.png?alt=media&token=8f810c0a-866b-45e9-94de-a16522fef856',
  ],
  [
      'nombrePlato' => 'Postre Estrella Fugaz',
      'descripcion' => 'Mousse de chocolate blanco con polvo brillante comestible.',
      'precio' => 18000,
      'informacionNutricional' => '400 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FEspacialComidaIntergal%C3%A1ctica3_1946.png?alt=media&token=da78179f-8a5e-48fa-8ef7-36e0b27e2e79',
  ],
    /** Restaurante 17 Menu 4  */
    [
      'nombrePlato' => 'Ensalada Oscar',
      'descripcion' => 'Ensalada gourmet con mix de verdes, frutas frescas y vinagreta de champagne.',
      'precio' => 22000,
      'informacionNutricional' => '350 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FHollywoodNochedeEstrellas1_1946.png?alt=media&token=4fccedb6-9b47-4ef0-912f-73906860a797',
  ],
  [
      'nombrePlato' => 'Filet Mignon con Salsa de Trufa',
      'descripcion' => 'Filet mignon perfectamente sellado, servido con puré de papas trufado.',
      'precio' => 45000,
      'informacionNutricional' => '800 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FHollywoodNochedeEstrellas2_1946.png?alt=media&token=f8880179-63c6-43b2-b817-2297d97f6b4f',
  ],
  [
      'nombrePlato' => 'Tarta de Oro de Hollywood',
      'descripcion' => 'Tarta de chocolate con una cobertura dorada comestible.',
      'precio' => 25000,
      'informacionNutricional' => '600 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FHollywoodNochedeEstrellas3_1946.png?alt=media&token=e37ee7e2-9b8b-41d6-a40a-9859d3b8ddaa',
  ],
    /** Restaurante 17 Menu 5 */
    [
      'nombrePlato' => 'Koshari Real',
      'descripcion' => 'Plato tradicional egipcio con arroz, lentejas, pasta y salsa de tomate especiada.',
      'precio' => 20000,
      'informacionNutricional' => '500 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FEgipcioBanquetedelFara%C3%B3n1_1946.png?alt=media&token=1b38d4a7-7af5-4722-87a3-98f5ad7c54c1',
  ],
  [
      'nombrePlato' => 'Tajín de Cordero con Dátiles',
      'descripcion' => 'Cordero cocido lentamente con dátiles y especias egipcias.',
      'precio' => 40000,
      'informacionNutricional' => '850 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FEgipcioBanquetedelFara%C3%B3n2_1946.png?alt=media&token=4a4796bf-0931-4b87-bdab-c9379eac5ba9',
  ],
  [
      'nombrePlato' => 'Basbousa del Nilo',
      'descripcion' => 'Bizcocho de sémola con almíbar de miel y almendras.',
      'precio' => 15000,
      'informacionNutricional' => '450 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FEgipcioBanquetedelFara%C3%B3n3_1946.png?alt=media&token=d35fa4d3-001a-42a5-a8c5-3f82ccae2477',
  ],
    /** Restaurante 17 Menu 6 */
    [
      'nombrePlato' => 'Sopa de Bosque Encantado',
      'descripcion' => 'Sopa cremosa de champiñones y hierbas silvestres.',
      'precio' => 18000,
      'informacionNutricional' => '350 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FFantas%C3%ADaBanquete%C3%89lfico1_1946.png?alt=media&token=83c208b1-5d7b-4282-bd34-0586618c09f9',
  ],
  [
      'nombrePlato' => 'Tarta de Bayas del Valle',
      'descripcion' => 'Tarta ligera con relleno de bayas frescas y crema de limón.',
      'precio' => 20000,
      'informacionNutricional' => '400 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FFantas%C3%ADaBanquete%C3%89lfico2_1946.png?alt=media&token=9584cc6a-c2f0-457c-b328-50e528a38b59',
  ],
  [
      'nombrePlato' => 'Pan de Miel Élfico',
      'descripcion' => 'Pan dulce de miel con un toque de canela, ideal para compartir.',
      'precio' => 15000,
      'informacionNutricional' => '300 kcal',
      'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FFantas%C3%ADaBanquete%C3%89lfico3_1946.png?alt=media&token=db6f9d4d-4bdb-493e-910d-c43790e64ba6',
  ],
    /** Restaurante 18 Menu 1 */
    [
      'nombrePlato' => 'Smoothie Verde con CBD',
      'descripcion' => 'Smoothie refrescante de espinacas, kiwi, plátano y un toque de CBD.',
      'precio' => 120,
      'informacionNutricional' => '200 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Ensalada Fresca con Cannabis',
      'descripcion' => 'Mix de lechugas, tomate cherry, zanahorias y aderezo de aceite de cannabis.',
      'precio' => 140,
      'informacionNutricional' => '150 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tostadas de Aguacate',
      'descripcion' => 'Pan integral con aguacate, semillas de chía y un toque de limón.',
      'precio' => 100,
      'informacionNutricional' => '250 kcal',
      'imagen' => null,
  ],
    /** Restaurante 18 Menu 2  */
    [
      'nombrePlato' => 'Risotto de Hongos Infusionado',
      'descripcion' => 'Risotto cremoso de setas con mantequilla infusionada con cannabis.',
      'precio' => 220,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Salmón Grillado con Infusión',
      'descripcion' => 'Filete de salmón a la parrilla con glaseado sutil de cannabis.',
      'precio' => 300,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Mousse de Chocolate con CBD',
      'descripcion' => 'Mousse de chocolate negro con infusión de CBD y frutos secos.',
      'precio' => 150,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
    /** Restaurante 18 Menu 3  */
    [
      'nombrePlato' => 'Huevos Benedictinos Infusionados',
      'descripcion' => 'Huevos escalfados con salsa holandesa infusionada, servidos en pan rústico.',
      'precio' => 180,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pan de Masa Madre',
      'descripcion' => 'Pan de masa madre artesanal, ideal para acompañar.',
      'precio' => 100,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Café Latte con CBD',
      'descripcion' => 'Café con leche cremoso infusionado con CBD para un toque relajante.',
      'precio' => 120,
      'informacionNutricional' => '200 kcal',
      'imagen' => null,
  ],
    /** Restaurante 18 Menu 4  */
    [
      'nombrePlato' => 'Brownie Infusionado con THC',
      'descripcion' => 'Brownie de chocolate con infusión de THC y un toque de avellanas.',
      'precio' => 150,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Galletas de Avena',
      'descripcion' => 'Galletas saludables de avena y pasas con un toque relajante.',
      'precio' => 100,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Té Helado con Limón y Cannabis',
      'descripcion' => 'Refrescante té helado con limón, hierbabuena y aceite de cannabis.',
      'precio' => 120,
      'informacionNutricional' => '150 kcal',
      'imagen' => null,
  ],
    /** Restaurante 18 Menu 5 */
    [
      'nombrePlato' => 'Bowl de Quinoa con Cannabis',
      'descripcion' => 'Quinoa con brócoli, zanahorias y un aderezo de aceite de cannabis.',
      'precio' => 180,
      'informacionNutricional' => '350 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Vegetales al Vapor',
      'descripcion' => 'Selección de vegetales frescos cocidos al vapor.',
      'precio' => 120,
      'informacionNutricional' => '200 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Helado Vegano de Vainilla con CBD',
      'descripcion' => 'Helado vegano de vainilla infusionado con CBD para un toque refrescante.',
      'precio' => 150,
      'informacionNutricional' => '250 kcal',
      'imagen' => null,
  ],
    /** Restaurante 18 Menu 6 */
    [
      'nombrePlato' => 'Crema de Calabaza con Cannabis',
      'descripcion' => 'Sopa cremosa de calabaza con un toque de infusión de cannabis.',
      'precio' => 200,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Costillas BBQ Infusionadas',
      'descripcion' => 'Costillas de cerdo glaseadas con salsa BBQ infusionada con cannabis.',
      'precio' => 350,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tarta de Frutos Rojos con CBD',
      'descripcion' => 'Tarta artesanal de frutos rojos con una suave infusión de CBD.',
      'precio' => 220,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
    /** Restaurante 19 Menu 1 */
    [
      'nombrePlato' => 'Cordero con Puré de Alcachofas',
      'descripcion' => 'Costillas de cordero tiernas con puré de alcachofas y reducción de vino tinto.',
      'precio' => 450,
      'informacionNutricional' => '750 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Ravioles de Trufa y Ricota',
      'descripcion' => 'Ravioles hechos a mano rellenos de ricota y trufa negra en salsa cremosa.',
      'precio' => 400,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tarta de Mango y Frutas Tropicales',
      'descripcion' => 'Postre delicado de masa fina con mousse de mango y frutas tropicales.',
      'precio' => 250,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
    /** Restaurante 19 Menu 2  */
    [
      'nombrePlato' => 'Surf and Turf',
      'descripcion' => 'Filete de res jugoso con camarones a la parrilla y mantequilla de ajo.',
      'precio' => 500,
      'informacionNutricional' => '850 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Risotto de Langostinos y Champiñones',
      'descripcion' => 'Risotto cremoso con langostinos frescos y setas.',
      'precio' => 450,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Salmón al Limón con Espárragos',
      'descripcion' => 'Salmón asado con jugo de limón fresco y espárragos al vapor.',
      'precio' => 380,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
    /** Restaurante 19 Menu 3  */
    [
      'nombrePlato' => 'Berenjena a la Parmesana',
      'descripcion' => 'Capas de berenjena asada con salsa de tomate y queso parmesano gratinado.',
      'precio' => 300,
      'informacionNutricional' => '550 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Curry Vegano con Coco',
      'descripcion' => 'Curry de garbanzos y espinacas con leche de coco y especias.',
      'precio' => 280,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Risotto de Espárragos y Limón',
      'descripcion' => 'Risotto fresco con espárragos verdes y ralladura de limón.',
      'precio' => 320,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
    /** Restaurante 19 Menu 4  */
    [
      'nombrePlato' => 'Tacos de Pato con Salsa Hoisin',
      'descripcion' => 'Tacos suaves rellenos de pato laqueado, pepino y cilantro.',
      'precio' => 350,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Sushi de Quinoa y Atún',
      'descripcion' => 'Rollos de sushi hechos con quinoa, atún fresco y salsa ponzu.',
      'precio' => 300,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Hamburguesa de Trufa y Foie Gras',
      'descripcion' => 'Hamburguesa gourmet con foie gras, queso brie y aceite de trufa.',
      'precio' => 450,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
    /** Restaurante 19 Menu 5 */
    [
      'nombrePlato' => 'Sopa de Calabaza y Jengibre',
      'descripcion' => 'Sopa cremosa de calabaza con un toque de jengibre fresco.',
      'precio' => 180,
      'informacionNutricional' => '250 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pavo al Estilo Navideño',
      'descripcion' => 'Pavo asado con hierbas servido con puré de batatas.',
      'precio' => 400,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tarta de Manzana y Canela',
      'descripcion' => 'Tarta clásica de manzana con canela y masa crujiente.',
      'precio' => 200,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
    /** Restaurante 19 Menu 6 */
    [
      'nombrePlato' => 'Paella Española',
      'descripcion' => 'Arroz tradicional con mariscos, pollo y vegetales.',
      'precio' => 300,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pad Thai Tailandés',
      'descripcion' => 'Fideos de arroz salteados con camarones, tofu y salsa de tamarindo.',
      'precio' => 280,
      'informacionNutricional' => '650 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pizza Margherita Italiana',
      'descripcion' => 'Pizza clásica con base de tomate, mozzarella y albahaca fresca.',
      'precio' => 250,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
    /** Restaurante 20 Menu 1 */
    [
      'nombrePlato' => 'Sushi Variado',
      'descripcion' => 'Selección de sushi y sashimi fresco.',
      'precio' => 400,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Tacos Mexicanos',
      'descripcion' => 'Tacos al pastor con piña y salsa verde.',
      'precio' => 300,
      'informacionNutricional' => '550 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Estofado Francés',
      'descripcion' => 'Carne guisada al vino tinto con papas y zanahorias.',
      'precio' => 350,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
    /** Restaurante 20 Menu 2  */
    [
      'nombrePlato' => 'Arroz Frito con Vegetales',
      'descripcion' => 'Arroz salteado con verduras frescas y soja.',
      'precio' => 200,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pollo Teriyaki',
      'descripcion' => 'Pollo a la parrilla con salsa teriyaki y sésamo.',
      'precio' => 250,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Dim Sum Variado',
      'descripcion' => 'Selección de dumplings al vapor con rellenos tradicionales.',
      'precio' => 280,
      'informacionNutricional' => '450 kcal',
      'imagen' => null,
  ],
    /** Restaurante 20 Menu 3  */
    [
      'nombrePlato' => 'Hummus con Pan Pita',
      'descripcion' => 'Hummus cremoso acompañado de pan pita recién horneado.',
      'precio' => 200,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Cordero al Estilo Griego',
      'descripcion' => 'Pierna de cordero asada con hierbas mediterráneas.',
      'precio' => 350,
      'informacionNutricional' => '700 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Ensalada Griega',
      'descripcion' => 'Ensalada fresca con tomate, queso feta, aceitunas y pepino.',
      'precio' => 220,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
    /** Restaurante 20 Menu 4  */
    [
      'nombrePlato' => 'Carne Asada',
      'descripcion' => 'Carne a la parrilla acompañada de puré de papas.',
      'precio' => 300,
      'informacionNutricional' => '800 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Pollo al Horno',
      'descripcion' => 'Pechuga de pollo con hierbas servida con arroz blanco.',
      'precio' => 280,
      'informacionNutricional' => '600 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Espagueti a la Boloñesa',
      'descripcion' => 'Pasta con salsa de tomate y carne molida.',
      'precio' => 250,
      'informacionNutricional' => '750 kcal',
      'imagen' => null,
  ],
    /** Restaurante 20 Menu 5 */
    [
      'nombrePlato' => 'Quiche de Espinacas',
      'descripcion' => 'Tarta salada rellena de espinacas y queso.',
      'precio' => 200,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Guiso de Lentejas',
      'descripcion' => 'Lentejas cocidas con zanahorias y especias.',
      'precio' => 180,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Ensalada de Quinoa',
      'descripcion' => 'Quinoa mezclada con vegetales frescos y aderezo de limón.',
      'precio' => 220,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],
    /** Restaurante 20 Menu 6 */
    [
      'nombrePlato' => 'Huevos Revueltos con Tostadas',
      'descripcion' => 'Huevos revueltos suaves servidos con pan tostado.',
      'precio' => 150,
      'informacionNutricional' => '400 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Panqueques con Miel',
      'descripcion' => 'Panqueques esponjosos acompañados de miel de maple.',
      'precio' => 180,
      'informacionNutricional' => '500 kcal',
      'imagen' => null,
  ],
  [
      'nombrePlato' => 'Fruta Fresca con Yogur',
      'descripcion' => 'Selección de frutas frescas acompañadas de yogur natural.',
      'precio' => 120,
      'informacionNutricional' => '300 kcal',
      'imagen' => null,
  ],







        ];
        foreach ($platos as $platoData) {
          $plato = new Plato();
          $plato->nombrePlato = $platoData['nombrePlato'];
          $plato->descripcion = $platoData['descripcion'];
          $plato->precio = $platoData['precio'];
          $plato->informacionNutricional = $platoData['informacionNutricional'];
          $plato->imagen = $platoData['imagen'];
       
          $plato->save();
      }
       
      
    }
}
