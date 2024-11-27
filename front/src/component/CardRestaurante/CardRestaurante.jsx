/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EstrellaPuntuacion from "../EstrellaPuntuacion/EstrellaPuntuacion";

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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="h-80" onClick={onView}>
      <div className="relative max-w-60 h-full overflow-hidden rounded-2xl shadow-2xl group flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        {imagenes.length > 0 ? (
          <Slider {...settings}>
            {imagenes.map((imagen, index) => (
              <div key={index}>
                <img
                  src={imagen.imagenUrl}
                  alt={`Imagen de ${nombreRes}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-slate-950 text-center">
            No hay imágenes disponibles
          </p>
        )}
        <div className="text-slate-950 p-3 justify-between" >
          <h3 className="line-clamp-2 text-base font-bold text-center mx-0 mt-1">{nombreRes}</h3>
          <p className="font-light text-end text-xs p-1">{tipo}</p>
          <p className="font-light text-end text-xs">{direccion}</p>
          {distancia && distancia !== Infinity && (
            <p className="font-light text-end text-xs text-blue-600">
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