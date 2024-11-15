import { useContext, useEffect, useState } from "react";
import SiderLink from "../component/SiderLink/SiderLink";
import ImagenPerfil from "../component/ImagenPerfil/ImagenPerfil";
import { Outlet } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import defaultAvatar from "../assets/default-avatar.jpg";
import IconoDashboard from "../assets/IconoDashboard";
import IconoEliminarAgregarMesa from "../assets/IconoEliminarAgregarMesa";
import IconoUsuario from "../assets/IconoUsuario";
import IconoAdministrarMesas from "../assets/IconoAdministrarMesas";
import IconoMenu from "../assets/IconoMenu";
import IconoPlatoRestaurante from "../assets/IconoPlatoRestaurante";
import IconoReloj from "../assets/IconoReloj";
import IconoReserva from "../assets/IconoReserva";

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
      <div className="w-72 text-sm min-h-screen bg-slate-700  ">
        <div className="flex justify-center my-2">
          {imagenesFiltradas.length > 0 ? (
            <ImagenPerfil
              src={imagenesFiltradas[0].imagenUrl || defaultAvatar}
              textAlt={"imagen perfil restaurante"}
            />
          ) : (
            <p>Cargando imagen de perfil...</p>
          )}
        </div>
        <nav className=" flex">
          <ul className="space-y-4">
            <SiderLink
              icono={<IconoDashboard />}
              to={"/panelRestaurante/dashboardRestaurante"}
              text={"Dashboard Restaurante"}
            />
            <SiderLink
              icono={<IconoEliminarAgregarMesa />}
              to={"/panelRestaurante/registerMesa"}
              text={"Cargar o eliminar Mesas"}
            />
            <SiderLink
              icono={<IconoAdministrarMesas />}
              to={"/panelRestaurante/editarMapa"}
              text={"Administar Mesas/reservas"}
            />
            <SiderLink
              icono={<IconoMenu />}
              to={"/panelRestaurante/editarMenu"}
              text={"Menues"}
            />
            <SiderLink
              icono={<IconoPlatoRestaurante/>}
              to={"/panelRestaurante/administrarPlatos"}
              text={"Platos"}
            />
            <SiderLink
               icono={<IconoReloj width={"28"} height={"28"}/>}
              to={"/panelRestaurante/diasHorarios"}
              text={"Dias y Horarios de Atención"}
            />
            <SiderLink
              icono={<IconoUsuario/>}
              to={"/panelRestaurante/perfilRestaurante"}
              text={"Perfil "}
            />
            <SiderLink
            icono={<IconoReserva width={"24"} height={"24"}/>}
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
