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
        Schema::create('table_reserva_mesa', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idReserva')->constrained('reservas')->onDelete('cascade');
            $table->foreignId('idMesa')->constrained('mesas')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_reserva_mesa');
    }
};
