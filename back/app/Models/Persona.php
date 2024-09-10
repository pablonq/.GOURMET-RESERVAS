<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;


class Persona extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'apellido',
        'fechaNac',
        'email',
       'telefono',
        'ciudad'
    ];

    public function usarios(): HasOne
    {
        return $this->hasOne(Usuario::class);
    }

    public function duenios(): HasOne
    {
        return $this->hasOne(Duenio::class);
    }
}
