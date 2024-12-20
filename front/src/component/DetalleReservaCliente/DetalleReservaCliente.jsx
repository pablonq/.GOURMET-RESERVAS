/* eslint-disable react/prop-types */
import { useState } from "react";
import calendar from "../../assets/calendar.svg";
import IconoMapa from "../../assets/IconoMapa";
import IconoReloj from "../../assets/IconoReloj";
import Mesa from "../../assets/Mesa";
import PersonaGroup from "../../assets/PersonasGroup";

const DetalleReservaCliente = ({ reserva, filtro ,  onCancel}) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajeExito, setMensajeExito] = useState(false);
  const cantidadMesas = reserva.mesas.length;
  const totalComensales = reserva.mesas.reduce(
    (total, mesa) => total + mesa.cantidadPersonas,
    0
  );

  const convertirFecha = (fecha) => {
    const [year, month, day] = fecha.split("-");
    return `${day}/${month}/${year}`;
  };

  const fechaLimpia = convertirFecha(reserva.fechaReserva.split(" ")[0]);
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
      const response = await fetch(
        `/api/restaurantes/cancelarReserva/${reserva.id}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        setMensajeExito(true);
        setMensaje(
          `La reserva del ${fechaLimpia} a las ${horaReservaString} ha sido cancelada.`
        );
        setTimeout(() => {
          setMensaje("");
          setMensajeExito(false);
          onCancel();
        }, 3000);
      } else {
        const errorData = await response.json();
        setMensaje(errorData.message || "Error al cancelar la reserva.");
      }
    } catch (error) {
      setMensajeExito(false);
      setMensaje("Error al cancelar la reserva: " + error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-row">
        {reserva.restaurantes.imagen_principal ? (
          <div className="relative w-72 h-52">
            <div
              className={`absolute top-2 left-[-10px] bg-[#242424]  text-white text-sm font-semibold p-2 rounded
            ${
              reserva.estado === "procesada"
                ? "bg-green-700"
                : reserva.estado === "cancelada"
                ? "bg-[#DC493A] "
                : "bg-[#242424] "
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
          <h3 className="text-lg font-semibold  text-[#242424] ">
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
              <IconoReloj width={"16"} height={"16"} />
              <p className="text-sm ml-2">Hora: {horaReservaString}</p>
            </div>
            <div className="flex items-center">
              <Mesa width={"16"} height={"16"}/>
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
              className="border border-[#DC493A] hover:bg-[#DC493A] hover:text-white text-[#DC493A] mt-4 ml-20 p-2 text-sm rounded "
              onClick={handleCancelar}
            >
              Cancelar Reserva
            </button>
          ) : (
            ""
          )}
          {mensaje && (
            <div
              className={`mb-4 text-center p-2 rounded mt-4 ${
                mensajeExito
                  ? "bg-[#B6C6B9] text-[#1A2F2A]"
                  : "bg-[#DC493A] text-white"
              }`}
            >
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleReservaCliente;
