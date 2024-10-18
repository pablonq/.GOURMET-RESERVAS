<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Plato;
use App\Models\Restaurante;
use App\Models\Menu;

class PlatoController extends Controller
{
  public function indexPlatos(Request $request)
  {
        
    $userId = $request->user()->id;

    // Buscar el restaurante por su ID
    $restaurante = Restaurante::find($userId);

    // Verificar si el restaurante existe
    if (!$restaurante) {
        return response()->json(['error' => 'Restaurante no encontrado'], 404);
    }

    // Cargar los platos del restaurante con los menús asociados
    $platos = $restaurante->platos()->with('menus:id,nombre')->get();

    // Modificar la estructura de la respuesta para incluir los menús asociados
    $platosConMenus = $platos->map(function ($plato) {
        return [
            'id' => $plato->id,
            'nombrePlato' => $plato->nombrePlato,
            'descripcion' => $plato->descripcion,
            'informacionNutricional' => $plato->informacionNutricional,
            'precio' => $plato->precio,
            'categoria' => $plato->categoria,
            'imagen' => $plato->imagen,
            // Devolver una lista de los menús asociados con el plato
            'menus' => $plato->menus->map(function ($menu) {
                return [
                    'id' => $menu->id,
                    'nombre' => $menu->nombre,
                ];
            }),
        ];
    });

    // Devolver la respuesta en formato JSON
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
      'categoria' => 'required|string',
    
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
      'categoria' => $fields['categoria'],
      'tags' => null,
      'imagen' => $fields['imagen'],
      
    ]);
    $restaurante->platos()->attach($plato->id);
    if (!is_null($fields['idMenu'])) {
      // Buscar el menú
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
    
    $plato = Plato::with('menus')->find($id);

    if (!$plato) {
        return response()->json(['error' => 'Plato no encontrado'], 404);
    }

    
    $menu = $plato->menus->isNotEmpty() ? $plato->menus->first() : null;

    
    return response()->json([
        'id' => $plato->id,
        'nombrePlato' => $plato->nombrePlato,
        'descripcion' => $plato->descripcion,
        'informacionNutricional' => $plato->informacionNutricional,
        'precio' => $plato->precio,
        'categoria' => $plato->categoria,
        'imagen' => $plato->imagen,
        'menu' => $menu ? [
            'id' => $menu->id,
            'nombre' => $menu->nombre,
        ] : null,  
    ]);
  }

  public function editarPlato(Request $request, $id){
    $fields = $request->validate([
      'idRestaurante' => 'required|integer',
      'nombrePlato' => 'required|string',
      'descripcion' => 'required|string',
      'informacionNutricional' => 'required|string',
      'precio' => 'required|integer',
      'categoria' => 'required|string',
      'tags' => 'nullable',
      'idMenu' => 'nullable|integer',
    
      /* 'imagen' => 'required', */
    ]);
    $platoData = $request->only(['nombrePlato', 'descripcion', 'informacionNutricional', 'precio', 'categoria']);
    $plato = Plato::find($id);
    if (!$plato) {
      return response()->json(['error' => 'Plato no encontrado'], 404);
  }
    
      
        $plato->update($platoData);

        if (empty($fields['idMenu'])) {
          $plato->menus()->detach();  // Eliminar todos los menús asociados al plato
      } else {
          // Si se seleccionó un menú, actualizar la relación
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
    // Buscar el menú por su ID
    $menu = Menu::find($menuId);

    // Verificar si el menú existe
    if (!$menu) {
        return response()->json(['error' => 'Menú no encontrado'], 404);
    }

    // Obtener los platos asociados al menú
    $platos = $menu->platos;

    // Devolver los platos en formato JSON
    return response()->json($platos);
}
}
