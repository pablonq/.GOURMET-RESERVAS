import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const InputDiasAtencion = ({ onChange, value }) => {
  const [selectedDays, setSelectedDays] = useState(value || []);
  
  const days = [
    { name: 'Lunes', value: 'Lu' },
    { name: 'Martes', value: 'Ma' },
    { name: 'Miércoles', value: 'Mi' },
    { name: 'Jueves', value: 'Ju' },
    { name: 'Viernes', value: 'Vi' },
    { name: 'Sábado', value: 'Sa' },
    { name: 'Domingo', value: 'Do' }
  ];

  const handleDayChange = useCallback((day) => {
    setSelectedDays(prevDays => {
      const newDays = prevDays.includes(day)
        ? prevDays.filter(d => d !== day)
        : [...prevDays, day];
      
      onChange(newDays);
      return newDays;
    });
  }, [onChange]);

  useEffect(() => {
    setSelectedDays(value || []);
  }, [value]);

  return (
    <div className="weekday-selector">
      <h3 className="text-lg font-semibold mb-2">Selecciona los días de atención:</h3>
      <div className="flex flex-wrap gap-2">
        {days.map(day => (
          <label key={day.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedDays.includes(day.value)}
              onChange={() => handleDayChange(day.value)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>{day.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

InputDiasAtencion.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string)
};

export default InputDiasAtencion;