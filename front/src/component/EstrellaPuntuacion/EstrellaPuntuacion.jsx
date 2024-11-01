// eslint-disable-next-line react/prop-types
const EstrellaPuntuacion = ({ calificacion }) => {
  const estrellas = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < calificacion ? "text-yellow-500" : "text-gray-300"}
    >
      ★
    </span>
  ));

  return <div>{estrellas}</div>;
};

export default EstrellaPuntuacion;
