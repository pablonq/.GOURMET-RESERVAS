/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import EscribirResenia from "./EscribirResenia";
import ReservasFiltros from "../../../component/ReservasFiltros/ReservasFiltros";
import DetalleReservaCliente from "../../../component/DetalleReservaCliente/DetalleReservaCliente";
import ResumenResenia from "../../../component/ResumenResenia/ResumenResenia";
import Button from "../../../component/Button/Button";

const MisReservas = () => {
  const { user } = useContext(AppContext);
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resenias, setResenias] = useState({});
  const [reservaActual, setReservaActual] = useState(null);
  const [mostrarEscribirResenia, setMostrarEscribirResenia] = useState(false);
  const [filter, setFilter] = useState("activas");

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

  // traer todas las reseñas que ha generado el usuario
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

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const today = new Date();
  const filteredReservas = reservas.filter((reserva) => {
    const fecha = new Date(
      `${reserva.fechaReserva.split(" ")[0]}T${reserva.horaReserva}`
    );
    if (filter === "activas") {
      return reserva.estado === "procesada" && fecha > today;
    } else if (filter === "pasadas") {
      return reserva.estado === "procesada" && fecha < today;
    } else if (filter === "canceladas") {
      return reserva.estado === "cancelada";
    }
    return false;
  });

  const indexUltimaReserva = paginaActual * reservasPorPagina;
  const indexPrimerReserva = indexUltimaReserva - reservasPorPagina;
  const reservasActuales = filteredReservas.slice(
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

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <ReservasFiltros onFilterChange={handleFilterChange} />
      </div>
      <div className="w-3/4 p-4">
        <h3 className="font-semibold text-lg text-[#1A2F2A] p-2">{`Reservas ${filter}`}</h3>
        {filteredReservas.length === 0 ? (
          <p className="text-sm ml-2">No hay reservas realizadas</p>
        ) : (
          <div className="space-y-4">
            {reservasActuales.map((reserva) => {
              const reseniaExistente = resenias[reserva.id];
              const fechaActual = new Date();
              const fechaReserva = new Date(
                `${reserva.fechaReserva.split(" ")[0]}T${reserva.horaReserva}`
              );
              const haPasado = fechaReserva < fechaActual;
              return (
                <div key={reserva.id} className="border p-4 rounded shadow">
                  <DetalleReservaCliente reserva={reserva} filtro={filter} />

                  {/* Botón para abrir el modal */}
                  {haPasado &&
                    !reseniaExistente &&
                    reserva.estado == "procesada" && (
                      <Button  onClick={() => openModal(reserva)} texto={"Generar Reseña"}/>
                    )}

                  {reseniaExistente && (
                    <ResumenResenia reseniaExistente={reseniaExistente} />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Paginación */}
        <div className="flex justify-end p-2">
          {Array.from(
            { length: Math.ceil(reservas.length / reservasPorPagina) },
            (_, index) => (
              <button
                className="border rounded-full w-8 h-8 text-center  border-[#DC493A] text-[#DC493A] hover:bg-[#DC493A] hover:text-white"
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
    </div>
  );
};

export default MisReservas;
