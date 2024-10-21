
// eslint-disable-next-line react/prop-types
export default function CardMenuUsuario({ imagen, titulo }) {
  return (
    <div className="relative w-64 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imagen} alt={titulo} className="w-full h-32 object-cover" />

      {/* Overlay with title */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold text-center">{titulo}</h3>
      </div>
    </div>
  );
}
