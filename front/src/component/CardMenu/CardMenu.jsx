/* eslint-disable react/prop-types */
import FlechaDerecha from "../../assets/FlechaDerecha";
export function CardMenu({ imagen, nombre, descripcion, tipo, onView }) {
  const descripcionCorta =
    descripcion.split(" ").slice(0, 9).join(" ") +
    (descripcion.split(" ").length > 9 ? "..." : "");
  return (
    <div className="relative max-w-60 h-80 overflow-hidden  rounded-md shadow-md group ">
      <img
        src={imagen}
        alt={`Imagen de ${nombre}`}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col justify-center text-white p-4 absolute bottom-0 w-full h-2/5 bg-[#242424] bg-opacity-95 ">
        <h3 className="text-lg font-bold text-center mb-1">{nombre}</h3>
        <p className="font-light text-center text-sm">{descripcionCorta}</p>
        <p className="font-semibold  text-center text-sm">{tipo}</p>
        <div className=" flex space-x-2 text-center items-center justify-end text-sm">
          <span
            className="cursor-pointer text-[#DC493A]  hover:underline hover:text-[#B6C6B9]"
            onClick={onView}
          >
            Ver más
          </span>
          <FlechaDerecha />
        </div>
      </div>
    </div>
  );
}
