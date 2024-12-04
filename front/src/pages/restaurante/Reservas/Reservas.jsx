/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import VistaReserva from "../../../component/VistaReserva/VistaReserva";
import { AppContext } from "../../../Context/AppContext";
import IconoUsuario from "../../../assets/IconoUsuario";
import ButtonPaginacion from "../../../component/ButtonPaginacion/ButtonPaginacion";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";
import MensajeError from "../../../component/MensajeError/MensajeError";

const Reservas = () => {
  const { user } = useContext(AppContext);
  const [reservas, setReservas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [resenias, setResenias] = useState({});

  // Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const reservasPorPagina = 10;

  const idRestaurante = user.id;
  const getReservaRestaurante = async (idRestaurante) => {
    try {
      const reservaResponse = await fetch(
        `/api/restaurantes/reservasRestaurantes/${idRestaurante}`
      );
      if (!reservaResponse.ok) {
        throw new Error("Error al cargar la reserva");
      }
      const data = await reservaResponse.json();
    //  console.log(data)
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

  const handleResponseUpdate = (reseniaId, respuestaDuenio) => {
    setResenias((prevResenias) => {
      const updatedResenias = Object.keys(prevResenias).reduce((acc, key) => {
        const resenia = prevResenias[key];
        if (resenia.id === reseniaId) {
          return {
            ...acc,
            [key]: {
              ...resenia,
              respuestaDuenio,
            },
          };
        }
        return { ...acc, [key]: resenia };
      }, {});

      return updatedResenias;
    });
  };

  useEffect(() => {
    if (idRestaurante) {
      getReservaRestaurante(idRestaurante);
    }
  }, [idRestaurante]);


  // Filtrar reservas
  const reservasFiltradas = reservas.filter((reserva) => {
    const nombreUsuario = reserva.resenias?.[0]?.usuario?.persona?.nombre || "";
    const fechaReserva = reserva.fechaReserva.split(" ")[0];

    return (
      (filtroNombre === "" ||
        nombreUsuario.toLowerCase().includes(filtroNombre.toLowerCase())) &&
      (filtroFecha === "" || fechaReserva === filtroFecha) &&
      (filtroEstado === "" || reserva.estado === filtroEstado)
    );
  });

  const indexUltimaReserva = paginaActual * reservasPorPagina;
  const indexPrimerReserva = indexUltimaReserva - reservasPorPagina;
  const reservasActuales = reservasFiltradas.slice(
    indexPrimerReserva,
    indexUltimaReserva
  );

  const paginate = (pageNumber) => setPaginaActual(pageNumber);

  if (loading) return <p>Cargando reservas...</p>;

  return (
    <div>
      <Title text="Consulta todas tus reservas confirmadas , pendientes y canceladas" />
      {/* Inputs de filtrado */}
      <div className="flex my-4 ">
        <div className="flex text-center items-center w-full font-semibold flex-wrap md:flex-nowrap gap-4 border p-4 bg-white shadow-md rounded-s ">
          <div className=" text-[#242424] w-1/3"> Filtrar Reservas</div>
          <IconoUsuario width="40" height="40" />
          <input
            type="text"
            placeholder="Buscar por nombre de Persona"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
            className="border rounded-s h-full border-[#B6C6B9] focus:ring-1 focus:ring-[#DC493A] focus:border-[#DC493A]"
          />
          <input
            type="date"
            placeholder="Buscar por fecha"
            value={filtroFecha}
            onChange={(e) => setFiltroFecha(e.target.value)}
            className="border rounded-s mr-2 h-full "
          />
          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="border rounded-s h-full"
          >
            <option value="">Selecciona un estado</option>
            <option value="procesada">Procesada</option>
            <option value="cancelada">Cancelada</option>
            <option value="pendiente">Pendiente</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="w-3/4 flex flex-row  divide-x   bg-[#DC493A] text-white shadow-md rounded-s font-semibold p-2 my-4">
          <p className="flex-1 text-center">Fecha</p>
          <p className="flex-1 text-center">Hora</p>
          <p className="flex-1 text-center">Estado De reserva</p>
          <p className="flex-1 text-center">Comentarios</p>
          <p className="flex-1 text-center">Resumen de Mesas</p>
          <p className="flex-1 text-center">Datos del usuario</p>
        </div>
        <div className="w-1/4 ml-2 shadow-md bg-[#B6C6B9] rounded-s font-semibold p-2 my-4">
          <p className="text-center">Calificacion de usuarios</p>
        </div>
      </div>
      {reservasFiltradas.length === 0 ? (
        <MensajeError mensaje={"No hay reservas disponibles."}/>
      ) : (
        reservasActuales.map((reserva) => (
          <VistaReserva
            key={reserva.id}
            reserva={reserva}
            mesas={reserva.mesas}
            usuario={reserva.resenias?.[0]?.usuario || { persona: { nombre: "" } }}
            reseniaExistente={reserva.resenias || []}
            onResponse={handleResponseUpdate}
          />
        ))
      )}
      {/* Paginación */}
      <div className="flex justify-between p-4 items-end">
        <LinkVolver
          color={"[#DC493A]"}
          colorHover={"[#B6C6B9]"}
          ruta={"/panelRestaurante"}
        />
        <div className="flex mt-4">
          {Array.from(
            { length: Math.ceil(reservas.length / reservasPorPagina) },
            (_, index) => (
              <ButtonPaginacion
                key={index + 1}
                page={index + 1}
                isActive={paginaActual === index + 1}
                onClick={paginate}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservas;
