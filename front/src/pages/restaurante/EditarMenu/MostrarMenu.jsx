import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import Button from "../../../component/Button/Button";
import TooltipCustom from "../../../component/TooltipCustom/TooltipCustom";
import IconoEliminar from "../../../assets/IconoEliminar";
import MensajeError from "../../../component/MensajeError/MensajeError";
import IconoPlatoRestaurante from "../../../assets/IconoPlatoRestaurante";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

export default function MostrarMenu() {
  const { menuId } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  const [menu, setMenu] = useState(null);
  const [platos, setPlatos] = useState([]);

  async function getMenu() {
    /* e.preventDefault(); */
    const res = await fetch(`/api/restaurantes/mostrarMenu/${menuId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      setMenu(data);
      console.log(data);
      console.log(menuId);
    }
  }
  async function getPlatos() {
    const res = await fetch(`/api/restaurantes/indexPlatosMenus/${menuId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    setPlatos(data);

    console.log("Platos:", data);
  }

  async function handleDelete(e) {
    e.preventDefault();
    const res = await fetch(`/api/restaurantes/borrarMenu/${menuId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      navigate("/panelRestaurante/editarMenu");
    }
    console.log(data);
  }

  useEffect(() => {
    getMenu();
    getPlatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-center items-center m-4 space-x-4">
        <Button
          onClick={() => navigate(`../actualizarMenu/${menuId}`)}
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
          src={menu?.imagen}
          alt={`Imagen de ${menu?.nombre}`}
          className="w-full h-40 object-cover "
        />
      </div>

      {/* Contenedor para el texto */}
      <div className=" text-center mt-4 mx-16 border-b border-gray-300">
        <div className="my-4">
        <h1 className="text-2xl font-bold text-[#1A2F2A]">{menu?.nombre}</h1>
        <p>{menu?.tipo}</p>
        <p>{menu?.descripcion}</p>
        </div>
      </div>

      {/* Contenedor para la lista de platos */}
      <div className="mt-4 ">
        <div className="flex space-x-2 items-center justify-center">
        <IconoPlatoRestaurante/>
        <h2 className="text-lg font-bold text-[#1A2F2A]">Platos Asociados</h2>
        </div>
       { platos.length === 0 ? (
          <MensajeError mensaje={"Este menu aun no tiene platos"}/>
        ) :(
          <div className="flex justify-center">
        <Link to={`../mostrarPlato/${platos[0]?.id}`}>
          <ul className="list-inside">
            {platos.map((plato) => (
              <li key={plato.id} className="text-sm font-semibold text-[#1A2F2A] hover:text-[#DC493A]">
                {plato.nombrePlato}
              </li>
            ))}
          </ul>
        </Link>
        </div>)}
      </div>
      <div className="mx-4 ">
      <LinkVolver color={"[#DC493A]"} colorHover={"[#B6C6B9]"} ruta={"/panelRestaurante/editarMenu"} />
      </div>
    </>
  );
}
