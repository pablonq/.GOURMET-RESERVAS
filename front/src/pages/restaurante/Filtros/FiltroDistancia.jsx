import React from "react";

const FiltroDistancia = ({ distanciasSeleccionadas = [], setDistanciasSeleccionadas }) => {
  const handleCheckboxChange = (distancia) => {
    if (distanciasSeleccionadas.includes(distancia)) {
      // Si ya está seleccionado, lo eliminamos
      setDistanciasSeleccionadas(distanciasSeleccionadas.filter(d => d !== distancia));
    } else {
      // Si no está seleccionado, lo añadimos
      setDistanciasSeleccionadas([...distanciasSeleccionadas, distancia]);
    }
  };

  return (
    <div className="p-4">
      <h3 className="font-medium mb-2">Distancia</h3>
      <div className="flex flex-col gap-2">
        {[2, 4, 6].map((distancia) => (
          <label key={distancia} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={distancia}
              checked={distanciasSeleccionadas.includes(distancia)}
              onChange={() => handleCheckboxChange(distancia)}
              className="form-checkbox"
            />
            <span>{distancia} km</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FiltroDistancia;
