import Title from "../../../component/Title/Title";
import Calendario from "../../../component/Calendario/Calendario";
import { useEffect, useMemo, useState } from "react";
import PlanoCliente from "../../../component/PlanoCliente/PlanoCliente";
import { useParams } from "react-router-dom";
import PersonaGroup from "../../../assets/PersonasGroup";
import IconoCalendarioBasico from "../../../assets/IconoCalendarioBasico";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

const ReservarMesa = () => {
  const [mesasDisponibles, setMesasDisponibles] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [horaSeleccionada, setHoraSeleccionada] = useState("");
  const [infoRestaurante, setInfoRestaurante] = useState({});
  const [cantidadPersonas, setCantidadPersonas] = useState(0);
  const { idRestaurante } = useParams();

  const fetchMesasDisponibles = async (fecha, hora, idRestaurante) => {
    const response = await fetch(
      `/api/restaurantes/mesasDisponibles?fecha=${fecha}&hora=${hora}&idRestaurante=${idRestaurante}`
    );
    const data = await response.json();
    return data;
  };

  const fetchRestaurante = async (idRestaurante) => {
    try {
      const response = await fetch(
        `/api/restaurantes/mostrarRestaurante/${idRestaurante}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener los datos del restaurante");
      }
      const data = await response.json();
      setInfoRestaurante(data);
      //console.log(data);
    } catch (error) {
      console.error("Error al cargar el restaurante:", error);
    }
  };
  useEffect(() => {
    if (idRestaurante) {
      fetchRestaurante(idRestaurante);
    }
  }, [idRestaurante]);

  const handleDateSelect = async (fecha, hora) => {
    const mesas = await fetchMesasDisponibles(fecha, hora, idRestaurante);
    setMesasDisponibles(mesas);
    setFechaSeleccionada(fecha);
    setHoraSeleccionada(hora);
  };

  const mesasFiltradas = useMemo(() => {
    let sumaCapacidad = 0;
    const resultado = [];

    for (const mesa of mesasDisponibles) {
      if (sumaCapacidad >= cantidadPersonas) break;
      sumaCapacidad += mesa.cantidadPersonas;
      resultado.push(mesa);
    }

    return sumaCapacidad >= cantidadPersonas ? resultado : [];
  }, [mesasDisponibles, cantidadPersonas]);

  const handleCantidadPersonas = (personas) => {
    setCantidadPersonas(personas);
  };

  return (
    <div className="mx-36">
      {infoRestaurante.restaurante ? (
        <Title
          text={`Haz tu reserva en ${infoRestaurante.restaurante.nombreRes}`}
        />
      ) : (
        <p className="text-[#DC493A]">
          Cargando información del restaurante...
        </p>
      )}
      <div className="flex flex-col item-center p-4">
        <div className="flex flex-col items-center border-b border-gray-300 ">
          <div className="flex items-center">
            <PersonaGroup />
            <h3 className="mx-4 text-lg text-[#1A2F2A]">
              Elige la cantidad de personas
            </h3>
          </div>
          <div className="flex space-x-4 my-6">
            {Array.from({ length: 20 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleCantidadPersonas(index + 1)}
                className={`w-10 h-10 border rounded-full text-[#DC493A]  ${
                  cantidadPersonas === index + 1
                    ? "bg-[#DC493A] text-slate-50 border-[#DC493A]"
                    : "border-[#DC493A] hover:bg-[#DC493A] hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {cantidadPersonas > 0 && (
          <div >
            <div className="flex justify-center border border-[#DC493A] w-2/3 rounded-sm text-center mt-4 justify-self-center">
              <p className="font-semibold font-sm text-[#1A2F2A] my-4  ">
               <stron className="text-[#DC493A]">IMPORTANTE:</stron>  Por políticas del restaurante, las reservas están
                disponibles dentro de los próximos 30 días. 
              </p>
            </div>
            <div className="flex justify-center border-b border-gray-300 pb-2">
              <div className="flex-col">
                <div className="flex items-center space-x-4 my-4 ">
                  <IconoCalendarioBasico width={"18"} height={"18"} />
                  <h3 className="mx-4 text-lg text-[#1A2F2A]">
                    Elige una fecha y hora
                  </h3>
                </div>
                <Calendario
                  onDateSelect={handleDateSelect}
                  idRestaurante={idRestaurante}
                />
              </div>
            </div>
          </div>
        )}
        {cantidadPersonas > 0 && mesasDisponibles.length > 0 && (
          <div>
            {mesasFiltradas.length > 0 ? (
              <PlanoCliente
                mesas={mesasDisponibles}
                setMesas={setMesasDisponibles}
                fecha={fechaSeleccionada}
                hora={horaSeleccionada}
              />
            ) : (
              <p className="text-[#DC493A]">
                No hay suficientes mesas disponibles para {cantidadPersonas}{" "}
                personas.
              </p>
            )}
          </div>
        )}
      </div>
      <LinkVolver
          color={"[#DC493A]"}
          colorHover={"[#B6C6B9]"}
          ruta={`/detalleRestaurante/${idRestaurante }`}
        />
    </div>
  );
};

export default ReservarMesa;
