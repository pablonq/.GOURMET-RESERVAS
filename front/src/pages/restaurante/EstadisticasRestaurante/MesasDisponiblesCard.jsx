/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

const MesasDisponiblesCard = ({ idRestaurante, fecha, hora }) => {
  const [mesasDisponibles, setMesasDisponibles] = useState(0);
  const [mesasOcupadas, setMesasOcupadas] = useState(0);
  const chartRef = useRef(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(
      `/api/restaurantes/mesasDisponibles?fecha=${fecha}&hora=${hora}&idRestaurante=${idRestaurante}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          const mesasDisponiblesCount = data.length;

          fetch(
            `/api/restaurantes/indexMesas`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
            .then((response) => response.json())
            .then((dataMesas) => {
              if (dataMesas) {
                const totalMesas = dataMesas.length;
                const mesasOcupadasCount = totalMesas - mesasDisponiblesCount;

                setMesasDisponibles(mesasDisponiblesCount);
                setMesasOcupadas(mesasOcupadasCount);
              }
            })
            .catch((error) =>
              console.error("Error fetching mesas data:", error)
            );
        }
      })
      .catch((error) =>
        console.error("Error fetching mesas disponibles:", error)
      );
  }, [idRestaurante, fecha, hora, token]);

  useEffect(() => {
    const totalMesas = mesasDisponibles + mesasOcupadas;

    const options = {
      chart: {
        height: 300,
        type: "pie", 
      },
      series: [mesasDisponibles, mesasOcupadas],
      labels: ["Mesas Disponibles", "Mesas Ocupadas"],
      colors: ["#B6C6B9", "#DC493A"],
      plotOptions: {
        pie: {
          donut: {
            size: "70%", 
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return `${Math.round((val / totalMesas) * totalMesas)}%`;
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val} mesas`;
          },
        },
      },
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy(); 
      };
    }
  }, [mesasDisponibles, mesasOcupadas]);

  return <div ref={chartRef} />;
};

export default MesasDisponiblesCard;
