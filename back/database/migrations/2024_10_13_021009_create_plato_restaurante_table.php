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
            $table->id();
            $table->foreignId('plato_id')->constrained()->OnDelete('cascade');
            $table->foreignId('restaurante_id')->constrained()->OnDelete('cascade');
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
