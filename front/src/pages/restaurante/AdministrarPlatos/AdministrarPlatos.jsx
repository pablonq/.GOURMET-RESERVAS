import { AppContext } from "../../../Context/AppContext";
import Title from "../../../component/Title/Title";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { useState, useEffect } from "react";
import CardPlato from "../../../component/CardPlato/CardPlato";

export default function AdministrarPlatos() {
  const { user, token } = useContext(AppContext);
  const [platos, setPlatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const idRestaurante = user?.id;

  const handleView = (platoId) => {
    navigate(`../mostrarPlato/${platoId}`);  // Redirige a la página del menú específico
  };
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
      setLoading(false);
      console.log("Platos:", data);
      
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (idRestaurante && token) {
      getPlatos();
    }
  }, [idRestaurante, token]);
  return (
    <>
      <div className="bg-slate-400">
        <Title text="Administrar platos" />
      </div>
      <div className="flex justify-center items-center m-4">
        <button className="w-50 rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait" onClick={() => navigate(`../crearPlato`)}>
          Crear Plato
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
        ) : platos.length === 0 ? (
          <p className="text-center font-bold text-rose-700">
            No hay restaurantes disponibles.
          </p>
        ) : (
          platos.map((plato) => (
            <div key={plato.id} className="m-2">
              <CardPlato
                imagen={plato.imagen}
                nombre={plato.nombrePlato}
                
                informacionNutricional={plato.informacionNutricional}
                precio={plato.precio}
                menu={plato.menus.length > 0 ? plato.menus[0].nombre : "Sin menú asociado"}
                onView={() => handleView(plato.id)}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}