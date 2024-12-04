import { useContext } from "react";
import CardDashboard from "../component/CardDashboard/CardDashboard";
import TotalReservasCard from "./restaurante/EstadisticasRestaurante/TotalReservasCard";
import { AppContext } from "../Context/AppContext";
import CalificacionPromedioCard from "./restaurante/EstadisticasRestaurante/CalificacionPromedioCard";
import MesasDisponiblesCard from "./restaurante/EstadisticasRestaurante/MesasDisponiblesCard";
import HorasPicoCard from "./restaurante/EstadisticasRestaurante/HorasPicoCard";
import Title from "../component/Title/Title";

const DashboardRestaurante = () => {
  const { user } = useContext(AppContext);
  const idRestaurante = user.id;

  const fechaActual = new Date().toISOString().split("T")[0];
  const horaActual = new Date().toLocaleTimeString("it-IT");

  return (
    <div
      className="flex flex-col bg-cover bg-center justify-center m-0 p-0"
      style={{ backgroundImage: "url('/src/assets/bg-dash.jpg')" }}
    >
      <div className="mx-4">
      <Title text="En este panel encontrarás una representación gráfica de los datos clave de tu restaurante para que puedas tomar decisiones informadas rápidamente" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <CardDashboard
          title={"Total Reservas entre 2 fechas"}
          contenido={<TotalReservasCard idRestaurante={idRestaurante} />}
          texto={"Visualiza el número de reservas realizadas en un rango de fechas específico"}
        />
        <CardDashboard
          title={"Calificación promedio de los clientes"}
          contenido={<CalificacionPromedioCard idRestaurante={idRestaurante} />}
          texto={"Descubre cómo valoran los clientes tu servicio con una métrica de satisfacción general basada en sus opiniones."}
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
          texto={"Visualiza el estado actual de tus mesas"}
        />
        <CardDashboard
          title={"horas pico de reserva"}
          contenido={<HorasPicoCard idRestaurante={idRestaurante} />}
          texto={"Identifica los horarios con mayor actividad en tu restaurante para planificar mejor la atención al cliente y el personal"}
        />
      </div>
    </div>
  );
};

export default DashboardRestaurante;
