<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Restaurante extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombreRes',
        'direccion',
        'descripcion',
        'tipo',
        'telefono',
        'email',
        'contrasenia',
        'capacidadTotal',
        'diasAtencion',
        'horaApertura',
        'horaCierre',
        'imagen',
        'coordenadas',
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

    public function menues(): HasMany
    {
        return $this->hasMany(Menu::class);
    }

    public function mesas(): HasMany
    {
        return $this->hasMany(Mesa::class);
    }

    public function reservas(): HasMany
    {
        return $this->hasMany(Reserva::class);
    }

    public function notificaciones(): HasMany
    {
        return $this->hasMany(Notificacion::class);
    }

    public function platos(): BelongsToMany
    {
        return $this->belongsToMany(Plato::class, 'platosRestaurantes');
    }

}
