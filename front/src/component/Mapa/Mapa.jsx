// src/components/MapComponent.js

/* const locations = [
  { name: "JACC", lat: -38.977469146985506, lng: -68.0519252863631 },
  { name: "MORGAN", lat:-38.97944604404572, lng: -68.05654001651327 },
  { name: "LA TOSCANA", lat: -38.95970742188375, lng: -68.0617733678413},
  { name: "BOTANICO", lat:-38.97113798717784, lng:-68.05892454732094},
  { name: "MORRIGAN", lat: -38.94959853946168,lng: -68.05973916742052},
]; */

// Mapa.jsx
// Mapa.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Importa las imágenes de los iconos en lugar de usar `require`
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Configuración para que los íconos de Leaflet se carguen correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Mapa = ({ markers = [] }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer 
      center={[-38.9624343938463, -68.05923874197444]} 
      zoom={14} 
      style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {(markers || []).map((position, idx) => (
          <Marker key={idx} position={position}>
            <Popup>{position.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;
