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
        Schema::create('platosRestaurantes', function (Blueprint $table) {
          $table->BigInteger('idRestaurante')->unsigned()->nullable();
          $table->BigInteger('idPlato')->unsigned()->nullable();

          $table->primary(['idRestaurante', 'idPlato']);

          $table->foreign('idRestaurante')->references('id')->on('restaurantes')->onDelete('cascade')->onUpdate('cascade');
          $table->foreign('idPlato')->references('id')->on('platos')->onDelete('cascade')->onUpdate('cascade');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('platosRestaurantes');
    }
};
