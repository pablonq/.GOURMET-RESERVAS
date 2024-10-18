import { useState, useEffect } from "react";
import CardRestaurante from "../CardRestaurante/CardRestaurante";

const ListaCard = () => {
  const [cards, setCards] = useState([]);
  const [imagenes, setImagenes] = useState([]);

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
                descripcion={restaurante.descripcion}
                direccion={restaurante.direccion}
                tipo={restaurante.tipo}
                idRestaurante={restaurante.id}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ListaCard;
