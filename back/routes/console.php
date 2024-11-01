<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

// routes/console.php

Artisan::command('logs:clear', function () {
  file_put_contents(storage_path('logs/laravel.log'), '');
  $this->info('Logs limpiados correctamente.');
})->describe('Limpiar el archivo laravel.log');
