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
        Schema::create('restaurantes', function (Blueprint $table) {
          $table->id();
          $table->string('nombreRes');
          
          $table->text('descripcion');
          $table->string('tipo');
          $table->string('telefono');
          $table->string('email');
          $table->string('contrasenia');
          $table->integer('capacidadTotal');
          // Campos separados para cada parte de la dirección
              
          $table->string('aceptaEventos');
          $table->timestamp('fechaBaja')->nullable();
          $table->timestamp('fechaAlta')->nullable();
          $table->string('rol')->default('restaurante');

          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restaurantes');
    }
};
