import { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import ImagenPerfil from "../component/ImagenPerfil/ImagenPerfil";
import SiderLink from "../component/SiderLink/SiderLink";
import { AppContext } from "../Context/AppContext";
import defaultAvatar from "../assets/default-avatar.jpg";

const PanelUsuario = () => {
  const { user } = useContext(AppContext);
  const [redirected, setRedirected] = useState(false);
  useEffect(() => {
    /* getImagenes(); */
    setRedirected(true);
  }, []);
  return (
    <div className="flex">
      <div className="w-1/6 min-h-screen bg-slate-700 ">
        <nav className=" flex flex-col justify-start ">
          <ImagenPerfil
            src={user?.avatarUrl || defaultAvatar}
            textAlt={"imagen perfil usuario"}
          />
          <ul className="space-y-4">
            <SiderLink
              to={"/panelUsuario/dashboardUsuario"}
              text={"Panel Usuario"}
            />
            <SiderLink
              to={"/panelUsuario/busqueda"}
              text={"Buscar Restaurante"}
            />
            <SiderLink to={"/panelUsuario/perfilUsuario"} text={"Perfil"} />
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4">
        {redirected ? (
          <Outlet />
        ) : (
          <Navigate to="/panelUsuario/dashboardUsuario" replace />
        )}
      </div>
    </div>
  );
};

export default PanelUsuario;
