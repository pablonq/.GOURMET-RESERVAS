<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Plato extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'nombrePlato',
        'descripcion',
        'precio',
        'informacionNutricional',
        'tag',
        'categoria',
        'imagen'
    ];

    public function menus()
    {
        return $this->belongsToMany(Menu::class, 'plato_menu', 'plato_id', 'menu_id');
    }

    public function restaurantes()
    {
        return $this->belongsToMany(Restaurante::class);
    }

    

}
