import { useNavigate } from "react-router-dom";
import ListaCard from "../component/ListaCard/ListaCard";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

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
