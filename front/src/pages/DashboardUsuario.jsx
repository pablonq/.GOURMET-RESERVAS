import { useEffect, useState, useContext } from "react";
import CardRestaurante from "../component/CardRestaurante/CardRestaurante";
import { useNavigate, useOutletContext } from "react-router-dom";
import Mapa from "../component/Mapa/Mapa";
import { AppContext } from "../Context/AppContext";
import Coordenadas from "../api/Coordenadas";

// Función para calcular la distancia usando la fórmula de Haversine
function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en kilómetros
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180; // Corrige el orden de lon1 y lon2
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Retorna la distancia en kilómetros
}

const DashboardUsuario = () => {
  const { filtros, ordenarPorPopularidad } = useOutletContext();
  const [cards, setCards] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [direcciones, setDirecciones] = useState([]);

  const [direccionUsuario, setDireccionUsuario] = useState([]);
  const [coordenadas, setCoordenadas] = useState([]);
  const [coordenadasUsuario, setCoordenadasUsuario] = useState(null); 
  const [markers, setMarkers] = useState([]);
  const [restaurantesFiltrados, setRestaurantesFiltrados] = useState([]);
  const { user, token } = useContext(AppContext);
  const navigate = useNavigate();

  const handleView = (restauranteId) => {
    navigate(`/detalleRestaurante/${restauranteId}`);
  };

  const handleUsuarioCoordinatesReady = (coords) => {
    setCoordenadasUsuario(coords[0]); 
  };
  
  useEffect(() => {
    async function getDireccionesRestaurantes() {
      const res = await fetch("/api/restaurantes/indexDireccionesRestaurantes");
      const data = await res.json();
      if (res.ok) {
        const direccionesFormateadas = data.map((direccion) => {
          return `${direccion.calle} ${direccion.altura}, ${direccion.ciudad}, ${direccion.provincia}, ${direccion.pais}`;
        });
        setDirecciones(direccionesFormateadas);
      }
    }

    async function getDireccionUsuario() {
      const res = await fetch(`/api/usuarios/indexDireccionUsuario/${user?.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        const direccionFormateada = `${data.calle} ${data.altura}, ${data.ciudad}, ${data.provincia}, ${data.pais}`;
        setDireccionUsuario([direccionFormateada]);
      }
    }

    getDireccionesRestaurantes();
    getDireccionUsuario();
  }, [token, user?.id]);
  
  useEffect(() => {
    if (coordenadasUsuario) {
      async function getCards() {
        try {
          let res;
          if (filtros.fecha && filtros.hora) {
            res = await fetch("/api/restaurantes/filtrarRestaurantesConMesas", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ fecha: filtros.fecha, hora: filtros.hora }),
            });
          } else if (filtros.tags && filtros.tags.length > 0) {
            res = await fetch("/api/restaurantes/filtrarRestaurantesPorTags", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ tags: filtros.tags }),
            });
          } else {
            res = await fetch("/api/restaurantes/indexRestaurante");
          }
        
          const data = await res.json();
          if (res.ok) {
            setCards(data);
          }
        } catch (error) {
          console.error("Error en la solicitud:", error);
        }
      }

      async function getImagenes() {
        const res = await fetch("/api/restaurantes/indexImagenesRestaurante");
        const data = await res.json();
        if (res.ok) {
          setImagenes(data);
        }
      }

      getCards();
      getImagenes();
    }
  }, [filtros, coordenadasUsuario]);
  
  /* pk.eyJ1IjoicGFibG9ucSIsImEiOiJjbTJ4YmZjOGQwMzRzMmpwc20zODgydG1iIn0.bYtjnOjNcWqmycW_N1lsfA */
  useEffect(() => {
    if (direcciones.length > 0) {
      async function getCoordinates() {
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
      }
      getCoordinates();
    }
  }, [direcciones]);

  useEffect(() => {
    const filtered = cards.map((restaurante, index) => {
      const distancia = coordenadas[index]
        ? calcularDistancia(
            coordenadasUsuario.lat,
            coordenadasUsuario.lng,
            coordenadas[index].lat,
            coordenadas[index].lng
          )
        : Infinity;

      return {
        ...restaurante,
        coordenadas: coordenadas[index],
        distancia,
        coordenadasCalculadas: !!coordenadas[index],
      };
    }).filter((restaurante) => {
      // Aplicar los filtros
      const nombreMatch = !filtros.nombre || restaurante.nombreRes.toLowerCase().includes(filtros.nombre.toLowerCase());
      const puntuacionSuficiente = ordenarPorPopularidad ? restaurante.promedioPuntuacion >= 4 : true;
      const ciudadMatch = filtros.ciudades.length === 0 || filtros.ciudades.includes(restaurante.ciudad);
      const distanciaMatch = filtros.distancias.length === 0 || filtros.distancias.some((dist) => restaurante.distancia <= dist);
      const tipoMatch = filtros.tipos.length === 0 || filtros.tipos.includes(restaurante.tipo);

      return nombreMatch && puntuacionSuficiente && ciudadMatch && distanciaMatch && tipoMatch;
    });

    setRestaurantesFiltrados(filtered);

    // Generar `markers` basados en los restaurantes filtrados
    const generatedMarkers = filtered
      .filter(restaurante => restaurante.coordenadasCalculadas)
      .map((restaurante) => ({
        name: restaurante.nombreRes,
        lat: restaurante.coordenadas.lat,
        lng: restaurante.coordenadas.lng,
      }));
    setMarkers(generatedMarkers);
  }, [cards, coordenadas, filtros, coordenadasUsuario, ordenarPorPopularidad]);
  

  return (
    <>
      <Coordenadas 
        direcciones={direccionUsuario} 
        onCoordinatesReady={handleUsuarioCoordinatesReady} 
      />
      <div className="flex">
        <div className="w-full md:w-[70%] flex flex-wrap">
          {restaurantesFiltrados.length === 0 ? (
            <p className="text-center font-bold text-rose-700">
              No hay restaurantes disponibles con los filtros seleccionados.
            </p>
          ) : (
            restaurantesFiltrados.map((restaurante) => {
              const imagenesFiltradas = imagenes.filter(
                (imagen) => imagen.idRestaurante === restaurante.id
              );
              return (
                <div key={restaurante.id} className="m-2">
                  <CardRestaurante
                    imagenes={imagenesFiltradas}
                    nombreRes={restaurante.nombreRes}
                    direccion={restaurante.ciudad}
                    tipo={restaurante.tipo}
                    calificacion={restaurante.promedioPuntuacion}
                    mesasDisponibles={restaurante.mesas_disponibles}
                    onView={() => handleView(restaurante.id)}
                    distancia={restaurante.distancia}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="w-full md:w-[30%]">
          <Mapa markers={markers}
          userLocation={coordenadasUsuario} />
        </div>
      </div>
    </>
  );
};

export default DashboardUsuario;
