<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mesa;

class MesaController extends Controller
{
    public function index()
    {
       return Mesa::all();
    }

    public function store(Request $request){

      $fields = $request ->validate([
        'idRestaurante' => 'required',
        'numeroMesa' => 'required',
        'cantidadPerson' => 'required',
        'estado' => 'required'
       ]);

      $mesa = Mesa::create($fields);

      return [ $mesa];
    }

    public function show(Mesa $mesa){

        return [$mesa];
    }

    public function update(Request $request, Mesa $mesa){
       
        $fields = $request ->validate([
            'idRestaurante' => 'required',
            'numeroMesa' => 'required',
            'cantidadPerson' => 'required',
            'estado' => 'required'
           ]);
    
          $mesa->update($fields);
    
          return [ $mesa];
    }

    public function destroy( Mesa $mesa){

        $mesa->delete();

        return ['message' => 'Mesa borrada'];
    }
}
