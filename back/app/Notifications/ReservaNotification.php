<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReservaNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    protected $reservation;
    public function __construct($reservation)
    {
        $this->reservation = $reservation;
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
        return (new MailMessage)
            ->subject('Confirmación de su Reserva')
            ->greeting('Hola!')
            ->line('Su reserva ha sido confirmada.')
            ->action('Ver Reserva', url('/reservas/' . $this->reservation->id))
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
            'descripcion' => 'Su reserva ha sido confirmada.',
            'fecha' => now(),
            'idRestaurante' => $this->reservation->idRestaurante,
            'idUsuario' => $notifiable->id,
        ];
    }
}
