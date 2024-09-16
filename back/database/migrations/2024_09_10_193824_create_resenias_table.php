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
        Schema::create('resenias', function (Blueprint $table) {
            $table->id();
            /* $table->BigInteger('idUsuario')->unsigned()->nullable();
            $table->BigInteger('idRestaurante')->unsigned()->nullable(); */
            $table->string('calificacion');
            $table->string('comentario');
            $table->string('respuestaDuenio')->nullable();
            $table->timestamp('fechaResenia');
            $table->string('imagen')->nullable();
            $table->timestamps();

            $table->foreignId('idRestaurante')->references('id')->on('restaurantes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('idUsuario')->references('id')->on('usuarios')->onDelete('cascade')->onUpdate('cascade');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resenias');
    }
};
