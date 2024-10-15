import Title from "../../../component/Title/Title";
import Calendario from "../../../component/Calendario/Calendario";
import { useState } from "react";
import PlanoCliente from "../../../component/PlanoCliente/PlanoCliente";

const ReservarMesa = () => {
  const [mesasDisponibles, setMesasDisponibles] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  const fetchMesasDisponibles = async (fecha, hora, idRestaurante) => {
    const response = await fetch(
      `/api/restaurantes/mesasDisponibles?fecha=${fecha}&hora=${hora}&idRestaurante=${idRestaurante}`
    );
    const data = await response.json();
    return data;
  };

  const handleDateSelect = async (fecha, hora) => {
    const idRestaurante = 1;
    const mesas = await fetchMesasDisponibles(fecha, hora, idRestaurante);
    setMesasDisponibles(mesas);
    setFechaSeleccionada(fecha);
    setHoraSeleccionada(hora);
    console.log("Mesas disponibles:", mesas);
  };
  return (
    <div className="">
      <Title text="Reservar mesa" />
      <div className="flex justify-between p-4 ">
        <Calendario onDateSelect={handleDateSelect} />
        {mesasDisponibles.length > 0 && (
          <div>
            <PlanoCliente
              mesas={mesasDisponibles}
              setMesas={setMesasDisponibles}
              fecha={fechaSeleccionada}
              hora={horaSeleccionada}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservarMesa;
