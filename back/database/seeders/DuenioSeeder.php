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
        /*1*/
        $duenio = new Duenio();
        $duenio->dni = '98765432';
        $duenio->idRestaurante = 1;
        $duenio->idPersona = 2;
        $duenio->save();

        /*2*/
        $duenio = new Duenio();
        $duenio->dni = '12345678';
        $duenio->idRestaurante = 2;
        $duenio->idPersona = 3;
        $duenio->save();

        /*3*/
        $duenio = new Duenio();
        $duenio->dni = '87654321';
        $duenio->idRestaurante = 3;
        $duenio->idPersona = 4;
        $duenio->save();

        /*4*/
        $duenio = new Duenio();
        $duenio->dni = '11111111';
        $duenio->idRestaurante = 4;
        $duenio->idPersona = 5;
        $duenio->save();

        /*5*/
        $duenio = new Duenio();
        $duenio->dni = '22222222';
        $duenio->idRestaurante = 5;
        $duenio->idPersona = 6;
        $duenio->save();

        /*6*/
        $duenio = new Duenio();
        $duenio->dni = '33333333';
        $duenio->idRestaurante = 6;
        $duenio->idPersona = 7;
        $duenio->save();

        /*7*/
        $duenio = new Duenio();
        $duenio->dni = '44444444';
        $duenio->idRestaurante = 7;
        $duenio->idPersona = 8;
        $duenio->save();

        /*8*/
        $duenio = new Duenio();
        $duenio->dni = '55555555';
        $duenio->idRestaurante = 8;
        $duenio->idPersona = 9;
        $duenio->save();

        /*9*/
        $duenio = new Duenio();
        $duenio->dni = '66666666';
        $duenio->idRestaurante = 9;
        $duenio->idPersona = 10;
        $duenio->save();

        /*10*/
        $duenio = new Duenio();
        $duenio->dni = '7777777';
        $duenio->idRestaurante = 10;
        $duenio->idPersona = 11;
        $duenio->save();

        /*11*/
        $duenio = new Duenio();
        $duenio->dni = '8888888';
        $duenio->idRestaurante = 11;
        $duenio->idPersona = 12;
        $duenio->save();
        
        /*12*/
        $duenio = new Duenio();
        $duenio->dni = '999994115';
        $duenio->idRestaurante = 12;
        $duenio->idPersona = 13;
        $duenio->save();

        /*13*/
        $duenio = new Duenio();
        $duenio->dni = '7713546';
        $duenio->idRestaurante = 13;
        $duenio->idPersona = 14;
        $duenio->save();

        /*14*/
        $duenio = new Duenio();
        $duenio->dni = '35181866';
        $duenio->idRestaurante = 14;
        $duenio->idPersona = 15;
        $duenio->save();

        /*15*/
        $duenio = new Duenio();
        $duenio->dni = '18122166';
        $duenio->idRestaurante = 15;
        $duenio->idPersona = 16;
        $duenio->save();

        /*16*/
        $duenio = new Duenio();
        $duenio->dni = '8798536566';
        $duenio->idRestaurante = 16;
        $duenio->idPersona = 17;
        $duenio->save();

        /*17*/
        $duenio = new Duenio();
        $duenio->dni = '8798536566';
        $duenio->idRestaurante = 17;
        $duenio->idPersona = 18;
        $duenio->save();

        /*18*/
        $duenio = new Duenio();
        $duenio->dni = '8798536566';
        $duenio->idRestaurante = 18;
        $duenio->idPersona = 19;
        $duenio->save();

        /*19*/
        $duenio = new Duenio();
        $duenio->dni = '81142566';
        $duenio->idRestaurante = 19;
        $duenio->idPersona = 20;
        $duenio->save();

        /*20*/
        $duenio = new Duenio();
        $duenio->dni = '8798536566';
        $duenio->idRestaurante = 20;
        $duenio->idPersona = 21;
        $duenio->save();

        
    }
}
