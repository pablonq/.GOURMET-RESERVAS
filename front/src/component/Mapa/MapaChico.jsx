/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import customIconUrl from "../../assets/iconoplatos.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const restaurantIcon = L.icon({
  iconUrl: customIconUrl,
  iconSize: [30, 30],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapaChico = ({ markers = [] }) => {
    const defaultCenter = markers.length > 0 ? [markers[0].lat, markers[0].lng] : [0, 0];

  return (
    <div style={{ height: "150px", width: "300px" }}> 
      <MapContainer
        center={defaultCenter}
        zoom={15} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> .Gourmet Reservas'
        />
        
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

export default MapaChico;
