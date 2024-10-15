<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Mesa extends Model
{
    use HasFactory;

    protected $fillable = [
     'idRestaurante',
      'numeroMesa',
      'cantidadPersonas',
       'estado'
    ];


    public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }


    public function reservas(): BelongsToMany
    {
        return $this->belongsToMany(Reserva::class, 'table_reserva_mesa', 'idMesa', 'idReserva');
    }
}
