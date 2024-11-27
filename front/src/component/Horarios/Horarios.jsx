/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
const Horarios = ({ horarios }) => {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [estadoActual, setEstadoActual] = useState("");

  const toggleMostrarTodos = () => setMostrarTodos(!mostrarTodos);

  const convertirHoraAMinutos = (hora) => {
    const [time, period] = hora.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (period.toLowerCase() === "p. m." && hours !== 12) {
      hours += 12;
    } else if (period.toLowerCase() === "a. m." && hours === 12) {
      hours = 0;
    }

    return hours * 60 + (minutes || 0);
  };

  useEffect(() => {
    const verificarEstado = () => {
      const ahora = new Date();
      const horaActual = ahora.getHours();
      const minutosActuales = ahora.getMinutes();
      const tiempoActualEnMinutos = horaActual * 60 + minutosActuales;

      const estaAbierto = horarios.some((atencion) =>
        atencion.horarios.some(({ inicio, fin }) => {
          if (inicio && fin) {
            const inicioEnMinutos = convertirHoraAMinutos(inicio);
            const finEnMinutos = convertirHoraAMinutos(fin);

            if (finEnMinutos < inicioEnMinutos) {
              return (
                tiempoActualEnMinutos >= inicioEnMinutos ||
                tiempoActualEnMinutos <= finEnMinutos
              );
            }
            return (
              tiempoActualEnMinutos >= inicioEnMinutos &&
              tiempoActualEnMinutos <= finEnMinutos
            );
          }
          return false;
        })
      );

      setEstadoActual(estaAbierto ? "Abierto ahora" : "Cerrado ahora");
    };

    verificarEstado();

    const intervalo = setInterval(verificarEstado, 60000);

    return () => clearInterval(intervalo);
  }, [horarios]);

  return (
    <div className="p-2">
      <div className="text-center text-sm font-semibold mb-4">
        <span
          className={`${
            estadoActual === "Abierto ahora" ? "text-green-600" : "text-[#DC493A]"
          }`}
        >
          {estadoActual}
        </span>
      </div>

      {(mostrarTodos ? horarios : horarios.slice(0, 1)).map(
        (atencion, index) => (
          <div
            key={index}
            className="border-b border-gray-300 mb-4 pb-4 flex justify-evenly"
          >
            <h3 className="font-semibold text-sm text-gray-700 text-center content-center">
              {atencion.dia}
            </h3>
            <div className="flex">
              {atencion.horarios.map(
                (horario, i) =>
                  horario.inicio &&
                  horario.fin && (
                    <div
                      key={i}
                      className="text-center flex flex-row mr-2  border-r"
                    >
                      <div className="bg-[#DC493A] text-white font-medium text-xs rounded-md mb-2 mx-2 p-1">
                        {horario.inicio}
                      </div>
                      <div className="bg-[#DC493A] text-white font-medium text-xs rounded-md mx-2  mb-2 p-1">
                        {horario.fin}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        )
      )}
      <div className="text-center">
        <button
          onClick={toggleMostrarTodos}
          className=" text-zinc-800  hover:text-[#DC493A]"
        >
          {mostrarTodos ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

export default Horarios;
