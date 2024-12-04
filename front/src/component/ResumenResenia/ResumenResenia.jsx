/* eslint-disable react/prop-types */
import IconoUsuario from "../../assets/IconoUsuario";
import EstrellaPuntuacion from "../EstrellaPuntuacion/EstrellaPuntuacion";

const ResumenResenia = ({ reseniaExistente }) => {
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="mt-4 text-sm  text-[#242424] p-2 border shadow-md rounded-s border-l-[#DC493A] border-l-4">
      <div className="flex flex-row items-center">
        <IconoUsuario width="16" height="16" />
        <p>Usuario</p>
      </div>
      <div className=" flex flew-row items-center">
        <EstrellaPuntuacion calificacion={reseniaExistente.calificacion} />
        <p className="font-semibold text-xs mx-4">
          {formatearFecha(reseniaExistente.fechaResenia)}
        </p>
      </div>

      <div className="font-light  text-xs my-2">
        {reseniaExistente.comentario}
      </div>
      {reseniaExistente.respuestaDuenio && (
        <p className="p-1 text-zinc-600">
          <strong>Respuesta restaurante: </strong>
          {reseniaExistente.respuestaDuenio}
        </p>
      )}
    </div>
  );
};

export default ResumenResenia;
