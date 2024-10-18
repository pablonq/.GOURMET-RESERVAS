<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'idUsuario',
        'idRestaurante',
        'fecha',
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
