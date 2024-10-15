<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notificacion extends Model
{
    use HasFactory;
    protected $table = 'notificaciones';

    protected $fillable = [
        'descripcion',
        'idUsuario',
        'idRestaurante',
        'fecha'
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
