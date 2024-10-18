<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AtencionRestaurante extends Model
{
    use HasFactory;
    protected $fillable = [
      'dia',
      'startTime1',
      'endTime1',
      'startTime2',
      'endTime2',
      'idRestaurante'
    ];

    public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }

}
