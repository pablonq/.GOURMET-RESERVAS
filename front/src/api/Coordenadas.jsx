import React, { useState, useEffect } from 'react';

export default function Coordenadas({ direcciones, onCoordinatesReady }) {
  const [coordenadas, setCoordenadas] = useState([]);

  async function getCoordinates() {
    try {
      const allCoordinates = await Promise.all(
        direcciones.map(async (address) => {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              address
            )}.json?access_token=pk.eyJ1IjoicGFibG9ucSIsImEiOiJjbTJ4YmZjOGQwMzRzMmpwc20zODgydG1iIn0.bYtjnOjNcWqmycW_N1lsfA`
          );
          const data = await response.json();

          if (data.features && data.features.length > 0) {
            const coordinates = data.features[0].center;
            return { lat: coordinates[1], lng: coordinates[0] };
          } else {
            console.warn(`No se encontraron coordenadas para la dirección: ${address}`);
            return null;
          }
        })
      );

      const validCoordinates = allCoordinates.filter((coord) => coord !== null);
      setCoordenadas(validCoordinates);

      // Llama al callback una vez que las coordenadas están listas
      if (onCoordinatesReady) {
        onCoordinatesReady(validCoordinates);
      }
    } catch (error) {
      console.error("Error al obtener coordenadas:", error);
    }
  }

  useEffect(() => {
    if (direcciones && direcciones.length > 0) {
      getCoordinates();
    }
  }, [direcciones]);

  return null; // Este componente no necesita renderizar nada
}
