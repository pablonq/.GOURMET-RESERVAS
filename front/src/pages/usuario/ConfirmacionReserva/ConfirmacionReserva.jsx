import { useEffect, useState } from "react";
import Title from "../../../component/Title/Title";

const ConfirmacionReserva = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfirmationData = async () => {
      const paymentId = new URLSearchParams(window.location.search).get(
        "paymentId"
      );
      try {
        const response = await fetch(`/api/pago/confirmacionPago/${paymentId}`);
        const data = await response.json();

        if (data.success) {
          setMessage(data.message);
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        console.error("Error al obtener los datos de confirmación:", error);
        setErrorMessage("Error en la comunicación con el servidor.");
      } finally {
        setLoading(false);
      }
    };

    fetchConfirmationData();
  }, []);

  return (
    <div>
      <Title text="Informacion de reserva" />
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <h2 className="text-lg font-bold">Estado de reserva:</h2>
          {loading ? (
            <p className="mt-4 text-center">Cargando...</p>
          ) : message ? (
            <p className="mt-4 text-center text-green-600">{message}</p>
          ) : (
            <p className="mt-4 text-red-600">
              {errorMessage || "No se pudo confirmar la reserva."}
            </p>
          )}
          <button
            onClick={() =>
              (window.location.href = "/panelUsuario/dashboardUsuario")
            }
            className="mt-4 w-full rounded-md px-4 py-2 text-white  bg-slate-400 p-2 hover:bg-orange-400"
          >
            Volver al Panel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionReserva;
