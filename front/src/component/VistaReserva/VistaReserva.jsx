import { useState } from "react";
import EstrellaPuntuacion from "../EstrellaPuntuacion/EstrellaPuntuacion";
import IconoCalendarioBasico from "../../assets/IconoCalendarioBasico";
import IconoReloj from "../../assets/IconoReloj";
import Mesa from "../../assets/Mesa";
import PersonaGroup from "../../assets/PersonasGroup";
import IconoUsuario from "../../assets/IconoUsuario";

/* eslint-disable react/prop-types */
const VistaReserva = ({
  reserva,
  mesas,
  usuario,
  reseniaExistente,
  onResponse,
}) => {
  const totalMesas = mesas.length;
  const totalPersonas = mesas.reduce(
    (acc, mesa) => acc + mesa.cantidadPersonas,
    0
  );

  const conteoMesas = mesas.reduce((acc, mesa) => {
    acc[mesa.cantidadPersonas] = (acc[mesa.cantidadPersonas] || 0) + 1;
    return acc;
  }, {});

  const [respuesta, setRespuesta] = useState("");

  const convertirFecha = (fecha) => {
    const [year, month, day] = fecha.split("-");
    return `${day}/${month}/${year}`;
  };

  const fechaLimpia = convertirFecha(reserva.fechaReserva.split(" ")[0]);

  const handleResponder = async () => {
    try {
      const response = await fetch(
        `/api/restaurantes/responderResenia/${reseniaExistente.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ respuestaDuenio: respuesta }),
        }
      );
      if (!response.ok) throw new Error("Error al guardar la respuesta");
      alert("Respuesta guardada con éxito");

      if (onResponse) {
        console.log(reseniaExistente.id)
        console.log(respuesta)
        onResponse(reseniaExistente.id, respuesta);
      }

      setRespuesta("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-row w-3/4 border p-4 my-2 bg-white shadow-md rounded-s border-l-[#DC493A] border-r-[#DC493A] border-r-2 border-l-2">
        <div className="flex-1 flex space-x-2 item-center">
          <IconoCalendarioBasico width={"20"} height={"20"} />
          <p className="font-medium text-sm">{fechaLimpia}</p>
        </div>

        <div className="flex-1 flex space-x-2 item-center text-center">
          <IconoReloj width={"20"} height={"20"} />
          <p className="font-light text-sm">{reserva.horaReserva}</p>
        </div>

        <div className="flex-1 text-center">
          <p
            className={`font-semibold text-sm rounded-md p-2 ${
              reserva.estado === "cancelada"
                ? "text-white bg-[#DC493A] "
                : reserva.estado === "procesada"
                ? "bg-green-700 text-white"
                : "bg-[#B6C6B9]"
            }`}
          >
            {reserva.estado}
          </p>
        </div>

        <div className="flex-1  text-center">
          <p className="font-light text-sm">{reserva.notaEspecial}</p>
        </div>

        <div className="flex-1 text-center ml-2">
          <div className="flex space-x-2 item-center ">
            {" "}
            <Mesa width={"20"} height={"20"} />
            <p className="font-semibold text-sm ">Total Mesas: {totalMesas}</p>
          </div>
          <div className="flex space-x-2 item-center ">
            <PersonaGroup width={"20"} height={"20"}/>
          <p className="font-semibold  text-sm">
            Total Personas: {totalPersonas}
          </p>
          </div>

          {Object.entries(conteoMesas).map(([cantidad, total]) => (
            <p className="font-light text-sm" key={cantidad}>
              {total} mesa(s) de {cantidad} persona(s)
            </p>
          ))}
        </div>

        <div className="flex-1 text-center">
          <div className="text-sm flex space-x-2 item-center">
            <IconoUsuario width={"20"} height={"20"}/>
            <p className="font-semibold ">Nombre: {usuario?.persona.nombre}</p>
          </div>
          <div className="font-light text-sm">
            <p><strong>Email: </strong>{usuario?.persona.email}</p>
          </div>
          <div className="font-light  text-sm">
            <p><strong>Telefono: </strong> {usuario?.persona.telefono}</p>
          </div>
        </div>
      </div>

      <div className="w-1/4 rounded-s p-4 border bg-white shadow-md ml-2 my-2 border-l-[#B6C6B9] border-l-2 border-r-[#B6C6B9] border-r-2 ">
        {!reseniaExistente || Object.keys(reseniaExistente).length === 0 ? (
          <div>
            <p className="text-xs text-center">Todavía no hay comentarios</p>
          </div>
        ) : (
          <div>
            {reseniaExistente && (
              <div className="text-xs">
                <div className="flex justify-between">
                  <h4>
                    <strong>Calificacion de: </strong>
                    {usuario?.persona.nombre}
                  </h4>
                  <EstrellaPuntuacion
                    calificacion={reseniaExistente.calificacion}
                  />
                </div>
                <p className="my-2">
                  <strong>Comentario: </strong>
                  {reseniaExistente.comentario}
                </p>
                {reseniaExistente.respuestaDuenio ? (
                  <div className="border-t-2 border-zinc-200 ">
                    <p className="p-1 text-zinc-600">
                      <strong>Respuesta: </strong>{" "}
                      {reseniaExistente.respuestaDuenio}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <textarea
                      className="h-8 text-xs overflow-hidden rounded border border-[#B6C6B9] p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#DC493A] focus:border-[#DC493A]"
                      value={respuesta}
                      onChange={(e) => setRespuesta(e.target.value)}
                      placeholder="Escribe una respuesta"
                    />
                    <button
                      className="bg-[#242424] hover:bg-[#DC493A]  text-white p-2 rounded-full flex items-center justify-center h-8 w-8"
                      onClick={handleResponder}
                    >
                      ✔
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VistaReserva;
