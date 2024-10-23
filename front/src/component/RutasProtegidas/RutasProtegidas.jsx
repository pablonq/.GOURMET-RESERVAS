/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const RutasProtegidas = ({ children }) => {
  const { user, loading } = useContext(AppContext);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (!user || user.rol !== "restaurante") {
    return <Navigate to="/loginRestaurante" />;
  }

  return children;
};

export default RutasProtegidas;
