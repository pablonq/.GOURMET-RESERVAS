import { useState, useEffect } from "react";
import CardRestaurante from "../CardRestaurante/CardRestaurante";
import { useNavigate } from "react-router-dom";
import ButtonPaginacion from "../ButtonPaginacion/ButtonPaginacion";

const ListaCard = () => {
  const [cards, setCards] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const cardsPorPagina = 10;
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

  const indexUltimaCards = paginaActual * cardsPorPagina;
  const indexPrimerCards = indexUltimaCards - cardsPorPagina;
  const cardsActuales = cards.slice(indexPrimerCards, indexUltimaCards);

  const paginate = (pageNumber) => {
    setPaginaActual(pageNumber);
  };
  return (
    <>
    <div className="flex flex-wrap  justify-center ">
      {cards.length === 0 ? (
        <p className="text-center font-bold text-rose-700">
          No hay restaurantes disponibles.
        </p>
      ) : (
        cardsActuales.map((restaurante) => {
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
          {/* Paginación */}
          <div className=" flex justify-end">
          <div className="flex mt-4">
        {Array.from(
          { length: Math.ceil(cards.length / cardsPorPagina) },
          (_, index) => (
            <ButtonPaginacion
              key={index + 1}
              page={index + 1}
              isActive={paginaActual === index + 1}
              onClick={paginate}
            />
          )
        )}
      </div>
      </div>
    </>
  );
};

export default ListaCard;
