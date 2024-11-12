import { useContext } from "react";
import CardDashboard from "../component/CardDashboard/CardDashboard";
import TotalReservasCard from "./restaurante/EstadisticasRestaurante/TotalReservasCard";
import { AppContext } from "../Context/AppContext";

const DashboardRestaurante = () => {
  const { user } = useContext(AppContext);
  const idRestaurante= user.id;

  return (
    <div className="flex ">
      <div className="grid grid-cols-2">
        <CardDashboard
          title={"Total Reservas entre 2 fechas"}
          contenido={<TotalReservasCard idRestaurante={idRestaurante} />}
        />
        <CardDashboard
          title={"Calificación promedio de los clientes"}
          contenido={""}
        />
        <CardDashboard
          title={"Total Mesas disponibles y ocupadas"}
          contenido={""}
        />
        <CardDashboard title={"horas pico de reserva"} contenido={""} />
      </div>
    </div>
  );
};

export default DashboardRestaurante;
