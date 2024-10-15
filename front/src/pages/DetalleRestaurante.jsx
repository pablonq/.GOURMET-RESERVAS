import { useContext } from "react";
import Title from "../component/Title/Title";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
const DetalleRestaurante = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();


  const handleReservar = () => {
    if (user) {
      navigate("/reservar");
    } else {
      navigate("/loginRestaurante");
    }
  };

  return (
    <>
      <Title text={"Detalle del restaurante"} />

      <div className="flex justify-center  p-2">
        <button
          onClick={handleReservar}
          className="text-white text-center rounded-md bg-slate-400 p-2  hover:bg-orange-400 "
        >
          Reservar
        </button>{" "}
      </div>
    </>
  );
};

export default DetalleRestaurante;
