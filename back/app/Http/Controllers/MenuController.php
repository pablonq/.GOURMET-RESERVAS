<?php

namespace App\Http\Controllers;

use App\Models\Menu;

use Illuminate\Http\Request;

class MenuController extends Controller
{
  public function indexMenu($idRestaurante)
  {

    
    /* $idRestaurante = $request->input('idRestaurante'); */
          /* $userId = $requests->user()->id; ; */
          

          $menus = Menu::where('idRestaurante', $idRestaurante)->get();

          return response()->json($menus);
      

       
  }

  public function getMenu($id)
  {
    $menu = Menu::find($id);
    
    return response()->json($menu);
  }


  public function crearMenu(Request $request)
  {
    $fields = $request->validate([
      'idRestaurante' => 'required|integer',
      'nombre' => 'required|string',
      'descripcion' => 'required|string',
      'tipo' => 'required|string',
      'imagen' => 'required',
    ]);

    $menu = Menu::create([
      'idRestaurante' => $fields['idRestaurante'],
      'nombre' => $fields['nombre'],
      'descripcion' => $fields['descripcion'],
      'tipo' => $fields['tipo'],
      'imagen' => $fields['imagen'],
      
    ]);

    return response()->json($menu);
  }

  public function borrarMenu($id)
  {
    $menu = Menu::find($id);
    $menu->delete();
    return ['message' => 'Menu Eliminado'];
}

public function actualizarMenu(Request $request, $id){
  $fields = $request->validate([
    'idRestaurante' => 'required|integer',
    'nombre' => 'required|string',
    'descripcion' => 'required|string',
    'tipo' => 'required|string',
    'imagen' => 'required',
  ]);
    
      $menu = Menu::where('id', $id)->update($fields);
    
      return response()->json($menu);
}



}
