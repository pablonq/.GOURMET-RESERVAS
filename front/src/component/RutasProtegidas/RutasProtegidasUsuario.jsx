/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const RutasProtegidasUsuario = ({ children }) => {
  const { user, loading } = useContext(AppContext);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user || user.rol !== "usuario") {
    return <Navigate to="/loginUsuario" />;
  }

  return children;
};

export default RutasProtegidasUsuario;
