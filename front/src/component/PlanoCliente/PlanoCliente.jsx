/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MesasDisponibles from "../MesasDisponibles/MesasDisponibles";
import Mesa from "../../assets/Mesa"
import Button from "../Button/Button";

const PlanoCliente = ({ mesas = [], fecha, hora }) => {
  const [mesasSelecionadas, setMesasSelecionadas] = useState([]);
  const navigate = useNavigate();

  if (!Array.isArray(mesas)) {
    console.error("Prop 'mesas' debe ser un array.");
    return null;
  }

  const handleConfirmarReserva = () => {
    navigate("/detalleReserva", {
      state: { mesasSelecionadas, fecha, hora, },
    });

  };

  return (
    <div className="flex flex-col items-center p-4 ">
      <div className="flex items-center space-x-4 ">
      <i><Mesa width={"24"} height={"24"}/></i>
      <h1 className="items-center text-[#1A2F2A] text-lg ">
      Elija y ingresa la cantidad de las mesas disponibles 
      </h1>
      </div>

      <MesasDisponibles
        mesas={mesas}
        setMesasSelecionadas={setMesasSelecionadas}
      />
      <Button onClick={handleConfirmarReserva} texto={"Confirmar Reserva"}/>
    </div>
  );
};

export default PlanoCliente;
