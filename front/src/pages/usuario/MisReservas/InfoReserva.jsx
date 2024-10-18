import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const InfoReserva = () => {
  const { id } = useParams();
  const [reserva, setReserva] = useState(null);
  const [restaurante, setRestaurante] = useState(null);
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("");

  const getReserva = async (reservaId) => {
    const reservaResponse = await fetch(
      `/api/restaurantes/reserva/${reservaId}`
    );
    if (!reservaResponse.ok) {
      throw new Error("Error al cargar la reserva");
    }
    return await reservaResponse.json();
  };

  const getRestaurante = async () => {
    const restauranteResponse = await fetch(
      "/api/restaurantes/indexRestaurante"
    );
    if (!restauranteResponse.ok) {
      throw new Error("Error al cargar el restaurante");
    }
    return await restauranteResponse.json();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservaData = await getReserva(id);
        setReserva(reservaData);

        const restauranteData = await getRestaurante();
        const restauranteFiltrado = restauranteData.find(
          (r) => r.id === reservaData.idRestaurante
        );
        setRestaurante(restauranteFiltrado);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleCancelar = async () => {
    try {
      const response = await fetch(`/api/restaurantes/cancelarReserva/${id}`, {
        method: "PUT", 
      });
  
      if (response.ok) {
        setMensaje(
          `La reserva del ${reserva.fechaReserva} a las ${reserva.horaReserva} ha sido cancelada. Por favor, no asistas ya que no aparecerá en la agenda del lugar y no serás atendido.`
        );
        setReserva((prevReserva) => ({ ...prevReserva, estado: "cancelada" })); 
        const errorData = await response.json();
        setMensaje(errorData.message || "Error al cancelar la reserva.");
      }
    } catch (error) {
      setMensaje("Error al cancelar la reserva: " + error.message);
    }
  };

  const handleCerrar = () => {
    navigate("/");
  };

  if (!reserva || !restaurante)
    return <div className="text-center">Cargando...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Detalles de la Reserva</h1>
      <p className="mb-2">
        Reserva número: <strong>{reserva.id}</strong>
      </p>
      <p className="mb-2">
        Fecha: <strong>{reserva.fechaReserva}</strong>
      </p>
      <p className="mb-4">
        Hora: <strong>{reserva.horaReserva}</strong>
      </p>
      <h2 className="text-xl font-semibold mb-2">Datos del Restaurante</h2>
      <p className="mb-2">
        Nombre: <strong>{restaurante.nombre}</strong>
      </p>
      <p className="mb-4">
        Dirección: <strong>{restaurante.direccion}</strong>
      </p>

      {mensaje && <div className="mb-4 text-center text-green-600">{mensaje}</div>}

      <div className="flex justify-between">
        <button
          onClick={handleCancelar}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cancelar
        </button>
        <button
          onClick={handleCerrar}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default InfoReserva;
