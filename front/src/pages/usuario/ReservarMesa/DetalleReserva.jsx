import { useLocation } from "react-router-dom";
import Title from "../../../component/Title/Title";
import { useContext, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import PagoComponent from "../../../component/PagoComponent/PagoComponent";

const DetalleReserva = () => {
  const location = useLocation();
  const { user } = useContext(AppContext);
  const [notaEspecial, setNotaEspecial] = useState("sin comentarios");
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
      const reservaResponse = await fetch("/api/usuarios/registerReserva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!reservaResponse.ok) {
        const errorData = await reservaResponse.json();
        throw new Error(`Error al registrar la reserva: ${errorData.message}`);
      }

      const reservaData = await reservaResponse.json();

      // preferencia de pago
      const preferenceResponse = await fetch("/api/pago/createPreference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 100,
          external_reference: reservaData.id,
        }),
      });

      if (!preferenceResponse.ok) {
        const errorData = await preferenceResponse.json();
        throw new Error(`Error al crear la preferencia: ${errorData.message}`);
      }

      const preferenceData = await preferenceResponse.json();
      console.log(preferenceData);

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
      <Title text={"Detalle Reserva"} />
      <div className="p-4">
        <h1 className="font-bold text-lg">Detalles de la Reserva</h1>
        <div>
          <h2>Mesas Seleccionadas: {mesasSelecionadas.length}</h2>
          <h2>catidad total de personas:{totalComensales}</h2>
          <h2>Fecha: {fecha}</h2>
          <h2>Hora: {hora}</h2>
          <h2>Precio: $100</h2>
          <label>Ingrese notas especiales, como alergias:</label>
          <textarea
            id="notaEspecial"
            value={notaEspecial}
            onChange={(e) => setNotaEspecial(e.target.value)}
          />
        </div>
        <button
          onClick={handlePagarReserva}
          className="text-white text-center m-2 rounded-md bg-slate-400 p-2"
        >
          Pagar con Mercado Pago
        </button>
        {preferenceId && (
          <PagoComponent
            preferenceId={preferenceId}
          />
        )}
      </div>
    </>
  );
};

export default DetalleReserva;
