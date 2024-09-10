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
        Schema::create('duenio', function (Blueprint $table) {
            $table->id();
            $table->string('dni');
            $table->unsignedBigInteger('idRestaurante')->unsigned()->nullable();
            $table->unsignedBigInteger('idPersona')->unsigned()->nullable();

            $table->timestamps();

            $table->foreign('idRestaurante')->references('id')->on('restaurante')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idPersona')->references('id')->on('persona')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('duenio');
    }
};
