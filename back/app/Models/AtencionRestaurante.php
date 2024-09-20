<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AtencionRestaurante extends Model
{
    use HasFactory;
    protected $fillable = [
      'dia',
      'horarioUno',
      'horarioDos',
      'idRestaurante'
    ];

    public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }

}
