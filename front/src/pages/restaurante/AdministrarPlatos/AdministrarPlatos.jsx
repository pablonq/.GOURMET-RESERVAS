import { AppContext } from "../../../Context/AppContext";
import Title from "../../../component/Title/Title";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import CardPlato from "../../../component/CardPlato/CardPlato";
import Button from "../../../component/Button/Button";
import MensajeError from "../../../component/MensajeError/MensajeError";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";
import ButtonPaginacion from "../../../component/ButtonPaginacion/ButtonPaginacion";

export default function AdministrarPlatos() {
  const { user, token } = useContext(AppContext);
  const [platos, setPlatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const cardsPorPagina = 10;
  const navigate = useNavigate();
  const idRestaurante = user?.id;

  const handleView = (platoId) => {
    navigate(`../mostrarPlato/${platoId}`);
  };
  async function getPlatos() {
    try {
      const res = await fetch(
        `/api/restaurantes/indexPlatos/${idRestaurante}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setPlatos(data);
      setLoading(false);
      //console.log("Platos:", data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (idRestaurante && token) {
      getPlatos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRestaurante, token]);

  const indexUltimaCards = paginaActual * cardsPorPagina;
  const indexPrimerCards = indexUltimaCards - cardsPorPagina;
  const platosActuales = platos.slice(indexPrimerCards, indexUltimaCards);

  const paginate = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  return (
    <>
      <div>
        <Title text="Administrar y crear nuevos platos " />
        <div className="flex justify-center items-center m-4">
          <Button
            onClick={() => navigate(`../crearPlato`)}
            texto={" Crear Plato"}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <p className="text-center font-bold text-[#DC493A]">
              Cargando platos...
            </p>
          ) : error ? (
            <p className="text-center font-bold text-[#DC493A]">{error}</p>
          ) : platos.length === 0 ? (
            <MensajeError mensaje="No hay platos disponibles." />
          ) : (
            platosActuales.map((plato) => (
              <div key={plato.id} className="m-2">
                <CardPlato
                  imagen={plato.imagen}
                  nombre={plato.nombrePlato}
                  informacionNutricional={plato.informacionNutricional}
                  precio={plato.precio}
                  menu={
                    plato.menus.length > 0
                      ? plato.menus[0].nombre
                      : "Sin menú asociado"
                  }
                  onView={() => handleView(plato.id)}
                />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex justify-between mx-4  items-end">
        <LinkVolver
          color={"[#DC493A]"}
          colorHover={"[#B6C6B9]"}
          ruta={"/panelRestaurante"}
        />
        {/* Paginación */}
        <div className="flex mt-4">
          {Array.from(
            { length: Math.ceil(platos.length / cardsPorPagina) },
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
