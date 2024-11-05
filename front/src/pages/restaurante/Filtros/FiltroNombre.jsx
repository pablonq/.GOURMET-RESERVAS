/* eslint-disable react/prop-types */
const FiltroNombre = ({ filtroNombre, setFiltroNombre }) => (
  <div className="w-3/4">
    <div className="w-full p-2 font-medium text-neutral-700">
      Filtrar por nombre
    </div>
    <input
      type="text"
      placeholder="Nombre del restaurante"
      value={filtroNombre}
      onChange={(e) => setFiltroNombre(e.target.value)}
      className="border ml-2"
    />
  </div>
);

export default FiltroNombre;
