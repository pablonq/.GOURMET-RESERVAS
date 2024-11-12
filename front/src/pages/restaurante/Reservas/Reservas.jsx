/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import VistaReserva from "../../../component/VistaReserva/VistaReserva";
import { AppContext } from "../../../Context/AppContext";

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
  const reservasPorPagina = 5;

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

  const fetchResenias = async (reservas) => {
    try {
      const reseniaPromises = reservas.map(async (reserva) => {
        const response = await fetch(
          `/api/restaurantes/reseniaReserva/${reserva.id}`
        );
        return response.ok ? response.json() : null;
      });
      const resenias = await Promise.all(reseniaPromises);
      setResenias(resenias);
    } catch (error) {
      setError("Error al cargar las reseñas");
    }
  };

  const handleResponseUpdate = (reseniaId, respuestaDuenio) => {
    setResenias((prevResenias) =>
      prevResenias.map((resenia) =>
        resenia && resenia.id === reseniaId
          ? { ...resenia, respuestaDuenio }
          : resenia
      )
    );
  };

  const getUsuarios = async (ids) => {
    try {
      const usuariosResponse = await Promise.all(
        ids.map((id) => fetch(`/api/usuarios/traerUsuario/${id}`))
      );

      const usuariosData = await Promise.all(
        usuariosResponse.map(async (res) => {
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Error al cargar el usuario");
          }
          return res.json();
        })
      );

      setUsuarios(usuariosData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (idRestaurante) {
      getReservaRestaurante(idRestaurante);
    }
  }, [idRestaurante]);

  useEffect(() => {
    if (reservas.length > 0) {
      const idsUsuarios = reservas.map((reserva) => reserva.idUsuario);
      getUsuarios(idsUsuarios);
      fetchResenias(reservas);
    }
  }, [reservas]);

  // Filtrar reservas
  const reservasFiltradas = reservas.filter((reserva) => {
    const usuario =
      usuarios.find((user) => user.id === reserva.idUsuario) || {};
    const nombreUsuario = usuario.nombre || "";
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
      <Title text="Reservas" />

      {/* Inputs de filtrado */}
      <div className="flex my-6 ">
        <div className="text-center items-center w-2/4 font-semibold ">
          Filtrar Reservas
        </div>
        <input
          type="text"
          placeholder="Buscar por nombre de Persona"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
          className="border rounded-lg mx-2"
        />
        <input
          type="date"
          placeholder="Buscar por fecha"
          value={filtroFecha}
          onChange={(e) => setFiltroFecha(e.target.value)}
          className="border rounded-lg mr-2 "
        />
        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
          className="border rounded-lg "
        >
          <option value="">Selecciona un estado</option>
          <option value="procesada">Procesada</option>
          <option value="cancelada">Cancelada</option>
          <option value="pendiente">Pendiente</option>
        </select>
      </div>

      <div className="flex flex-row ">
        <div className="w-3/4 flex flex-row  divide-x border border-gray-300 font-semibold p-2 my-4">
          <p className="flex-1 text-center">Fecha</p>
          <p className="flex-1 text-center">Hora</p>
          <p className="flex-1 text-center">Estado De reserva</p>
          <p className="flex-1 text-center">Comentarios</p>
          <p className="flex-1 text-center">Resumen de Mesas</p>
          <p className="flex-1 text-center">Datos del usuario</p>
        </div>
        <div className="w-1/4 ml-2 border border-gray-300 font-semibold p-2 my-4">
          <p className="text-center">Calificacion de usuarios</p>
        </div>
      </div>

      {reservasFiltradas.length === 0 ? (
        <p>No hay reservas disponibles.</p>
      ) : (
        reservasActuales.map((reserva, index) => (
          <VistaReserva
            key={reserva.id}
            reserva={reserva}
            mesas={reserva.mesas}
            usuario={usuarios[index]}
            reseniaExistente={resenias[index]}
            onResponse={handleResponseUpdate}
          />
        ))
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

export default Reservas;
