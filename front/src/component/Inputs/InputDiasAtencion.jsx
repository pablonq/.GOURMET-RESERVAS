import React from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function InputDiasAtencion() {
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
  // Estado inicial: Ningún día seleccionado y franjas vacías.
  const [schedule, setSchedule] = useState({
    Lunes: { selected: false, startTime: '', endTime: '' },
    Martes: { selected: false, startTime: '', endTime: '' },
    Miércoles: { selected: false, startTime: '', endTime: '' },
    Jueves: { selected: false, startTime: '', endTime: '' },
    Viernes: { selected: false, startTime: '', endTime: '' },
    Sábado: { selected: false, startTime: '', endTime: '' },
    Domingo: { selected: false, startTime: '', endTime: '' }
  });

  // Función para actualizar el estado cuando se selecciona un día.
  const handleDayChange = (day) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], selected: !schedule[day].selected }
    });
  };

  // Función para actualizar las franjas horarias.
  const handleTimeChange = (day, timeType, value) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], [timeType]: value }
    });
  };

  // Enviar los datos a la API
  const handleSubmit = async () => {
    const selectedDays = Object.entries(schedule)
      .filter(([day, data]) => data.selected)
      .map(([day, data]) => ({ day, startTime: data.startTime, endTime: data.endTime }));
    
    const response = await fetch('https://tuapi.com/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedDays)
    });

    if (response.ok) {
      alert('Horario enviado exitosamente');
    } else {
      alert('Error al enviar el horario');
    }
  };
  return (
     <div>
  <h3>Selecciona los días y las franjas horarias</h3>
  <form>
    {daysOfWeek.map((day) => (
      <div key={day}>
        <label>
          <input
            type="checkbox"
            checked={schedule[day].selected}
            onChange={() => handleDayChange(day)}
          />
          {day}
        </label>
        {schedule[day].selected && (
          <div>
            <label>
              Hora de inicio:
              <input
                type="time"
                value={schedule[day].startTime}
                onChange={(e) => handleTimeChange(day, 'startTime', e.target.value)}
              />
            </label>
            <label>
              Hora de fin:
              <input
                type="time"
                value={schedule[day].endTime}
                onChange={(e) => handleTimeChange(day, 'endTime', e.target.value)}
              />
            </label>
          </div>
        )}
      </div>
    ))}
    <button type="button" onClick={handleSubmit}>Enviar Horario</button>
  </form>
</div>
);
}

