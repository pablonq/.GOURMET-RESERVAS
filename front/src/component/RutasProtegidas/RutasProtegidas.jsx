/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const RutasProtegidas = ({ children }) => {
  const { user } = useContext(AppContext);

  if (!user || user.rol !== "restaurante") {
    return <Navigate to="/loginRestaurante" />;
  }

  return children;
};

export default RutasProtegidas;
