import Title from "../../../component/Title/Title";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from "../../../Context/AppContext";
import RestauranteData from "../../../api/RestauranteData";
import { useNavigate } from "react-router-dom";

export default function PerfilRestaurante() {
  const { restaurante, direccion, loading, duenio } = RestauranteData();

  const { user, token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function handleDelete(e) {
    e.preventDefault();
    const res = await fetch(`/api/restaurantes/borrarRestaurante/${user?.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setUser(null);
      setToken(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.reload();
    } else {
      setError(data.message || 'Error al eliminar el restaurante');
    }
  }

  const handleDeleteWithConfirmation = (e) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar su perfil? Esta acción no se puede deshacer.')) {
      handleDelete(e);
    }
  };

  if (loading) return <p>Cargando datos...</p>; // Muestra un mensaje de carga mientras espera

  return (
    <>
      <div className="bg-slate-400">
        <Title text="Perfil restaurante" />
      </div>
      <div className="flex justify-center items-center m-4 space-x-4">
        <button
          className="w-40 rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
          onClick={() => navigate(`../editarRestaurante/${user?.id}`)}
        >
          Editar Perfil
        </button>
        <button
          className="w-40 rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
          onClick={handleDeleteWithConfirmation}
        >
          Eliminar Perfil
        </button>
      </div>
      <div className="text-center mt-4">
        <h1 className="text-xl font-bold">{restaurante.restaurante?.nombreRes || "Nombre no disponible"}</h1>
        <p className="text-lg">Descripcion: {restaurante.restaurante?.descripcion || "Usuario no disponible"}</p>
        <p className="text-lg">Tipo: {restaurante.restaurante?.tipo || "Email no disponible"}</p>
        <p className="text-lg">Telefono: {restaurante.restaurante?.telefono || "Celular no disponible"}</p>
        <p className="text-lg">Email: {restaurante.restaurante?.email || "Calle no disponible"}</p>
        <p className="text-lg">Capacidad: {restaurante.restaurante?.capacidadTotal || "Calle no disponible"}</p>
        <p className="text-lg">Acepta Eventos: {restaurante.restaurante?.aceptaEventos || "Calle no disponible"}</p>
        <p className="text-lg">Calle: {direccion[0]?.calle || "Calle no disponible"} {direccion[0]?.altura}</p>
        <p className="text-lg">Ciudad: {direccion[0]?.ciudad || "Ciudad no disponible"}</p>
        <p className="text-lg">Provincia: {direccion[0]?.provincia || "Provincia no disponible"}</p>
        <p className="text-lg">Pais: {direccion[0]?.pais || "Pais no disponible"}</p>
      </div>
      <div className="text-center mt-4">
        <h1 className="text-l font-bold">Dueño</h1>
        <p className="text-lg">Nombre: {duenio.persona?.[0]?.nombre || "Nombre no disponible"} {duenio.persona?.[0]?.apellido}</p>
        <p className="text-lg">DNI: {duenio?.dni || "DNI no disponible"}</p>
        <p className="text-lg">Email: {duenio.persona?.[0]?.email || "Email no disponible"}</p>
        <p className="text-lg">Telefono: {duenio.persona?.[0]?.telefono || "Celular no disponible"}</p>
        <p className="text-lg">Ciudad: {duenio.persona?.[0]?.ciudad || "Ciudad no disponible"}</p>
      </div>

      {error && (
        <div className="text-center text-red-500 mt-2">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};
