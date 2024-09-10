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

    public function personas(): BelongsTo
    {
        return $this->belongsTo(Persona::class);
    }

    public function restaurantes(): HasOne
    {
        return $this->hasOne(Restaurante::class);
    }
}
