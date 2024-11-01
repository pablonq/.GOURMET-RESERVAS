import { useContext, useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";
import EstrellaPuntuacion from "../../../component/EstrellaPuntuacion/EstrellaPuntuacion";
import EscribirResenia from "./EscribirResenia";

const MisReservas = () => {
  const { user } = useContext(AppContext);
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resenias, setResenias] = useState({});
  const [reservaActual, setReservaActual] = useState(null);
  const [mostrarEscribirResenia, setMostrarEscribirResenia] = useState(false);

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
        // console.error( errorData.message);
        setError(errorData.message);
        setLoading(false);
      }
      const data = await reservaResponse.json();
      const reservasOrdenadas = data.sort(
        (a, b) => new Date(b.fechaReserva) - new Date(a.fechaReserva)
      );
      setReservas(reservasOrdenadas);
      setLoading(false);
    } catch {
      setError(
        "Hubo un problema al obtener tus reservas. Por favor, intenta de nuevo."
      );
      setLoading(false);
    }
  };

  // traer todas las resñas que ha generado el usuario
  const getReseniasUsuario = async () => {
    const reseñasResponse = await fetch(
      `/api/restaurantes/traerReseniasUsuario/${idUsuario}`
    );
    const data = await reseñasResponse.json();
    const reseniasPorReserva = {};
    data.forEach((resenia) => {
      reseniasPorReserva[resenia.idReserva] = resenia;
    });
    setResenias(reseniasPorReserva);
  };

  useEffect(() => {
    if (idUsuario) {
      getReservasUsuario(idUsuario);
      getReseniasUsuario();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idUsuario]);

  const indexUltimaReserva = paginaActual * reservasPorPagina;
  const indexPrimerReserva = indexUltimaReserva - reservasPorPagina;
  const reservasActuales = reservas.slice(
    indexPrimerReserva,
    indexUltimaReserva
  );

  const paginate = (pageNumber) => setPaginaActual(pageNumber);

  const openModal = (reserva) => {
    setReservaActual(reserva);
    setMostrarEscribirResenia(true);
  };

  const closeModal = () => {
    setMostrarEscribirResenia(false);
    setReservaActual(null);
    getReseniasUsuario();
  };

  if (loading) return <p>Cargando reservas...</p>;
  if (error)
    return <p className="font-bold text-center text-red-600">{error}</p>;


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

            const reseniaExistente = resenias[reserva.id];
            const fechaActual = new Date();
            const fechaReservaString = reserva.fechaReserva;
            const fechaLimpia = fechaReservaString.split(" ")[0];
            const horaReservaString = reserva.horaReserva;

            const fechaReserva = new Date(
              `${fechaLimpia}T${horaReservaString}`
            );

            const haPasado = fechaReserva < fechaActual;
            return (
              <div key={reserva.id} className="border p-4 rounded shadow">
                <h3 className="text-lg font-semibold">
                  Restaurante: {reserva.restaurantes.nombreRes}
                </h3>
                <p>Fecha: {fechaLimpia}</p>
                <p>Hora: {horaReservaString}</p>
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

                {/* Botón para abrir el modal */}
                {haPasado && !reseniaExistente && (
                  <button
                    onClick={() => openModal(reserva)}
                    className="mt-4 bg-slate-400 hover:bg-orange-400 text-white py-2 px-4 rounded"
                  >
                    Generar Reseña
                  </button>
                )}

                {reseniaExistente && (
                  <div className="mt-4  p-2 border-2 shadow-md  shadow-amber-100 ">
                    <h4 className="font-semibold">Tu Reseña:</h4>
                    <EstrellaPuntuacion
                      calificacion={reseniaExistente.calificacion}
                    />
                    <p>Comentario: {reseniaExistente.comentario}</p>
                  </div>
                )}
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

      {mostrarEscribirResenia && (
        <EscribirResenia reserva={reservaActual} closeModal={closeModal} />
      )}
    </div>
  );
};

export default MisReservas;
