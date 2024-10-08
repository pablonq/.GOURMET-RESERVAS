import { useContext, useEffect, useState } from "react";
import SiderLink from "../component/SiderLink/SiderLink";
import ImagenPerfil from "../component/ImagenPerfil/ImagenPerfil";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const PanelRestaurante = () => {
  const [imagenes, setImagenes] = useState([]);
  const { user } = useContext(AppContext);
  const [redirected, setRedirected] = useState(false);

  async function getImagenes() {
    const res = await fetch("/api/restaurantes/indexImagenesRestaurante");
    const data = await res.json();

    if (res.ok) {
      setImagenes(data);
    } else {
      console.error("Error al obtener imágenes:", data);
    }
  }

  useEffect(() => {
    getImagenes();
    setRedirected(true);
  }, []);

  const imagenesFiltradas = imagenes.filter(
    (imagen) => imagen.idRestaurante === user.id
  );

  return (
    <div className="flex">
      <div className="w-1/6 h-screen bg-slate-700  ">
        <nav className=" flex flex-col justify-start ">
          {imagenesFiltradas.length > 0 ? (
            <ImagenPerfil
              src={imagenesFiltradas[0].imagenUrl}
              textAlt={"imagen perfil restaurante"}
            />
          ) : (
            <p>Cargando imagen de perfil...</p>
          )}
          <ul className="space-y-4">
            <SiderLink
              to={"/panelRestaurante/dashboardRestaurante"}
              text={"Dashboard Restaurante"}
            />
            <SiderLink
              to={"/panelRestaurante/registerMesa"}
              text={"Cargar Mesas al plano"}
            />
            <SiderLink
              to={"/panelRestaurante/editarMapa"}
              text={"Administar Mesas"}
            />
            <SiderLink to={"/panelRestaurante/editarMenu"} text={"Gestionar Menú"} />
            <SiderLink to={"/panelRestaurante/diasHorarios"} text={"Dias y Horarios de Atención"} />
            <SiderLink to={"/panelRestaurante/perfilRestaurante"} text={"Editar Perfil"} />
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4">
        {redirected ? (
          <Outlet />
        ) : (
          <Navigate to="/panelRestaurante/dashboardRestaurante" replace />
        )}
      </div>
    </div>
  );
};

export default PanelRestaurante;
