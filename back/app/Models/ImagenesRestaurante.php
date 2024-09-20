<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagenesRestaurante extends Model
{
    use HasFactory;
    protected $fillable = [
     'imagen',
     'idRestaurante'
     ];

     public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }
}
