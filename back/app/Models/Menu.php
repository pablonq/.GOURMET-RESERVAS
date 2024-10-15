<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class Menu extends Model
{
  use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'nombre',
        'descripcion',
        'tipo',
         
        'imagen',
        'idRestaurante',
    ];

    public function restaurantes(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }

    
    public function platos()
    {
        return $this->belongsToMany(Plato::class);
    }
}
