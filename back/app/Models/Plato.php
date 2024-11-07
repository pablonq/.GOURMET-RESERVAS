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
        return $this->belongsToMany(Restaurante::class, 'plato_restaurante', 'plato_id', 'restaurante_id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'plato_tag', 'plato_id', 'tag_id');
    }
}
