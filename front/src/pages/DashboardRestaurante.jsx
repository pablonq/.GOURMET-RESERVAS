import CardDashboard from "../component/CardDashboard/CardDashboard";

const DashboardRestaurante = () => {
  return (
    <div className="flex ">
      <div className="grid grid-cols-2">
        <CardDashboard title={"Total Reservas"} contenido={""} />
        <CardDashboard
          title={"Calificación promedio de los clientes"}
          contenido={""}
        />
        <CardDashboard title={"Total Mesas disponibles y ocupadas"} contenido={""} />
        <CardDashboard
          title={"horas pico de reserva"}
          contenido={""}
        />
      </div>
    </div>
  );
};

export default DashboardRestaurante;
