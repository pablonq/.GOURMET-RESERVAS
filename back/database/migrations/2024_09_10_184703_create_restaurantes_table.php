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
            $table->string('direccion');
            $table->text('descripcion');
            $table->string('tipo');
            $table->string('telefono');
            $table->string('email');
            $table->string('contrasenia');
            $table->integer('capacidadTotal');
           /*  $table->string('diasAtencion'); */ // O $table->json('diasAtencion')->nullable();

            /* $table->time('horaApertura', precision: 0);
            $table->time('horaCierre', precision: 0); */
            $table->string('imagen')->nullable();
            $table->geometry('coordenadas')->nullable(); 
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
