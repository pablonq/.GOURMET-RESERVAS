//import { useContext } from "react";
import { Outlet } from "react-router-dom";
import SiderLink from "../component/SiderLink/SiderLink";
import { useState } from "react";
import FiltroNombre from "./restaurante/Filtros/FiltroNombre";
import FiltroCategoria from "./restaurante/Filtros/FiltroCategoria";
import FiltroMesasDisponible from "./restaurante/Filtros/FiltroMesasDisponible";
import FiltroPopularidad from "./restaurante/Filtros/FiltroPopularidad";
//import { AppContext } from "../Context/AppContext";

const PanelUsuario = () => {
  //const { user } = useContext(AppContext);
  const [filtros, setFiltros] = useState({
    nombre: "",
    tags: [],
    fecha: "",
    hora: "",
    //agregar otros filtros
  });

  const handleFiltroChange = (filtro, valor) => {
    setFiltros((prevFiltros) => ({ ...prevFiltros, [filtro]: valor }));
  };

  const [ordenarPorPopularidad, setOrdenarPorPopularidad] = useState(false);

  return (
    <div className="flex">
      <div className="w-72 min-h-screen border-r-2 border-slate-700 shadow-md shadow-slate-700 ">
        <nav className=" flex flex-col justify-start  ">
          <ul className="space-y-4">
            <SiderLink to={"/panelUsuario"} text={"Buscar restaurantes"} />
          </ul>
        </nav>

        <div className="divide-y divide-gray-300 ">
          <FiltroNombre
            filtroNombre={filtros.nombre}
            setFiltroNombre={(valor) => handleFiltroChange("nombre", valor)}
          />

          <FiltroCategoria
            filtroTags={filtros.tags}
            setFiltroTags={(tags) => handleFiltroChange("tags", tags)}
          />

          <FiltroMesasDisponible
            setFecha={(fecha) => handleFiltroChange("fecha", fecha)}
            setHora={(hora) => handleFiltroChange("hora", hora)}
          />

          <FiltroPopularidad
            ordenarPorPopularidad={ordenarPorPopularidad}
            setOrdenarPorPopularidad={setOrdenarPorPopularidad}
          />
        </div>
      </div>
      <div className="flex-1 p-4 ml-4">
        <Outlet context={{ filtros, ordenarPorPopularidad }} />
      </div>
    </div>
  );
};

export default PanelUsuario;
