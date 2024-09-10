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
        Schema::create('platos', function (Blueprint $table) {
            $table->id();
            $table->BigInteger('idMenu')->unsigned()->nullable();
            $table->string('nombrePlato');
            $table->string('descripcion');
            $table->string('precio');
            $table->string('informacionNutricional');
            $table->string('tag');
            $table->string('categoria');
            $table->string('imagen');

            $table->timestamps();

            $table->foreign('idMenu')->references('id')->on('menues')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('platos');
    }
};
