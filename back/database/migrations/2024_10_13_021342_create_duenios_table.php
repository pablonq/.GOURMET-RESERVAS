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
        Schema::create('duenios', function (Blueprint $table) {
            $table->id();
            $table->string('dni');
           

            $table->timestamps();

            $table->foreignId('idRestaurante')->references('id')->on('restaurantes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('idPersona')->references('id')->on('personas')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('duenios');
    }
};
