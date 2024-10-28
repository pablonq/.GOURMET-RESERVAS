//import { useContext } from "react";
import { Outlet } from "react-router-dom";
import SiderLink from "../component/SiderLink/SiderLink";
//import { AppContext } from "../Context/AppContext";

const PanelUsuario = () => {
  //const { user } = useContext(AppContext);

  return (
    <div className="flex">
      <div className="w-1/5 min-h-screen border-r-2 border-slate-700 shadow-md shadow-slate-700 ">
        <nav className=" flex flex-col justify-start  ">
       
          <ul className="space-y-4">
            <SiderLink
              to={"/panelUsuario"}
              text={"Buscar restaurantes"}
            />
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4 ml-4">
        <Outlet />
      </div>
    </div>
  );
};

export default PanelUsuario;
