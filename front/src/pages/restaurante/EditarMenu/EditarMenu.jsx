import Title from "../../../component/Title/Title";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";
import { CardMenu } from "../../../component/CardMenu/CardMenu";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/Button/Button";
import MensajeError from "../../../component/MensajeError/MensajeError";
import ButtonPaginacion from "../../../component/ButtonPaginacion/ButtonPaginacion";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

export default function EditarMenu() {
  const { user, token } = useContext(AppContext);
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const cardsPorPagina = 10;
  const navigate = useNavigate();
  const idRestaurante = user?.id;

  const handleView = (menuId) => {
    navigate(`../mostrarMenu/${menuId}`);
  };

  async function getMenus() {
    try {
      const res = await fetch(`/api/restaurantes/indexMenu/${idRestaurante}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setMenus(data);
      setLoading(false);
      //console.log("Menus:", data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (idRestaurante && token) {
      getMenus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRestaurante, token]);

  const indexUltimaCards = paginaActual * cardsPorPagina;
  const indexPrimerCards = indexUltimaCards - cardsPorPagina;
  const menusActuales = menus.slice(indexPrimerCards, indexUltimaCards);

  const paginate = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  return (
    <>
        <Title text="Visualizar Menus existentes o crear Menu" />
      <div className="flex justify-center items-center m-4">
        <Button onClick={() => navigate(`../crearMenu`)} texto={"Crear Menu"} />
      </div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <p className="text-center font-bold text-[#DC493A]">
            Cargando menús...
          </p>
        ) : error ? (
          <p className="text-center font-bold text-[#DC493A]">{error}</p>
        ) : menus.length === 0 ? (
          <MensajeError mensaje={"No hay restaurantes disponibles."} />
        ) : (
          menusActuales.map((menu) => (
            <div key={menu.id} className="m-2">
              <CardMenu
                imagen={menu.imagen}
                nombre={menu.nombre}
                descripcion={menu.descripcion}
                tipo={menu.tipo}
                onView={() => handleView(menu.id)}
              />
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between mx-4  items-end">
        <LinkVolver color={"[#DC493A]"} colorHover={"[#B6C6B9]"} ruta={"/panelRestaurante"} />
     
      {/* Paginación */}
      <div className="flex mt-4">
        {Array.from(
          { length: Math.ceil(menus.length / cardsPorPagina) },
          (_, index) => (
            <ButtonPaginacion
              key={index + 1}
              page={index + 1}
              isActive={paginaActual === index + 1}
              onClick={paginate}
            />
          )
        )}
      </div>
      </div>
    </>
  );
}
