import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import Title from "../../../component/Title/Title";
import { useNavigate } from "react-router-dom";

const DIAS_SEMANA = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export default function EditarDiasHorarios() {
  const { user, token } = useContext(AppContext);
  const [diasHorarios, setDiasHorarios] = useState([]);
  const [diasDisponibles, setDiasDisponibles] = useState(DIAS_SEMANA);
  const [nuevoDia, setNuevoDia] = useState("");
  const navigate = useNavigate();

  const idRestaurante = user?.id;

  // Obtener los días y horarios del restaurante al cargar el componente
  const getDiasHorarios = async () => {
    const res = await fetch(`/api/restaurantes/diasHorariosRestaurante/${idRestaurante}`);
    const data = await res.json();
    if (res.ok) {
      setDiasHorarios(data);
      // Filtra los días disponibles que no están en el estado actual
      const diasOcupados = data.map((dia) => dia.dia);
      setDiasDisponibles(DIAS_SEMANA.filter(dia => !diasOcupados.includes(dia)));
    }
  };

  useEffect(() => {
    getDiasHorarios();
  }, []);

  // Handler para actualizar las horas en el estado
  const handleTimeChange = (diaId, shift, timeType, value) => {
    const updatedDiasHorarios = diasHorarios.map((dia) => {
      if (dia.id === diaId) {
        return {
          ...dia,
          [timeType]: value,
        };
      }
      return dia;
    });
    setDiasHorarios(updatedDiasHorarios);
  };

  // Handler para agregar un nuevo día
  const handleAddDay = () => {
    if (!nuevoDia) return;

    // Agrega el nuevo día con campos vacíos para los horarios
    const newDiaObj = {
      id: Date.now(), // Genera un ID temporal o se puede obtener del backend en una implementación real
      dia: nuevoDia,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: ""
    };

    setDiasHorarios([...diasHorarios, newDiaObj]);
    // Actualiza los días disponibles eliminando el nuevo día seleccionado
    setDiasDisponibles(diasDisponibles.filter((dia) => dia !== nuevoDia));
    setNuevoDia(""); // Limpiar el input de selección
  };

  // Handler para eliminar un día
  const handleRemoveDay = (diaId) => {
    const updatedDiasHorarios = diasHorarios.filter(dia => dia.id !== diaId);
    const diaEliminado = diasHorarios.find(dia => dia.id === diaId)?.dia;
    
    setDiasHorarios(updatedDiasHorarios);
    if (diaEliminado) {
      // Vuelve a agregar el día eliminado a los días disponibles
      setDiasDisponibles([...diasDisponibles, diaEliminado]);
    }
  };

  // Handler para enviar los datos actualizados
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/restaurantes/actualizarDiasHorarios`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ horarios: diasHorarios, idRestaurante: user?.id }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error al enviar los datos");
        console.log(data);
        return;
      }
      console.log(data);
      alert("Horarios actualizados correctamente");
      navigate("/panelRestaurante/diasHorarios");

      // Redirigir a la página de administración de horarios

    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
    <div className="bg-slate-400">
      <Title text="Editar días y horarios" />
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-3 mt-5">
        {/* Selector para agregar un nuevo día */}
        <div className="bg-white rounded-lg shadow p-4 border border-gray-300">
          <label className="block text-sm font-medium text-gray-700">
            Agregar nuevo día
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <select
              value={nuevoDia}
              onChange={(e) => setNuevoDia(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Seleccionar día</option>
              {diasDisponibles.map((dia) => (
                <option key={dia} value={dia}>
                  {dia}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleAddDay}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Agregar Día
            </button>
          </div>
        </div>

        {/* Listado de días y horarios */}
        {diasHorarios.map((dia) => (
          <div key={dia.id} className="bg-white rounded-lg shadow p-4 border border-sky-800 relative">
            <div className="grid grid-cols-12 gap-4 items-start">
              {/* Nombre del día */}
              <div className="col-span-2">
                <label className="flex items-center space-x-2">
                  <span className="font-semibold text-lg">{dia.dia}</span>
                </label>
              </div>

              {/* Franja horaria 1 */}
              <div className="col-span-5">
                <h5 className="text-sm font-semibold text-gray-700">Franja horaria 1</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm text-gray-600">Inicio</label>
                    <input
                      type="time"
                      value={dia.startTime1 || ""}
                      onChange={(e) => handleTimeChange(dia.id, 1, "startTime1", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Fin</label>
                    <input
                      type="time"
                      value={dia.endTime1 || ""}
                      onChange={(e) => handleTimeChange(dia.id, 1, "endTime1", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Franja horaria 2 */}
              <div className="col-span-5">
                <h5 className="text-sm font-semibold text-gray-700">Franja horaria 2</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm text-gray-600">Inicio</label>
                    <input
                      type="time"
                      value={dia.startTime2 || ""}
                      onChange={(e) => handleTimeChange(dia.id, 2, "startTime2", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Fin</label>
                    <input
                      type="time"
                      value={dia.endTime2 || ""}
                      onChange={(e) => handleTimeChange(dia.id, 2, "endTime2", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Botón para eliminar el día */}
              <button
                type="button"
                onClick={() => handleRemoveDay(dia.id)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 w-full mt-5"
        >
          Guardar cambios
        </button>
      </form>
    </>
  );
}
