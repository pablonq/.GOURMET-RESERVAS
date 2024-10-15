<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ImagenesRestaurante;

class ImagenesRestaurantesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $imagenesRestaurante = new ImagenesRestaurante();
          $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F0080f959-f2f2-4dc2-83ff-6ea81487084f?alt=media&token=3bce3203-432a-4949-a56c-a01051d93d99';
        $imagenesRestaurante->idRestaurante = 1;
        $imagenesRestaurante->save();

        $imagenesRestaurante = new ImagenesRestaurante();
          $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F557230dc-e8a5-41fc-91fd-ea8bc8a5f2af?alt=media&token=6b85a965-e06d-4139-924e-36ac56ba9d87';
        $imagenesRestaurante->idRestaurante = 2;
        $imagenesRestaurante->save();

        $imagenesRestaurante = new ImagenesRestaurante();
          $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fc260c3f9-ba3e-4157-9394-c4de50a1354a?alt=media&token=2652fe61-1ee8-4a99-b88d-486c4ac3fdb5';
        $imagenesRestaurante->idRestaurante = 3;
        $imagenesRestaurante->save();

        $imagenesRestaurante = new ImagenesRestaurante();
          $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F94cb4a40-b199-4a85-8bef-6c1df9a93ca6?alt=media&token=9d760713-805b-4f5a-9971-042b592a0f88';
        $imagenesRestaurante->idRestaurante = 4;
        $imagenesRestaurante->save();
    }
}
