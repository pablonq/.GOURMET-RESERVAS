import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

export default function MostrarPlato() {
  const { platoId } = useParams();
  const navigate = useNavigate();
  const { user, token } = useContext(AppContext);

  const [plato, setPlato] = useState(null);

  async function getPlato() {
    /* e.preventDefault(); */
    const res = await fetch(`/api/restaurantes/mostrarPlato/${platoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      setPlato(data);
      console.log(data);
      console.log(platoId);

    }
  }

  async function handleDelete(e) {
    e.preventDefault();

    
      const res = await fetch(`/api/restaurantes/borrarPlato/${platoId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/panelRestaurante/administrarPlatos");
      }

      console.log(data);
    
  } 

  useEffect(() => {
    getPlato();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center m-4 space-x-4">
        <button className="w-40 rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait" onClick={() => navigate(`../editarPlato/${platoId}`)}>
          Editar
        </button>
        <button className="w-40 rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait" onClick={handleDelete}>
          Borrar
        </button>
      </div>
      <div className="flex justify-center">
        <img
          src={plato?.imagen}
          alt={`Imagen de ${plato?.nombre}`}
          className="w-1/2 h-40 object-cover rounded-lg"
        />
      </div>

      {/* Contenedor para el texto */}
      <div className="text-center mt-4">
        <h1 className="text-xl font-bold">{plato?.nombrePlato}</h1>
        <h3 className="text-lg text-slate-800">{plato?.descripcion}</h3>
        <h3 className="text-md">{plato?.informacionNutricional}</h3>
        <h2 className="text-2xl">${plato?.precio}</h2>
        <h2 className="text-2xl">Menu: {plato?.menu ? plato.menu.nombre : "Sin menú asociado"}</h2>
        
      </div>
    </>
  );
}