<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Resenia extends Model
{
    use HasFactory;

    protected $fillable = [
        'idUsuario',
        'idRestaurante',
        'calificacion',
        'comentario',
        'respuestaDuenio',
        'imagen'
    ];

    public function usuarios(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }

    public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }
}
