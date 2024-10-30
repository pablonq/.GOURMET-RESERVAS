<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use SoapClient;
use SoapFault;

class SoapController extends Controller
{
    public function getAllTags()
    {

        try {
            $client = new SoapClient('http://localhost/SOAP-service-g21/InsertTag.php?wsdl', [
                'trace' => 1,
                'exceptions' => true,
            ]);

            // Llama al servicio GetAllTagsService para traer etiqueta
            $response = $client->GetAllTagsService();

            return response()->json($response);
        } catch (SoapFault $fault) {
            return response()->json(['error' => 'Error al obtener las etiquetas.'], 500);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error inesperado.'], 500);
        }
    }

    public function insertNewTag(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        try {
            $client = new SoapClient('http://localhost/SOAP-service-g21/InsertTag.php?wsdl', [
                'trace' => 1,
                'exceptions' => true,
            ]);

            // Llama al servicio InsertTagService para insertar una tarjeta
            $response = $client->InsertTagService(['name' => $validated['name']]);
            if ($response->Respuesta === true) {
                return response()->json(['success' => true, 'tag' => $validated['name']]);
            } else {
                return response()->json(['success' => false, 'message' => 'No se pudo insertar la etiqueta'], 500);
               
            }
        } catch (SoapFault $fault) {
            Log::error('SOAP Error: ' . $fault->getMessage());
            return response()->json(['error' => 'Error al insertar etiqueta'], 500);
        } catch (Exception $e) {
            Log::error('Error: ' . $e->getMessage());
            return response()->json(['error' => 'Error inesperado.'], 500);
        }
    }
}
