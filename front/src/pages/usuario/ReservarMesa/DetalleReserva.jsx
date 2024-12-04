import { useLocation } from "react-router-dom";
import Title from "../../../component/Title/Title";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import PagoComponent from "../../../component/PagoComponent/PagoComponent";
import IconoCalendarioBasico from "../../../assets/IconoCalendarioBasico";
import IconoMapa from "../../../assets/IconoMapa";
import Mesa from "../../../assets/Mesa";
import PersonaGroup from "../../../assets/PersonasGroup";
import IconoReloj from "../../../assets/IconoReloj";
import Button from "../../../component/Button/Button";
import IconoDinero from "../../../assets/IconoDinero";

const DetalleReserva = () => {
  const location = useLocation();
  const { user } = useContext(AppContext);
  const [notaEspecial, setNotaEspecial] = useState("sin comentarios");
  const [restaurante, setRestaurante] = useState("");
  const { mesasSelecionadas, fecha, hora } = location.state || {
    mesasSelecionadas: [],
  };

  const totalComensales = mesasSelecionadas.reduce(
    (total, mesa) => total + mesa.cantidadPersonas,
    0
  );
  const idRestaurante =
    mesasSelecionadas.length > 0 ? mesasSelecionadas[0].idRestaurante : null;

  const [preferenceId, setPreferenceId] = useState(null);

  const convertirFecha = (fecha) => {
    const [year, month, day] = fecha.split("-");
    return `${day}/${month}/${year}`;
  };

  const fechaLimpia = convertirFecha(fecha);

  async function getRestaurante() {
    const res = await fetch(
      `/api/restaurantes/mostrarRestaurante/${idRestaurante}`
    );
    const data = await res.json();
    if (res.ok) {
      setRestaurante(data);
      console.log(data);
    }
  }

  useEffect(() => {
    getRestaurante();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePagarReserva = async () => {
    const notaEspecial = document.getElementById("notaEspecial").value;
    const reservasData = mesasSelecionadas.map((mesa) => ({
      idMesa: mesa.id,
    }));
    const formattedHora = hora.includes(":") ? hora.slice(0, 5) : `${hora}:00`;

    const fechaHoraReserva = new Date(`${fecha}T${formattedHora}`);
    fechaHoraReserva.setHours(fechaHoraReserva.getHours() + 2);
    const horaFinReserva = fechaHoraReserva.toTimeString().slice(0, 5);

    const requestBody = {
      fechaReserva: fecha,
      horaReserva: formattedHora,
      horaFinReserva: horaFinReserva,
      estado: "iniciada",
      notaEspecial,
      mesas: reservasData,
      idRestaurante: idRestaurante,
      idUsuario: user.id,
    };

    try {
      const [reservaResponse, preferenceResponse] = await Promise.all([
        fetch("/api/usuarios/registerReserva", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }),
        fetch("/api/pago/createPreference", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 100,
            external_reference: user.id,
          }),
        }),
      ]);

      if (!reservaResponse.ok) {
        const errorData = await reservaResponse.json();
        throw new Error(`Error al registrar la reserva: ${errorData.message}`);
      }

      if (!preferenceResponse.ok) {
        const errorData = await preferenceResponse.json();
        throw new Error(`Error al crear la preferencia: ${errorData.message}`);
      }

      const reservaData = await reservaResponse.json();
      const preferenceData = await preferenceResponse.json();
    
      const pagoResponse = await fetch("/api/pago/guardarPago", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_id: preferenceData.id,
          monto: 100,
          fechaPago: new Date().toISOString().replace("Z", ""),
          metodoPago: "mercado pago",
          estado: "pendiente",
          idUsuario: reservaData.idUsuario,
          idReserva: reservaData.id,
        }),
      });

      if (!pagoResponse.ok) {
        const errorData = await pagoResponse.json();
        throw new Error(`Error al guardar el pago: ${errorData.message}`);
      }

      setPreferenceId(preferenceData.id);
    } catch (error) {
      console.error("Error en el proceso:", error);
    }
  };

  return (
    <>
      <Title text={"Detalle de su Reserva"} />
      <div className=" flex flex-row gap-6 max-w-6xl mt-6 p-6 bg-white mx-auto text-[#242424]">
        <div className="flex flex-col w-1/4 border border-gray-300 rounded-md shadow-sm  border-b-4 border-b-[#DC493A]">
          {restaurante && (
            <div>
              <img
                src={restaurante.imagen[0].imagenUrl}
                alt={`Imagen de ${restaurante.nombreRes || "Restaurante"}`}
                className="w-full h-auto object-cover rounded-sm"
              />
              <div className="p-4 mt-4">
                <div className="flex item-center space-x-2">
                  <IconoMapa width="20" height="20" />
                  <h3 className="text-sm">
                    Tu reserva en{" "}
                    <strong className="text-[#1A2F2A]">
                      {restaurante.restaurante.nombreRes}
                    </strong>
                  </h3>
                </div>
                <div className="flex item-center space-x-2 my-2">
                  <Mesa width="20" height="20" />
                  <p className="mb-2 text-sm">
                    Mesas Seleccionadas:{" "}
                    <strong>{mesasSelecionadas.length}</strong>
                  </p>
                </div>
                <div className="flex item-center space-x-2 my-2">
                  <PersonaGroup />
                  <p className="mb-2 text-sm">
                    Cantidad total de personas:{" "}
                    <strong>{totalComensales}</strong>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col w-3/4">
          <div className="border border-[#DC493A] rounded-sm text-center mt-8">
            <p className="text-sm font-medium p-2">
              <strong className="text-[#DC493A]">IMPORTANTE:</strong> El costo de la reserva se considera una seña y no será
              reembolsado en caso de inasistencia o cancelación. Gracias por su
              comprensión
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4 my-6">
            <div className=" border border-gray-300 rounded-sm">
              <div className="bg-[#B6C6B9] border-2 flex justify-between p-4 ">
                <p>Estado de la reserva</p>
                <div className="bg-[#DC493A] rounded-sm p-1">No confirmada</div>
              </div>
              <div className="my-2 mx-4">
                <div className="flex item-center space-x-2 my-4">
                  <IconoCalendarioBasico width={"16"} height={"16"} />
                  <p className="mb-2 text-sm">
                    Fecha: <strong>{fechaLimpia}</strong>
                  </p>
                </div>
                <div className="flex item-center space-x-2 my-2">
                  <IconoReloj width={"20"} height={"20"} />
                  <p className="mb-2 text-sm">
                    Hora: <strong>{hora}</strong>
                  </p>
                </div>
                <div className="flex item-center space-x-2 my-2">
                  <IconoDinero width={"20"} height={"20"} />
                  <h2 className=" font-semibold mb-2 text-sm">Precio: $100</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#B6C6B9] border-2 flex justify-center p-4 mb-4">
                <p className="font-semibold"> Agregue notas especiales si lo desea</p>
              </div>
              <textarea
                id="notaEspecial"
                value={notaEspecial}
                onChange={(e) => setNotaEspecial(e.target.value)}
                className="h-full border rounded-sm font-light text-s focus:outline-none focus:ring-1 focus:ring-[#DC493A] focus:border-[#DC493A]"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={handlePagarReserva}
              texto={"Pagar con Mercado Pago"}
            />
          </div>
          {preferenceId && <PagoComponent preferenceId={preferenceId} />}
        </div>
      </div>
    </>
  );
};

export default DetalleReserva;
