<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    
    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be filled in when creating or updating a User instance.
     * 'name', 'email', and 'password' are included here, which means these fields can be
     * set when using Eloquent's create or update methods.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    
    /**
     * The attributes that should be hidden for serialization.
     *
     * These are the fields that should not be included when the User instance is converted to an array or JSON.
     * 'password' and 'remember_token' are included here, which means these fields will be excluded
     * when the User instance is serialized. This is important for security reasons, as we do not want
     * to expose sensitive information like passwords or tokens.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
