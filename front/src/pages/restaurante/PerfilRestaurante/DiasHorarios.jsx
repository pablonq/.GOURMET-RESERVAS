import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from "../../../Context/AppContext";
import Title from '../../../component/Title/Title';
import { useNavigate } from 'react-router-dom';

export default function DiasHorarios() {
  const { user, token } = useContext(AppContext);
  const navigate = useNavigate();
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
  const [schedule, setSchedule] = useState({
    Lunes: { selected: false, startTime1: '', endTime1: '', startTime2: '', endTime2: '' },
    Martes: { selected: false, startTime1: '', endTime1: '', startTime2: '', endTime2: '' },
    Miércoles: { selected: false, startTime1: '', endTime1: '', startTime2: '', endTime2: '' },
    Jueves: { selected: false, startTime1: '', endTime1: '', startTime2: '', endTime2: '' },
    Viernes: { selected: false, startTime1: '', endTime1: '', startTime2: '', endTime2: '' },
    Sábado: { selected: false, startTime1: '', endTime1: '', startTime2: '', endTime2: '' },
    Domingo: { selected: false, startTime1: '', endTime1: '', startTime2: '', endTime2: '' }
  });

  const idRestaurante = user?.id;
  const [diasHorarios, setDiasHorarios] = useState({});
  const [selectedDays, setSelectedDays] = useState([]); // Mantén los días seleccionados
  const [successMessage, setSuccessMessage] = useState(""); // Para mostrar el mensaje de éxito
  const [errors, setErrors] = useState({});

  const handleDayChange = (day) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], selected: !schedule[day].selected }
    });
  };

  const handleTimeChange = (day, timeType, value) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], [timeType]: value }
    });
  };

  const validateSelection = () => {
    const newErrors = {};
    let hasError = false;
  
    Object.entries(schedule).forEach(([day, data]) => {
      if (data.selected) {
        const startTime1 = data.startTime1 ? new Date(`1970-01-01T${data.startTime1}:00`) : null;
        const endTime1 = data.endTime1 ? new Date(`1970-01-01T${data.endTime1}:00`) : null;
        const startTime2 = data.startTime2 ? new Date(`1970-01-01T${data.startTime2}:00`) : null;
        const endTime2 = data.endTime2 ? new Date(`1970-01-01T${data.endTime2}:00`) : null;
  
        // Verificar si al menos una franja horaria tiene horas válidas.
        const firstShiftFilled = startTime1 && endTime1;
        const secondShiftFilled = startTime2 && endTime2;
  
        if (!firstShiftFilled && !secondShiftFilled) {
          newErrors[day] = 'Debe ingresar al menos una franja horaria.';
          hasError = true;
        }
  
        // Si la primera franja está cargada, validar que el horario es correcto.
        if (firstShiftFilled && startTime1 >= endTime1) {
          newErrors[day] = 'El horario de la primera franja es inválido.';
          hasError = true;
        }
  
        // Si la segunda franja está cargada, validar que el horario es correcto.
        if (secondShiftFilled && startTime2 >= endTime2) {
          newErrors[day] = 'El horario de la segunda franja es inválido.';
          hasError = true;
        }
  
        // Si ambas franjas están cargadas, verificar que no se solapen.
        if (firstShiftFilled && secondShiftFilled && endTime1 >= startTime2) {
          newErrors[day] = 'Los horarios no deben superponerse.';
          hasError = true;
        }
      }
    });
  
    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateSelection()) return;

    const selectedDays = Object.entries(schedule)
      .filter(([day, data]) => data.selected)
      .map(([day, data]) => ({
        day,
        startTime1: data.startTime1,
        endTime1: data.endTime1,
        startTime2: data.startTime2,
        endTime2: data.endTime2
      }));

    try {
      const res = await fetch("/api/restaurantes/diasHorarios", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idRestaurante: user?.id, horarios: selectedDays })
      });

      if (!res.ok) {
        console.error("Error al enviar los datos");
        return;
      }
      
      setDiasHorarios(selectedDays);

      
      setSuccessMessage("Horarios enviados correctamente");
      
      
      setTimeout(() => {
        setSuccessMessage(""); // Borrar el mensaje después de un tiempo
      }, 3000);
      
      alert("Horarios enviados correctamente");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const getDiasHorarios = async () => {
    const res = await fetch(`/api/restaurantes/diasHorariosRestaurante/${idRestaurante}`);
    const data = await res.json();
    if (res.ok) {
      setDiasHorarios(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getDiasHorarios();
    console.log(idRestaurante);
  }, []);

  return (
    <div>
      <div className="bg-slate-400">
        <Title text="Dias y Horarios de Atención" />
      </div>
      
      {Object.keys(diasHorarios).length === 0 ? (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-3 mt-5">
        <p className='text-center text-red-700 text-lg font-bold'>No hay Cronograma de Atención. Ingrese dias y horarios.</p>
      {daysOfWeek.map((day) => (
        <div key={day} className="bg-white rounded-lg shadow p-4 border border-sky-800">
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* Día y checkbox */}
            <div className="col-span-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={schedule[day].selected}
                  onChange={() => handleDayChange(day)}
                  className="w-4 h-4"
                />
                <span className="font-semibold text-lg">{day}</span>
              </label>
            </div>

            {/* Franjas horarias */}
            <div className="col-span-10 grid grid-cols-2 gap-4">
              {/* Franja mañana */}
              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-gray-700 ml-20">1° Franja horaria</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm text-gray-600">Inicio</label>
                    <input
                      type="time"
                      value={schedule[day].startTime1}
                      onChange={(e) => handleTimeChange(day, 'startTime1', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Fin</label>
                    <input
                      type="time"
                      value={schedule[day].endTime1}
                      onChange={(e) => handleTimeChange(day, 'endTime1', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Franja tarde/noche */}
              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-gray-700 ml-20">2° Franja horaria</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm text-gray-600">Inicio</label>
                    <input
                      type="time"
                      value={schedule[day].startTime2}
                      onChange={(e) => handleTimeChange(day, 'startTime2', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Fin</label>
                    <input
                      type="time"
                      value={schedule[day].endTime2}
                      onChange={(e) => handleTimeChange(day, 'endTime2', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mensajes de error */}
            {errors[day] && (
              <div className="col-span-12">
                <p className="text-sm text-red-500">{errors[day]}</p>
              </div>
            )}
          </div>
        </div>
      ))}
      
      <div className="flex justify-end">
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Guardar Horarios
        </button>
      </div>
    </form>
      ) : (
        <div className="w-full max-w-3xl mx-auto">
        {diasHorarios.map((diaHorario, index) => {
          return (
            
            <div key={diaHorario.id || index} className="bg-white rounded-lg shadow p-4 mt-4 border border-sky-800">
              <div className="grid grid-cols-12 gap-4 items-start">
                
                {/* Nombre del día */}
                <div className="col-span-2">
                  <label className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">{diaHorario.dia}</span>
                  </label>
                </div>
        
                {/* Horarios */}
                <div className="col-span-10 grid grid-cols-2 gap-4">
                  <div className="space-y-2 ">
                    <h5 className="text-sm font-semibold text-gray-700 ml-20">Franja horaria 1</h5>
                    <p className='ml-20'>{diaHorario.startTime1} - {diaHorario.endTime1}</p>
                  </div>
        
                  {diaHorario.startTime2 && diaHorario.endTime2 && (
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-gray-700 ml-20">Franja horaria 2</h5>
                      <p className='ml-20'>{diaHorario.startTime2} - {diaHorario.endTime2}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        
        
        <div className="flex justify-end mt-4">
            <button 
              type="button"
              onClick={() => navigate(`editarDiasHorarios/${idRestaurante}`)} 
              className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
            >
              Editar Cronograma
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
