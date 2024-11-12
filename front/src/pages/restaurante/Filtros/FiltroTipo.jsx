/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RestauranteData from "../../../api/RestauranteData";

export default function FiltroTipo({ filtroTipos, setFiltroTipos }) {
  const [tipos, setTipos] = useState([]); // Lista de tipos únicos
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const { restaurantes } = RestauranteData(); // Asumiendo que cada restaurante tiene un atributo `tipo`

  useEffect(() => {
    const extraerTipos = () => {
      if (restaurantes && restaurantes.length > 0) {
        // Extraer tipos únicos de restaurante
        const tiposUnicos = Array.from(new Set(restaurantes.map((item) => item.tipo)));
        setTipos(tiposUnicos.map((tipo) => ({ nombreTipo: tipo })));
      }
    };

    extraerTipos();
  }, [restaurantes]);

  const handleTipoChange = (nombreTipo) => {
    if (filtroTipos.includes(nombreTipo)) {
      // Si ya está en el filtro, lo removemos
      setFiltroTipos(filtroTipos.filter((tipo) => tipo !== nombreTipo));
    } else {
      // Si no está en el filtro, lo añadimos
      setFiltroTipos([...filtroTipos, nombreTipo]);
    }
  };

  // Mostrar solo una cantidad limitada de tipos (5 en este caso) o todos
  const tiposAMostrar = mostrarTodos ? tipos : tipos.slice(0, 5);

  return (
    <div className="mx-2 mt-2">
      <div className="w-3/4">
        <div className="w-full p-2 font-medium text-neutral-700">Tipo de Restaurante</div>
        {tiposAMostrar.map((tipo, index) => (
          <label key={index} className="ml-4 last:flex items-center">
            <input
              type="checkbox"
              checked={filtroTipos.includes(tipo.nombreTipo)}
              onChange={() => handleTipoChange(tipo.nombreTipo)}
            />
            <span className="ml-2">{tipo.nombreTipo}</span>
          </label>
        ))}
        <button
          className="text-orange-400 ml-2"
          onClick={() => setMostrarTodos(!mostrarTodos)}
        >
          {mostrarTodos ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
}
