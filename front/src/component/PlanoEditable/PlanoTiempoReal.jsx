/* eslint-disable react/prop-types */
import Mesa from "../../assets/Mesa";
import AgruparMesa from "../AgruparMesa/AgruparMesa";
import Subtitulo from "../Subtitulo/Subtitulo";

const PlanoTiempoReal = ({ mesas = [], setMesas, mesasReservadas = [] }) => {
  if (!Array.isArray(mesas)) {
    console.error("Prop 'mesas' debe ser un array.");
    return null;
  }

  const mesasReservadasSet = new Set(mesasReservadas.map((mesa) => mesa.id));

  const mesasConEstado = mesas.map((mesa) => ({
    ...mesa,
    estado:
      mesa.estado === "disponible" && !mesasReservadasSet.has(mesa.id)
        ? "reservada"
        : mesa.estado,
  }));

  const handleOcupar = async (id) => {
    try {
      const res = await fetch(`/api/restaurantes/ocuparMesa/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado: "ocupada" }),
      });

      if (res.ok) {
        setMesas((prevMesas) =>
          prevMesas.map((mesa) =>
            mesa.id === id ? { ...mesa, estado: "ocupada" } : mesa
          )
        );
      } else {
        console.error("Error ocupar la mesa");
        throw new Error(`Error al ocupar mesa: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error al realizar la ocupacion:", error);
    }
  };

  const handleHabilitar = async (id) => {
    try {
      const res = await fetch(`/api/restaurantes/habilitarMesa/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado: "disponible" }),
      });

      if (res.ok) {
        setMesas((prevMesas) =>
          prevMesas.map((mesa) =>
            mesa.id === id ? { ...mesa, estado: "disponible" } : mesa
          )
        );
      } else {
        console.error("Error al habilitar mesas");
        throw new Error(`Error al habilitar mesa: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error al habilitar mesas:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Subtitulo text="Hacer click sobre la mesa marcar como ocupada, o en el boton para habilitar nuevamente " />
      <div className="flex flex-row border p-4 bg-white shadow-md rounded-s w-2/5 my-4 justify-center">
        <div className="flex space-x-2 items-center text-center mr-4">
          <Mesa width="32" height="32"  fill="#efd112" />
          <p>Mesa Reservada</p>
        </div>
        <div className="flex space-x-2 items-center text-center mr-4 ">
          <Mesa width="32" height="32" fill="#14b840"  />
          <p>Mesa Libre</p>
        </div>
        <div className="flex space-x-2 items-center text-center mr-4">
          <Mesa width="32" height="32" fill="#DC493A" />
          <p>Mesa Ocupada</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <AgruparMesa
          mesas={mesasConEstado}
          cantidadPersonas={2}
          handleReserve={handleOcupar}
          handleHabilitar={handleHabilitar}
          textAcion={"habilitar Mesa"}
        />
        <AgruparMesa
          mesas={mesasConEstado}
          cantidadPersonas={4}
          handleReserve={handleOcupar}
          handleHabilitar={handleHabilitar}
          textAcion={"habilitar Mesa"}
        />
        <AgruparMesa
          mesas={mesasConEstado}
          cantidadPersonas={6}
          handleReserve={handleOcupar}
          handleHabilitar={handleHabilitar}
          textAcion={"habilitar Mesa"}
        />
        <AgruparMesa
          mesas={mesasConEstado}
          cantidadPersonas={8}
          handleReserve={handleOcupar}
          handleHabilitar={handleHabilitar}
          textAcion={"habilitar Mesa"}
        />
      </div>
    </div>
  );
};

export default PlanoTiempoReal;
