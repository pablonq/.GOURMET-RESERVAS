/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RestauranteData from "../../../api/RestauranteData";

export default function FiltroTipo({ filtroTipos, setFiltroTipos }) {
  const [tipos, setTipos] = useState([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const { restaurantes } = RestauranteData();

  useEffect(() => {
    const extraerTipos = () => {
      if (restaurantes && restaurantes.length > 0) {
        const tiposUnicos = Array.from(
          new Set(restaurantes.map((item) => item.tipo))
        );
        setTipos(tiposUnicos.map((tipo) => ({ nombreTipo: tipo })));
      }
    };

    extraerTipos();
  }, [restaurantes]);

  const handleTipoChange = (nombreTipo) => {
    if (filtroTipos.includes(nombreTipo)) {
      setFiltroTipos(filtroTipos.filter((tipo) => tipo !== nombreTipo));
    } else {
      setFiltroTipos([...filtroTipos, nombreTipo]);
    }
  };
  const tiposAMostrar = mostrarTodos ? tipos : tipos.slice(0, 4);

  return (
    <div className="mx-2 mt-2">
      <div className="w-3/4">
        <div className="w-full p-2 font-medium text-[#242424]">
          Tipo de Restaurante
        </div>
        {tiposAMostrar.map((tipo, index) => (
          <label key={index} className="ml-4 last:flex items-center">
            <input
              type="checkbox"
              checked={filtroTipos.includes(tipo.nombreTipo)}
              onChange={() => handleTipoChange(tipo.nombreTipo)}
              className="w-4 h-4 accent-[#DC493A]"
            />
            <span className="ml-2">{tipo.nombreTipo}</span>
          </label>
        ))}
        <button
          className="text-[#DC493A] hover:text-[#B6C6B9] ml-4 font-semibold text-base"
          onClick={() => setMostrarTodos(!mostrarTodos)}
        >
          {mostrarTodos ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
}
