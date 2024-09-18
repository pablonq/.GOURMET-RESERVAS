
/* eslint-disable react/prop-types */
import Mesa2pers from "../../assets/Mesa2pers";
import Mesa4pers from "../../assets/Mesa4pers";
import Mesa6mas from "../../assets/Mesa6mas";
import Mesa6pers from "../../assets/Mesa6pers";

const AgruparMesa = ({
  mesas,
  cantidadPersonas,
  handleReserve,
  handleDelete,
  handleHabilitar,
}) => {
  const renderMesa = (cantidad, estado) => {
    const color = estado ? "green" : "gray";

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
    <div className="mb-4">
      <h2 className="text-base text-center font-bold">
        Mesas para {cantidadPersonas} personas
      </h2>
      {filteredMesas.length > 0 ? (
        <div className="flex flex-wrap border-solid border-2 border-slate-300 rounded-md">
          {filteredMesas.map((mesa) => (
            <div key={mesa.id} className="m-2 flex flex-col">
              <button
                id={mesa.id}
                onClick={() => handleReserve(mesa.id)}
                disabled={!mesa.estado}
                className={"p-1 self-center"}
              >
                {renderMesa(cantidadPersonas, mesa.estado)}
              </button>
              <button
                onClick={() => handleDelete(mesa.id)}
                className="p-1 m-2 self-center"
              >
                <svg
                  data-slot="icon"
                  fill="#FF0000"
                  stroke="#000"
                  strokeWidth="1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => handleHabilitar(mesa.id)}
                className="p-1 m-2 ml-2 bg-green-600 text-white rounded-md"
              >
                Habilitar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay mesas para {cantidadPersonas} personas.</p>
      )}
    </div>
  );
};

export default AgruparMesa;
