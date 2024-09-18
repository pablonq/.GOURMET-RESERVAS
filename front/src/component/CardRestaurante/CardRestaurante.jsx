/* eslint-disable react/prop-types */
const CardRestaurante = ({ nombreRes, descripcion, direccion, tipo }) => {
  return (
    <div className="relative max-w-64 overflow-hidden bg-gray-800 rounded-2xl shadow-2xl group">
        <div className=" text-white p-3">
          <h3 className="text-xl  font-bold text-center mb-1">{nombreRes}</h3>
          <p className="font-light p-2 text-center text-sm">{descripcion}</p>
          <p className="font-light text-end text-sm">{direccion}</p>
          <p className="font-light text-end text-sm">{tipo}</p>
        </div>
    </div>
  );
};

export default CardRestaurante;
