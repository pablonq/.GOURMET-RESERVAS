import { useContext } from "react";
import CardDashboard from "../component/CardDashboard/CardDashboard";
import TotalReservasCard from "./restaurante/EstadisticasRestaurante/TotalReservasCard";
import { AppContext } from "../Context/AppContext";
import CalificacionPromedioCard from "./restaurante/EstadisticasRestaurante/CalificacionPromedioCard";
import MesasDisponiblesCard from "./restaurante/EstadisticasRestaurante/MesasDisponiblesCard";
import HorasPicoCard from "./restaurante/EstadisticasRestaurante/HorasPicoCard";

const DashboardRestaurante = () => {
  const { user } = useContext(AppContext);
  const idRestaurante = user.id;

  const fechaActual = new Date().toISOString().split("T")[0];
  const horaActual = new Date().toLocaleTimeString("it-IT");

  return (
    <div className="flex bg-cover bg-center justify-center m-0 p-0"  style={{ backgroundImage: "url('/src/assets/bg-dash.jpg')" }}>
      <div className="grid grid-cols-2 gap-4">
        <CardDashboard
          title={"Total Reservas entre 2 fechas"}
          contenido={<TotalReservasCard idRestaurante={idRestaurante} />}
        />
        <CardDashboard
          title={"Calificación promedio de los clientes"}
          contenido={<CalificacionPromedioCard idRestaurante={idRestaurante} />}
        />
        <CardDashboard
          title={"Total Mesas disponibles y ocupadas"}
          contenido={
            <MesasDisponiblesCard
              idRestaurante={idRestaurante}
              fecha={fechaActual}
              hora={horaActual}
            />
          }
        />
        <CardDashboard
          title={"horas pico de reserva"}
          contenido={<HorasPicoCard idRestaurante={idRestaurante} />}
        />
      </div>
    </div>
  );
};

export default DashboardRestaurante;
