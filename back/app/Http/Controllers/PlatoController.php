<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Plato;
use App\Models\Restaurante;
use App\Models\Menu;

class PlatoController extends Controller
{
  public function indexPlatos($id)
  {

    $restaurante = Restaurante::find($id);

    if (!$restaurante) {
      return response()->json(['error' => 'Restaurante no encontrado'], 404);
    }

    $platos = $restaurante->platos()->with('menus:id,nombre')->get();


    $platosConMenus = $platos->map(function ($plato) {
      return [
        'id' => $plato->id,
        'nombrePlato' => $plato->nombrePlato,
        'descripcion' => $plato->descripcion,
        'informacionNutricional' => $plato->informacionNutricional,
        'precio' => $plato->precio,
        'imagen' => $plato->imagen,
        'menus' => $plato->menus->map(function ($menu) {
          return [
            'id' => $menu->id,
            'nombre' => $menu->nombre,
          ];
        }),
      ];
    });

    return response()->json($platosConMenus);
  }


  public function crearPlato(Request $request)
  {
    $fields = $request->validate([
      'idRestaurante' => 'required|integer',
      'nombre' => 'required|string',
      'descripcion' => 'required|string',
      'informacionNutricional' => 'required|string',
      'precio' => 'required|integer',
      'tags' => 'array',
      'tags.*' => 'integer',

      'imagen' => 'required',
      'idMenu' => 'nullable|integer',  // El idMenu puede ser null o un entero
    ]);
    $restaurante = Restaurante::find($fields['idRestaurante']);

    $plato = Plato::create([
      /* 'idRestaurante' => $fields['idRestaurante'], */
      'nombrePlato' => $fields['nombre'],
      'descripcion' => $fields['descripcion'],
      'informacionNutricional' => $fields['informacionNutricional'],
      'precio' => $fields['precio'],
      'imagen' => $fields['imagen'],

    ]);
    $restaurante->platos()->attach($plato->id);

    if (!empty($fields['tags'])) {
      $plato->tags()->sync($fields['tags']);
    }

    if (!is_null($fields['idMenu'])) {
      $menu = Menu::find($fields['idMenu']);

      // Si el menú existe, crear la relación en la tabla pivote plato_menu
      if ($menu) {
        $menu->platos()->attach($plato->id);
      }
    }

    return response()->json($plato);
  }

  public function getPlato($id)
  {

    $plato = Plato::with(['menus',  'tags'])->find($id);

    if (!$plato) {
      return response()->json(['error' => 'Plato no encontrado'], 404);
    }

    $menu = $plato->menus->isNotEmpty() ? $plato->menus->first() : null;

    $tagsArray = [];
    foreach ($plato->tags as $tag) {
      $tagsArray[] =  [
        'id' => $tag->id,
        'nombreTag' => $tag->nombreTag,
      ];
    }

    return response()->json([
      'id' => $plato->id,
      'nombrePlato' => $plato->nombrePlato,
      'descripcion' => $plato->descripcion,
      'informacionNutricional' => $plato->informacionNutricional,
      'tags'  => $tagsArray,
      'precio' => $plato->precio,
      'imagen' => $plato->imagen,
      'menu' => $menu ? [
        'id' => $menu->id,
        'nombre' => $menu->nombre,
      ] : null,
    ]);
  }

  public function editarPlato(Request $request, $id)
  {
    $fields = $request->validate([
      'idRestaurante' => 'required|integer',
      'nombrePlato' => 'required|string',
      'descripcion' => 'required|string',
      'informacionNutricional' => 'required|string',
      'precio' => 'required|integer',
      'tags' => 'nullable|array',
      'tags.*' => 'integer',
      'idMenu' => 'nullable|integer',

      /* 'imagen' => 'required', */
    ]);
    $platoData = $request->only(['nombrePlato', 'descripcion', 'informacionNutricional', 'precio']);
    $plato = Plato::find($id);
    if (!$plato) {
      return response()->json(['error' => 'Plato no encontrado'], 404);
    }


    $plato->update($platoData);

    if (!empty($fields['tags'])) {
      $plato->tags()->sync($fields['tags']);
    }

    if (empty($fields['idMenu'])) {
      $plato->menus()->detach();  // Eliminar todos los menús asociados al plato
    } else {
      $plato->menus()->sync([$fields['idMenu']]);
    }

    return response()->json($plato);
  }

  public function borrarPlato($id)
  {
    $plato = Plato::find($id);
    $plato->restaurantes()->detach();
    $plato->delete();
    return ['message' => 'Plato Eliminado'];
  }

  public function indexPlatosMenus($menuId)
  {
    $menu = Menu::find($menuId);

    if (!$menu) {
      return response()->json(['error' => 'Menú no encontrado'], 404);
    }

    $platos = $menu->platos;

    return response()->json($platos);
  }
}
