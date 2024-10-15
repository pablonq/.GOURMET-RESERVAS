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
            $table->time('startTime1', precision: 0)->nullable();
            $table->time('endTime1', precision: 0)->nullable();
            $table->time('startTime2', precision: 0)->nullable();
            $table->time('endTime2', precision: 0)->nullable();
            
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
