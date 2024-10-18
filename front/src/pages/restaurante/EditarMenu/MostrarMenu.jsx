import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

export default function MostrarMenu() {
  const { menuId } = useParams();
  const navigate = useNavigate();
  const { user, token } = useContext(AppContext);

  const [menu, setMenu] = useState(null);
  const [platos, setPlatos] = useState([]);

  async function getMenu() {
    /* e.preventDefault(); */
    const res = await fetch(`/api/restaurantes/mostrarMenu/${menuId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      setMenu(data);
      console.log(data);
      console.log(menuId);

    }
  }
  async function getPlatos() {
    
      const res = await fetch(`/api/restaurantes/indexPlatosMenus/${menuId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setPlatos(data);
      
      console.log("Platos:", data);
   
  }

  async function handleDelete(e) {
    e.preventDefault();

    
      const res = await fetch(`/api/restaurantes/borrarMenu/${menuId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/panelRestaurante/editarMenu");
      }

      console.log(data);
    
  } 

  useEffect(() => {
    getMenu();
    getPlatos();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center m-4 space-x-4">
        <button className="w-40 rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait" onClick={() => navigate(`../actualizarMenu/${menuId}`)}>
          Editar
        </button>
        <button className="w-40 rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait" onClick={handleDelete}>
          Borrar
        </button>
      </div>
      <div className="flex justify-center">
        <img
          src={menu?.imagen}
          alt={`Imagen de ${menu?.nombre}`}
          className="w-1/2 h-40 object-cover rounded-lg"
        />
      </div>

      {/* Contenedor para el texto */}
      <div className="text-center mt-4">
        <h1 className="text-xl font-bold">{menu?.nombre}</h1>
        <h2 className="text-lg">{menu?.descripcion}</h2>
        <h3 className="text-md">{menu?.tipo}</h3>
      </div>

      {/* Contenedor para la lista de platos */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Platos</h2>
        <Link to={`../mostrarPlato/${platos[0]?.id}`}><ul className="list-disc list-inside">
          {platos.map((plato) => (
            <li key={plato.id} className="text-lg text-slate-800">{plato.nombrePlato}</li>
          ))}
        </ul>
        </Link>
      </div>
    </>
  );
}