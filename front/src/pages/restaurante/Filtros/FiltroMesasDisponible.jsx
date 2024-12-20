/* eslint-disable react/prop-types */
import { useState } from "react";

const FiltroMesasDisponible = ({ setFecha, setHora }) => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  const handleFechaChange = (e) => {
    const fecha = e.target.value;
    setFechaSeleccionada(fecha);
    setFecha(fecha);
  };

  const handleHoraChange = (e) => {
    const hora = e.target.value;
    setHoraSeleccionada(hora);
    setHora(hora);
  };

  return (
    <div className="mx-2 mt-2 ">
      <div className="w-4/4">
        <div className="w-full p-2 font-medium text-[#242424]">
          Con mesas disponibles
        </div>
        <input
          type="date"
          value={fechaSeleccionada}
          onChange={handleFechaChange}
          className="w-3/4 p-2 ml-2 input-style"
        />
        <input
          type="time"
          value={horaSeleccionada}
          onChange={handleHoraChange}
          className="w-3/4 p-2 ml-2 input-style mt-2 "
          list="horarios"
        />
     
        <datalist id="horarios">
          {Array.from({ length: 48 }).map((_, index) => {
            const horas = String(Math.floor(index / 2)).padStart(2, "0");
            const minutos = index % 2 === 0 ? "00" : "30";
            return (
              <option  key={index} value={`${horas}:${minutos}`}>
                {`${horas}:${minutos}`}
              </option>
            );
          })}
        </datalist>
      </div>
    </div>
  );
};

export default FiltroMesasDisponible;
