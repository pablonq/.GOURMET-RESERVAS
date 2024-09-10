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
        Schema::create('notificacion', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion');
            $table->BigInteger('idUsuario')->unsigned()->nullable();
            $table->BigInteger('idRestaurante')->unsigned()->nullable();
            $table->timestamp('fecha');
            $table->timestamps();

            $table->foreign('idRestaurante')->references('id')->on('restaurante')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idUsuario')->references('id')->on('usuario')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notificacion');
    }
};
