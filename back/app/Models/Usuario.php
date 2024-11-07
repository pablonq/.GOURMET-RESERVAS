<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
      'idPersona',
      'nombreUsuario',
      'contrasenia',
      'avatarUrl',
      'fechaRegistro',
  ];  

  public function persona(): BelongsTo
  {
      return $this->belongsTo(Persona::class, 'idPersona'); // Asegúrate de especificar la clave foránea
  }

    public function reservas(): HasMany
    {
        return $this->hasMany(Reserva::class);
    }

    public function resenias(): HasMany
    {
        return $this->hasMany(Resenia::class);
    }

    public function notifications(): HasMany
    {
        return $this->hasMany( notification::class);
    }

    public function direccion()
    {
        return $this->morphOne(Direccione::class, 'direccionable');
    }
}
