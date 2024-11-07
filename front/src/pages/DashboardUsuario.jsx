import { useEffect, useState, useContext } from "react";
import CardRestaurante from "../component/CardRestaurante/CardRestaurante";
import { useNavigate, useOutletContext } from "react-router-dom";
import Mapa from "../component/Mapa/Mapa";
import { AppContext } from "../Context/AppContext";

const DashboardUsuario = () => {
  const { filtros, ordenarPorPopularidad } = useOutletContext();
  const [cards, setCards] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [direcciones, setDirecciones] = useState([]);
  const [coordenadas, setCoordenadas] = useState([]);
  const [markers, setMarkers] = useState([]); // Nuevo estado para los markers

  const { user, token } = useContext(AppContext);

  // eslint-disable-next-line no-unused-vars
  const [direccionUsuario, setDireccionUsuario] = useState([]);
  const navigate = useNavigate();

  const handleView = (restauranteId) => {
    navigate(`detalleRestaurante/${restauranteId}`);
  };

  async function getDireccionesRestaurantes() {
    const res = await fetch("/api/restaurantes/indexDireccionesRestaurantes");
    const data = await res.json();
    if (res.ok) {
      const direccionesFormateadas = data.map((direccion) => {
        return `${direccion.calle} ${direccion.altura}, ${direccion.ciudad}, ${direccion.provincia}, ${direccion.pais}`;
      });
      setDirecciones(direccionesFormateadas);
    } else {
      console.error("Error al obtener las direcciones");
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
      // console.log(direccionFormateada);
      setDireccionUsuario([direccionFormateada]);
    }
  }

  async function getCards() {
    try {
      let res;
      if (filtros.fecha && filtros.hora) {
        res = await fetch("/api/restaurantes/filtrarRestaurantesConMesas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fecha: filtros.fecha, hora: filtros.hora }),
        });
      } else if (filtros.tags && filtros.tags.length > 0) {
        res = await fetch("/api/restaurantes/filtrarRestaurantesPorTags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tags: filtros.tags }),
        });
      } else {
        res = await fetch("/api/restaurantes/indexRestaurante");
      }

      const data = await res.json();
      if (res.ok) {
        setCards(data);
      } else {
        console.error(
          "Error al obtener los restaurantes:",
          data.message || "Error desconocido"
        );
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

  useEffect(() => {
    getCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtros]);

  async function getImagenes() {
    const res = await fetch("/api/restaurantes/indexImagenesRestaurante");
    const data = await res.json();
    if (res.ok) {
      setImagenes(data);
    }
  }

  //ir ordenado restaurante filtrados
  const restaurantesFiltrados = cards.filter((restaurante) => {
    const nombreMatch = restaurante.nombreRes
      .toLowerCase()
      .includes(filtros.nombre.toLowerCase());
    const puntuacionSuficiente = ordenarPorPopularidad
      ? restaurante.promedioPuntuacion >= 4
      : true; //Esto es para que muestre restaurantes con puntuacion 4 o mas estrellas

    return nombreMatch && puntuacionSuficiente;
  });

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

          // Verifica si la respuesta contiene `features` y tiene al menos un resultado
          if (data.features && data.features.length > 0) {
            const coordinates = data.features[0].center; // Array [longitud, latitud]
            const placeName = data.features[0].place_name;

            console.log("Coordenadas:", coordinates);
            console.log("Nombre del lugar:", placeName);

            // Retorna las coordenadas en formato `{ lat, lng }`
            return { lat: coordinates[1], lng: coordinates[0] };
          } else {
            console.warn(
              `No se encontraron coordenadas para la dirección: ${address}`
            );
            return null;
          }
        })
      );

      // Filtra las direcciones para excluir las que no encontraron coordenadas completas
      const validCoordinates = allCoordinates.filter((coord) => coord !== null);

      // Aquí puedes guardar las coordenadas válidas en el estado o en la variable deseada
      setCoordenadas(validCoordinates);
      console.log("Coordenadas validadas:", validCoordinates);
    } catch (error) {
      console.error("Error al obtener coordenadas:", error);
    }
  }

  useEffect(() => {
    getCards();
    getImagenes();
    getDireccionesRestaurantes();
    getDireccionUsuario();
  }, []);

  useEffect(() => {
    if (direcciones.length > 0) {
      getCoordinates().then(() => {
        console.log("Coordenadas obtenidas:", coordenadas);
      });
    }
  }, [direcciones]);

  useEffect(() => {
    if (cards.length > 0 && coordenadas.length === cards.length) {
      const generatedMarkers = cards.map((card, index) => ({
        name: card.nombreRes,
        lat: coordenadas[index].lat,
        lng: coordenadas[index].lng,
      }));
      console.log("Markers generados:", generatedMarkers);
      setMarkers(generatedMarkers);
    }
  }, [cards, coordenadas]);

  return (
    <>
      <div className="flex">
        <div className="w-full md:w-[70%] flex flex-wrap">
          {restaurantesFiltrados.length === 0 ? (
            <p className="text-center font-bold text-rose-700">
              No hay restaurantes disponibles.
            </p>
          ) : (
            restaurantesFiltrados.map((restaurante) => {
              const imagenesFiltradas = imagenes.filter((imagen) => {
                return imagen.idRestaurante === restaurante.id;
              });
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
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="w-full md:w-[30%]">
          <Mapa markers={markers} />
        </div>
      </div>
    </>
  );
};

export default DashboardUsuario;
