import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import Title from "../../../component/Title/Title";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/Button/Button";
import FranjaHoraria from "../../../component/FranjaHoraria/FranjaHoraria";
import IconoEliminar from "../../../assets/IconoEliminar";
import TooltipCustom from "../../../component/TooltipCustom/TooltipCustom";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

const DIAS_SEMANA = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default function EditarDiasHorarios() {
  const { user, token } = useContext(AppContext);
  const [diasHorarios, setDiasHorarios] = useState([]);
  const [diasDisponibles, setDiasDisponibles] = useState(DIAS_SEMANA);
  const [nuevoDia, setNuevoDia] = useState("");
  const navigate = useNavigate();

  const idRestaurante = user?.id;

  const getDiasHorarios = async () => {
    const res = await fetch(
      `/api/restaurantes/diasHorariosRestaurante/${idRestaurante}`
    );
    const data = await res.json();
    if (res.ok) {
      setDiasHorarios(data);
      const diasOcupados = data.map((dia) => dia.dia);
      setDiasDisponibles(
        DIAS_SEMANA.filter((dia) => !diasOcupados.includes(dia))
      );
    }
  };

  useEffect(() => {
    getDiasHorarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleAddDay = () => {
    if (!nuevoDia) return;

    const newDiaObj = {
      id: Date.now(),
      dia: nuevoDia,
      startTime1: "",
      endTime1: "",
      startTime2: "",
      endTime2: "",
    };

    setDiasHorarios([...diasHorarios, newDiaObj]);
    setDiasDisponibles(diasDisponibles.filter((dia) => dia !== nuevoDia));
    setNuevoDia("");
  };

  const handleRemoveDay = (diaId) => {
    const updatedDiasHorarios = diasHorarios.filter((dia) => dia.id !== diaId);
    const diaEliminado = diasHorarios.find((dia) => dia.id === diaId)?.dia;

    setDiasHorarios(updatedDiasHorarios);
    if (diaEliminado) {
      setDiasDisponibles([...diasDisponibles, diaEliminado]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/restaurantes/actualizarDiasHorarios`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          horarios: diasHorarios,
          idRestaurante: user?.id,
        }),
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
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
      <div className="bg-slate-400">
        <Title text="Editar días y horarios" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mx-auto space-y-3 mt-5"
      >
        {/* Selector para agregar un nuevo día */}
        <div className="bg-white rounded-lg shadow-md p-4 border rounded-s ">
          <label className="block text-sm font-semibold text-[#242424]">
            Agregar nuevo día
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <select
              value={nuevoDia}
              onChange={(e) => setNuevoDia(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#DC493A] text-sm focus:border-[#DC493A]"
            >
              <option value="">Seleccionar día</option>
              {diasDisponibles.map((dia) => (
                <option key={dia} value={dia}>
                  {dia}
                </option>
              ))}
            </select>
            <Button onClick={handleAddDay} texto={"Agregar"} type="button" />
          </div>
        </div>

        {/* Listado de días y horarios */}
        {diasHorarios.map((dia) => (
          <div
            key={dia.id}
            className="bg-white rounded-s shadow p-6  border relative  border-l-[#DC493A] border-r-[#DC493A] border-l-4 border-r-4 my-2"
          >
            {/* Botón para eliminar el día */}
            <div className=" absolute top-2 right-2 ">
              <TooltipCustom text="Eliminar">
                <button type="button" onClick={() => handleRemoveDay(dia.id)}>
                  <IconoEliminar width={"20"} height={"20"} />
                </button>
              </TooltipCustom>
            </div>

            <div className="grid grid-cols-12 gap-4 items-start">
              {/* Nombre del día */}
              <div className="col-span-2">
                <label className="flex items-center space-x-2">
                  <span className="font-semibold text-lg">{dia.dia}</span>
                </label>
              </div>

              {/* Franja horaria 1 */}
              <div className="col-span-5">
                <FranjaHoraria
                  title="Franja horaria 1"
                  startTime={dia.startTime1 || ""}
                  endTime={dia.endTime1 || ""}
                  onStartTimeChange={(value) =>
                    handleTimeChange(dia.id, 1, "startTime1", value)
                  }
                  onEndTimeChange={(value) =>
                    handleTimeChange(dia.id, 1, "endTime1", value)
                  }
                />
              </div>

              {/* Franja horaria 2 */}
              <div className="col-span-5">
                <FranjaHoraria
                  title="Franja horaria 2"
                  startTime={dia.startTime2 || ""}
                  endTime={dia.endTime2 || ""}
                  onStartTimeChange={(value) =>
                    handleTimeChange(dia.id, 2, "startTime2", value)
                  }
                  onEndTimeChange={(value) =>
                    handleTimeChange(dia.id, 2, "endTime2", value)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <Button texto={"Guardar cambios"} type="submit" />
        </div>
      </form>

      <LinkVolver color={"[#DC493A]"} colorHover={"[#B6C6B9]"} ruta={"/panelRestaurante/diasHorarios"} />
    </>
  );
}
