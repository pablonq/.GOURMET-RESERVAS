<?php

namespace App\Jobs;

use App\Models\Persona;
use App\Models\Reserva;
use App\Notifications\ReservaNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendReservationReminder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $reservation;
    protected $notificationType;
    /**
     * Create a new job instance.
     */
    public function __construct(Reserva $reservation, $notificationType = 'confirmation')
    {
        $this->reservation = $reservation;
        $this->notificationType = $notificationType;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //$user = Persona::find(122);
        $user = Persona::where('id', 122)->first();
        if ($user) {
            $user->notify(new ReservaNotification($this->reservation, $this->notificationType));
        }
    }
}
