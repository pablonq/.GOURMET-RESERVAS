import { useNavigate } from "react-router-dom";
import ListaCard from "../component/ListaCard/ListaCard";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
/**
 * Un breve resumen de la aplicación
 * Un formulario de búsqueda para que los usuarios encuentren restaurantes por nombre, comida, ubicación, etc.
 * Sección para mostrar los restaurantes más populares, nuevos o con mejores calificaciones.
 */

const Home = () => {
  const { user, loading} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      const redirectPath = user.rol === "restaurante" ? "/panelRestaurante" : "/panelUsuario";
      navigate(redirectPath, { replace: true });
    }
  }, [loading,user, navigate]);

  if (loading) {
    return <div>Cargando...</div>; 
  }
  
  if (user=== null) {
    return (
      <div className="p-4">
        <ListaCard />
      </div>
    );
  }
  return null;
};


export default Home;
