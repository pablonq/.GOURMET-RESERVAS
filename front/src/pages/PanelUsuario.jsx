//import { useContext } from "react";
import { Outlet } from "react-router-dom";
import SiderLink from "../component/SiderLink/SiderLink";
import { useState } from "react";
import FiltroNombre from "./restaurante/Filtros/FiltroNombre";
import FiltroCategoria from "./restaurante/Filtros/FiltroCategoria";
//import { AppContext } from "../Context/AppContext";

const PanelUsuario = () => {
  //const { user } = useContext(AppContext);
  const [filtros, setFiltros] = useState({
    nombre: "",
    tags: [],
    //agregar otros filtros
  });

  const handleFiltroChange = (filtro, valor) => {
    setFiltros((prevFiltros) => ({ ...prevFiltros, [filtro]: valor }));
  };

  return (
    <div className="flex">
      <div className="w-72 min-h-screen border-r-2 border-slate-700 shadow-md shadow-slate-700 ">
        <nav className=" flex flex-col justify-start  ">
          <ul className="space-y-4">
            <SiderLink to={"/panelUsuario"} text={"Buscar restaurantes"} />
          </ul>
        </nav>

        <FiltroNombre
          filtroNombre={filtros.nombre}
          setFiltroNombre={(valor) => handleFiltroChange("nombre", valor)}
        />

        <FiltroCategoria
          filtroTags={filtros.tags}
          setFiltroTags={(tags) => handleFiltroChange("tags", tags)}
        />
      </div>
      <div className="flex-1 p-4 ml-4">
        <Outlet context={filtros} />
      </div>
    </div>
  );
};

export default PanelUsuario;
