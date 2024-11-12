/* eslint-disable react/prop-types */
import EstrellaPuntuacion from "../EstrellaPuntuacion/EstrellaPuntuacion";

const ResumenResenia = ({ reseniaExistente }) => {
  return (
    <div className="mt-4 text-sm p-2 border-2 shadow-md shadow-amber-100">
      <h4 className="font-semibold">Tu Reseña:</h4>
      <EstrellaPuntuacion calificacion={reseniaExistente.calificacion} />
      <p>Comentario: {reseniaExistente.comentario}</p>
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
