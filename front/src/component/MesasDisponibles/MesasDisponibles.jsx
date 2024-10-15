/* eslint-disable react/prop-types */
import { useState } from "react";
import Mesa2pers from "../../assets/Mesa2pers";
import Mesa4pers from "../../assets/Mesa4pers";
import Mesa6mas from "../../assets/Mesa6mas";
import Mesa6pers from "../../assets/Mesa6pers";

const MesasDisponibles = ({ mesas, setMesasSelecionadas }) => {
  const mesasDisponibles = mesas.filter((mesa) => mesa.estado);
  const [selectedCounts, setSelectedCounts] = useState({});

  const mesasPorTipo = mesasDisponibles.reduce((acc, mesa) => {
    acc[mesa.cantidadPersonas] = (acc[mesa.cantidadPersonas] || 0) + 1;
    return acc;
  }, {});

  const handleChange = (cantidad, e) => {
    const value = Math.min(e.target.value, mesasPorTipo[cantidad]);
    setSelectedCounts((prev) => ({ ...prev, [cantidad]: value }));

    // Actualiza las mesas seleccionadas basándote en el nuevo valor
    const mesaSelecionadas = [];

    for (const key in { ...selectedCounts, [cantidad]: value }) {
      const count =
        parseInt({ ...selectedCounts, [cantidad]: value }[key], 10) || 0;
      const mesasDeEsteTipo = mesasDisponibles.filter(
        (mesa) => mesa.cantidadPersonas === parseInt(key, 10)
      );
      mesaSelecionadas.push(...mesasDeEsteTipo.slice(0, count));
    }
    setMesasSelecionadas(mesaSelecionadas);
  };

  const renderMesaIcon = (cantidad) => {
    switch (cantidad) {
      case 2:
        return <Mesa2pers />;
      case 4:
        return <Mesa4pers />;
      case 6:
        return <Mesa6pers />;
      case 8:
        return <Mesa6mas />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center m-4">
      {Object.entries(mesasPorTipo).map(([cantidad, total]) => (
        <div
          key={cantidad}
          className="flex items-center  mb-4 justify-around w-96 border-solid border-2 border-slate-300 rounded-md"
        >
          <div>{renderMesaIcon(parseInt(cantidad))}</div>
          <div>
            <p className="ml-2">
              Total mesas {cantidad} personas: <strong>{total}</strong>
            </p>
          </div>
          <input
            className=" border-slate-300 border-solid border-2 rounded-md p-1 w-10 text-center"
            type="number"
            value={selectedCounts[cantidad] || 0}
            onChange={(e) => handleChange(cantidad, e)}
            min="0"
            max={total}
          />
        </div>
      ))}
    </div>
  );
};

export default MesasDisponibles;
