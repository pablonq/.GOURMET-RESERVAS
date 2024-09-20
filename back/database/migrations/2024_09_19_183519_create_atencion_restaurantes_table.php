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
        Schema::create('atencion_restaurantes', function (Blueprint $table) {
            $table->id();
            $table->string('dia');
            $table->time('horarioUno', precision: 0);
            $table->time('horarioDos', precision: 0);
            $table->foreignId('idRestaurante')
            ->references('id')
            ->on('restaurantes')
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('atencion_restaurantes');
    }
};
