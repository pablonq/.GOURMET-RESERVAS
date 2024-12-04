<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Resenia;
use App\Models\Reserva;
use Carbon\Carbon;
use Log;

class ReseniaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $comentarios = [
          "La comida fue excelente y deliciosa.",
          "El servicio fue rápido y muy atento.",
          "El ambiente era muy agradable y limpio.",
          "No hubo mucho tiempo de espera.",
          "El menú ofrecía muchas opciones interesantes.",
          "El lugar era acogedor y bien decorado.",
          "El precio fue razonable por la calidad.",
          "Definitivamente volveremos en otra ocasión.",
          "Fue una experiencia memorable y única.",
          "Los mozos fueron muy amables siempre."
      ];

      
      $respuestasDuenio = [
          "Gracias por su reseña.",
          "Nos alegra que le haya gustado.",
          "Estamos encantados de servirle.",
          "Esperamos su próxima visita.",
          "Gracias por elegirnos siempre."
      ];

      
      $reservas = Reserva::where('estado', '<>', 'cancelada')->get();

      if ($reservas->isEmpty()) {
          
          return;
      }

      foreach ($reservas as $reserva) {
          try {
              $resenia = new Resenia();
              $resenia->idReserva = $reserva->id; 
              $resenia->idUsuario = $reserva->idUsuario; 
              $resenia->idRestaurante = $reserva->idRestaurante; 
              $resenia->calificacion = rand(3, 5); 
              $resenia->comentario = $comentarios[array_rand($comentarios)]; 
              $resenia->respuestaDuenio = $respuestasDuenio[array_rand($respuestasDuenio)]; 

              $resenia->save();
             /*  Log::info("Reseña creada: Reserva {$reserva->id}, Usuario {$reserva->idUsuario}"); */
          } catch (\Exception $e) {
              Log::error("Error al crear reseña para reserva {$reserva->id}: " . $e->getMessage());
          }
      }
  }
    }

