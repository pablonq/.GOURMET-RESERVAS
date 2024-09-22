<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nombreUsuario');
            $table->string('contrasenia');
          $table->string('avatarUrl')->nullable();
          $table->timestamp('fechaRegistro')->nullable();
          $table->timestamp('fechaBaja')->nullable();
            $table->timestamps();
            $table->string('rol')->default('usuario');
            /* $table->BigInteger('idPersona')->unsigned()->nullable(); */

            $table->foreignId('idPersona')->references('id')->on('personas')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
