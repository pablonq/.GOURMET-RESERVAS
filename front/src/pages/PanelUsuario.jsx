import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import FiltroNombre from "./restaurante/Filtros/FiltroNombre";
import FiltroCategoria from "./restaurante/Filtros/FiltroCategoria";
import FiltroMesasDisponible from "./restaurante/Filtros/FiltroMesasDisponible";
import FiltroPopularidad from "./restaurante/Filtros/FiltroPopularidad";
import FiltroUbicacion from "./restaurante/Filtros/FiltroUbicacion";
import FiltroDistancia from "./restaurante/Filtros/FiltroDistancia";
import FiltroTipo from "./restaurante/Filtros/FiltroTipo";
import PerfilRestauranteImagen from "../assets/PerfilRestaurante.png";

const PanelUsuario = () => {
  const [filtros, setFiltros] = useState({
    nombre: "",
    tags: [],
    fecha: "",
    hora: "",
    ciudades: [],
    distancias: [],
    tipos: [],
  });

  const handleFiltroChange = (filtro, valor) => {
    setFiltros((prevFiltros) => ({ ...prevFiltros, [filtro]: valor }));
  };

  useEffect(() => {
    console.log("Filtros actualizados:", filtros);
  }, [filtros]);
  const [ordenarPorPopularidad, setOrdenarPorPopularidad] = useState(false);

  return (
    <div className="flex">
      <div className="w-72 min-h-screen border-r-4 border-[#DC493A] shadow-md ml-4 ">
        <div className=" flex justify-center items-center space-x-2 mx-4 my-6 bg-white shadow-md rounded-s">
          <img
            src={PerfilRestauranteImagen}
            alt="Profile"
            className="w-6 h-6"
          />
          <h2 className="text-[#242424] font-bold text-xl">
            Filtros Restaurantes
          </h2>
        </div>

        <div className="divide-y divide-gray-300 space-y-4 mb-6">
          <FiltroPopularidad
            ordenarPorPopularidad={ordenarPorPopularidad}
            setOrdenarPorPopularidad={setOrdenarPorPopularidad}
          />

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

          <FiltroUbicacion
            filtroCiudades={filtros.ciudades}
            setFiltroCiudades={(ciudades) =>
              handleFiltroChange("ciudades", ciudades)
            }
          />
          <FiltroDistancia
            distanciasSeleccionadas={filtros.distancias}
            setDistanciasSeleccionadas={(distancias) =>
              handleFiltroChange("distancias", distancias)
            }
          />
          <FiltroTipo
            filtroTipos={filtros.tipos}
            setFiltroTipos={(tipos) => handleFiltroChange("tipos", tipos)}
          />
        </div>
      </div>
      <div className="flex-1 p-4 ml-4">
        <Outlet
          context={{
            filtros,
            ordenarPorPopularidad,
            actualizarFiltros: handleFiltroChange,
          }}
        />
      </div>
    </div>
  );
};

export default PanelUsuario;
