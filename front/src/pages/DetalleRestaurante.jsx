import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import CardMenuUsuario from "../component/CardMenu/CardMenuUsuario";
import ReservarMesaDetalle from "../component/ReservarMesaDetalle/ReservarMesaDetalle";
import EstrellaPuntuacion from "../component/EstrellaPuntuacion/EstrellaPuntuacion";
import IconoResenia from "../assets/IconoResenia";
import IconoRestaurante from "../assets/IconoRestaurante";
import Horarios from "../component/Horarios/Horarios";
import IconoTexto from "../component/IconoTexto/IconoTexto";
import IconoReloj from "../assets/IconoReloj";
import PersonasGroup from "../assets/PersonasGroup";
import IconoMapa from "../assets/IconoMapa";
import IconoEmail from "../assets/IconoEmail";
import IconoTelefono from "../assets/IconoTelefono";
import IconoPastel from "../assets/IconoPastel";
import GaleriaRestaurante from "../component/GaleriaRestaurante/GaleriaRestaurante";
import ApartadoResenias from "../component/ApartadoResenias/ApartadoResenias";
import Button from "../component/Button/Button";
import MapaChico from "../component/Mapa/MapaChico";

const DetalleRestaurante = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const { idRestaurante } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visitas, setVisitas] = useState(null);
  const [horarios, setHorarios] = useState(null);
  const [resenias, setResenias] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [direccion, setDireccion] = useState(null);

  const [restaurante, setRestaurante] = useState(null);
  const [menu, setMenu] = useState(null);
  const [platos, setPlatos] = useState(null);
  const [expandedMenuId, setExpandedMenuId] = useState(null);

  async function getRestaurante() {
    const res = await fetch(`/api/restaurantes/indexRestaurante`);
    const data = await res.json();

    if (res.ok) {
      const restauranteFiltrado = data.find(
        (restaurante) => restaurante.id === Number(idRestaurante)
      );

      const totalVisitas = restauranteFiltrado.reservas
        ? restauranteFiltrado.reservas.filter(
            (reserva) => reserva.estado === "procesada"
          ).length
        : 0;

      const horariosAtencion = restauranteFiltrado.atencion_restaurantes.map(
        (atencion) => ({
          dia: atencion.dia,
          horarios: [
            {
              inicio: formatHora(atencion.startTime1),
              fin: formatHora(atencion.endTime1),
            },
            {
              inicio: formatHora(atencion.startTime2),
              fin: formatHora(atencion.endTime2),
            },
          ],
        })
      );
      const direccionFormateada = (restaurante) => {
        return `${restaurante.direccion.calle} ${restaurante.direccion.altura}, ${restaurante.direccion.ciudad}, ${restaurante.direccion.provincia}, ${restaurante.direccion.pais}`;
      };

      setRestaurante(restauranteFiltrado);
      setVisitas(totalVisitas);
      setHorarios(horariosAtencion);
      setResenias(restauranteFiltrado.resenias);
      setDireccion(direccionFormateada(restauranteFiltrado));
      //console.log(restauranteFiltrado);
    }
  }

  useEffect(() => {
    if (restaurante) {
      async function getCoordinates() {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              direccion
            )}.json?access_token=pk.eyJ1IjoicGFibG9ucSIsImEiOiJjbTJ4YmZjOGQwMzRzMmpwc20zODgydG1iIn0.bYtjnOjNcWqmycW_N1lsfA`
          );

          if (!response.ok) {
            throw new Error(
              `Error en la respuesta de Mapbox: ${response.status} ${response.statusText}`
            );
          }

          const data = await response.json();
          if (data.features && data.features.length > 0) {
            const coordinates = data.features[0].center;
            const latLng = { lat: coordinates[1], lng: coordinates[0] };

            setMarkers([
              {
                name: restaurante.nombreRes,
                lat: latLng.lat,
                lng: latLng.lng,
              },
            ]);
          } else {
            console.warn(`No se encontraron coordenadas para la dirección.`);
            setMarkers([]);
          }
        } catch (error) {
          console.error("Error al obtener las coordenadas:", error);
          setMarkers([]);
        }
      }

      getCoordinates();
    }
  }, [direccion, restaurante]);

  function formatHora(hora) {
    if (!hora) return "";
    const [hours, minutes] = hora.split(":");
    const date = new Date();
    date.setHours(hours, minutes);

    return new Intl.DateTimeFormat("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  }

  async function getMenu() {
    const res = await fetch(`/api/restaurantes/indexMenu/${idRestaurante}`);
    const data = await res.json();
    if (res.ok) {
      setMenu(data);
      // console.log("Menu:", data);
    }
  }

  async function getPlatos() {
    try {
      const res = await fetch(`/api/restaurantes/indexPlatos/${idRestaurante}`);

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setPlatos(data);
    } catch (error) {
      setError(error.message);
    }
  }

  const handleReservar = () => {
    if (user) {
      navigate(`/reservar/${idRestaurante}`);
    } else {
      navigate("/loginUsuario");
    }
  };

  useEffect(() => {
    Promise.all([getRestaurante(), getMenu(), getPlatos()])
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMenu = (menuId) => {
    setExpandedMenuId(expandedMenuId === menuId ? null : menuId);
  };

  // Función para agrupar platos por menú
  const agruparPlatosPorMenu = () => {
    if (!platos || !menu) return {};

    const menuMap = menu.reduce((acc, menuItem) => {
      acc[menuItem.id] = { ...menuItem, platos: [] };
      return acc;
    }, {});

    platos.forEach((plato) => {
      plato.menus.forEach((menuInfo) => {
        if (menuMap[menuInfo.id]) {
          menuMap[menuInfo.id].platos.push(plato);
        }
      });
    });

    // console.log("MenusPorPlatos:", menuMap);
    return menuMap;
  };

  const menusPorPlatos = agruparPlatosPorMenu();

  if (loading)
    return <p className="text-center font-bold text-[#DC493A] ">Cargando...</p>;
  if (error)
    return (
      <p className="text-center font-bold text-[#DC493A] ">Error: {error}</p>
    );

  return (
    <>
      <div className="flex justify-center">
        {restaurante?.imagenes_restaurantes?.length > 0 && (
          <img
            src={restaurante.imagenes_restaurantes[0].imagenUrl}
            alt={`Imagen de ${restaurante?.nombreRes}`}
            className="w-full h-72 object-cover "
          />
        )}
      </div>
      <div className="sticky top-0 z-10">
        <ReservarMesaDetalle />
      </div>

      <div className="flex flex-row mx-44">
        <div className="text-left w-3/4 mt-4 mx-10 ">
          <div className="border-b border-gray-300 p-4">
            <div className="p-4">
              <p className="text-4xl text-[#1A2F2A] font-bold">
                {restaurante?.nombreRes} - {restaurante?.direccion.ciudad}
              </p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-4">
              <EstrellaPuntuacion
                calificacion={restaurante?.promedioPuntuacion}
              />

              <div className="flex items-center space-x-1">
                {" "}
                {visitas} Visitas
              </div>
              <div className="flex items-center space-x-1">
                <IconoResenia width="24" height="24" />
                <span>{restaurante?.totalResenias} Reseñas</span>
              </div>
              <div className="flex items-center space-x-1">
                {" "}
                <IconoRestaurante width="24" height="24" />
                <span> {restaurante?.tipo} </span>
              </div>
            </div>
          </div>

          <p className="text-lg text-[#242424]">{restaurante?.descripcion}</p>

          <div>
            <GaleriaRestaurante imagenes={restaurante?.imagenes_restaurantes} />
          </div>

          <div>
            <div className="flex border-b border-gray-300">
              <h3 className="text-lg text-left my-8 text- text-[#242424] font-bold">
                Menús
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center  border-b  border-gray-300">
              {Object.values(menusPorPlatos).length === 0 ? (
                <p className="text-center font-bold text-[#DC493A] ">
                  No hay menús disponibles.
                </p>
              ) : (
                Object.values(menusPorPlatos).map((menuItem) => (
                  <div key={menuItem.id} className="w-full max-w-md">
                    <div
                      onClick={() => toggleMenu(menuItem.id)}
                      className="cursor-pointer bg-white shadow-md rounded-lg p-3 mb-2"
                    >
                      <CardMenuUsuario
                        imagen={menuItem.imagen}
                        titulo={menuItem.nombre}
                      />
                      {expandedMenuId === menuItem.id && (
                        <div className="mt-4">
                          <h4 className="font-bold mb-2">Platos:</h4>
                          <ul className="list-disc list-inside">
                            {menuItem.platos.length > 0 ? (
                              menuItem.platos.map((plato) => (
                                <li key={plato.id}>
                                  {plato.nombrePlato} - ${plato.precio}
                                  <p className="text-sm text-[#1A2F2A]  ml-4">
                                    {plato.descripcion}
                                  </p>
                                </li>
                              ))
                            ) : (
                              <li>No hay platos disponibles para este menú.</li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <Button onClick={handleReservar} texto={"Reservar"} />
        </div>

        {/*apartado info adicionala*/}
        <div className="w-1/4 mt-4">
          <div className="flex border  border-gray-300  shadow-md rounded-s sticky top-28">
            <MapaChico markers={markers} />
          </div>
          <div className="my-4">
            <h3 className="font-bold mb-4 text-[#242424]">
              Informacion Adicional
            </h3>
            <IconoTexto
              icono={<IconoMapa />}
              texto={" Direccion"}
              value={
                restaurante?.direccion.calle +
                " " +
                restaurante?.direccion.altura
              }
            />
            <IconoTexto
              icono={<PersonasGroup />}
              texto={"Capacidad Total"}
              value={restaurante?.capacidadTotal}
            />
            <IconoTexto
              icono={<IconoPastel width="20" height="20" />}
              texto={"Apto para eventos ?"}
              value={restaurante?.aceptaEventos === "si" ? "Si" : "No"}
            />
            <IconoTexto
              icono={<IconoEmail width="20" height="20" />}
              texto={"Email"}
              value={restaurante?.email}
            />
            <IconoTexto
              icono={<IconoTelefono width="20" height="20" />}
              texto={"Telefono"}
              value={restaurante?.telefono}
            />
            <div>
              <IconoTexto
                icono={<IconoReloj width={"20"} height={"20"} />}
                texto={"Horarios de Atencion"}
              />
              <Horarios horarios={horarios} />
            </div>

            <div className=" border-b border-gray-300">
              <div className="my-4">
                <h3 className="font-bold mb-4 text-[#242424]">
                  Calificaciones y reseñas generales
                </h3>
                <p className="font-light text-xs">
                  Son opiniones los comensales que asistieron a este restaurante
                </p>
                <div className="flex flex-row items-center">
                  <EstrellaPuntuacion
                    calificacion={restaurante?.promedioPuntuacion}
                  />
                  <p className="mx-4 text-xs font-medium">
                    Puntuacion Promedio
                  </p>
                </div>
              </div>
            </div>
            {/**apartado reseñas */}
            <ApartadoResenias
              resenias={resenias}
              totalResenias={restaurante?.totalResenias}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleRestaurante;
