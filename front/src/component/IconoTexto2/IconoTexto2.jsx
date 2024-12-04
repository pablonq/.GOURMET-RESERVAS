// eslint-disable-next-line react/prop-types
const IconoTexto2 = ({ icono, titulo, descripcion }) => {
    return (
        <div className="flex space-x-2 items-center text-base text-[#242424]">
        {icono}
        <p>
          <strong>{titulo} </strong>{" "}
          {descripcion}
        </p>
      </div>
    );
  };
  
  export default IconoTexto2;
 