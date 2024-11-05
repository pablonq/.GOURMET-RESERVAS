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

class Restaurante extends Model
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'nombreRes',
        'direccion',
        'descripcion',
        'tipo',
        'telefono',
        'email',
        'contrasenia',
        'capacidadTotal',

        'aceptaEventos',
        'fechaBaja',
        'fechaAlta'

    ];


    public function duenios(): BelongsTo
    {
        return $this->belongsTo(Duenio::class);
    }

    public function resenias(): HasMany
    {
        return $this->hasMany(Resenia::class);
    }

    public function menus(): HasMany
    {
        return $this->hasMany(Menu::class);
    }

    public function mesas(): HasMany
    {
        return $this->hasMany(Mesa::class);
    }

    public function reservas(): HasMany
    {
        return $this->hasMany(Reserva::class, 'idRestaurante');
    }

    public function notifications(): HasMany
    {
        return $this->hasMany(notification::class);
    }

    public function platos(): BelongsToMany
    {
        return $this->belongsToMany(Plato::class, 'plato_restaurante', 'restaurante_id', 'plato_id');
    }

    public function atencionRestaurantes(): HasMany
    {
        return $this->hasMany(AtencionRestaurante::class);
    }

    public function imagenesRestaurantes(): HasMany
    {
        return $this->hasMany(ImagenesRestaurante::class);
    }

    public function direccion()
    {
        return $this->morphOne(Direccione::class, 'direccionable');
    }
}
