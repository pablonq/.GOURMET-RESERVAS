<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Duenio extends Model
{
    use HasFactory;

    protected $fillable = [
        'dni',
        'idRestaurante',
        'idPersona'
    ];

    public function persona(): BelongsTo
    {
        return $this->belongsTo(Persona::class, 'idPersona', 'id'); // Relación con Persona, un a uno
    }

    public function restaurante(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class, 'idRestaurante', 'id'); // Relación con Restaurante, un a uno
    }
}
