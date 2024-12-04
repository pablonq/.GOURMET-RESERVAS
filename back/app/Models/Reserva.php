<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Reserva extends Model
{
    use HasFactory;
    

    protected $fillable = [
        'idUsuario',
        'idRestaurante',
        'fechaReserva',
        'horaReserva',
        'estado',
        'notaEspecial',
    ];

    public function mesas(): BelongsToMany
    {
        return $this->belongsToMany(Mesa::class, 'table_reserva_mesa', 'idReserva', 'idMesa');
    }

    public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class, 'idRestaurante');
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
