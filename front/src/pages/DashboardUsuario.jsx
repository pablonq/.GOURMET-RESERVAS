import { useEffect, useState } from "react";
import CardRestaurante from "../component/CardRestaurante/CardRestaurante";
import { useNavigate } from "react-router-dom";
import Mapa from "../component/Mapa/Mapa";
import { makers } from "leaflet";
const DashboardUsuario = () => {
  const [cards, setCards] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const navigate = useNavigate();
  const handleView = (restauranteId) => {
    navigate(`detalleRestaurante/${restauranteId}`); // Redirige a la página del menú específico
  };
  const makers = [
    { name: "JACC", lat: -38.977469146985506, lng: -68.0519252863631 },
    { name: "MORGAN", lat: -38.97944604404572, lng: -68.05654001651327 },
    { name: "LA TOSCANA", lat: -38.95970742188375, lng: -68.0617733678413 },
    { name: "BOTANICO", lat: -38.97113798717784, lng: -68.05892454732094 },
    { lat: -38.94959853946168, lng: -68.05973916742052, name: "MORRIGAN" },
  ];
  async function getCards() {
    const res = await fetch("/api/restaurantes/indexRestaurante");
    const data = await res.json();
    if (res.ok) {
      setCards(data);
      //  console.log("Restaurantes recibidos:", data);
    }
  }
  async function getImagenes() {
    const res = await fetch("/api/restaurantes/indexImagenesRestaurante");
    const data = await res.json();
    if (res.ok) {
      setImagenes(data);
      //  console.log("Imagenes recibidas:", data);
    }
  }
  const address = "Río Negro 2170, Neuquén, Neuquén, Argentina";
  async function getCoordinates() {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        console.log(lat, lon);
        console.log(address);
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
      } else {
        throw new Error("No se encontraron coordenadas para esta dirección");
      }
    } catch (error) {
      console.error("Error al obtener coordenadas:", error);
      return null;
    }
  };

  useEffect(() => {
    getCards();
    getImagenes();
    /* getCoordinates(); */
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-full md:w-[65%] flex flex-wrap">
          {cards.length === 0 ? (
            <p className="text-center font-bold text-rose-700">
              No hay restaurantes disponibles.
            </p>
          ) : (
            cards.map((restaurante) => {
              const imagenesFiltradas = imagenes.filter((imagen) => {
                return imagen.idRestaurante === restaurante.id;
              });
              return (
                <div key={restaurante.id} className="m-1 w-1/4">
                  <CardRestaurante
                    imagenes={imagenesFiltradas}
                    nombreRes={restaurante.nombreRes}
                    direccion={restaurante.direccion}
                    tipo={restaurante.tipo}
                    onView={() => handleView(restaurante.id)}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="w-full md:w-[35%]">
          <Mapa markers={makers} />
        </div>
      </div>
    </>
  );
};

export default DashboardUsuario;
/* AIzaSyBUyBTw6d8oPQUJtKC2zbMMEPe-CUd_Um4 */
