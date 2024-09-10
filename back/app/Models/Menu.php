<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Menu extends Model
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

    public function restaurante(): BelongsTo
    {
        return $this->belongsTo(Restaurante::class);
    }

    public function platos(): BelongsToMany
    {
        return $this->belongsToMany(Plato::class);
    }
}
