/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RestauranteData from "../../../api/RestauranteData";

export default function FiltroUbicacion({ filtroCiudades, setFiltroCiudades }) {
  const [ciudades, setCiudades] = useState([]);
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const { direcciones } = RestauranteData();
 

  useEffect(() => {
    const extraerCiudades = () => {
      if (direcciones && direcciones.length > 0) {
        const ciudadesUnicas = Array.from(new Set(direcciones.map((item) => item.ciudad)));
        setCiudades(ciudadesUnicas.map((ciudad) => ({ nombreCiudad: ciudad })));
      }
    };

    extraerCiudades();
  }, [direcciones]);

  const handleCiudadChange = (nombreCiudad) => {
    if (filtroCiudades.includes(nombreCiudad)) {
      setFiltroCiudades(filtroCiudades.filter((ciudad) => ciudad !== nombreCiudad));
    } else {
      setFiltroCiudades([...filtroCiudades, nombreCiudad]);
    }
  };

  const ciudadesAMostrar = mostrarTodas ? ciudades : ciudades.slice(0, 5);

  return (
    <div className="mx-2 mt-2 ">
      <div className="w-3/4">
        <div className="w-full p-2 font-medium text-neutral-700">Ciudad</div>
        {ciudadesAMostrar.map((ciudad, index) => (
          <label key={index} className="ml-4 last:flex items-center">
            <input
              type="checkbox"
              checked={filtroCiudades.includes(ciudad.nombreCiudad)}
              onChange={() => handleCiudadChange(ciudad.nombreCiudad)}
            />
            <span className="ml-2">{ciudad.nombreCiudad}</span>
          </label>
        ))}
        <button
          className="text-orange-400 ml-2"
          onClick={() => setMostrarTodas(!mostrarTodas)}
        >
          {mostrarTodas ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};