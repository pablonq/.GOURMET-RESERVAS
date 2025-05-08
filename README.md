
## TP FINAL TECNICATURA UNIVERSITARIA EN DESARROLLO WEB

### `Integrantes :`
<h3>Alumno : Paredes Paulina Sarai</h3>
<h3>Legajo: Fai - 4345</h3>

<h3>Alumno : Navarro Pablo Andres </h3>
<h3>Legajo : Fai - 4284</h3>

## Descripción

**.GOURMET-RESERVAS** es una plataforma web diseñada para la gestión de reservas en restaurantes. Permite a los usuarios realizar reservas, dejar reseñas y calificaciones, mientras que los restaurantes pueden gestionar sus menús, horarios y perfiles. La aplicación está dividida en dos partes principales: el frontend desarrollado con **React** y **Vite**, y el backend construido con **Laravel**.

## Características Principales

### Para Usuarios
- Registro y autenticación de usuarios.
- Realización de reservas en restaurantes.
- Calificación y reseñas de restaurantes.
- Subida de imágenes para reseñas.

### Para Restaurantes
- Gestión de menús y platos.
- Configuración de horarios y capacidad.
- Gestión de reservas y respuestas a reseñas.
- Perfil del restaurante con información detallada.

### Funcionalidades Generales
- Sistema de notificaciones para recordatorios de reservas.
- Visualización de planos de mesas.
- Integración con **Firebase** para la gestión de imágenes.
- Uso de **Leaflet** para mapas interactivos.

## Tecnologías Utilizadas

### Frontend
- **React** con **Vite**.
- **TailwindCSS** para estilos.
- **React Router** para navegación.
- **Firebase** para almacenamiento de imágenes.

### Backend
- **Laravel** como framework principal.
- **MySQL** como base de datos.
- **Artisan** para tareas programadas y comandos personalizados.

### Otros
- **Leaflet** para mapas interactivos.
- **ESLint** para mantener la calidad del código.

## Instalación y Configuración

### Requisitos Previos
- **Node.js** y **npm** instalados.
- **Composer** para gestionar dependencias de Laravel.
- Servidor local como **XAMPP** o **Laragon**.

### Configuración del Backend
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd .GOURMET-RESERVAS/back

2. Instala las dependencias de Laravel:
composer install

3. Configura el archivo .env:
APP_NAME=.GOURMET-RESERVAS
APP_ENV=local
APP_KEY=base64:GENERATE_KEY
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gourmet_reservas
DB_USERNAME=root
DB_PASSWORD=

FIREBASE_API_KEY=TU_API_KEY

4. Genera la clave de la aplicación:
php artisan key:generate

5. Ejecuta las migraciones y seeders:
php artisan migrate --seed

6. Inicia el servidor:
php artisan serve


### Configuración del Frontend

1. Ve al directorio del frontend:
  cd ../front

2. Instala las dependencias:
  npm install

3. Configura el archivo .env si es necesario.
4. Inicia el servidor de desarrollo:
  npm run dev

  .GOURMET-RESERVAS/
├── back/                # Backend con Laravel
│   ├── app/             # Código fuente de Laravel
│   ├── config/          # Configuración de Laravel
│   ├── database/        # Migraciones y seeders
│   ├── public/          # Archivos públicos
│   ├── resources/       # Vistas Blade
│   ├── routes/          # Rutas de la API
│   └── tests/           # Pruebas del backend
├── front/               # Frontend con React
│   ├── public/          # Archivos públicos
│   ├── src/             # Código fuente de React
│   ├── [tailwind.config.js](http://_vscodecontentref_/1) # Configuración de TailwindCSS
│   └── [vite.config.js](http://_vscodecontentref_/2)   # Configuración de Vite
└── [README.md](http://_vscodecontentref_/3)            # Documentación del proyecto

### Comandos Útiles
## Backend

# Ejecutar tareas en segundo plano:
php artisan queue:work

# Enviar recordatorios de reservas:
php artisan app:send-reservation-reminders

## Frontend
# Instalar Leaflet:
npm install react-leaflet leaflet
