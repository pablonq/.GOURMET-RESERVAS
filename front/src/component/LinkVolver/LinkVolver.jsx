import { Link } from 'react-router-dom';
import VolverImagen from "../../assets/volver.png"
// eslint-disable-next-line react/prop-types
const LinkVolver =({color,colorHover, ruta="/"}) => {
    return(
        <Link
        to={ruta}
        className={`flex items-center font-semibold my-4  ml-6 text-${color} hover:text-${colorHover} text-sm`}
      >
        <img src={VolverImagen} alt="Volver" className="w-6 h-6 mr-3" />
        <span>Volver</span>
      </Link>
    )
}
export default LinkVolver;