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
      <div className="text-sm min-h-screen bg-[#242424] w-60">
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
        <nav className="flex m-0 p-0 flex-col items-end">
          <ul className="space-y-2 w-auto">
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
            icono={<IconoReserva width={"20"} height={"20"}/>}
              to={"/panelRestaurante/visualizarReservas"}
              text={
                <div className="flex items-center p-2">
                  <span>Visualizar Reservas</span>
                  <div className="text-white bg-[#DC493A] rounded-full w-6 h-6 ml-2 p-1 text-center">
                    {totalReservas}
                  </div>
                </div>
              }
            />
          </ul>
        </nav>
      </div>
      <div className="flex-1 ml-2">
        <Outlet />
      </div>
    </div>
  );
};

export default PanelRestaurante;
