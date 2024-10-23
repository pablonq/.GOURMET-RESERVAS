/* eslint-disable react/prop-types */
import Slider from "react-slick"; // libreria para carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CardRestaurante = ({
  imagenes = [],
  nombreRes,
  
  direccion,
  tipo,
  
  onView,

}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    pauseOnHover: true,
  };

  
  return (
    <div className="relative max-w-64 h-auto overflow-hidden bg-gray-800 rounded-2xl shadow-2xl group">
      {/* Carrusel de imágenes */}
      {imagenes.length > 0 ? (
        <Slider {...settings}>
          {imagenes.map((imagen, index) => (
            <div key={index}>
              <img
                src={imagen.imagenUrl}
                alt={`Imagen de ${nombreRes}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-white text-center">No hay imágenes disponibles</p>
      )}
      <div className=" text-white p-3">
        <h3 className="text-lg  font-bold text-center mb-1">{nombreRes}</h3>
        
        <p className="font-light text-end text-sm">{direccion}</p>
        <p className="font-light text-end text-sm">{tipo}</p>
        <div className="flex justify-center  p-2">
          <button
            onClick={onView}
            className="text-white text-center rounded-md bg-slate-400 p-2 hover:bg-orange-400"
          >
           Reservar
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CardRestaurante;
