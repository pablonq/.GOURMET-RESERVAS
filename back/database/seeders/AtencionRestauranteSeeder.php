<?php

namespace Database\Seeders;

use App\Models\AtencionRestaurante;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AtencionRestauranteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Martes';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2= '17:00:00';
        $horarios->endTime2= '23:30:00';
        $horarios->idRestaurante= 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Miercoles';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2= '17:00:00';
        $horarios->endTime2= '23:30:00';
        $horarios->idRestaurante= 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Jueves';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2= '17:00:00';
        $horarios->endTime2= '23:30:00';
        $horarios->idRestaurante= 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Vierves';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2= '17:00:00';
        $horarios->endTime2= '23:30:00';
        $horarios->idRestaurante= 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Sabado';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2= '17:00:00';
        $horarios->endTime2= '23:45:00';
        $horarios->idRestaurante= 3;
        $horarios->save();

        $horarios = new AtencionRestaurante();
        $horarios->dia = 'Domingo';
        $horarios->startTime1 = '08:30:00';
        $horarios->endTime1 = '14:00:00';
        $horarios->startTime2= '17:00:00';
        $horarios->endTime2= '23:45:00';
        $horarios->idRestaurante= 3;
        $horarios->save();

    }
}
