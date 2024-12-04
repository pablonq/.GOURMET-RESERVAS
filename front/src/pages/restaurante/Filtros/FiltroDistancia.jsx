/* eslint-disable react/prop-types */

const FiltroDistancia = ({ distanciasSeleccionadas = [], setDistanciasSeleccionadas }) => {
  const handleCheckboxChange = (distancia) => {
    if (distanciasSeleccionadas.includes(distancia)) {

      setDistanciasSeleccionadas(distanciasSeleccionadas.filter(d => d !== distancia));
    } else {
      setDistanciasSeleccionadas([...distanciasSeleccionadas, distancia]);
    }
  };

  return (
    <div className="p-4">
      <h3 className="font-medium mb-2 text-[#242424]">Distancia</h3>
      <div className="flex flex-col gap-2">
        {[2, 4, 6].map((distancia) => (
          <label key={distancia} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={distancia}
              checked={distanciasSeleccionadas.includes(distancia)}
              onChange={() => handleCheckboxChange(distancia)}
              className="form-checkbox w-4 h-4 accent-[#DC493A]"
            />
            <span>{distancia} km</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FiltroDistancia;
