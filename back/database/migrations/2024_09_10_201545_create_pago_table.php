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
        Schema::create('pago', function (Blueprint $table) {
            $table->id();
            $table->BigInteger('idReserva')->unsigned()->nullable();
            $table->integer('monto');
            $table->date('fechaPago');
            $table->string('metodoPago');
            $table->string('estado');
            $table->BigInteger('idUsuario')->unsigned()->nullable();
            $table->timestamps();

            $table->foreign('idUsuario')->references('id')->on('usuario')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idReserva')->references('id')->on('reserva')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pago');
    }
};
