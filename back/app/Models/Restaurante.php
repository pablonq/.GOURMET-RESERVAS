<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
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


    public function duenio()
    {
        return $this->hasOne(Duenio::class, 'idRestaurante', 'id');
    }

    public function resenias(): HasMany
    {
        return $this->hasMany(Resenia::class, 'idRestaurante', 'id');
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
        return $this->hasMany(AtencionRestaurante::class, 'idRestaurante', 'id');
    }

    public function imagenesRestaurantes(): HasMany
    {
        return $this->hasMany(ImagenesRestaurante::class, 'idRestaurante', 'id');
    }

    // esto para traer solo una imagen
    public function imagenPrincipal(): HasOne
    {
        return $this->hasOne(ImagenesRestaurante::class, 'idRestaurante', 'id');
    }

    public function direccion()
    {
        return $this->morphOne(Direccione::class, 'direccionable');
    }

    public function calcularPromedioPuntuacion()
    {
        $resenias = Resenia::where('idRestaurante', $this->id)->get();
        $totalResenias = $resenias->count();

        if ($totalResenias === 0) {
            return 0; 
        }

        $puntuacionTotal = $resenias->sum('calificacion');
        return $puntuacionTotal / $totalResenias;
    }
}
