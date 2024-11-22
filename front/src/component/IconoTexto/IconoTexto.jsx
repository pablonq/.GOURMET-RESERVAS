// eslint-disable-next-line react/prop-types
const IconoTexto = ({ icono, texto, value }) => {
  return (
    <div className="my-4">
      <div className="flex flex-row  text-[#242424]">
        <div className="mr-2">{icono}</div>
        <span className="font-semibold text-sm">{texto}</span>
      </div>
      <div className="font-light text-xs ml-6">{value}</div>
    </div>
  );
};

export default IconoTexto;
