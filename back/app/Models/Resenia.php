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

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }

    public function restaurante(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }
}
