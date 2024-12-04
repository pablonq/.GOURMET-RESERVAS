import { useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import Button from "../../../component/Button/Button";

const ConfirmacionReserva = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfirmationData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentId = urlParams.get("paymentId");
      const estado = urlParams.get("estado");

      if (estado === "fallo") {
        setErrorMessage(
          "El pago ha fallado o fue cancelado. Por favor, intente nuevamente."
        );
        setLoading(false);
        return;
      }

      if (estado === "pendiente") {
        setErrorMessage(
          "El pago está pendiente. Puede intentarlo nuevamente más tarde."
        );
        setLoading(false);
        return;
      }

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
      <Title text="Informacion de estado de su reserva" />
      <div className="flex items-center  justify-center h-64 ">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full border-t-4 border-t-[#DC493A]">
          <h2 className="text-lg font-bold">Estado de reserva:</h2>
          {loading ? (
            <p className="mt-4 text-center">Cargando...</p>
          ) : message ? (
            <p className="mt-4 font-semibold text-lg text-center text-green-600">
              {message}
            </p>
          ) : (
            <p className="mt-4 text-red-600">
              {errorMessage || "No se pudo confirmar la reserva."}
            </p>
          )}
          <div className="p-2">
          <Button
            onClick={() =>
              (window.location.href = "http://localhost:5173/panelUsuario")
            }
            texto={" Volver al Panel"}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionReserva;
