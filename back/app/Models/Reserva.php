<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Reserva extends Model
{
    use HasFactory;

    protected $fillable = [
        'idUsuario',
        'idRestaurante',
        'idMesa',
        'fechaReserva',
        'horaReserva',
        'estado',
        'notaEspecial',
    ];

    public function mesas(): BelongsTo
    {
        return $this->belongsTo(Mesa::class);
    }

    public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }

    public function usuarios(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }

    public function pagos(): HasOne
    {
        return $this->hasOne(Pago::class);
    }
}
