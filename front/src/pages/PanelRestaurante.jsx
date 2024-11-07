import { useContext, useEffect, useState } from "react";
import SiderLink from "../component/SiderLink/SiderLink";
import ImagenPerfil from "../component/ImagenPerfil/ImagenPerfil";
import { Outlet } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import defaultAvatar from "../assets/default-avatar.jpg";

const PanelRestaurante = () => {
  const [imagenes, setImagenes] = useState([]);
  const { user } = useContext(AppContext);
  const [totalReservas, setTotalReservas] = useState(0);

  async function getImagenes() {
    const res = await fetch("/api/restaurantes/indexImagenesRestaurante");
    const data = await res.json();

    if (res.ok) {
      setImagenes(data);
    } else {
      console.error("Error al obtener imágenes:", data);
    }
  }
  async function getTotalReservas() {
    const res = await fetch(`/api/restaurantes/totalReservas/${user.id}`);
    const data = await res.json();

    if (res.ok) {
      setTotalReservas(data.total);
    } else {
      console.error("Error al obtener total de reservas:", data);
    }
  }

  useEffect(() => {
    getImagenes();
    getTotalReservas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imagenesFiltradas = imagenes.filter(
    (imagen) => imagen.idRestaurante === user.id
  );

  return (
    <div className="flex">
      <div className="w-1/6  min-h-screen bg-slate-700  ">
        <nav className=" flex flex-col justify-start ">
          {imagenesFiltradas.length > 0 ? (
            <ImagenPerfil
              src={imagenesFiltradas[0].imagenUrl || defaultAvatar}
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
              text={"Cargar o eliminar Mesas"}
            />
            <SiderLink
              to={"/panelRestaurante/editarMapa"}
              text={"Administar Mesas/reservas"}
            />
            <SiderLink to={"/panelRestaurante/editarMenu"} text={"Menues"} />
            <SiderLink
              to={"/panelRestaurante/administrarPlatos"}
              text={"Platos"}
            />
            <SiderLink
              to={"/panelRestaurante/diasHorarios"}
              text={"Dias y Horarios de Atención"}
            />
            <SiderLink
              to={"/panelRestaurante/perfilRestaurante"}
              text={"Perfil "}
            />
            <SiderLink
              to={"/panelRestaurante/visualizarReservas"}
              text={
                <div className="flex items-center">
                  <span>Visualizar Reservas</span>
                  <span className="text-white bg-red-600 rounded-full px-2 ml-2">
                    {totalReservas}
                  </span>
                </div>
              }
            />
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default PanelRestaurante;
