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
        Schema::create('plato_restaurante', function (Blueprint $table) {
          $table->BigInteger('idRestaurante')->unsigned()->nullable();
          $table->BigInteger('idPlato')->unsigned()->nullable();

          $table->primary(['idRestaurante', 'idPlato']);

          $table->foreign('idRestaurante')->references('id')->on('restaurante')->onDelete('cascade')->onUpdate('cascade');
          $table->foreign('idPlato')->references('id')->on('plato')->onDelete('cascade')->onUpdate('cascade');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plato_restaurante');
    }
};
