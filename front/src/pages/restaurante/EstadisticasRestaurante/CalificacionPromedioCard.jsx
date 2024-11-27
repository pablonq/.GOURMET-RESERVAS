/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const CalificacionPromedioCard = ({ idRestaurante }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    fetch(`/api/restaurantes/obtenerCalificacion/${idRestaurante}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length === 5) {
          const [cal1, cal2, cal3, cal4, cal5] = data;
          const totalCalificaciones = cal1 + cal2 + cal3 + cal4 + cal5;

          const porcentajes = [
            Math.round((cal1 / totalCalificaciones) * 100),
            Math.round((cal2 / totalCalificaciones) * 100),
            Math.round( (cal3 / totalCalificaciones) * 100),
            Math.round((cal4 / totalCalificaciones) * 100),
            Math.round( (cal5 / totalCalificaciones) * 100),
          ];

          if (chartRef.current) {
            chartRef.current.destroy();
          }

          const options = {
            chart: {
              height: 280,
              type: "radialBar",
            },
            series: porcentajes,
            plotOptions: {
              radialBar: {
                dataLabels: {
                  total: {
                    show: true,
                    label: "TOTAL",
                    formatter: function () {
                        return totalCalificaciones;
                    },
                  },
                },
                inverseOrder: true,
                hollow: {
                  size: "50%",
                },
              },
            },
            labels: [
              "1 estrella",
              "2 estrellas",
              "3 estrellas",
              "4 estrellas",
              "5 estrellas",
            ],
            colors: ["#DC493A", "#FFC300", "#DAF7A6", "#B6C6B9", "#1A2F2A"],
          };

          chartRef.current = new ApexCharts(
            document.querySelector("#chart-calificacion"),
            options
          );
          chartRef.current.render();
        } else {
          console.error("Error: la respuesta no contiene 5 elementos.", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [idRestaurante]);

  return <div id="chart-calificacion" />;
};

export default CalificacionPromedioCard;
