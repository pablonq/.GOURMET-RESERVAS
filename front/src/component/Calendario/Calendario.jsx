import { useContext, useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../../Context/AppContext";

// eslint-disable-next-line react/prop-types
const Calendario = ({ onDateSelect }) => {
  const { user } = useContext(AppContext);
  const [fecha, setFecha] = useState();
  const [dias, setDias] = useState([]);
  const [diasHorarios, setDiasHorarios] = useState([]);
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  const idRestaurante = user.id;

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
    //console.log("Horarios disponibles:", horarios);
    setHorariosDisponibles(horarios);
    setHoraSeleccionada("");
  };

  const generarOpcionesHorario = () => {
    const opciones = [];

    horariosDisponibles.forEach(({ start, end }) => {
      const startDate = new Date(`1970-01-01T${start}Z`);
      const endDate = new Date(`1970-01-01T${end}Z`);

      for (let d = startDate; d <= endDate; d.setMinutes(d.getMinutes() + 20)) {
        opciones.push(d.toISOString().slice(11, 16));
      }
    });

    return opciones;
  };

  const handleHoraChange = (event) => {
    const hora = event.target.value;
    setHoraSeleccionada(hora);

    if (fecha && hora) {
      onDateSelect(fecha.toISOString().split("T")[0], hora);
    }
  };

  const isDayDisabled = (date) => {
    const day = date.getDay();
    return dias.includes(day);
  };

  const opcionesHorario = generarOpcionesHorario();

  return (
    <div className="flex  ml-10 border-solid border-2 border-slate-300 rounded-md p-4">
    
     <div>
      <label className="mb-2 text-center font-bold ">Selecciona una fecha y hora</label>
      <DatePicker
        selected={fecha}
        onChange={handleDateSelect}
        filterDate={isDayDisabled}
        open={true}
        dateFormat="dd/MM/yyyy"
        placeholderText=" Dia "
        inline
      />
     </div>
      {horariosDisponibles.length > 0 && (
        <div className="ml-4">
          <p className="font-semibold">Horarios disponibles:</p>
          <select
            value={horaSeleccionada}
            onChange={handleHoraChange}
            className="block w-full overflow-y-scroll px-4 py-2 border text-sm border-gray-300 rounded-md shadow-sm focus:outline-none"
          >
            <option value="">Selecciona una hora</option>
            {opcionesHorario.map((hora, index) => (
              <option key={index} value={hora}>
                {hora}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Calendario;
