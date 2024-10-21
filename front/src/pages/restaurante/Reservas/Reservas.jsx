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
      setReservas(data);
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

  if (loading) return <p>Cargando reservas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Title text="Reservas" />

      {reservas.length === 0 ? (
        <p>No hay reservas disponibles.</p>
      ) : (
        reservas.map((reserva, index) => (
          <VistaReserva
            key={reserva.id}
            reserva={reserva}
            mesas={reserva.mesas}
            usuario={usuarios[index]}
          />
        ))
      )}
    </div>
  );
};

export default Reservas;
