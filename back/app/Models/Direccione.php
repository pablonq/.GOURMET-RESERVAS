<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direccione extends Model
{
    use HasFactory;
    protected $fillable = [
      'calle', 'altura', 'ciudad', 'provincia', 'pais', 'direccionable_id', 'direccionable_type'
  ];

  // Relación polimórfica
  public function direccionable()
  {
      return $this->morphTo();
  }
}
