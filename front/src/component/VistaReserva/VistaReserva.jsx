import { useState } from "react";
import EstrellaPuntuacion from "../EstrellaPuntuacion/EstrellaPuntuacion";

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

  console.log("son los datosd de una reseña:", reseniaExistente);

  const [respuesta, setRespuesta] = useState("");

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
        onResponse(reseniaExistente.id, respuesta);
      }

      setRespuesta("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-row w-3/4 border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-md">
        <div className="flex-1 text-center ">
          <p className="font-light text-sm">{reserva.fechaReserva}</p>
        </div>

        <div className="flex-1 text-center">
          <p className="font-light text-sm">{reserva.horaReserva}</p>
        </div>

        <div className="flex-1 text-center">
          <p
            className={`font-light text-sm ${
              reserva.estado === "cancelada"
                ? "text-red-500"
                : reserva.estado === "procesada"
                ? "text-green-500"
                : ""
            }`}
          >
            {reserva.estado}
          </p>
        </div>

        <div className="flex-1 text-center">
          <p className="font-light text-sm">{reserva.notaEspecial}</p>
        </div>

        <div className="flex-1 text-center">
          <p className="font-semibold text-sm ">Total Mesas: {totalMesas}</p>
          <p className="font-semibold  text-sm">
            Total Personas: {totalPersonas}
          </p>

          {Object.entries(conteoMesas).map(([cantidad, total]) => (
            <p className="font-light text-sm" key={cantidad}>
              {total} mesa(s) de {cantidad} persona(s)
            </p>
          ))}
        </div>

        <div className="flex-1 text-center">
          <div className="text-sm ">
            <p className="font-semibold ">Nombre:{usuario?.persona.nombre}</p>
          </div>
          <div className="font-light text-sm">
            <p>Email: {usuario?.persona.email}</p>
          </div>
          <div className="font-light  text-sm">
            <p>Telefono: {usuario?.persona.telefono}</p>
          </div>
        </div>
      </div>

      <div className="w-1/4 border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-md ml-2">
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
                      className="h-8 text-xs overflow-hidden rounded border border-gray-300 p-2 resize-none"
                      value={respuesta}
                      onChange={(e) => setRespuesta(e.target.value)}
                      placeholder="Escribe una respuesta"
                    />
                    <button
                      className="bg-slate-400 hover:bg-orange-400 text-white p-2 rounded-full flex items-center justify-center h-8 w-8"
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
