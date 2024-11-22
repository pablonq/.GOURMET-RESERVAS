import { useState, useEffect } from "react";
import CardRestaurante from "../CardRestaurante/CardRestaurante";
import { useNavigate } from "react-router-dom";

const ListaCard = () => {
  const [cards, setCards] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const navigate = useNavigate();

  async function getCards() {
    const res = await fetch("/api/restaurantes/indexRestaurante");
    const data = await res.json();

    if (res.ok) {
      setCards(data);
    }
  }

  async function getImagenes() {
    const res = await fetch("/api/restaurantes/indexImagenesRestaurante");
    const data = await res.json();

    if (res.ok) {
      setImagenes(data);
    }
  }

  useEffect(() => {
    getCards();
    getImagenes();
  }, []);

  const handleView = (restauranteId) => {
    navigate(`detalleRestaurante/${restauranteId}`); 
  };


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
                direccion={restaurante.ciudad}
                tipo={restaurante.tipo}
                calificacion={restaurante.promedioPuntuacion}
                onView={() => handleView(restaurante.id)}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ListaCard;
