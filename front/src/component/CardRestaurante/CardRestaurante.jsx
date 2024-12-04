/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EstrellaPuntuacion from "../EstrellaPuntuacion/EstrellaPuntuacion";
import MensajeError from "../MensajeError/MensajeError";

const CardRestaurante = ({
  imagenes = [],
  nombreRes,
  mesasDisponibles,
  direccion,
  tipo,
  calificacion,
  distancia,
  onView,
}) => {
  const settings = {
    dots: true,
    infinite:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="h-80 " onClick={onView}>
    <div
      className="relative max-w-56 h-full overflow-hidden rounded-md shadow-lg group flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 group border-b-4 border-b-[#DC493A] "
    >
      {imagenes.length > 0 ? (
        <Slider {...settings}>
          {imagenes.map((imagen, index) => (
            <div key={index}>
            <img
              src={imagen.imagenUrl}
              alt={`Imagen de ${nombreRes}`}
              className="w-full h-36 object-cove"
            />
            </div>
          ))}
        </Slider>
        
      ) : (
        <MensajeError mensaje="No hay imágenes disponibles" />
      )}
      <div className="text-[#242424] p-3 ">
        <h3 className="text-base font-bold text-center  mb-1 mt-1">
          {nombreRes}
        </h3>
        <p className="font-light text-end text-sm p-1">{tipo}</p>
        <p className="font-light text-end text-sm">{direccion}</p>
        {distancia && distancia !== Infinity && (
          <p className="font-light text-end text-xs text-blue-500">
            A {distancia.toFixed(1)} km de distancia
          </p>
        )}
        <div className="flex justify-end">
          <EstrellaPuntuacion calificacion={calificacion} />
        </div>
        {mesasDisponibles !== undefined && (
          <p className="text-center text-sm font-semibold mt-2">
            Mesas disponibles: {mesasDisponibles}
          </p>
        )}
        </div>
      </div>
    </div>
  );
};

export default CardRestaurante;
