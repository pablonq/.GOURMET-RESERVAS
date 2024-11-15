/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import ApexCharts from "apexcharts";

const TotalReservasCard = ({ idRestaurante }) => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const chartRef = useRef(null);

  const obtenerPrimerDiaDelMes = () => {
    const fechaActual = new Date();
    fechaActual.setDate(1);
    return fechaActual.toISOString().split("T")[0];
  };

  const obtenerFechaHoy = () => {
    const fechaHoy = new Date();
    return fechaHoy.toISOString().split("T")[0];
  };

  useEffect(() => {
    const hoy = obtenerFechaHoy();
    const primerDiaMes = obtenerPrimerDiaDelMes();

    if (!fechaInicio) setFechaInicio(primerDiaMes);
    if (!fechaFin) setFechaFin(hoy);
  }, [fechaInicio, fechaFin]);

  useEffect(() => {
    if (fechaInicio && fechaFin) {
      fetch(
        `/api/restaurantes/totalReservasPorPeriodo/${idRestaurante}/${fechaInicio}/${fechaFin}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (Array.isArray(data)) {
            const fechas = data.map((item) => item.fecha);
            const cantidades = data.map((item) => item.cantidad);

            if (chartRef.current) {
              chartRef.current.destroy();
            }

            const options = {
              chart: {
                height: 200,
                type: "line",
              },
              xaxis: {
                categories: fechas, 
              },
              stroke: {
                curve: "smooth",
                width: 3, 
              },
              fill: {
                type: "gradient", 
              },
              colors: ["#FF5733"], 
              title: {
                text: "Total Reservas en el Tiempo",
              },
              series: [
                {
                  name: "Reservas",
                  data: cantidades, 
                },
              ],
            };

            chartRef.current = new ApexCharts(
              document.querySelector("#chart"),
              options
            );
            chartRef.current.render();
          } else {
            console.error("Error: la respuesta no es un array:", data);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [idRestaurante, fechaInicio, fechaFin]);

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <h3></h3>
        <label>
          Ingresa una Fecha Inicio
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </label>
        <label>
          Ingresa una Fecha Fin
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </label>
      </div>
      <div id="chart" />
    </div>
  );
};

export default TotalReservasCard;
