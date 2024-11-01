/* eslint-disable react/prop-types */
import AgruparMesa from "../AgruparMesa/AgruparMesa";
import Subtitulo from "../Subtitulo/Subtitulo";

const PlanoEditable = ({ mesas = [], setMesas }) => {
  if (!Array.isArray(mesas)) {
    console.error("Prop 'mesas' debe ser un array.");
    return null;
  }
  
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


  return (
    <div>
      <Subtitulo text="Hacer click sobre icono para eliminar una mesa" />

      <div className="flex flex-col space-y-1">
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={2}
          handleDelete={handleDelete}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={4}
          handleDelete={handleDelete}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={6}
          handleDelete={handleDelete}
        />
        <AgruparMesa
          mesas={mesas}
          cantidadPersonas={8}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default PlanoEditable;
