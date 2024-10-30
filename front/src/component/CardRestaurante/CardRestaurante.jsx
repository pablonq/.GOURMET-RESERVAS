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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    pauseOnHover: true,
  };

  
  return (
    <div className="h-96">
    <div className="relative max-w-64 h-full  overflow-hidden bg-gray-800 rounded-2xl shadow-2xl group flex flex-col">
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
        <h3 className="text-lg  font-bold text-center mt-2">{nombreRes}</h3>
        
        <p className="font-light text-end text-sm">{direccion}</p>
        <p className="font-light text-end text-sm">{tipo}</p>
        </div>
        <div className="flex justify-center mt-6 ">
          <button
            onClick={onView}
            className="text-white text-center rounded-md bg-slate-400 p-1 hover:bg-orange-400"
          >
           Reservar
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CardRestaurante;
