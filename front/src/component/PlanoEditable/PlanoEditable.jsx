/* eslint-disable react/prop-types */
import AgruparMesa from "../AgruparMesa/AgruparMesa";
import Subtitulo from "../Subtitulo/Subtitulo";
import Title from "../Title/Title";

const PlanoEditable = ({ mesas = [], setMesas }) => {
  if (!Array.isArray(mesas)) {
    console.error("Prop 'mesas' debe ser un array.");
    return null;
  }

  const handleReserve = async (id) => {
    try {
      const res = await fetch(`/api/restaurantes/reservarMesa/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ estado: 0 }),
      });

      if (res.ok) {
        setMesas((prevMesas) =>
          prevMesas.map((mesa) =>
            mesa.id === id ? { ...mesa, estado: 0 } : mesa
          )
        );
      } else {
        console.error("Error reservando la mesa");
      }
    } catch (error) {
      console.error("Error al realizar la reserva:", error);
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
        body: JSON.stringify({ estado: 1 }),
      });

      if (res.ok) {
        setMesas((prevMesas) =>
          prevMesas.map((mesa) =>
            mesa.id === id ? { ...mesa, estado: 1 } : mesa
          )
        );
      } else {
        console.error("Error al habilitar mesas");
      }
    } catch (error) {
      console.error("Error al habilitar mesas:", error);
    }
  };

  return (
    <div>
      <Title text="Menu Editable" />
      <Subtitulo text="Hacer click sobre la mesa para desabilitarla" />

      <div className="flex flex-col space-y-1">
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={2}
          handleReserve={handleReserve}
          handleDelete={handleDelete}
          handleHabilitar={handleHabilitar}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={4}
          handleReserve={handleReserve}
          handleDelete={handleDelete}
          handleHabilitar={handleHabilitar}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={6}
          handleReserve={handleReserve}
          handleDelete={handleDelete}
          handleHabilitar={handleHabilitar}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={8}
          handleReserve={handleReserve}
          handleDelete={handleDelete}
          handleHabilitar={handleHabilitar}
        />
      </div>
    </div>
  );
};

export default PlanoEditable;
