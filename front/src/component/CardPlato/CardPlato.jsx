// eslint-disable-next-line react/prop-types
export default function CardPlato({ imagen, nombre, menu, onView }) {
  return (
    <div className="relative w-64 h-80 overflow-hidden bg-gray-800 rounded-2xl shadow-2xl group flex flex-col">

      <div className="flex-grow">
        <img
          src={imagen}
          alt={`Imagen de ${nombre}`}
          className="w-full h-40 object-cover"
        />
      </div>

      <div className=" text-white">
        <h3 className="text-lg  font-bold text-center mb-1">{nombre}</h3>
        <p className="font-light p-2 text-center text-base">Menu: {menu}</p>
      </div>

      <div className="flex justify-center items-center mb-4">
        <button
          className="w-20  rounded-md p-1 text-center text-cyan-50  bg-neutral-950 self-center "
          onClick={onView}
        >
          Ver
        </button>
      </div>

    </div>
  );
}
