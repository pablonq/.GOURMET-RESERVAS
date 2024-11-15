/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const SiderLink = ({ to, text, icono }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <>
      <li>
        <Link
          to={to}
          className={`hover:text-blue-300 ${
            isActive ? "text-orange-400" : "text-white"
          }`}
        >
          <div className="flex space-x-2 items-center">
           <div>{icono}</div> 
           <div>{text}</div> 
          </div>
        </Link>
      </li>
    </>
  );
};

export default SiderLink;
