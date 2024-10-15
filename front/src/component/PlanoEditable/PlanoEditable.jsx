/* eslint-disable react/prop-types */
import AgruparMesa from "../AgruparMesa/AgruparMesa";
import Subtitulo from "../Subtitulo/Subtitulo";

const PlanoEditable = ({ mesas = [], setMesas }) => {
  if (!Array.isArray(mesas)) {
    console.error("Prop 'mesas' debe ser un array.");
    return null;
  }
  

  const handleOcupar = async (id) => {
    try {
      const res = await fetch(`/api/restaurantes/ocuparMesa/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ estado: 'ocupada' }),
      });

      if (res.ok) {
        setMesas((prevMesas) =>
          prevMesas.map((mesa) =>
            mesa.id === id ? { ...mesa, estado: 'ocupada' } : mesa
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

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/restaurantes/eliminar/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMesas((prevMesas) => prevMesas.filter((mesa) => mesa.id !== id));
      } else {
        console.error("Error eliminando la mesa");
      }
    } catch (error) {
      console.error("Error al eliminar la mesa:", error);
    }
  };

  const handleHabilitar = async (id) => {
    try {
      const res = await fetch(`/api/restaurantes/habilitarMesa/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ estado: "disponible" }),
      });

      if (res.ok) {
        setMesas((prevMesas) =>
          prevMesas.map((mesa) =>
            mesa.id === id ? { ...mesa, estado: "disponible"} : mesa
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
    <div>
      <Subtitulo text="Hacer click sobre la mesa para seleccionarla como ocupada" />

      <div className="flex flex-col space-y-1">
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={2}
          handleReserve={handleOcupar }
          handleDelete={handleDelete}
          handleHabilitar={handleHabilitar}
          textAcion={"habilitar Mesa"}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={4}
          handleReserve={handleOcupar }
          handleDelete={handleDelete}
          handleHabilitar={handleHabilitar}
          textAcion={"habilitar Mesa"}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={6}
          handleReserve={handleOcupar }
          handleDelete={handleDelete}
          handleHabilitar={handleHabilitar}
          textAcion={"habilitar Mesa"}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={8}
          handleReserve={handleOcupar }
          handleDelete={handleDelete}
          handleHabilitar={handleHabilitar}
          textAcion={"habilitar Mesa"}
        />
      </div>
    </div>
  );
};

export default PlanoEditable;
