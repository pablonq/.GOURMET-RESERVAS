/* eslint-disable react/prop-types */
const FiltroNombre = ({ filtroNombre, setFiltroNombre }) => (
  <div className="mx-2 mt-2 ">
  <div className="w-3/4">
    <div className="w-full p-2 font-medium text-[#242424]">
      Filtrar por nombre
    </div>
    <input
      type="text"
      placeholder="Nombre del restaurante"
      value={filtroNombre}
      onChange={(e) => setFiltroNombre(e.target.value)}
      className="w-full p-2 ml-2 input-style"
    />
  </div>
  </div>
);

export default FiltroNombre;
