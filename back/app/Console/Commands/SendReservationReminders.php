<?php

namespace App\Console\Commands;

use App\Jobs\SendReservationReminder;
use App\Models\Persona;
use App\Models\Reserva;
use App\Notifications\ReservaNotification;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SendReservationReminders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-reservation-reminders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {   // $reservations = Reserva::all();  

        $now = now();

        $reservations = Reserva::where('fechaReserva', '=', $now->format('Y-m-d'))
            ->where('horaReserva', '>=', $now->format('H:i'))
            ->where('horaReserva', '<=', $now->addMinutes(10)->format('H:i'))
            ->where('estado', '<>', 'cancelada')
            ->get();

        Log::info('Reservas encontradas: ' . $reservations->toJson());

        foreach ($reservations as $reservation) {
            SendReservationReminder::dispatch($reservation, 'reminder');
        }

        $this->info('Reminders dispatched!');
    }
}
