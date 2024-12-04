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
      /** Restaurante 1 */
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
        $menu->nombre = 'Dulce Antojo';
        $menu->descripcion = 'Postres clasicos y gourmet';
        $menu->tipo = 'Postres';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F06151a0b-cf58-4aa1-aa74-417b6533351a?alt=media&token=c660d704-6b4c-4c79-8046-a5ca2895359f';
        $menu->idRestaurante = 1;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'pizzas';
        $menu->descripcion = 'PIZZAS MASA MADRE EN HORNO DE LEÑA.';
        $menu->tipo = 'Principal';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F131dfebf-0446-4f84-a764-9939fbfbeeb1?alt=media&token=ae602e9c-273d-442b-bd1e-3a34cc0a6c19';
        $menu->idRestaurante = 1;
        $menu->save();

        /** Restaurante 2 */
        $menu = new Menu();
        $menu->nombre = 'Nuestras Pizzas';
        $menu->descripcion = 'La mejor pizza ';
        $menu->tipo = 'Principal';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F46ca6c33-ef1f-42ce-a60e-b7409517bf63?alt=media&token=b7cbca6f-5562-430d-92be-d6c232e70e82';
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

        /** Restaurante 3 */
        $menu = new Menu();
        $menu->nombre = 'After hours';
        $menu->descripcion = 'Variades de cervezas ';
        $menu->tipo = 'Bebidas';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FCerveza-artesanal-750x375.jpg?alt=media&token=71693dfa-a590-4c1b-81e0-3dfd090e706d';
        $menu->idRestaurante = 3;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Pizza Gourmet';
        $menu->descripcion = 'Pizza todo variedad';
        $menu->tipo = 'Pizzas';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F47bcbf25-deee-49d8-97c4-4f0c886afdf7?alt=media&token=dab8be1a-efd1-4190-86f7-7322c6dde957';
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

        /** Restaurante 4 */
        $menu = new Menu();
        $menu->nombre = 'Menu 1';
        $menu->descripcion = 'Descripcion del menu 4';
        $menu->tipo = 'tipo 4';
        $menu->imagen = 'null';
        $menu->idRestaurante = 4;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Desayuno';
        $menu->descripcion = 'Explora una variedad de sabores en nuestro menú de desayunos. ';
        $menu->tipo = 'Desayuno';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ff9e18001-b49a-4142-9d85-4032418760eb?alt=media&token=6018581d-e405-440a-b3f8-23c92888d1ad';
        $menu->idRestaurante = 4;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 3';
        $menu->descripcion = 'Descripcion del menu 1';
        $menu->tipo = 'tipo 1';
        $menu->imagen = 'null';
        $menu->idRestaurante = 4;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 4';
        $menu->descripcion = 'Descripcion del menu 2';
        $menu->tipo = 'tipo 2';
        $menu->imagen = 'null';
        $menu->idRestaurante = 4;
        $menu->save();

/** Restaurante 5 */
        $menu = new Menu();
        $menu->nombre = 'Carnes';
        $menu->descripcion = 'Los mejores cortes de carnes con salsa o ensaladas';
        $menu->tipo = 'Plato principal';
        $menu->imagen = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F432aa2b5-df83-42f6-bacc-ac66ecaf6b16?alt=media&token=ee90332f-2052-4199-9c83-aaaaa839505b';
        $menu->idRestaurante = 5;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 2';
        $menu->descripcion = 'Descripcion del menu 3';
        $menu->tipo = 'tipo 3';
        $menu->imagen = 'null';
        $menu->idRestaurante = 5;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 3';
        $menu->descripcion = 'Descripcion del menu 4';
        $menu->tipo = 'tipo 4';
        $menu->imagen = 'null';
        $menu->idRestaurante = 5;
        $menu->save();

        $menu = new Menu();
        $menu->nombre = 'Menu 4';
        $menu->descripcion = 'Descripcion del menu 5';
        $menu->tipo = 'tipo 5';
        $menu->imagen = 'null';
        $menu->idRestaurante = 5;
        $menu->save();

        /** Restaurante 6 */
        $menus = [
          [
              'nombre' => 'Desayuno Clásico',
              'descripcion' => 'Incluye café, jugo y un plato principal.',
              'tipo' => 'Desayuno',
              'imagen' => 'desayuno_clasico.jpg',
              'idRestaurante' => 6
          ],
          [
              'nombre' => 'Almuerzo Ejecutivo',
              'descripcion' => 'Menú completo con entrada, plato fuerte y bebida.',
              'tipo' => 'Almuerzo',
              'imagen' => 'almuerzo_ejecutivo.jpg',
              'idRestaurante' => 6
          ],
          [
              'nombre' => 'Cena Romántica',
              'descripcion' => 'Incluye entrada, plato fuerte, postre y vino.',
              'tipo' => 'Cena',
              'imagen' => 'cena_romantica.jpg',
              'idRestaurante' => 6
          ],
          [
              'nombre' => 'Vegetariano Saludable',
              'descripcion' => 'Opciones vegetarianas bajas en calorías.',
              'tipo' => 'Vegetariano',
              'imagen' => 'vegetariano_saludable.jpg',
              'idRestaurante' => 6
          ],
          [
              'nombre' => 'Especial Infantil',
              'descripcion' => 'Platos pensados para los más pequeños.',
              'tipo' => 'Infantil',
              'imagen' => 'especial_infantil.jpg',
              'idRestaurante' => 6
          ],
          [
              'nombre' => 'Buffet Internacional',
              'descripcion' => 'Variedad de platos internacionales para disfrutar.',
              'tipo' => 'Buffet',
              'imagen' => 'buffet_internacional.jpg',
              'idRestaurante' => 6
          ],
          /** Restaurante 7 */
          [
            'nombre' => 'Pizzas Clasicas',
            'descripcion' => 'Pizza clásica con salsa de tomate, mozzarella y albahaca fresca.',
            'tipo' => 'Pizza',
            'imagen' => 'pizza_margarita.jpg',
            'idRestaurante' => 7
        ],
        [
            'nombre' => 'Pizzas Internacionales',
            'descripcion' => 'Pizza con base de salsa de tomate, mozzarella y rodajas de pepperoni.',
            'tipo' => 'Pizza',
            'imagen' => 'pizza_pepperoni.jpg',
            'idRestaurante' => 7
        ],
        [
            'nombre' => 'Pizza solo Quesos',
            'descripcion' => 'Deliciosa combinación de mozzarella, gorgonzola, parmesano y cheddar.',
            'tipo' => 'Pizza',
            'imagen' => 'pizza_cuatro_quesos.jpg',
            'idRestaurante' => 7
        ],
        [
            'nombre' => 'Pizzas de la Casa',
            'descripcion' => 'Pizza con piña, jamón, mozzarella y salsa de tomate.',
            'tipo' => 'Pizza',
            'imagen' => 'pizza_hawaiana.jpg',
            'idRestaurante' => 7
        ],
        [
            'nombre' => 'Pizzas Vegetarianas',
            'descripcion' => 'Pizza con pimientos, champiñones, cebolla, aceitunas y mozzarella.',
            'tipo' => 'Pizza',
            'imagen' => 'pizza_vegetariana.jpg',
            'idRestaurante' => 7
        ],
        [
            'nombre' => 'Pizza Carnivoras',
            'descripcion' => 'Base de salsa BBQ con trozos de pollo, mozzarella y cebolla morada.',
            'tipo' => 'Pizza',
            'imagen' => 'pizza_bbq_pollo.jpg',
            'idRestaurante' => 7
        ],

        /** Restaurante 8 */
        [
          'nombre' => 'Parrillada Familiar',
          'descripcion' => 'Un surtido de carnes a la parrilla acompañado de ensalada, papas fritas y salsas.',
          'tipo' => 'Familiar',
          'imagen' => 'parrillada_familiar.jpg',
          'idRestaurante' => 8
      ],
      [
          'nombre' => 'Menú Infantil',
          'descripcion' => 'Nuggets de pollo, papas fritas y un jugo de frutas, ideal para niños.',
          'tipo' => 'Infantil',
          'imagen' => 'menu_infantil.jpg',
          'idRestaurante' => 8
      ],
      [
          'nombre' => 'Combo Pasta y Ensalada',
          'descripcion' => 'Plato de pasta a elegir con una ensalada fresca y pan de ajo.',
          'tipo' => 'Italiano',
          'imagen' => 'combo_pasta_ensalada.jpg',
          'idRestaurante' => 8
      ],
      [
          'nombre' => 'Hamburguesas Clásicas Familiar',
          'descripcion' => 'Hamburguesa casera con carne 100% res, acompañada de papas fritas y bebida.',
          'tipo' => 'Americano',
          'imagen' => 'hamburguesa_clasica.jpg',
          'idRestaurante' => 8
      ],
      [
          'nombre' => 'Cena Especial Familiar',
          'descripcion' => 'Incluye sopa, plato fuerte, bebida y postre para dos adultos y dos niños.',
          'tipo' => 'Cena',
          'imagen' => 'cena_especial_familiar.jpg',
          'idRestaurante' => 8
      ],
      [
          'nombre' => 'Pizza Familiar Gigante',
          'descripcion' => 'Pizza tamaño gigante con hasta 3 ingredientes a elegir.',
          'tipo' => 'Pizza',
          'imagen' => 'pizza_familiar_gigante.jpg',
          'idRestaurante' => 8
      ],

      /** Restaurante 9 */
      [
        'nombre' => 'Tartas',
        'descripcion' => 'Atún fresco marinado con especias, servido con aguacate y sésamo tostado.',
        'tipo' => 'Entrada',
        'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Ftartas_nobleCampo.png?alt=media&token=ab60d2d2-8044-41b0-b924-b0d1decc6715',
        'idRestaurante' => 9
    ],
    [
        'nombre' => 'Pastas',
        'descripcion' => 'Risotto cremoso con hongos porcini, trufa negra y parmesano.',
        'tipo' => 'Plato Principal',
        'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpastas_nobleCampo.png?alt=media&token=d4f6a786-09b8-4069-8fd8-75b00c77d82c',
        'idRestaurante' => 9
    ],
    [
        'nombre' => 'Pescados',
        'descripcion' => 'Salmón grillado acompañado de puré de coliflor y salsa de miso dulce.',
        'tipo' => 'Plato Principal',
        'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpescados_nobleCampo.png?alt=media&token=7a45a43e-3a8d-4da5-99cf-c50b8d8d760e',
        'idRestaurante' => 9
    ],
    [
        'nombre' => 'Carnes',
        'descripcion' => 'Finas láminas de res marinadas en limón y aceite de oliva, con rúcula y parmesano.',
        'tipo' => 'Entrada',
        'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fcarnes_nobleCampo.png?alt=media&token=01d450e4-f4e3-4b86-bc1c-029988775440',
        'idRestaurante' => 9
    ],
    [
        'nombre' => 'Postres',
        'descripcion' => 'Mousse de chocolate amargo con coulis de frutos rojos y crumble de almendras.',
        'tipo' => 'Postre',
        'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fpostre_nobleCampo.png?alt=media&token=007ce56a-9fbe-485d-8a25-5a5d9424b99b',
        'idRestaurante' => 9
    ],
    [
        'nombre' => 'Mariscos',
        'descripcion' => 'Langosta gratinada con salsa cremosa de mostaza y queso gruyere.',
        'tipo' => 'Plato Principal',
        'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fmariscos_nobleCampo.png?alt=media&token=9a2cea2a-d364-40e3-aebf-d2b36272d60e',
        'idRestaurante' => 9
    ],

      /** Restaurante 10 */
      [
        'nombre' => 'Degustación de Mariscos',
        'descripcion' => 'Incluye una entrada de ostras frescas, plato principal de langosta termidor y postre de mousse de limón.',
        'tipo' => 'Menú Completo',
        'imagen' => 'menu_deg_mariscos.jpg',
        'idRestaurante' => 10
    ],
    [
        'nombre' => 'Vegetariano Gourmet',
        'descripcion' => 'Incluye carpaccio de remolacha, risotto de hongos y una tarta de chocolate vegana.',
        'tipo' => 'Menú Vegetariano',
        'imagen' => 'menu_vegetariano.jpg',
        'idRestaurante' => 10
    ],
    [
        'nombre' => 'Italiano Premium',
        'descripcion' => 'Incluye bruschetta de trufa negra, ravioli de ricotta con mantequilla de salvia y panna cotta con frutos del bosque.',
        'tipo' => 'Menú Temático',
        'imagen' => 'menu_italiano.jpg',
        'idRestaurante' => 10
    ],
    [
        'nombre' => 'Gourmet Asiático',
        'descripcion' => 'Incluye gyozas de cerdo, salmón teriyaki con arroz jazmín y helado de té verde.',
        'tipo' => 'Menú Temático',
        'imagen' => 'menu_asiatico.jpg',
        'idRestaurante' => 10
    ],
    [
        'nombre' => 'Degustación de Carnes',
        'descripcion' => 'Incluye carpaccio de res, lomo de cordero con costra de hierbas y un soufflé de chocolate.',
        'tipo' => 'Menú Degustación',
        'imagen' => 'menu_carnes.jpg',
        'idRestaurante' => 10
    ],
    [
        'nombre' => 'Especial de Temporada',
        'descripcion' => 'Incluye crema de calabaza, pavo relleno con castañas y tarta de manzana caramelizada.',
        'tipo' => 'Menú Especial',
        'imagen' => 'menu_temporada.jpg',
        'idRestaurante' => 10
    ],

    /** Restaurante 11 */
    [
      'nombre' => 'Combo Pizza y Empanadas',
      'descripcion' => 'Incluye una pizza mediana de 2 ingredientes a elección y 6 empanadas clásicas.',
      'tipo' => 'Combo',
      'imagen' => 'combo_pizza_empanadas.jpg',
      'idRestaurante' => 11
  ],
  [
      'nombre' => 'Combo Familiar',
      'descripcion' => 'Incluye una pizza grande de 3 ingredientes, 4 hamburguesas clásicas con papas fritas, y 12 empanadas surtidas.',
      'tipo' => 'Familiar',
      'imagen' => 'combo_familiar.jpg',
      'idRestaurante' => 11
  ],
  [
      'nombre' => 'Degustación de Empanadas',
      'descripcion' => '12 empanadas con diferentes rellenos: carne, pollo, jamón y queso, y espinaca.',
      'tipo' => 'Degustación',
      'imagen' => 'menu_empanadas.jpg',
      'idRestaurante' => 11
  ],
  [
      'nombre' => 'Combo Burger Party',
      'descripcion' => 'Incluye 4 hamburguesas dobles, 2 porciones de papas fritas grandes y una bebida de 2 litros.',
      'tipo' => 'Combo',
      'imagen' => 'combo_burger_party.jpg',
      'idRestaurante' => 11
  ],
  [
      'nombre' => 'Combo Todo Incluido',
      'descripcion' => 'Incluye una pizza grande, 2 hamburguesas, 6 empanadas y una bebida de 2 litros.',
      'tipo' => 'Especial',
      'imagen' => 'combo_todo_incluido.jpg',
      'idRestaurante' => 11
  ],
  [
      'nombre' => 'Fin de Semana',
      'descripcion' => 'Incluye una pizza grande, 8 empanadas, 2 hamburguesas gourmet y postre a elección.',
      'tipo' => 'Especial',
      'imagen' => 'menu_fin_de_semana.jpg',
      'idRestaurante' => 11
  ],

  /** Restaurante 12 */
  [
    'nombre' => 'Combo Clásico',
    'descripcion' => 'Incluye una hamburguesa sencilla con queso, papas fritas medianas y una bebida de 500ml.',
    'tipo' => 'Combo',
    'imagen' => 'combo_clasico.jpg',
    'idRestaurante' => 12
],
[
    'nombre' => 'Combo Hot Dog y Papas',
    'descripcion' => 'Incluye 2 hot dogs con salsas al gusto, papas fritas grandes y una bebida de 1 litro.',
    'tipo' => 'Combo',
    'imagen' => 'combo_hotdog.jpg',
    'idRestaurante' => 12
],
[
    'nombre' => 'Menú Familiar',
    'descripcion' => 'Incluye 4 hamburguesas, 4 porciones de papas fritas y una bebida de 2 litros.',
    'tipo' => 'Familiar',
    'imagen' => 'menu_familiar.jpg',
    'idRestaurante' => 12
],
[
    'nombre' => 'Combo Nuggets Party',
    'descripcion' => 'Incluye 20 nuggets de pollo, 2 porciones de papas fritas grandes y 2 bebidas de 500ml.',
    'tipo' => 'Combo',
    'imagen' => 'combo_nuggets_party.jpg',
    'idRestaurante' => 12
],
[
    'nombre' => 'Pollo Frito',
    'descripcion' => 'Incluye 6 piezas de pollo frito, una porción de papas fritas grandes y una ensalada coleslaw.',
    'tipo' => 'Especial',
    'imagen' => 'menu_pollo_frito.jpg',
    'idRestaurante' => 12
],
[
    'nombre' => 'Doble Sabor',
    'descripcion' => 'Incluye una hamburguesa doble con queso, un hot dog con salsas al gusto, papas fritas y una bebida de 500ml.',
    'tipo' => 'Combo',
    'imagen' => 'combo_doble_sabor.jpg',
    'idRestaurante' => 12
],

/** Restaurante 13 */
[
  'nombre' => 'Fusión Asiática',
  'descripcion' => 'Incluye sushi rolls de salmón y aguacate, arroz jazmín con vegetales al wok y helado de té matcha.',
  'tipo' => 'Fusión',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FfusionAsiatica_casaJuez.png?alt=media&token=19297369-0ef7-42b0-be02-695fb1875d9a',
  'idRestaurante' => 13
],
[
  'nombre' => 'Mediterráneo Oriental',
  'descripcion' => 'Incluye hummus con pan pita, brochetas de cordero al estilo griego y baklava de pistachos.',
  'tipo' => 'Fusión',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FMediterr%C3%A1neoOriental_casaJuez.png?alt=media&token=6eabe38c-f8d9-4937-9544-5cac711fbd25',
  'idRestaurante' => 13
],
[
  'nombre' => 'Latino-Asia',
  'descripcion' => 'Incluye tacos de atún sellado con salsa de soja y jengibre, arroz chaufa y un flan de coco.',
  'tipo' => 'Fusión',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FlatinoAsia_casaJuez.png?alt=media&token=92493c80-d792-4f90-8a7c-c32cd0f35208',
  'idRestaurante' => 13
],
[
  'nombre' => 'Tex-Mex Oriental',
  'descripcion' => 'Incluye nachos con guacamole y salsa de kimchi, burrito de pollo teriyaki y churros con chocolate picante.',
  'tipo' => 'Fusión',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FtexMexOriental_casaJuez.png?alt=media&token=d198c226-709b-4e83-b5f7-7cfa03e9c327',
  'idRestaurante' => 13
],
[
  'nombre' => 'Italiano-Japonés',
  'descripcion' => 'Incluye carpaccio de pulpo con salsa ponzu, risotto de miso y postre de tiramisú con matcha.',
  'tipo' => 'Fusión',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FItalianoJapon%C3%A9s_casaJuez.png?alt=media&token=f5c625c0-c2af-4d8b-bb57-9158e11d8891',
  'idRestaurante' => 13
],
[
  'nombre' => 'India-Caribeño',
  'descripcion' => 'Incluye samosas de pollo con chutney de mango, curry de camarones al estilo caribeño y arroz con coco.',
  'tipo' => 'Fusión',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FIndiaCaribe%C3%B1o_casaJuez.png?alt=media&token=492833c8-6a3d-495e-b017-176574562332',
  'idRestaurante' => 13
],

/** Restaurante 14 */
[
  'nombre' => 'Picoteo y Cerveza',
  'descripcion' => 'Incluye una tabla de quesos y embutidos, alitas de pollo y una jarra de cerveza artesanal.',
  'tipo' => 'Combo',
  'imagen' => 'menu_picoteo_cerveza.jpg',
  'idRestaurante' => 14
],
[
  'nombre' => 'Clásico del Bar',
  'descripcion' => 'Incluye una hamburguesa doble con queso, papas fritas y un cóctel clásico a elegir (Mojito o Margarita).',
  'tipo' => 'Combo',
  'imagen' => 'menu_clasico_bar.jpg',
  'idRestaurante' => 14
],
[
  'nombre' => 'Tapas y Vino',
  'descripcion' => 'Incluye croquetas de jamón, calamares a la romana, patatas bravas y una copa de vino tinto.',
  'tipo' => 'Combo',
  'imagen' => 'menu_tapas_vino.jpg',
  'idRestaurante' => 14
],
[
  'nombre' => 'Noche de Amigos',
  'descripcion' => 'Incluye una pizza grande para compartir, 12 alitas de pollo y 4 cervezas.',
  'tipo' => 'Familiar',
  'imagen' => 'menu_noche_amigos.jpg',
  'idRestaurante' => 14
],
[
  'nombre' => 'Especial de Coctelería',
  'descripcion' => 'Incluye una tabla de sushi, tiraditos y 3 cócteles premium a elegir.',
  'tipo' => 'Especial',
  'imagen' => 'menu_especial_cocteleria.jpg',
  'idRestaurante' => 14
],
[
  'nombre' => 'After Office',
  'descripcion' => 'Incluye sliders de mini hamburguesas, nachos con guacamole y una copa de Gin Tonic.',
  'tipo' => 'Especial',
  'imagen' => 'menu_after_office.jpg',
  'idRestaurante' => 14
],

/** Restaurante 15 */
[
  'nombre' => 'Desayuno Saludable',
  'descripcion' => 'Incluye un bowl de yogurt con granola y frutas frescas, tostadas de aguacate y un capuchino.',
  'tipo' => 'Desayuno',
  'imagen' => 'menu_desayuno_saludable.jpg',
  'idRestaurante' => 15
],
[
  'nombre' => 'Brunch Clásico',
  'descripcion' => 'Incluye huevos benedictinos, ensalada verde, croissant de mantequilla y un café latte.',
  'tipo' => 'Brunch',
  'imagen' => 'menu_brunch_clasico.jpg',
  'idRestaurante' => 15
],
[
  'nombre' => 'Almuerzo Ligero',
  'descripcion' => 'Incluye una quiche de espinaca y queso, sopa del día y una copa de vino blanco.',
  'tipo' => 'Almuerzo',
  'imagen' => 'menu_almuerzo_ligero.jpg',
  'idRestaurante' => 15
],
[
  'nombre' => 'Dulce y Café',
  'descripcion' => 'Incluye una porción de pastel de zanahoria, un macaron y un café americano.',
  'tipo' => 'Postre',
  'imagen' => 'menu_dulce_cafe.jpg',
  'idRestaurante' => 15
],
[
  'nombre' => 'Tarde de Té',
  'descripcion' => 'Incluye un surtido de mini sándwiches, scones con mermelada y crema, y una tetera de té a elección.',
  'tipo' => 'Tarde de Té',
  'imagen' => 'menu_tarde_te.jpg',
  'idRestaurante' => 15
],
[
  'nombre' => 'Gourmet del Bistró',
  'descripcion' => 'Incluye un filete de salmón a la parrilla, puré de papas cremoso, ensalada mixta y un espresso.',
  'tipo' => 'Gourmet',
  'imagen' => 'menu_gourmet_bistro.jpg',
  'idRestaurante' => 15
],

/** Restaurante 16 */
[
  'nombre' => 'Mezze Árabe',
  'descripcion' => 'Incluye hummus, tabbouleh, baba ganoush y pan pita recién horneado.',
  'tipo' => 'Entrada',
  'imagen' => 'menu_mezze_arabe.jpg',
  'idRestaurante' => 16
],
[
  'nombre' => 'Shawarma Fest',
  'descripcion' => 'Incluye un shawarma mixto (pollo y res), papas fritas con especias árabes y una bebida de yogur laban.',
  'tipo' => 'Plato Principal',
  'imagen' => 'menu_shawarma_fest.jpg',
  'idRestaurante' => 16
],
[
  'nombre' => 'Árabe Clásico',
  'descripcion' => 'Incluye kofta de cordero, arroz con almendras, ensalada fattoush y un baklava.',
  'tipo' => 'Plato Principal',
  'imagen' => 'menu_arabe_clasico.jpg',
  'idRestaurante' => 16
],
[
  'nombre' => 'Degustación Árabe',
  'descripcion' => 'Incluye falafel, kibbeh, hojas de parra rellenas y una sopa de lentejas.',
  'tipo' => 'Degustación',
  'imagen' => 'menu_deg_arabe.jpg',
  'idRestaurante' => 16
],
[
  'nombre' => 'Especial Árabe Gourmet',
  'descripcion' => 'Incluye cordero asado con arroz especiado, salsa de yogur y ensalada de granada.',
  'tipo' => 'Gourmet',
  'imagen' => 'menu_arabe_gourmet.jpg',
  'idRestaurante' => 16
],
[
  'nombre' => 'Dulce Árabe',
  'descripcion' => 'Incluye baklava de pistachos, maamoul relleno de dátiles y una taza de té árabe con menta.',
  'tipo' => 'Postre',
  'imagen' => 'menu_dulce_arabe.jpg',
  'idRestaurante' => 16
],

/** Restaurante 17 */
[
  'nombre' => 'Medieval Festín del Rey',
  'descripcion' => 'Incluye sopa de cebolla, pierna de cordero al horno, pan rústico y una jarra de hidromiel.',
  'tipo' => 'Temático',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FMedievalFest%C3%ADndelRey_1946.png?alt=media&token=f8186c0b-3a0a-4c6f-a037-9805bc289a27',
  'idRestaurante' => 17
],
[
  'nombre' => 'Pirata Banquete del Capitán',
  'descripcion' => 'Incluye sopa de mariscos, pescado a la parrilla con arroz especiado y un cóctel de ron.',
  'tipo' => 'Temático',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FPirataBanquetedelCapit%C3%A1n_1946.png?alt=media&token=85d21dbe-36ac-452c-b607-3ac9682f0312',
  'idRestaurante' => 17
],
[
  'nombre' => 'Espacial Comida Intergaláctica',
  'descripcion' => 'Incluye nuggets galácticos (pollo empanizado con especias), puré de papas azules y un batido de fresa cósmico.',
  'tipo' => 'Temático',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FEspacialComidaIntergal%C3%A1ctica_1946.png?alt=media&token=f1eb14e0-9e6d-4043-b1c9-148fccbe09c2',
  'idRestaurante' => 17
],
[
  'nombre' => 'Hollywood Noche de Estrellas',
  'descripcion' => 'Incluye mini hamburguesas gourmet, papas fritas trufadas, y un martini clásico.',
  'tipo' => 'Temático',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FHollywoodNochedeEstrellas_1946.png?alt=media&token=432791ce-7b82-46fa-85f4-f47891fdddc4',
  'idRestaurante' => 17
],
[
  'nombre' => 'Egipcio Banquete del Faraón',
  'descripcion' => 'Incluye hummus con pan egipcio, kofta de cordero, arroz especiado con almendras y dátiles, y té con menta.',
  'tipo' => 'Temático',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FEgipcioBanquetedelFara%C3%B3n_1946.png?alt=media&token=ee982d89-6d71-4cf5-a977-7b9c5c65abc9',
  'idRestaurante' => 17
],
[
  'nombre' => 'Fantasía Banquete Élfico',
  'descripcion' => 'Incluye ensalada de frutas silvestres, sopa de champiñones, pan de miel y una limonada floral.',
  'tipo' => 'Temático',
  'imagen' => 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2FFantas%C3%ADaBanquete%C3%89lfico_1946.png?alt=media&token=2446c236-3f23-4921-ac6d-a7dd8fe806af',
  'idRestaurante' => 17
],

/** Restaurante 18 */
[
  'nombre' => 'Green Start',
  'descripcion' => 'Incluye un smoothie verde infusionado con CBD, ensalada fresca con aderezo de aceite de cannabis y tostadas de aguacate.',
  'tipo' => 'Desayuno',
  'imagen' => 'menu_green_start.jpg',
  'idRestaurante' => 18
],
[
  'nombre' => 'Gourmet Infusionado',
  'descripcion' => 'Incluye risotto de hongos con mantequilla infusionada con cannabis, filete de salmón grillado y mousse de chocolate con CBD.',
  'tipo' => 'Gourmet',
  'imagen' => 'menu_gourmet_infusionado.jpg',
  'idRestaurante' => 18
],
[
  'nombre' => 'Brunch Relajante',
  'descripcion' => 'Incluye huevos benedictinos con salsa holandesa infusionada, pan de masa madre y un café latte con CBD.',
  'tipo' => 'Brunch',
  'imagen' => 'menu_brunch_relajante.jpg',
  'idRestaurante' => 18
],
[
  'nombre' => 'Sweet High',
  'descripcion' => 'Incluye brownie infusionado con THC, galletas de avena y un té helado con limón y cannabis.',
  'tipo' => 'Postre',
  'imagen' => 'menu_sweet_high.jpg',
  'idRestaurante' => 18
],
[
  'nombre' => 'Vegano Chill',
  'descripcion' => 'Incluye bowl de quinoa con vegetales al vapor, aderezo de aceite de cannabis y helado vegano de vainilla con CBD.',
  'tipo' => 'Vegano',
  'imagen' => 'menu_vegano_chill.jpg',
  'idRestaurante' => 18
],
[
  'nombre' => 'Cena Sensorial',
  'descripcion' => 'Incluye crema de calabaza con un toque de cannabis, costillas glaseadas con BBQ infusionada y tarta de frutos rojos con CBD.',
  'tipo' => 'Cena',
  'imagen' => 'menu_cena_sensorial.jpg',
  'idRestaurante' => 18
],

/** Restaurante 19 */
[
  'nombre' => 'Inspiración del Chef',
  'descripcion' => 'Incluye carpaccio de remolacha con queso de cabra, filete de res con puré de zanahoria trufado, y mousse de maracuyá.',
  'tipo' => 'Degustación',
  'imagen' => 'menu_inspiracion_chef.jpg',
  'idRestaurante' => 19
],
[
  'nombre' => 'Tierra y Mar',
  'descripcion' => 'Incluye tartar de atún con salsa de mango, cordero asado con reducción de vino tinto y volcán de chocolate.',
  'tipo' => 'Plato Principal',
  'imagen' => 'menu_tierra_mar.jpg',
  'idRestaurante' => 19
],
[
  'nombre' => 'Vegetariano de Autor',
  'descripcion' => 'Incluye crema de espárragos con crujientes de quinoa, risotto de hongos porcini y panna cotta de frutos rojos.',
  'tipo' => 'Vegetariano',
  'imagen' => 'menu_vegetariano_autor.jpg',
  'idRestaurante' => 19
],
[
  'nombre' => 'Fusión Contemporánea',
  'descripcion' => 'Incluye dumplings de pato con salsa ponzu, costillas glaseadas con miso y un cheesecake con gel de jengibre.',
  'tipo' => 'Fusión',
  'imagen' => 'menu_fusion_contemporanea.jpg',
  'idRestaurante' => 19
],
[
  'nombre' => 'Temporada',
  'descripcion' => 'Incluye sopa de calabaza con crema de coco, salmón a la parrilla con espinacas al ajo, y un crumble de manzana.',
  'tipo' => 'Especial',
  'imagen' => 'menu_temporada.jpg',
  'idRestaurante' => 19
],
[
  'nombre' => 'Sabores del Mundo',
  'descripcion' => 'Incluye ceviche peruano, curry tailandés con arroz jazmín y una crema catalana con toques cítricos.',
  'tipo' => 'Internacional',
  'imagen' => 'menu_sabores_mundo.jpg',
  'idRestaurante' => 19
],

/** Restaurante 20 */
[
  'nombre' => 'Buffet Internacional',
  'descripcion' => 'Incluye sushi rolls, tacos mexicanos, pasta al pesto y una selección de postres internacionales.',
  'tipo' => 'Buffet',
  'imagen' => 'menu_buffet_internacional.jpg',
  'idRestaurante' => 20
],
[
  'nombre' => 'Buffet Asiático',
  'descripcion' => 'Incluye arroz frito, pollo teriyaki, rollos primavera, sopa miso y helado de té verde.',
  'tipo' => 'Buffet',
  'imagen' => 'menu_buffet_asiatico.jpg',
  'idRestaurante' => 20
],
[
  'nombre' => 'Buffet Mediterráneo',
  'descripcion' => 'Incluye hummus, tabbouleh, kofta de cordero, ensalada griega y baklava.',
  'tipo' => 'Buffet',
  'imagen' => 'menu_buffet_mediterraneo.jpg',
  'idRestaurante' => 20
],
[
  'nombre' => 'Buffet Clásico',
  'descripcion' => 'Incluye pollo asado, lasaña de carne, ensalada César, puré de papas y pastel de chocolate.',
  'tipo' => 'Buffet',
  'imagen' => 'menu_buffet_clasico.jpg',
  'idRestaurante' =>  20
],
[
  'nombre' => 'Buffet Vegetariano',
  'descripcion' => 'Incluye ensalada de quinoa, curry de vegetales, pasta alfredo sin carne, y una selección de frutas frescas.',
  'tipo' => 'Buffet',
  'imagen' => 'menu_buffet_vegetariano.jpg',
  'idRestaurante' => 20
],
[
  'nombre' => 'Buffet de Desayuno',
  'descripcion' => 'Incluye huevos revueltos, tocino, panqueques, yogur con granola, y jugo natural.',
  'tipo' => 'Buffet',
  'imagen' => 'menu_buffet_desayuno.jpg',
  'idRestaurante' => 20
]


      ];

      foreach ($menus as $menuData) {
          $menu = new Menu();
          $menu->nombre = $menuData['nombre'];
          $menu->descripcion = $menuData['descripcion'];
          $menu->tipo = $menuData['tipo'];
          $menu->imagen = $menuData['imagen'];
          $menu->idRestaurante = $menuData['idRestaurante'];
          $menu->save();
      }
    }
}
