/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import EscribirResenia from "./EscribirResenia";
import ReservasFiltros from "../../../component/ReservasFiltros/ReservasFiltros";
import DetalleReservaCliente from "../../../component/DetalleReservaCliente/DetalleReservaCliente";
import ResumenResenia from "../../../component/ResumenResenia/ResumenResenia";
import Button from "../../../component/Button/Button";
import ButtonPaginacion from "../../../component/ButtonPaginacion/ButtonPaginacion";
import Title from "../../../component/Title/Title";
import MensajeError from "../../../component/MensajeError/MensajeError";
import Loading from "../../../component/Loading/Loading";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

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
  const reservasPorPagina = 3;

  const idUsuario = user.id;
  const getReservasUsuario = async (idUsuario) => {
    try {
      const reservaResponse = await fetch(
        `/api/restaurantes/reservasCliente/${idUsuario}`
      );
      if (!reservaResponse.ok) {
        const errorData = await reservaResponse.json();
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
    setPaginaActual(1)
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

  const totalPaginas = Math.ceil(filteredReservas.length / reservasPorPagina);

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

  const handleCancel = async () => {
    await getReservasUsuario(idUsuario); 
    setPaginaActual(1); 
  };

  if (loading) return <p><Loading/></p>;

  return (
    <>
    <div className="mx-4">
    <Title text="Visualiza y gestiona tus reservas realizadas"/>
    </div>
    <div className="flex">
      
      <div className="w-1/4 p-4">
        <ReservasFiltros onFilterChange={handleFilterChange} />
      </div>
      <div className="w-3/4 p-4">
        <h3 className="font-semibold text-lg text-[#DC493A] p-2">{`Reservas ${filter}`}</h3>
        {filteredReservas.length === 0 ? (
          <MensajeError mensaje={"No hay reservas realizadas"}/>
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
                <div key={reserva.id} className="border p-4 rounded-sm shadow-md border-r-[#DC493A] border-r-4">
                  <DetalleReservaCliente reserva={reserva} filtro={filter} onCancel={handleCancel}  />

                  {/* Botón para abrir el modal */}
                  {haPasado &&
                    !reseniaExistente &&
                    reserva.estado == "procesada" && (
                      <div className="flex justify-end">
                      <Button  onClick={() => openModal(reserva)} texto={"Generar Reseña"}/>
                      </div>
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
        {totalPaginas > 1 &&
          Array.from(
            { length: totalPaginas },
            (_, index) => (
              <ButtonPaginacion
              key={index + 1}
              page={index + 1}
              isActive={paginaActual === index + 1}
              onClick={() => paginate(index + 1)} 
              />
            )
          )}
        </div>
        {mostrarEscribirResenia && (
          <EscribirResenia reserva={reservaActual} closeModal={closeModal} />
        )}
      </div>
    </div>
    <div className="p-4">
      <LinkVolver
          color={"[#DC493A]"}
          colorHover={"[#B6C6B9]"}
          ruta={`/panelUsuario`}
        />
        </div>
    </>
  );
};

export default MisReservas;
