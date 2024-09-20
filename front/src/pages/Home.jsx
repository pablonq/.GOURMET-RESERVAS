//import { useContext } from "react";
import ListaCard from "../component/ListaCard/ListaCard";
import Title from "../component/Title/Title";
//import { AppContext } from "../Context/AppContext";
/**
 * Un breve resumen de la aplicación
 * Un formulario de búsqueda para que los usuarios encuentren restaurantes por nombre, comida, ubicación, etc.
 * Sección para mostrar los restaurantes más populares, nuevos o con mejores calificaciones.
 */

const Home = () => {
  // const {name} = useContext(AppContext)
  return (
    <div>
      <Title text=".GourmetReservas" />
      <div className="p-4"></div>
       <ListaCard/>
    </div>
  );
};

export default Home;
