/* eslint-disable react/prop-types */
import { useState } from "react";
import ResumenResenia from "../ResumenResenia/ResumenResenia";
import FlechaDerecha from "../../assets/FlechaDerecha";
import FlechaIzquierda from "../../assets/FlechaIzquierda";

const ApartadoResenias = ({ resenias, totalResenias }) => {
  const [paginaActual, setPaginaActual] = useState(1);
  const reseñasPorPagina = 6;
  const totalPaginas = Math.ceil(resenias.length / reseñasPorPagina);

  const obtenerReseniasPagina = () => {
    const inicio = (paginaActual - 1) * reseñasPorPagina;
    const fin = inicio + reseñasPorPagina;
    return resenias.slice(inicio, fin);
  };

  const irPaginaAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const irPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  return (
    <div className="flex flex-col border-b border-gray-300 my-4">
      <h3 className="font-bold mb-4">{totalResenias} Reseñas</h3>

      {obtenerReseniasPagina().map((resenia) => (
        <div key={resenia.id}>
          <ResumenResenia reseniaExistente={resenia} />
        </div>
      ))}
      {totalPaginas > 1 && (
        <div className="flex justify-around items-center mt-4 my-4">
          <button
            onClick={irPaginaAnterior}
            disabled={paginaActual === 1}
            className={`px-2 py-2 border border-[#DC493A] hover:border-[#DC493A] rounded-full hover:bg-[#DC493A] ${
              paginaActual === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-[#DC493A]  hover:text-white "
            }`}
          >
            <FlechaIzquierda />
          </button>
          <span className="text-sm text-[#1A2F2A]">
            Página {paginaActual} de {totalPaginas}
          </span>
          <button
            onClick={irPaginaSiguiente}
            disabled={paginaActual === totalPaginas}
            className={`px-2 py-2 border  rounded-full hover:border-[#DC493A]  hover:bg-[#DC493A] ${
              paginaActual === totalPaginas
                ? "text-[#B6C6B9] border-[#B6C6B9] cursor-not-allowed"
                : "text-[#DC493A] hover:text-white border-[#DC493A]"
            }`}
          >
            <FlechaDerecha />
          </button>
        </div>
      )}
    </div>
  );
};

export default ApartadoResenias;
