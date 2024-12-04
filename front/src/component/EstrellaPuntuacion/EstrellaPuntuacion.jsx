// eslint-disable-next-line react/prop-types
const EstrellaPuntuacion = ({ calificacion }) => {
  const estrellas = Array.from({ length: 5 }, (_, index) => {
    const entero = Math.floor(calificacion);
    const decimal = calificacion - entero;
    const lleno = index < entero;
    const parcial = index === entero && decimal > 0;
    return (
      <div key={index} className="relative inline-block">
        <div className="text-[#B6C6B9]">★</div>
        <p
          className="absolute top-0 left-0 text-[#DC493A] overflow-hidden"
          style={{
            width: lleno ? "100%" : parcial ? `${decimal * 100}%` : "0%",
          }}
        >
          ★
        </p>
      </div>
    );
  });
  const calificacionString =
    String(calificacion).split(".")[0] +
    "." +
    (String(calificacion).split(".")[1] || "0").slice(0, 1);

  return (
    <div className="flex items-center ">
      {estrellas}
      <span className="ml-2 text-[#DC493A] text-sm">{calificacionString}</span>
    </div>
  );
};

export default EstrellaPuntuacion;
