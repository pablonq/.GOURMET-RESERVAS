/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const SiderLink = ({ to, text }) => {
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
          {text}
        </Link>
      </li>
    </>
  );
};

export default SiderLink;
