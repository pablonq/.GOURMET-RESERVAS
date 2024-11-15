/* eslint-disable react/prop-types */
import { useState } from "react";
import calendar from "../../assets/calendar.svg";
import IconoMapa from "../../assets/IconoMapa";
import IconoReloj from "../../assets/IconoReloj";
import Mesa from "../../assets/Mesa";
import PersonaGroup from "../../assets/PersonasGroup";

const DetalleReservaCliente = ({ reserva, filtro }) => {
  const [mensaje, setMensaje] = useState("");
  const cantidadMesas = reserva.mesas.length;
  const totalComensales = reserva.mesas.reduce(
    (total, mesa) => total + mesa.cantidadPersonas,
    0
  );
  const fechaLimpia = reserva.fechaReserva.split(" ")[0];
  const horaReservaString = reserva.horaReserva;
  const direccionRestaurante =
    reserva.restaurantes.direccion.calle +
    " " +
    reserva.restaurantes.direccion.altura +
    " , " +
    reserva.restaurantes.direccion.ciudad;

  //console.log(reserva);

  const handleCancelar = async () => {
    try {
      const response = await fetch(`/api/restaurantes/cancelarReserva/${reserva.id}`, {
        method: "PUT",
      });

      if (response.ok) {
        setMensaje(
          `La reserva del ${reserva.fechaReserva} a las ${reserva.horaReserva} ha sido cancelada. Por favor, no asistas ya que no aparecerá en la agenda del lugar y no serás atendido.`
        );
        const errorData = await response.json();
        setMensaje(errorData.message || "Error al cancelar la reserva.");
      }
    } catch (error) {
      setMensaje("Error al cancelar la reserva: " + error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-row">
        {reserva.restaurantes.imagen_principal ? (
          <div className="relative w-72 h-52">
            <div
              className={`absolute top-2 left-[-10px] bg-gray-800 text-white text-sm font-semibold p-2 rounded
            ${
              reserva.estado === "procesada"
                ? "bg-green-700"
                : reserva.estado === "cancelada"
                ? "bg-red-500"
                : "bg-gray-800"
            }`}
            >
              {reserva.estado}
            </div>
            <img
              className=" object-cover w-72 h-52 rounded-lg"
              src={reserva.restaurantes.imagen_principal.imagenUrl}
              alt="Imagen del restaurante"
            />
          </div>
        ) : (
          <p>Sin imagen</p>
        )}

        <div className="ml-4">
          <h3 className="text-lg font-semibold  text-zinc-700">
            Restaurante: {reserva.restaurantes.nombreRes}
          </h3>
          <div className="my-4">
            <div className="flex items-center">
              <img
                className="w-4 h-4 mr-2"
                src={calendar}
                alt="icono calendario"
              />
              <p className="text-sm">Fecha: {fechaLimpia}</p>
            </div>
            <div className="flex items-center">
              <IconoReloj width={"16"} height={"16"}/>
              <p className="text-sm ml-2">Hora: {horaReservaString}</p>
            </div>
            <div className="flex items-center">
              <Mesa />
              <p className="text-sm ml-2">
                Cantidad de mesas reservadas: {cantidadMesas}
              </p>
            </div>
            <div className="flex items-center">
              <PersonaGroup />
              <p className="text-sm ml-2">
                Total de comensales: {totalComensales}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <IconoMapa />
            <p className="text-sm ml-2">Direccion: {direccionRestaurante}</p>
          </div>
          {filtro === "activas" ? (
            <button
              className="border-2 border-red-500  text-red-500 mt-4 ml-20 p-2 text-sm rounded hover:bg-red-500 hover:text-white"
              onClick={handleCancelar}
            >
              Cancelar Reserva
            </button>
          ) : (
            ""
          )}
          {mensaje && <div className="mb-4 text-center text-red-500">{mensaje}</div>}
        </div>
      </div>
    </div>
  );
};

export default DetalleReservaCliente;
