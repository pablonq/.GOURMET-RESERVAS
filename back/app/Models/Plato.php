<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Plato extends Model
{
    use HasFactory;

    protected $fillable = [
        'idMenu',
        'nombrePlato',
        'descripcion',
        'precio',
        'informacionNutricional',
        'tag',
        'categoria',
        'imagen'
    ];

    public function menus(): BelongsToMany
    {
        return $this->belongsToMany(Menu::class);
    }

    public function restaurantes(): BelongsToMany
    {
        return $this->belongsToMany(Restaurante::class, 'platosRestaurantes');
    }

}
