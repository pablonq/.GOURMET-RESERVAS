/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const SiderLink = ({ to, text, icono }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <>
      <li
        className={`${
          isActive ? "bg-white text-[#DC493A]" : "text-white"
        } rounded-l-full hover:bg-[#DC493A] `}
      >
        <Link to={to} className="flex w-full space-x-2 text-sm m-2 p-1 hover:text-white items-center">
          <div>{icono}</div>
          <div>{text}</div>
        </Link>
      </li>
    </>
  );
};

export default SiderLink;
