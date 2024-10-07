import React from 'react';
import { useState, useContext } from 'react'
import { AppContext } from "../../../Context/AppContext";



export default function DiasHorarios() {
  const { user, token } = useContext(AppContext);
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
  // Estado inicial: Ningún día seleccionado y franjas vacías.
  const [schedule, setSchedule] = useState({
    Lunes: { selected: false, startTime1: '', endTime1: '',startTime2: '', endTime2: '' },
    Martes: { selected: false, startTime1: '', endTime1: '',startTime2: '', endTime2: '' },
    Miércoles: { selected: false, startTime1: '', endTime1: '',startTime2: '', endTime2: '' },
    Jueves: { selected: false, startTime1: '', endTime1: '',startTime2: '', endTime2: '' },
    Viernes: { selected: false, startTime1: '', endTime1: '',startTime2: '', endTime2: '' },
    Sábado: { selected: false, startTime1: '', endTime1: '',startTime2: '', endTime2: '' },
    Domingo: { selected: false, startTime1: '', endTime1: '',startTime2: '', endTime2: '' }
  }); 

  const idRestaurante = user.id;
  const [errors, setErrors] = useState({}); // Para almacenar errores específicos del día
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

  // Función para validar las franjas horarias de un día
  const validateTimes = (day, { startTime1, endTime1, startTime2, endTime2 }) => {
    const errors = [];

    // Validar que la primera franja horaria tenga sentido
    if (startTime1 >= endTime1) {
      errors.push(`En ${day}, la hora de inicio de la primera franja debe ser menor que la hora de fin.`);
    }

    // Validar que la segunda franja horaria tenga sentido
    if (startTime2 && endTime2 && startTime2 >= endTime2) {
      errors.push(`En ${day}, la hora de inicio de la segunda franja debe ser menor que la hora de fin.`);
    }

    // Validar que no haya solapamiento entre las dos franjas horarias
    if (endTime1 && startTime2 && endTime1 >= startTime2) {
      errors.push(`En ${day}, la primera franja no debe solaparse con la segunda.`);
    }

    return errors;
  };

  /* const selectedDays = Object.entries(schedule)
    .filter(([day, data]) => data.selected)
    .map(([day, data]) => ({ day, startTime1: data.startTime1, endTime1: data.endTime1, startTime2: data.startTime2, endTime2: data.endTime2  }));
   */
  
    // Enviar los datos a la API
    async function handleSubmit (e) {
      e.preventDefault();
      let validationErrors = {}; // Para guardar los errores por cada día
    let hasErrors = false;
    const selectedDays = Object.entries(schedule)
      .filter(([day, data]) => data.selected)
      .map(([day, data]) => {
        const dayErrors = validateTimes(day, data);

        if (dayErrors.length > 0) {
          validationErrors[day] = dayErrors;
          hasErrors = true;
        }

        return {
          day,
          startTime1: data.startTime1,
          endTime1: data.endTime1,
          startTime2: data.startTime2,
          endTime2: data.endTime2
        };
      });

    if (hasErrors) {
      // Si hay errores, actualizamos el estado para mostrar los mensajes
      setErrors(validationErrors);
      return; // No enviar los datos si hay errores
    }

    // Estructurar el cuerpo de la solicitud
    /* const payload = {
      idRestaurante,
      horarios: selectedDays
    }; */
      try{
    const res = await fetch("/api/restaurantes/diasHorarios", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"},
      body: JSON.stringify({idRestaurante, horarios: selectedDays})
    });
  
    

    if (!res.ok) {
      const errorData = await res.json();  // Captura el mensaje de error del servidor
      console.error("Error en la respuesta del servidor:", errorData);
      alert(`Error: ${JSON.stringify(errorData)}`);  // Muestra el error en la UI
      return;
    } const data = await res.json();
    console.log("Datos enviados correctamente:", data);
    alert("Horario enviado exitosamente");
    
  }
     catch (error) {
      console.error("Error al enviar la solicitud:", error);
      
    }
}
  return (
     <div>
  <h3>Selecciona los días y las franjas horarias</h3>
  <form onSubmit={handleSubmit} className="w-1/2 mx-auto space-y-6">
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
            <h5>Franja horaria</h5>
            <label>
              Horario apertura:
              <input
                type="time"
                value={schedule[day].startTime1}
                onChange={(e) => handleTimeChange(day, 'startTime1', e.target.value)}
              />
            </label>
            <label>
              Horario cierre:
              <input
                type="time"
                value={schedule[day].endTime1}
                onChange={(e) => handleTimeChange(day, 'endTime1', e.target.value)}
              />
            </label>
            <label>
              Horario apertura:
              <input
                type="time"
                value={schedule[day].startTime2}
                onChange={(e) => handleTimeChange(day, 'startTime2', e.target.value)}
              />
            </label>
            <label>
            Horario cierre:

              <input
                type="time"
                value={schedule[day].endTime2}
                onChange={(e) => handleTimeChange(day, 'endTime2', e.target.value)}
              />
            </label>
          </div>
        )}
      </div>
    ))}
    <button className="primary-btn">Enviar Horario</button>
  </form>
</div>
)
}

