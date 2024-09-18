import { useState, useEffect } from "react";
import CardRestaurante from "../CardRestaurante/CardRestaurante";

const ListaCard = () => {
  const [cards, setCards] = useState([]);

  async function getCards() {
    const res = await fetch("/api/restaurantes/indexRestaurante");
    const data = await res.json();

    if (res.ok) {
      setCards(data);
     // console.log(data);
    }
    console.log(data);
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div>
      {cards.map((restaurante) => {
        return (
          <li key={restaurante.id}>
            <CardRestaurante
            nombreRes={restaurante.nombreRes}
            descripcion={restaurante.descripcion}
             direccion={restaurante.direccion}
             tipo={restaurante.tipo}
            />
          </li>
        );
      })}
    </div>
  );
};

export default ListaCard;
