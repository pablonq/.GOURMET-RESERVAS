// eslint-disable-next-line react/prop-types
const EstrellaPuntuacion = ({ calificacion }) => {
  const estrellas = Array.from({ length: 5 }, (_, index) => {
    const entero = Math.floor(calificacion);
    const decimal = calificacion - entero;
    const lleno = index < entero;
    const parcial = index === entero && decimal > 0;
    return (
      <span key={index} className="relative inline-block">
        <span className="text-gray-300">★</span>
        <span
          className="absolute top-0 left-0 text-yellow-500 overflow-hidden"
          style={{
            width: lleno ? "100%" : parcial ? `${decimal * 100}%` : "0%",
          }}
        >
          ★
        </span>
      </span>
    );
  });

  const calificacionString =
    String(calificacion).split(".")[0] +
    "." +
    (String(calificacion).split(".")[1] || "0").slice(0, 1);

  return (
    <div className="flex items-center">
      {estrellas}
      <span className="ml-2 text-yellow-500 text-sm">{calificacionString}</span>
    </div>
  );
};

export default EstrellaPuntuacion;
