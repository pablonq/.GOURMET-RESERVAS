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
      <button
        onClick={togglePopularidad}
        className=" bg-[#242424] text-white p-2 text-sm w-3/4 rounded-md ml-2  mt-2 hover:bg-[#DC493A] "
      >
        {ordenarPorPopularidad
          ? "Ver todos los restaurantes"
          : "Ver más  populares"}
      </button>
    </div>
  );
};

export default FiltroPopularidad;
