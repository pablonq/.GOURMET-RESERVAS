<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;


class ReservaNotification extends notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    protected $reservation;
    protected $notificationType;
    public function __construct($reservation, $notificationType = 'confirmation')
    {
        $this->reservation = $reservation;
        $this->notificationType = $notificationType;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        if ($this->notificationType === 'reminder') {
            return (new MailMessage)
                ->subject('Recordatorio de su Reserva')
                ->greeting('Hola!')
                ->line('Este es un recordatorio de su reserva.')
                ->line('Fecha de Reserva: ' . $this->reservation->fechaReserva)
                ->line('Hora de Reserva: ' . $this->reservation->horaReserva)
                ->action('Cancelar Reserva',  url('http://localhost:5173/infoReserva/' . $this->reservation->id))
                ->line('¡Esperamos verlo pronto!');
        }

       else if ($this->notificationType === 'warning') {
            return (new MailMessage)
                ->subject('Aviso Nueva Reserva')
                ->greeting('Hola!')
                ->line('Este es un aviso de una nueva reserva.')
                ->line('Reserva numero: ' . $this->reservation->id)
                ->line('Fecha de Reserva: ' . $this->reservation->fechaReserva)
                ->line('Hora de Reserva: ' . $this->reservation->horaReserva)
                ->line('Estado Reserva: ' . $this->reservation->estado);
        }

        return (new MailMessage)
            ->subject('Confirmación de su Reserva')
            ->greeting('Hola!')
            ->line('Su reserva ha sido confirmada.')
            ->line('Fecha de Reserva:' . $this->reservation->fechaReserva)
            ->line('Hora de Reserva:' . $this->reservation->horaReserva)
            ->action('Ver Reserva',  url('http://localhost:5173/infoReserva/' . $this->reservation->id))
            ->line('¡Gracias por elegirnos!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {

        return [
            'idRestaurante' => $this->reservation->idRestaurante,
            'idUsuario' => $this->reservation->idUsuario,
            'idReserva' => $this->reservation->id,
            'fecha' => $this->reservation->fechaReserva,
            'descripcion' =>  $this->notificationType === 'reminder'
                ? 'Recordatorio de su reserva.'
                : 'Su reserva ha sido creada.',
        ];
    }
}
