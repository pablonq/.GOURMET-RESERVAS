import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";
import { useContext, useEffect, useState } from "react";
import UsuarioData from "../../../api/UsuarioData";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { user, token, setUser, setToken } = useContext(AppContext);
 
  const [error, setError] = useState(null);  // Estado para manejar errores
  const { direccionUsuario, usuario } = UsuarioData();
  const navigate = useNavigate();

  async function handleDelete(e) {
    e.preventDefault();
 
      const res = await fetch(`/api/usuarios/borrarUsuario/${user?.id}`, {
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
      }else {
        setError(data.message || 'Error al eliminar el usuario');
      }
    
    
  } 
  const handleDeleteWithConfirmation = (e) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar tu perfil? Esta acción no se puede deshacer.')) {
      handleDelete(e);
    }
  };



  return (
    <>
      <div className="bg-slate-400">
        <Title text="Mi perfil" />
      </div>

      <div className="flex justify-center items-center m-4 space-x-4">
        <button className="w-40 rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait" 
        onClick={() => navigate(`../editarUsuario/${user?.Id}`)}>
          Editar Perfil
        </button>
        <button className="w-40 rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait" 
        onClick={handleDeleteWithConfirmation}>
          Eliminar Perfil
        </button>
      </div>

      <div className="flex justify-center">
        {usuario?.usuario?.avatarUrl && (
          <img
            src={usuario.usuario.avatarUrl}
            alt={`Imagen de ${usuario.usuario.nombreUsuario}`}
            className="w-28 h-28 m-1 rounded-full border-solid border-4 border-slate-800"
          />
        )}
      </div>

      <div className="text-center mt-4">
        <h1 className="text-xl font-bold">{usuario.persona?.nombre || "Nombre no disponible"} {usuario.persona?.apellido || "" }</h1>
        <p className="text-lg">Usuario: {usuario?.usuario?.nombreUsuario || "Usuario no disponible"}</p>
        <p className="text-lg">Email: {usuario.persona?.email || "Email no disponible"}</p>
        <p className="text-lg">Tel: {usuario.persona?.telefono || "Celular no disponible"}</p>
        
        <p className="text-lg">Dirección: {direccionUsuario?.calle || "Calle no disponible"} {direccionUsuario?.altura || ""}</p>
        <p className="text-lg">Ciudad: {direccionUsuario?.ciudad || "Ciudad no disponible"}</p>
        <p className="text-lg">Provincia: {direccionUsuario?.provincia || "Provincia no disponible"}</p>
        <p className="text-lg">Pais: {direccionUsuario?.pais || "Pais no disponible"}</p>
      </div>

      {error && (
        <div className="text-center text-red-500 mt-2">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Perfil;
