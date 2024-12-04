/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import Title from "../../../component/Title/Title";
import { useNavigate } from "react-router-dom";
import IconoError from "../../../assets/IconoError";
import FranjaHoraria from "../../../component/FranjaHoraria/FranjaHoraria";
import MensajeError from "../../../component/MensajeError/MensajeError";
import Button from "../../../component/Button/Button";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

export default function DiasHorarios() {
  const { user, token } = useContext(AppContext);
  const navigate = useNavigate();
  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const [schedule, setSchedule] = useState({
    Lunes: {
      selected: false,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
    },
    Martes: {
      selected: false,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
    },
    Miércoles: {
      selected: false,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
    },
    Jueves: {
      selected: false,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
    },
    Viernes: {
      selected: false,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
    },
    Sábado: {
      selected: false,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
    },
    Domingo: {
      selected: false,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
    },
  });

  const idRestaurante = user?.id;
  const [diasHorarios, setDiasHorarios] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleDayChange = (day) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], selected: !schedule[day].selected },
    });
  };

  const handleTimeChange = (day, timeType, value) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], [timeType]: value },
    });
  };

  const validateSelection = () => {
    const newErrors = {};
    let hasError = false;

    Object.entries(schedule).forEach(([day, data]) => {
      if (data.selected) {
        const startTime1 = data.startTime1
          ? new Date(`1970-01-01T${data.startTime1}:00`)
          : null;
        const endTime1 = data.endTime1
          ? new Date(`1970-01-01T${data.endTime1}:00`)
          : null;
        const startTime2 = data.startTime2
          ? new Date(`1970-01-01T${data.startTime2}:00`)
          : null;
        const endTime2 = data.endTime2
          ? new Date(`1970-01-01T${data.endTime2}:00`)
          : null;

        // Verificar si al menos una franja horaria tiene horas válidas.
        const firstShiftFilled = startTime1 && endTime1;
        const secondShiftFilled = startTime2 && endTime2;

        if (!firstShiftFilled && !secondShiftFilled) {
          newErrors[day] = "Debe ingresar al menos una franja horaria.";
          hasError = true;
        }

        if (firstShiftFilled && startTime1 >= endTime1) {
          newErrors[day] = "El horario de la primera franja es inválido.";
          hasError = true;
        }

        // Si la segunda franja está cargada, validar que el horario es correcto.
        if (secondShiftFilled && startTime2 >= endTime2) {
          newErrors[day] = "El horario de la segunda franja es inválido.";
          hasError = true;
        }

        // Si ambas franjas están cargadas, verificar que no se solapen.
        if (firstShiftFilled && secondShiftFilled && endTime1 >= startTime2) {
          newErrors[day] = "Los horarios no deben superponerse.";
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
        endTime2: data.endTime2,
      }));

    try {
      const res = await fetch("/api/restaurantes/diasHorarios", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idRestaurante: user?.id,
          horarios: selectedDays,
        }),
      });

      if (!res.ok) {
        console.error("Error al enviar los datos");
        return;
      }
      setDiasHorarios(selectedDays);

      setSuccessMessage("Horarios enviados correctamente");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      alert("Horarios enviados correctamente");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const getDiasHorarios = async () => {
    const res = await fetch(
      `/api/restaurantes/diasHorariosRestaurante/${idRestaurante}`
    );
    const data = await res.json();
    if (res.ok) {
      setDiasHorarios(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getDiasHorarios();
    console.log(idRestaurante);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const formatTime = (time) => {
    if (!time) return ""; 
    const [hour, minute] = time.split(":"); 
    return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="bg-slate-400 m-2">
        <Title
          text="Define y edita los horarios de apertura y cierre"
        />
      </div>

      {Object.keys(diasHorarios).length === 0 ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl mx-auto space-y-3 mt-5"
        >
          <MensajeError
            mensaje={
              " No hay Cronograma de Atención. Seleccione dias y horarios."
            }
          />

          <div className="">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="bg-white rounded-s shadow-md p-4 border border-l-[#DC493A] border-r-[#DC493A] border-l-4 border-r-4 my-2"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Día y checkbox */}
                  <div className="col-span-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={schedule[day].selected}
                        onChange={() => handleDayChange(day)}
                        className="w-4 h-4 accent-[#DC493A]"
                      />
                      <span className="font-semibold text-lg ">{day}</span>
                    </label>
                  </div>

                  {/* Franjas horarias */}
                  <div className="col-span-10 grid grid-cols-2 gap-4">
                    {/* Franja mañana */}
                    <FranjaHoraria
                      title="1° Franja horaria"
                      startTime={schedule[day].startTime1}
                      endTime={schedule[day].endTime1}
                      onStartTimeChange={(value) =>
                        handleTimeChange(day, "startTime1", value)
                      }
                      onEndTimeChange={(value) =>
                        handleTimeChange(day, "endTime1", value)
                      }
                    />

                    {/* Franja tarde/noche */}

                    <FranjaHoraria
                      title=" 2° Franja horaria"
                      startTime={schedule[day].startTime2}
                      endTime={schedule[day].endTime2}
                      onStartTimeChange={(value) =>
                        handleTimeChange(day, "startTime2", value)
                      }
                      onEndTimeChange={(value) =>
                        handleTimeChange(day, "endTime2", value)
                      }
                    />
                  </div>

                  {/* Mensajes de error */}
                  {errors[day] && (
                    <div className="col-span-12">
                      <p className="text-sm text-[#DC493A]">{errors[day]}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
          <Button texto={"Guardar Horarios"} type="submit" />
          </div>
        </form>
      ) : (
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex justify-center shadow-md  border rounded-s text-white bg-[#DC493A] my-4 p-2">
            <h3 className="font-semibold">Dias y horarios cargados</h3>
          </div>
          {diasHorarios.map((diaHorario, index) => {
            return (
              <div
                key={diaHorario.id || index}
                className="bg-white rounded-lg shadow-md p-4 mt-4 border rounded-s  border-l-[#DC493A] border-r-[#DC493A] border-l-4 border-r-4 my-2"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Nombre del día */}
                  <div className="col-span-2">
                    <label className="flex items-center ">
                      <span className="font-semibold text-lg">
                        {diaHorario.dia}
                      </span>
                    </label>
                  </div>

                  {/* Horarios */}
                  <div className="col-span-10 grid grid-cols-2 gap-4">
                    <div className="space-y-2 border-dotted border-2">
                      <h5 className="text-sm font-semibold text-[#DC493A] ml-20">
                        Franja horaria 1
                      </h5>
                      <p className="ml-20">
                       {formatTime(diaHorario.startTime1)} - {formatTime(diaHorario.endTime1)}
                      </p>
                    </div>

                    {diaHorario.startTime2 && diaHorario.endTime2 && (
                      <div className="space-y-2 border-dotted border-2">
                        <h5 className="text-sm font-semibold text-[#DC493A] ml-20">
                          Franja horaria 2
                        </h5>
                        <p className="ml-20">
                          {formatTime(diaHorario.startTime2)} - {formatTime(diaHorario.endTime2)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-end mt-4">
            <Button
              onClick={() => navigate(`editarDiasHorarios/${idRestaurante}`)}
              texto={"Editar Cronograma"}
            />
          </div>
        </div>
      )}
      <LinkVolver color={"[#DC493A]"} colorHover={"[#B6C6B9]"} ruta={"/panelRestaurante"} />
    </div>
  );
}
