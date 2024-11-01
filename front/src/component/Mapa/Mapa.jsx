import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import customIconUrl from "../../assets/iconoplatos.png";

const customIcon = L.icon({
  iconUrl: customIconUrl,
  iconSize: [30, 30],       // Tamaño del icono
  iconAnchor: [16, 32],     // Punto donde el icono se ancla al mapa (centro inferior)
  popupAnchor: [0, -32],    // Punto donde se ancla el popup en relación al icono
});

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const FitBounds = ({ markers }) => {
  const map = useMap();

  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(marker => [marker.lat, marker.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, markers]);

  return null;
};

const Mapa = ({ markers = [] }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer 
        center={[-38.9624343938463, -68.05923874197444]} 
        zoom={13} 
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FitBounds markers={markers} />
        {markers.map((position, idx) => (
          <Marker key={idx}
           position={[position.lat, position.lng]}
           icon={customIcon}>
            <Popup>{position.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;
