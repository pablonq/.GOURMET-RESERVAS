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
        Schema::create('pagos', function (Blueprint $table) {
            $table->id();
            /* $table->BigInteger('idReserva')->unsigned()->nullable(); */
            $table->integer('monto');
            $table->timestamp('fechaPago');
            $table->string('metodoPago');
            $table->string('estado');
            /* $table->BigInteger('idUsuario')->unsigned()->nullable(); */
            $table->string('payment_id')->nullable();
            $table->timestamps();

            $table->foreignId('idUsuario')->references('id')->on('usuarios')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('idReserva')->references('id')->on('reservas')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pagos');
    }
};
