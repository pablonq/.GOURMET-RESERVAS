import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import Button from "../../../component/Button/Button";
import TooltipCustom from "../../../component/TooltipCustom/TooltipCustom";
import IconoEliminar from "../../../assets/IconoEliminar";
import IconoMenu from "../../../assets/IconoMenu";
import MensajeError from "../../../component/MensajeError/MensajeError";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";
import IconoTag from "../../../assets/IconoTag";

export default function MostrarPlato() {
  const { platoId } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  const [plato, setPlato] = useState(null);

  async function getPlato() {
    /* e.preventDefault(); */
    const res = await fetch(`/api/restaurantes/mostrarPlato/${platoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      setPlato(data);
      //console.log(data);
      //console.log(platoId);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();

    const res = await fetch(`/api/restaurantes/borrarPlato/${platoId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      navigate("/panelRestaurante/administrarPlatos");
    }

    console.log(data);
  }

  useEffect(() => {
    getPlato();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-center items-center m-4 space-x-4">
        <Button
          onClick={() => navigate(`../editarPlato/${platoId}`)}
          texto={"Editar"}
        />
        <TooltipCustom text="Eliminar">
          <button onClick={handleDelete}>
            <IconoEliminar width={"24"} height={"24"} />
          </button>
        </TooltipCustom>
      </div>
      <div className="flex justify-center mr-2">
        <img
          src={plato?.imagen}
          alt={`Imagen de ${plato?.nombre}`}
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Contenedor para el texto */}
      <div className="text-center mt-4 mx-16 border-b border-gray-300">
        <div className="my-4">
          <h1 className="text-xl font-bold text-[#1A2F2A]">
            {plato?.nombrePlato}
          </h1>
          <h3 className="text-lg">{plato?.descripcion}</h3>
          <p>{plato?.informacionNutricional}</p>
          <p className="font-semibold">${plato?.precio}</p>
        </div>
      </div>
      <div className="mt-4 mx-16 border-b border-gray-300 ">
        <div className="flex space-x-2 items-center justify-center my-4">
          <IconoMenu />
          <h2 className="text-lg font-bold text-[#1A2F2A] ">Menu Asociado</h2>
        </div>
        {plato?.menu ? (
          <div className="flex justify-center text-sm font-semibold text-[#1A2F2A] my-2">
            {plato.menu.nombre}
          </div>
        ) : (
          <MensajeError mensaje={"Sin menú asociado"} />
        )}
      </div>
      <div className="mt-4 flex flex-col items-center text-[#1A2F2A] ">
        <div className="flex space-x-2 items-center justify-center my-4">
          <IconoTag width={"24"} height={"24"}/>
        <h2 className="text-lg font-bold">Etiquetas asociadas</h2>
        </div>
        <div className="mt-4">
          {Array.isArray(plato?.tags) && plato.tags.length > 0 ? (
            plato.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-[#DC493A] text-white text-xs font-semibold mr-2 px-2 py-1 rounded"
              >
                {tag.nombreTag}
              </span>
            ))
          ) : (
            <MensajeError mensaje={"No hay etiquetas disponibles"} />
          )}
        </div>
      </div>
      <div className="mx-4 ">
        <LinkVolver
          color={"[#DC493A]"}
          colorHover={"[#B6C6B9]"}
          ruta={"/panelRestaurante/administrarPlatos"}
        />
      </div>
    </>
  );
}
