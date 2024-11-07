/* eslint-disable react/prop-types */
const FiltroPopularidad = ({
  setOrdenarPorPopularidad,
  ordenarPorPopularidad,
}) => {
  const togglePopularidad = () => {
    setOrdenarPorPopularidad(!ordenarPorPopularidad);
  };
  return (
    <div className="mx-2 mt-2 ">
    <div className=" w-3/4 mt-2 ">
      <button
        onClick={togglePopularidad}
        className=" bg-gray-800 text-white p-2 text-sm w-full rounded-md ml-2  mt-2 "
      >
        {ordenarPorPopularidad
          ? "Ver todos los restaurantes"
          : "Ver más  populares"}
      </button>
    </div>
    </div>
  );
};

export default FiltroPopularidad;
