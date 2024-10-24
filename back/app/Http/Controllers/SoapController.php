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
    public function getDishTags()
    {

        try {
            $client = new SoapClient(
                null,
                array(
                    'location' => 'http://localhost/soap-service/index.php',
                    'uri' => 'http://localhost/soap-service',
                    'trace' => 1,
                )
            );
            $tags = $client->getDishTags();

            return response()->json($tags);
        } catch (SoapFault $fault) {
            Log::error('SOAP Error: ' . $fault->getMessage());
            return response()->json(['error' => 'Error al obtener las etiquetas.'], 500);
        } catch (Exception $e) {
            Log::error('Error: ' . $e->getMessage());
            return response()->json(['error' => 'Error inesperado.'], 500);
        }
    }
}
