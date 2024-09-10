<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pago extends Model
{
    use HasFactory;

    protected $fillable = [
        'idReserva',
        'monto',
        'fechaPago',
        'metodoPago',
        'estado'
    ];

    public function reservas(): BelongsTo
    {
        return $this->belongsTo(Reserva::class);
    }

    public function usuarios(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }
}
