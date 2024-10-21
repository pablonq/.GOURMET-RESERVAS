import ListaCard from "../component/ListaCard/ListaCard";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import CardRestaurante from "../component/CardRestaurante/CardRestaurante";
import { useNavigate } from "react-router-dom";

const DashboardUsuario = () => {
  const [cards, setCards] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const handleView = (restauranteId) => {
    navigate(`detalleRestaurante/${restauranteId}`);  // Redirige a la página del menú específico
  };
  async function getCards() {
    const res = await fetch("/api/restaurantes/indexRestaurante");
    const data = await res.json();

    if (res.ok) {
      setCards(data);
      //  console.log("Restaurantes recibidos:", data);
    }
  }

  async function getImagenes() {
    const res = await fetch("/api/restaurantes/indexImagenesRestaurante");
    const data = await res.json();

    if (res.ok) {
      setImagenes(data);
      //  console.log("Imagenes recibidas:", data);
    }
  }

  useEffect(() => {
    getCards();
    getImagenes();
  }, []);

  return (
    <div className="flex flex-wrap ">
      {cards.length === 0 ? (
        <p className="text-center font-bold text-rose-700">
          No hay restaurantes disponibles.
        </p>
      ) : (
        cards.map((restaurante) => {
          const imagenesFiltradas = imagenes.filter((imagen) => {
            return imagen.idRestaurante === restaurante.id;
          });
          return (
            <div key={restaurante.id} className="m-2 ">
              <CardRestaurante
                imagenes={imagenesFiltradas}
                nombreRes={restaurante.nombreRes}
                
                direccion={restaurante.direccion}
                tipo={restaurante.tipo}
                onView={() => handleView(restaurante.id)}
              />
            </div>
          );
        })
      )}
    </div>
  );
};


export default DashboardUsuario;
