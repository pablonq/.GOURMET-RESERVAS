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
        Schema::create('mesas', function (Blueprint $table) {
            $table->id();
           /*  $table->BigInteger('idRestaurante')->unsigned()->nullable(); */
            $table->integer('numeroMesa');
            $table->integer('cantidadPersonas');
            $table->boolean('estado');
            $table->timestamps();

            $table->foreignId('idRestaurante')->references('id')->on('restaurantes')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mesas');
    }
};
