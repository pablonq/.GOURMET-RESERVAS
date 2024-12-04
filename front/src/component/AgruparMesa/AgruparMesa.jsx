/* eslint-disable react/prop-types */
import IconoEliminar from "../../assets/IconoEliminar";
import IconoTogleOn from "../../assets/IconoTogleOn";
import Mesa2pers from "../../assets/Mesa2pers";
import Mesa4pers from "../../assets/Mesa4pers";
import Mesa6mas from "../../assets/Mesa6mas";
import Mesa6pers from "../../assets/Mesa6pers";
import MensajeError from "../MensajeError/MensajeError";
import TooltipCustom from "../TooltipCustom/TooltipCustom";

const AgruparMesa = ({
  mesas,
  cantidadPersonas,
  handleReserve,
  handleDelete,
  handleHabilitar,
  textAcion,
}) => {
  const renderMesa = (cantidad, estado) => {
    const estadoColor = {
      disponible: "#14b840",
      reservada: "#efd112",
      ocupada: "#DC493A",
    };

    const color = estadoColor[estado] || "gray";

    switch (cantidad) {
      case 2:
        return <Mesa2pers color={color} />;
      case 4:
        return <Mesa4pers color={color} />;
      case 6:
        return <Mesa6pers color={color} />;
      case 8:
        return <Mesa6mas color={color} />;
      default:
        return null;
    }
  };

  const filteredMesas = mesas.filter(
    (mesa) => mesa.cantidadPersonas === cantidadPersonas
  );

  return (
    <div className="mb-4 bg-white border shadow-md rounded-s">
      <h2 className="text-base text-center font-bold border-b border-gray-300 ">
        Mesas para {cantidadPersonas} personas
      </h2>
      {filteredMesas.length > 0 ? (
        <div className="flex flex-wrap  p-4 rounded-md">
          {filteredMesas.map((mesa) => (
            <div
              key={mesa.id}
              className="m-2 flex flex-col items-center border-dotted border-2 rounded-sm border-gray-300"
            >
              <TooltipCustom text="Ocupar">
                <button
                  id={mesa.id}
                  onClick={() => handleReserve(mesa.id)}
                  disabled={
                    mesa.estado === "reservada" || mesa.estado === "ocupada"
                  }
                  className={"p-1 "}
                >
                  {renderMesa(cantidadPersonas, mesa.estado)}
                </button>
              </TooltipCustom>
              {handleDelete ? (
                <TooltipCustom text="Eliminar">
                  <button
                    onClick={() => handleDelete(mesa.id)}
                    className="p-1 m-2 "
                  >
               <IconoEliminar width={"20"} height={"20"}/>
                  </button>
                </TooltipCustom>
              ) : null}
              {textAcion ? (
                <TooltipCustom text="Habilitar">
                  <button onClick={() => handleHabilitar(mesa.id)}>
                    <IconoTogleOn width="20" height="20" color="#0c7328" />
                  </button>
                </TooltipCustom>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <MensajeError
          mensaje={`No hay mesas para ${cantidadPersonas} personas`}
        />
      )}
    </div>
  );
};

export default AgruparMesa;
