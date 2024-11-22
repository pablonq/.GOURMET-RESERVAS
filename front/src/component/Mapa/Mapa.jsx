import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import customIconUrl from "../../assets/iconoplatos.png";

// Configuración de iconos por defecto
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Icono personalizado para restaurantes
const restaurantIcon = L.icon({
  iconUrl: customIconUrl,
  iconSize: [30, 30],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Icono personalizado para el usuario
const userIcon = L.icon({
  iconUrl: iconUrl,
  iconRetinaUrl: iconRetinaUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  className: 'user-marker'
});

// Componente para ajustar los límites del mapa
const FitBounds = ({ markers, userLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (markers.length > 0) {
      const points = [...markers.map(marker => [marker.lat, marker.lng])];
      if (userLocation) {
        points.push([userLocation.lat, userLocation.lng]);
      }
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (userLocation) {
      map.setView([userLocation.lat, userLocation.lng], 13);
    }
  }, [map, markers, userLocation]);

  return null;
};

const Mapa = ({ markers = [], userLocation }) => {
  const defaultCenter = [-38.9624343938463, -68.05923874197444];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: "250px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> .Gourmet Reservas'
        />
        <FitBounds markers={markers} userLocation={userLocation} />
        
        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lng]}
            icon={userIcon}
          >
            <Popup>Tu ubicación</Popup>
          </Marker>
        )}

        {markers.map((position, idx) => (
          <Marker
            key={idx}
            position={[position.lat, position.lng]}
            icon={restaurantIcon}
          >
            <Popup>{position.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;