/* eslint-disable react/prop-types */
import { useState } from "react";

const GaleriaRestaurante = ({ imagenes }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <div className="my-8">
      <h3 className="text-lg font-bold text-[#242424] mb-4">
        {imagenes?.length || 0} Fotos
      </h3>
      <div className="grid grid-cols-3 gap-2 ">
        {imagenes?.[0] && (
          <div className="col-span-2 h-[400px]">
            <img
              src={imagenes[0].imagenUrl}
              alt="Imagen principal"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}

        <div className="grid grid-rows-2 gap-2 h-full">
          {imagenes.slice(1, 3).map((imagen, index) => (
            <div key={index} className="relative">
              <img
                src={imagen.imagenUrl}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {index === 1 && imagenes.length > 3 && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 text-white text-lg font-bold flex items-center justify-center rounded-lg cursor-pointer"
                  onClick={abrirModal}
                >
                  +{imagenes.length - 3} Más
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto p-4">
            <button
              onClick={cerrarModal}
              className="absolute top-1  right-1 text-orange-500 hover:text-gray-800 text-xl font-bold"
            >
             &times;
            </button>
            <div className="grid grid-cols-3 gap-4">
              {imagenes.map((imagen, index) => (
                <img
                  key={index}
                  src={imagen.imagenUrl}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaRestaurante;
