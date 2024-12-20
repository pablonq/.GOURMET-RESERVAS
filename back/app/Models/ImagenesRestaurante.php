<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ImagenesRestaurante extends Model
{
    use HasFactory;
    protected $fillable = [
     'imagenUrl',
     'idRestaurante'
     ];

     public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }
}
