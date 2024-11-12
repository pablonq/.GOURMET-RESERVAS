/* eslint-disable react/prop-types */
import calendar_1 from "../../assets/calendar_1.svg";
import calendar_2 from "../../assets/calendar_2.svg";
import calendar_3 from "../../assets/calendar_3.svg";
import FlechaDerecha from "../../assets/FlechaDerecha";

const ReservasFiltros = ({ onFilterChange }) => {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-lg text-zinc-700 p-2">Reservas</h3>
      <button
        className=" flex items-center justify-between  p-3 mt-2 rounded-md border-b-2 hover:bg-gray-200"
        onClick={() => onFilterChange("activas")}
      >
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" src={calendar_3} alt="Activas" />
          Activas
        </div>
        <FlechaDerecha />
      </button>
      <button
        className=" flex items-center justify-between  p-3 mt-2 rounded-md border-b-2 hover:bg-gray-200"
        onClick={() => onFilterChange("pasadas")}
      >
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" src={calendar_1} alt="Pasadas" />
          Pasadas
        </div>
        <FlechaDerecha />
      </button>
      <button
        className="flex items-center justify-between  p-3 mt-2 rounded-md border-b-2 hover:bg-gray-200"
        onClick={() => onFilterChange("canceladas")}
      >
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" src={calendar_2} alt="Canceladas" />
          Canceladas
        </div>
        <FlechaDerecha />
      </button>
    </div>
  );
};

export default ReservasFiltros;
