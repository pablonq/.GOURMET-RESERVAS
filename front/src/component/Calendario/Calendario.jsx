import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";
import IconoReloj from "../../assets/IconoReloj";

// eslint-disable-next-line react/prop-types
const Calendario = ({ onDateSelect, idRestaurante }) => {
  registerLocale("es", es);
  const [fecha, setFecha] = useState();
  const [dias, setDias] = useState([]);
  const [diasHorarios, setDiasHorarios] = useState([]);
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  async function getDiasHorarios() {
    const res = await fetch(
      `/api/restaurantes/diasHorariosRestaurante/${idRestaurante}`
    );
    const data = await res.json();

    if (res.ok) {
      const daysMap = {
        Domingo: 0,
        Lunes: 1,
        Martes: 2,
        Miércoles: 3,
        Jueves: 4,
        Viernes: 5,
        Sábado: 6,
      };

      const diasNoDisponibles = data.map((item) => daysMap[item.dia]);
      setDiasHorarios(data);
      setDias(diasNoDisponibles);
    }
  }

  useEffect(() => {
    getDiasHorarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDateSelect = (date) => {
    setFecha(date);
    const diaSeleccionado =
      date
        .toLocaleString("es-ES", { weekday: "long" })
        .charAt(0)
        .toUpperCase() +
      date.toLocaleString("es-ES", { weekday: "long" }).slice(1);

    const horariosDelDia = diasHorarios.find(
      (dia) => dia.dia === diaSeleccionado
    );

    const horarios = [];

    if (horariosDelDia) {
      const { startTime1, endTime1, startTime2, endTime2 } = horariosDelDia;

      if (startTime1 && endTime1) {
        horarios.push({ start: startTime1, end: endTime1 });
      }
      if (startTime2 && endTime2) {
        horarios.push({ start: startTime2, end: endTime2 });
      }
    }
    setHorariosDisponibles(horarios);
    setHoraSeleccionada("");
  };

  const generarOpcionesHorario = () => {
    const opciones = [];

    horariosDisponibles.forEach(({ start, end }) => {
      const startDate = new Date(`1970-01-01T${start}Z`);
      const endDate = new Date(`1970-01-01T${end}Z`);
      for (let d = startDate; d <= endDate; d.setMinutes(d.getMinutes() + 30)) {
        opciones.push(d.toISOString().slice(11, 16));
      }
    });
    return opciones;
  };

  const handleHoraChange = (hora) => {
    setHoraSeleccionada(hora);

    if (fecha && hora) {
      onDateSelect(fecha.toISOString().split("T")[0], hora);
    }
  };

  const isDayDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const oneMonthFromToday = new Date();
    oneMonthFromToday.setMonth(today.getMonth() + 1);

    const day = date.getDay();
    const isUnavailableDay = dias.includes(day);
    const isBeforeToday = date >= today && date < oneMonthFromToday;

    return isUnavailableDay && isBeforeToday;
  };

  const opcionesHorario = generarOpcionesHorario();

  return (
    <div className="flex p-2 w-auto bg-white">
      <DatePicker
        selected={fecha}
        onChange={handleDateSelect}
        filterDate={isDayDisabled}
        open={true}
        dateFormat="dd/MM/yyyy"
        placeholderText=" Dia "
        inline
        locale="es"
        dayClassName={(date) => {
          if (date.toDateString() === new Date().toDateString()) {
            return "rounded-sm bg-[#DC493A] text-white";
          }
        }}
      />
      {horariosDisponibles.length > 0 && (
        <div className="flex flex-col w-max ml-14">
          <div className="flex space-x-2 items-center p-2">
            <IconoReloj width={"18"} height={"18"} />
            <p className="text-[#242424]">Horarios disponibles</p>
          </div>
          <div className="grid grid-cols-8 gap-2">
            {opcionesHorario.map((hora, index) => (
              <div
                key={index}
                onClick={() => handleHoraChange(hora)}
                className={`cursor-pointer  bg-[#DC493A] text-white font-medium text-xs rounded-md p-2 text-center ${
                  hora === horaSeleccionada ? "ring-2 ring-white" : ""
                }`}
              >
                {hora}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendario;
