<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SoapController extends Controller
{
    public function getDishTags()
    {
        $wsdl = 'http://localhost/soap-service/index.php?wsdl';

        try {
            $client = new \SoapClient($wsdl);
            $tags = $client->getDishTags();
            return response()->json($tags);
        } catch (\SoapFault $fault) {
            return response()->json(['error' => $fault->getMessage()], 500);
        }
    }
    
}
