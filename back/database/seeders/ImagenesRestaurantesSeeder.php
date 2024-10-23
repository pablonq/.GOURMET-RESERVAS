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
    $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F411ad00e-84e7-4e27-97b2-39c3f5d5dbc8?alt=media&token=7e4c6b53-ccee-4b06-ba33-33fc4cb4f444';
    $imagenesRestaurante->idRestaurante = 1;
    $imagenesRestaurante->save();

    $imagenesRestaurante = new ImagenesRestaurante();
    $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fe4326d89-5db8-48e9-9f15-a5df282550c1?alt=media&token=860bdd1f-baf0-467d-a0e2-0e55a5276584';
    $imagenesRestaurante->idRestaurante = 2;
    $imagenesRestaurante->save();

    $imagenesRestaurante = new ImagenesRestaurante();
    $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F247d9edd-102b-41f6-be25-b11e6c774e2e?alt=media&token=d0043772-5ab2-428a-b3ed-24a41d3950e5';
    $imagenesRestaurante->idRestaurante = 2;
    $imagenesRestaurante->save();

    $imagenesRestaurante = new ImagenesRestaurante();
    $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fc260c3f9-ba3e-4157-9394-c4de50a1354a?alt=media&token=2652fe61-1ee8-4a99-b88d-486c4ac3fdb5';
    $imagenesRestaurante->idRestaurante = 3;
    $imagenesRestaurante->save();

    $imagenesRestaurante = new ImagenesRestaurante();
    $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2Fe6d1ad67-2d82-4dc3-acb7-bcdccca460fb?alt=media&token=9904d9c4-48c2-408b-bd97-310c952dda23';
    $imagenesRestaurante->idRestaurante = 3;
    $imagenesRestaurante->save();

    $imagenesRestaurante = new ImagenesRestaurante();
    $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F94cb4a40-b199-4a85-8bef-6c1df9a93ca6?alt=media&token=9d760713-805b-4f5a-9971-042b592a0f88';
    $imagenesRestaurante->idRestaurante = 4;
    $imagenesRestaurante->save();


    $imagenesRestaurante = new ImagenesRestaurante();
    $imagenesRestaurante->imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/gourmet-reservas.appspot.com/o/restaurantes%2F01f660c5-bee4-4cda-a9f0-db45c4e26ec4?alt=media&token=998adc5a-46e7-435b-b3cc-6a88ed8313b7';
    $imagenesRestaurante->idRestaurante = 4;
    $imagenesRestaurante->save();
  }
}
