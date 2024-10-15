import Title from "../../../component/Title/Title";
import { useState, useContext, useEffect } from 'react';
import { AppContext } from "../../../Context/AppContext";
import { CardMenu } from "../../../component/CardMenu/CardMenu";
import { useNavigate} from 'react-router-dom';

export default function EditarMenu() {
  const { user, token } = useContext(AppContext);
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const idRestaurante = user?.id;

  const handleView = (menuId) => {
    navigate(`../mostrarMenu/${menuId}`);  // Redirige a la página del menú específico
  };

  async function getMenus() {
    try {
      const res = await fetch(`/api/restaurantes/indexMenu/${idRestaurante}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setMenus(data);
      setLoading(false);
      console.log("Menus:", data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (idRestaurante && token) {
      getMenus();
    }
  }, [idRestaurante, token]);

  return (
    <>
    <div className="bg-slate-400">
      <Title text="Editar Menu" />

    </div>
    <div className="flex justify-center items-center m-4">
  <button className="w-50 rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait" onClick={() => navigate(`../crearMenu`)}>
    Crear Menu
  </button>
</div>
    <div className="flex flex-wrap">
      {loading ? (
        <p className="text-center font-bold text-rose-700">
          Cargando menús...
        </p>
      ) : error ? (
        <p className="text-center font-bold text-rose-700">
          {error}
        </p>
      ) : menus.length === 0 ? (
        <p className="text-center font-bold text-rose-700">
          No hay restaurantes disponibles.
        </p>
      ) : (
        menus.map((menu) => (
          <div key={menu.id} className="m-2">
            <CardMenu
              imagen={menu.imagen}
              nombre={menu.nombre}
              descripcion={menu.descripcion}
              tipo={menu.tipo}
              onView={() => handleView(menu.id)}
            />
          </div>
        ))
      )}
    </div>
  </>
  );
};

