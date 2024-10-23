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
    }
  }, [reservas]);

  // Filtrar reservas
  const reservasFiltradas = reservas.filter((reserva) => {
    const usuario = usuarios.find((user) => user.id === reserva.idUsuario) || {};
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
  const reservasActuales = reservasFiltradas.slice(indexPrimerReserva, indexUltimaReserva);

  const paginate = (pageNumber) => setPaginaActual(pageNumber);

  if (loading) return <p>Cargando reservas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Title text="Reservas" />

      {/* Inputs de filtrado */}
     
      <div className="flex my-6 ">
      <div className="text-center items-center w-2/4 font-semibold ">Filtrar Reservas</div>
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

      {reservasFiltradas.length === 0 ? (
        <p>No hay reservas disponibles.</p>
      ) : (
        reservasActuales.map((reserva, index) => (
          <VistaReserva
            key={reserva.id}
            reserva={reserva}
            mesas={reserva.mesas}
            usuario={usuarios[index]}
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
