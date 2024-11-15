<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Duenio;

class DuenioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $duenio = new Duenio();
        $duenio->dni = '98765432';
        $duenio->idRestaurante = 1;
        $duenio->idPersona = 2;
        $duenio->save();

        $duenio = new Duenio();
        $duenio->dni = '12345678';
        $duenio->idRestaurante = 2;
        $duenio->idPersona = 3;
        $duenio->save();

        $duenio = new Duenio();
        $duenio->dni = '87654321';
        $duenio->idRestaurante = 3;
        $duenio->idPersona = 4;
        $duenio->save();

        $duenio = new Duenio();
        $duenio->dni = '11111111';
        $duenio->idRestaurante = 4;
        $duenio->idPersona = 5;
        $duenio->save();

        $duenio = new Duenio();
        $duenio->dni = '22222222';
        $duenio->idRestaurante = 5;
        $duenio->idPersona = 6;
        $duenio->save();

        $duenio = new Duenio();
        $duenio->dni = '33333333';
        $duenio->idRestaurante = 6;
        $duenio->idPersona = 7;
        $duenio->save();

        $duenio = new Duenio();
        $duenio->dni = '44444444';
        $duenio->idRestaurante = 7;
        $duenio->idPersona = 8;
        $duenio->save();

        $duenio = new Duenio();
        $duenio->dni = '55555555';
        $duenio->idRestaurante = 8;
        $duenio->idPersona = 9;
        $duenio->save();

        $duenio = new Duenio();
        $duenio->dni = '66666666';
        $duenio->idRestaurante = 9;
        $duenio->idPersona = 10;
        $duenio->save();


    }
}
