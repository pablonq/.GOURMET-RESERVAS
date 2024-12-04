<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class ReservaMesaSeeder extends Seeder
{
    public function run()
    {
        
        $reservas = DB::table('reservas')
            ->where('estado', 'procesada')
            ->orderBy('idRestaurante')
            ->get();
log::info($reservas);
        
        $mesas = DB::table('mesas')->orderBy('idRestaurante')->get();

        $reservaMesa = []; 

        
        $totalMesas = $mesas->count();

        
        foreach ($reservas as $index => $reserva) {
        
            $mesa = $mesas[$index % $totalMesas];

            $reservaMesa[] = [
                'idReserva' => $reserva->id,
                'idMesa' => $mesa->id,
            ];
        }

        
        DB::table('table_reserva_mesa')->insert($reservaMesa);
    }

}

