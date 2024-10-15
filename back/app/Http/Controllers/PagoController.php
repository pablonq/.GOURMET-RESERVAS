<?php

namespace App\Http\Controllers;

use App\Models\Pago;
use App\Models\Reserva;
use App\Models\Usuario;
use App\Notifications\ReservaNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\MercadoPagoConfig;
use Illuminate\Support\Facades\Notification;



class PagoController extends Controller
{
    public function __construct()
    {
        MercadoPagoConfig::setAccessToken(env("MERCADO_PAGO_ACCESS_TOKEN"));
    }

    public function createPreference(Request $request)
    {

        $request->validate([
            'amount' => 'required|numeric'
        ]);


        $client = new PreferenceClient();

        $preference = $client->create([
            "items" => [
                [
                    "title" => "Reserva Mesa",
                    "quantity" => 1,
                    "unit_price" => (float)$request->amount,
                ]
            ],
            "back_urls" => [
                "success" => route('pago.exito',),
                "failure" => route('pago.fallo'),
                "pending" => route('pago.pendiente'),
            ],
            "auto_return" => "approved",
        ]);

        return response()->json($preference);
    }

    public function confirmacionPago($paymentId)
    {
       // Log::info('paymentId recibido:', ['paymentId' => $paymentId]);
        $pago = Pago::where('payment_id', $paymentId)->first();
        if (!$pago) {
            return response()->json(['success' => false, 'message' => 'Pago no encontrado.'], 404);
        }

        $idReserva = $pago->idReserva;
        
        $reserva = Reserva::find($idReserva);
        if (!$reserva) {
            return response()->json(['success' => false, 'message' => 'Reserva no encontrada.'], 404);
        }

        $pago->estado = 'aprobado';
        $pago->save();

        $reserva->estado = 'procesada';
        $reserva->save();

        Notification::create([
            'descripcion' => 'Su reserva ha sido confirmada.',
            'fecha' => now(),
            'idRestaurante' => $reserva->idRestaurante,
            'idUsuario' =>$reserva->idUsuario,
        ]);

      //  $reservaController = new ReservaController();
       // $reservaController->confirmReservation($idReserva);

    
        return response()->json(['success' => true, 'message' => 'Reserva generada con éxito.']);
    }

    public function exito(Request $request)
    {
       
        $pagoData = $request->query();
        $paymentId = $pagoData['preference_id'];
        Log::info('paymentId enviado:', ['paymentId' => $paymentId]);

        return redirect()->away("http://localhost:5173/panelUsuario/confirmacionReserva?paymentId={$paymentId}");
    }


    public function fallo()
    {
        // Lógica para manejar el fallo del pago
        return view('pago.fallo');
    }

    public function pendiente()
    {
        // Lógica para manejar el pago pendiente
        return view('pago.pendiente');
    }

    public function guardarPago(Request $request)
    {
        $request->validate([
            'idReserva' => 'required|integer',
            'monto' => 'required|numeric',
            'estado' => 'required|string',
            'payment_id' => 'required|string',
        ]);

        $pago = new Pago();
        $pago->monto = $request->monto;
        $pago->fechaPago = $request->fechaPago;
        $pago->metodoPago = $request->metodoPago;
        $pago->estado = $request->estado;
        $pago->idUsuario = $request->idUsuario;
        $pago->idReserva = $request->idReserva;
        $pago->payment_id = $request->payment_id;

        $pago->save();

        return response()->json(['message' => 'Pago guardado exitosamente.']);
    }
}
