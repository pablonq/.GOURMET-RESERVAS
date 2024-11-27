import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendario from "../Calendario/Calendario";
import IconoUsuario from "../../assets/IconoUsuario";
import IconoCalendarioBasico from "../../assets/IconoCalendarioBasico";
import Button from "../Button/Button";
import { AppContext } from "../../Context/AppContext";

const ReservarMesaDetalle = () => {
  const { idRestaurante } = useParams();
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const [cantidadPersonas, setCantidadPersonas] = useState(1);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [horaSeleccionada, setHoraSeleccionada] = useState("");
  const [mesasDisponibles, setMesasDisponibles] = useState([]);
  const [error, setError] = useState(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const fetchMesasDisponibles = async () => {
    if (!fechaSeleccionada || !horaSeleccionada || cantidadPersonas <= 0) {
      setError("Por favor, completa todos los campos correctamente.");
      return;
    }

    try {
      const response = await fetch(
        `/api/restaurantes/mesasDisponibles?fecha=${fechaSeleccionada}&hora=${horaSeleccionada}&cantidad=${cantidadPersonas}&idRestaurante=${idRestaurante}`
      );

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      setMesasDisponibles(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setMesasDisponibles([]);
    }
  };

  useEffect(() => {
    if (fechaSeleccionada && horaSeleccionada && cantidadPersonas > 0) {
      fetchMesasDisponibles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fechaSeleccionada, horaSeleccionada, cantidadPersonas]);

  const handleReservar = () => {
    if (user) {
      navigate(`/reservar/${idRestaurante}`);
    } else {
      navigate("/loginUsuario");
    }
  };

  return (
    <div className="p-2">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-4 border p-4 bg-white shadow-md rounded-s">
        <div className=" text-[#242424]">Busca disponibilidad</div>
        <div className="border flex items-center space-x-2 p-2 rounded-s">
          <IconoUsuario className="text-gray-600" />
          <select
            value={cantidadPersonas}
            onChange={(e) => setCantidadPersonas(Number(e.target.value))}
            className="outline-none border-none cursor-pointer bg-transparent"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} persona{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="border flex items-center space-x-2 rounded-s p-2 relative cursor-pointer">
          <IconoCalendarioBasico width="24" height="24" />
          <div
            onClick={() => setMostrarCalendario(!mostrarCalendario)}
            className="flex-1 bg-transparent outline-none h-full"
          >
            {fechaSeleccionada && horaSeleccionada
              ? `${fechaSeleccionada} ${horaSeleccionada}`
              : "Selecciona una fecha y hora"}
          </div>

          {mostrarCalendario && (
            <div className="absolute top-full left-0 z-10 bg-white border rounded-s p-4 shadow-lg mt-2 ">
              <Calendario
                onDateSelect={(fecha, hora) => {
                  setFechaSeleccionada(fecha);
                  setHoraSeleccionada(hora);
                  setMostrarCalendario(false);
                }}
                idRestaurante={idRestaurante}
              />
            </div>
          )}
        </div>

        <div
          className={`flex items-center space-x-4 rounded-s p-2 ml-auto ${
            mesasDisponibles.length > 0 ? "bg-[#B6C6B9]" : "bg-[#f8c1bbc8]"
          }`}
        >
          {mesasDisponibles.length > 0 ? (
            <>
              <p className="text-[#1A2F2A] text-sm font-semibold">
                Mesas disponibles: {mesasDisponibles.length}
              </p>
              <Button onClick={handleReservar} texto={"Reservar"} />
            </>
          ) : (
            <p className="mt-4 text-gray-600 font-semibold">
              No hay mesas disponibles para los parámetros seleccionados.
            </p>
          )}
        </div>
      </div>

      {error && <p className="text-red-600 font-bold mt-4">{error}</p>}
    </div>
  );
};

export default ReservarMesaDetalle;
