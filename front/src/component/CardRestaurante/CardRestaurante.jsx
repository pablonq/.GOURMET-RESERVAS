/* eslint-disable react/prop-types */
import Slider from "react-slick"; // libreria para carrusel
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
    <div className="h-80">
      <div className="relative max-w-60 h-full  overflow-hidden rounded-2xl shadow-2xl group flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        {/* Carrusel de imágenes */}
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
        <div className=" text-slate-950 p-3">
          <h3 className="text-base  font-bold text-center mt-2">{nombreRes}</h3>

          <p className="font-light text-end text-xs p-1">{tipo}</p>
          <p className="font-light text-end text-xs">{direccion}</p>
          <div className="flex justify-end">
            <EstrellaPuntuacion calificacion={calificacion} />
          </div>
          {mesasDisponibles !== undefined && (
            <p className="text-center text-sm font-semibold mt-2">
              Mesas disponibles: {mesasDisponibles}
            </p>
          )}
        </div>
        <div className="flex justify-center mt-1 ">
          <button
            onClick={onView}
            className="text-white text-center text-sm rounded-md bg-gray-800 p-1 hover:bg-orange-400"
          >
            Reservar
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CardRestaurante;
