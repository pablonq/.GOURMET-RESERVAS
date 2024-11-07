<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Notifications\Notifiable;

class Persona extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'nombre',
        'apellido',
        'fechaNac',
        'email',
        'telefono',
        'ciudad'
    ];

    public function usuario(): HasOne
    {
        return $this->hasOne(Usuario::class); // Relación con Usuario, un a uno
    }

    public function duenio(): HasOne
    {
        return $this->hasOne(Duenio::class, 'idPersona', 'id'); // Relación con Duenio, un a uno
    }
}
