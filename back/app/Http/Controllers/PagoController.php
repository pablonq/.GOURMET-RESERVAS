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
use App\Models\Notification;




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

        // se envia notificacion ala usuario a su mail
        // $reservaController = new ReservaController();
        //$reservaController->confirmReservation($idReserva);

          //esto es para Enviar notificación a un usuario específico para prueba
          $user = Usuario::find($reserva->idUsuario );
        if ($user->idPersona === 22) { 
            $reservaController = new ReservaController();
            $reservaController->confirmReservation($idReserva, $user->idPersona );
        }
    

        return response()->json(['success' => true, 'message' => 'Reserva generada con éxito.']);
    }

    public function exito(Request $request)
    {

        $pagoData = $request->query();
        $paymentId = $pagoData['preference_id'];
        Log::info('paymentId enviado:', ['paymentId' => $paymentId]);

        return redirect()->away("http://localhost:5173/confirmacionReserva?paymentId={$paymentId}");
    }


    public function fallo(Request $request)
    {
        $paymentId = $request->query('preference_id');
        Log::info('Pago fallido:', ['paymentId' => $paymentId]);

        return redirect()->away("http://localhost:5173/confirmacionReserva?estado=fallo&paymentId={$paymentId}");
    }

    public function pendiente(Request $request)
    {
        $paymentId = $request->query('preference_id');
        Log::info('Pago pendiente:', ['paymentId' => $paymentId]);

        return redirect()->away("http://localhost:5173/confirmacionReserva?estado=pendiente&paymentId={$paymentId}");
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
