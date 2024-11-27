/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import ApexCharts from "apexcharts";

const HorasPicoCard = ({ idRestaurante }) => {
  const [reservasPorHora, setReservasPorHora] = useState({
    horas: [],
    cantidadReservas: [],
  });
  const chartRef = useRef(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`/api/restaurantes/reservasRestaurantes/${idRestaurante}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const reservasContadas = {};

          data.forEach((reserva) => {
            const hora = new Date(
              `1970-01-01T${reserva.horaReserva}Z`
            ).getHours();
            if (reservasContadas[hora]) {
              reservasContadas[hora] += 1;
            } else {
              reservasContadas[hora] = 1;
            }
          });

          const horas = Object.keys(reservasContadas).map(Number);
          const cantidadReservas = horas.map((hora) => reservasContadas[hora]);

          if (horas.length > 0) {
            setReservasPorHora({ horas, cantidadReservas });
          }
        }
      })
      .catch((error) =>
        console.error("Error fetching reservas por hora:", error)
      );
  }, [idRestaurante, token]);

  useEffect(() => {
    if (reservasPorHora.horas.length > 0) {
      const options = {
        chart: {
          height: 200,
          width: 500,
          type: "bar",
        },
        colors: ["#DC493A"],
        series: [
          {
            name: "Reservas por Hora",
            data: reservasPorHora.cantidadReservas,
          },
        ],
        xaxis: {
          categories: reservasPorHora.horas,
          title: {
            text: "Hora del Día",
          },
        },
        yaxis: {
          title: {
            text: "Cantidad de Reservas",
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return `${val} reservas`;
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
    }
  }, [reservasPorHora]);

  return <div ref={chartRef} />;
};

export default HorasPicoCard;
