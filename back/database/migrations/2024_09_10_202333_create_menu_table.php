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
        Schema::create('menu', function (Blueprint $table) {
            $table->id();
            $table->BigInteger('idRestaurante')->unsigned()->nullable();
            $table->string('nombre');
            $table->string('descripcion');
            $table->string('tipo');
            $table->timestamps();
            $table->string('imagen');

            $table->foreign('idRestaurante')->references('id')->on('restaurante')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu');
    }
};
