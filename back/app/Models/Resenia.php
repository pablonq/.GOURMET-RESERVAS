<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Resenia extends Model
{
    use HasFactory;

    protected $fillable = [
        'idUsuario',
        'idRestaurante',
        'idReserva',
        'calificacion',
        'comentario',
        'respuestaDuenio',
    ];

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'idUsuario');
    }

    public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class,  'idRestaurante');
    }

    public function reserva(): BelongsTo
    {
        return $this->belongsTo(Reserva::class, 'idReserva');
    }

}
