/**
Este es el archivo de configuración para Vite, una herramienta de construcción rápida para el desarrollo web moderno.
Importa las funciones necesarias de los paquetes 'vite' y '@vitejs/plugin-react'.
La función 'defineConfig' se utiliza para definir el objeto de configuración de Vite.
El objeto de configuración incluye las siguientes propiedades:
'plugins': Una matriz de complementos que se utilizarán en Vite. En este caso, incluye el complemento '@vitejs/plugin-react', que permite a Vite manejar los componentes React.
'server': Un objeto que configura el servidor de desarrollo que inicia Vite. Incluye las siguientes propiedades:
'proxy': Un objeto que configura un servidor proxy para el servidor de desarrollo. Esto es útil cuando deseas hacer solicitudes a un servidor diferente durante el desarrollo. En este caso, está configurado para enviar solicitudes a '/api' a 'http://127.0.0.1:8000'.
changeOrigin': Un booleano que indica si se debe cambiar el encabezado de origen a la URL de destino. Esto se establece en 'true' para permitir que el servidor maneje la solicitud como si proviniera de la URL de destino.
'headers': Un objeto que establece los encabezados para las solicitudes intermediadas. En este caso, establece los encabezados 'Accept' y 'Content-Type' en 'application/json'.
La línea 'export default defineConfig' exporta el objeto de configuración como la exportación predeterminada del módulo. Esto permite que se importe y use por otras partes de la aplicación.
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        headers:{
          Accept: 'application/json',
          "Content-Type": 'application/json',
        }
      }
    }
  }

})