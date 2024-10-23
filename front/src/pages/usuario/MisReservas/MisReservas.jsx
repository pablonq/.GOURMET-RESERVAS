import { useContext, useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";

const MisReservas = () => {
  const { user } = useContext(AppContext);
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [paginaActual, setPaginaActual] = useState(1);
  const reservasPorPagina = 5;

  const idUsuario = user.id;
  const getReservasUsuario = async (idUsuario) => {
    try {
      const reservaResponse = await fetch(
        `/api/restaurantes/reservasCliente/${idUsuario}`
      );
      if (!reservaResponse.ok) {
        const errorData = await reservaResponse.json();
        console.error("Error detallado:", errorData);
        throw new Error("Error al cargar la reserva");
      }
      const data = await reservaResponse.json();
      const reservasOrdenadas = data.sort(
        (a, b) => new Date(b.fechaReserva) - new Date(a.fechaReserva)
      );
      setReservas(reservasOrdenadas);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idUsuario) {
      getReservasUsuario(idUsuario);
    }
  }, [idUsuario]);

  const indexUltimaReserva = paginaActual * reservasPorPagina;
  const indexPrimerReserva = indexUltimaReserva - reservasPorPagina;
  const reservasActuales = reservas.slice(
    indexPrimerReserva,
    indexUltimaReserva
  );

  const paginate = (pageNumber) => setPaginaActual(pageNumber);

  if (loading) return <p>Cargando reservas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Title text="Reservas" />
      {reservas.length === 0 ? (
        <p>No hay reservas disponibles.</p>
      ) : (
        <div className="space-y-4">
          {reservasActuales.map((reserva) => {
            const cantidadMesas = reserva.mesas.length;
            const totalComensales = reserva.mesas.reduce(
              (total, mesa) => total + mesa.cantidadPersonas,
              0
            );

            return (
              <div key={reserva.id} className="border p-4 rounded shadow">
                <h3 className="text-lg font-semibold">
                  Restaurante: {reserva.restaurantes.nombreRes}
                </h3>
                <p>
                  Fecha: {new Date(reserva.fechaReserva).toLocaleDateString()}
                </p>
                <p>Hora: {reserva.horaReserva}</p>
                <p>Estado reserva: {reserva.estado}</p>
                <p>Cantidad de mesas reservadas: {cantidadMesas}</p>
                <p>Total de comensales: {totalComensales}</p>
                <ul>
                  {reserva.mesas.map((mesa) => (
                    <li key={mesa.id}>
                      Mesa número {mesa.numeroMesa} : Cap
                      {mesa.cantidadPersonas} personas
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* Paginación */}
      <div className="flex justify-end">
        {Array.from(
          { length: Math.ceil(reservas.length / reservasPorPagina) },
          (_, index) => (
            <button
              className="border-2 rounded-md p-2 w-6 text-center"
              key={index + 1}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MisReservas;
