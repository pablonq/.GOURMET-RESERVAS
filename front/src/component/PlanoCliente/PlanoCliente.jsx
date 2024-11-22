/* eslint-disable react/prop-types */
import { useState } from "react";
import Subtitulo from "../Subtitulo/Subtitulo";
import { useNavigate } from "react-router-dom";
import MesasDisponibles from "../MesasDisponibles/MesasDisponibles";

const PlanoCliente = ({ mesas = [], fecha, hora }) => {
  const [mesasSelecionadas, setMesasSelecionadas] = useState([]);
  const navigate = useNavigate();

  if (!Array.isArray(mesas)) {
    console.error("Prop 'mesas' debe ser un array.");
    return null;
  }

  const handleConfirmarReserva = () => {
    navigate("/detalleReserva", {
      state: { mesasSelecionadas, fecha, hora },
    });

  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="items-center font-bold text-lg">
        Mesas disponibles en fecha seleccionada
      </h1>
      <Subtitulo text=" Elija y ingresa la cantidad de mesas a reservar " />

      <MesasDisponibles
        mesas={mesas}
        setMesasSelecionadas={setMesasSelecionadas}
      />
      <div className="flex flex-col space-y-1"></div>

      <button
        onClick={handleConfirmarReserva}
        className="text-white text-center m-2 rounded-md bg-slate-400 p-2"
      >
        Confirmar Reserva
      </button>
    </div>
  );
};

export default PlanoCliente;
