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
      Schema::create('direcciones', function (Blueprint $table) {
        $table->id();

        // Campos de dirección
        $table->string('calle');      
        $table->string('altura');     
        $table->string('ciudad');     
        $table->string('provincia');  
        $table->string('pais');       

        // Relación polimórfica
        $table->unsignedBigInteger('direccionable_id');
        $table->string('direccionable_type');

        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('direcciones');
    }
};
