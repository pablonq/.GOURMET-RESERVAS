import { useContext, useEffect, useState } from "react";
import Title from "../component/Title/Title";
import { AppContext } from "../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import CardMenuUsuario from "../component/CardMenu/CardMenuUsuario";

const DetalleRestaurante = () => {
  const { user, token } = useContext(AppContext);
  const navigate = useNavigate();
  const { idRestaurante } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [restaurante, setRestaurante] = useState(null);
  const [menu, setMenu] = useState(null);
  const [platos, setPlatos] = useState(null);
  const [expandedMenuId, setExpandedMenuId] = useState(null);

  async function getRestaurante() {
    const res = await fetch(`/api/restaurantes/mostrarRestaurante/${idRestaurante}`);
    const data = await res.json();

    if (res.ok) {
      setRestaurante(data);
      
    }
  }

  async function getMenu() {
    const res = await fetch(`/api/restaurantes/indexMenu/${idRestaurante}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      setMenu(data);
      console.log("Menu:", data);
    }
  }

  async function getPlatos() {
    try {
      const res = await fetch(`/api/restaurantes/indexPlatos/${idRestaurante}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setPlatos(data);
      
    } catch (error) {
      setError(error.message);
    }
  }

  const handleReservar = () => {
    if (user) {
      navigate(`/reservar/${idRestaurante}`);
    } else {
      navigate("/loginUsuario");
    }
  };

  useEffect(() => {
    Promise.all([getRestaurante(), getMenu(), getPlatos()])
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const toggleMenu = (menuId) => {
    setExpandedMenuId(expandedMenuId === menuId ? null : menuId);
  };

  // Función para agrupar platos por menú
  const agruparPlatosPorMenu = () => {
    if (!platos || !menu) return {};

    const menuMap = menu.reduce((acc, menuItem) => {
      acc[menuItem.id] = { ...menuItem, platos: [] };
      return acc;
    }, {});

    platos.forEach(plato => {
      plato.menus.forEach(menuInfo => {
        if (menuMap[menuInfo.id]) {
          menuMap[menuInfo.id].platos.push(plato);
        }
      });
    });

    console.log("MenusPorPlatos:", menuMap);
    return menuMap;
  };

  const menusPorPlatos = agruparPlatosPorMenu();

  if (loading) return <p className="text-center font-bold text-rose-700">Cargando...</p>;
  if (error) return <p className="text-center font-bold text-rose-700">Error: {error}</p>;
  const handleVolver = () => {
    navigate("/panelUsuario");
  };
  return (
    <>
      <Title text={"Detalle del restaurante"} />
    <div className="absolute top-40 left-50">
      <button onClick={handleVolver}>
        <img
          src="../../src/assets/volver.png" // Reemplaza con la ruta de tu imagen PNG
          alt="Volver"
          className="w-8 h-8 cursor-pointer"
        />
      </button>
    </div>
      
      <div className="flex justify-center p-2">
        <button
          onClick={handleReservar}
          className="text-white text-center rounded-md bg-slate-400 p-2 hover:bg-orange-400">
          Reservar
        </button>
      </div>

      <div className="flex justify-center">
        {restaurante?.imagen?.length > 0 && (
          <img
            src={restaurante.imagen[0].imagenUrl}
            alt={`Imagen de ${restaurante.restaurante.nombreRes}`}
            className="w-1/2 h-40 object-cover rounded-lg"
          />
        )}
      </div>

      <div className="text-center mt-4">
        <p className="text-3xl font-bold">{restaurante?.restaurante.nombreRes}</p>
        <p className="text-lg text-slate-800">{restaurante?.restaurante.descripcion}</p>
        <p className="text-sm">{restaurante?.restaurante.direccion}</p>
        <p className="text-sm">{restaurante?.restaurante.telefono}</p>
      </div>

      <div className="flex justify-center p-10">
        <p className="text-l font-bold">Menús</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
        {Object.values(menusPorPlatos).length === 0 ? (
          <p className="text-center font-bold text-rose-700">No hay menús disponibles.</p>
        ) : (
          Object.values(menusPorPlatos).map((menuItem) => (
            <div key={menuItem.id} className="w-full max-w-md">
              <div 
                onClick={() => toggleMenu(menuItem.id)}
                className="cursor-pointer bg-white shadow-md rounded-lg p-3 mb-2"
              >
                <CardMenuUsuario
                  imagen={menuItem.imagen} // Asumiendo que la imagen está en el objeto del menú
                  titulo={menuItem.nombre}
                />
                {expandedMenuId === menuItem.id && (
                  <div className="mt-4">
                    <h4 className="font-bold mb-2">Platos:</h4>
                    <ul className="list-disc list-inside">
                      {menuItem.platos.length > 0 ? (
                        menuItem.platos.map((plato) => (
                          <li key={plato.id}>
                            {plato.nombrePlato} - ${plato.precio}
                            <p className="text-sm text-gray-600 ml-4">{plato.descripcion}</p>
                          </li>
                        ))
                      ) : (
                        <li>No hay platos disponibles para este menú.</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DetalleRestaurante;