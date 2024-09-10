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
        Schema::create('reservas', function (Blueprint $table) {
            $table->id();
            $table->BigInteger('idUsuario')->unsigned()->nullable();
            $table->BigInteger('idRestaurante')->unsigned()->nullable();
            $table->BigInteger('idMesa')->unsigned()->nullable();
            $table->timestamp('fechaReserva')->nullable();
            $table->time('horaReserva', precision: 0);
            $table->string('estado');
            $table->string('notaEspecial');
            $table->timestamps();

            $table->foreign('idRestaurante')->references('id')->on('restaurantes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idMesa')->references('id')->on('mesas')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idUsuario')->references('id')->on('usuarios')->onDelete('cascade')->onUpdate('cascade');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservas');
    }
};
