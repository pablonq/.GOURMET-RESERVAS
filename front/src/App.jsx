import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginUsuario from "./pages/Login/LoginUsuario";
import LoginRestaurante from "./pages/Login/LoginRestaurante";
import RegistroUsuario from "./pages/usuario/RegistroUsuario/RegistroUsuario";
import RegistroRestaurante from "./pages/restaurante/RegistroRestaurante/RegistroRestaurante";
import Layout from "./pages/Layout";
import MapaMesas from "./pages/restaurante/MapaMesas/MapaMesas";
import EditarMapa from "./pages/restaurante/MapaMesas/EditarMapa";
import DashboardUsuario from "./pages/dashboardUsuario";
import DashboardRestaurante from "./pages/dashboardRestaurante";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

function App() {
  const { user } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/registerMesa" element={<MapaMesas />} />
        <Route path="/editarMapa" element={<EditarMapa />} />
        <Route path="/loginResturante" element={user?<Home/>:<LoginRestaurante />} />
        <Route path="/loginUsuario" element={user?<Home/>:<LoginUsuario />} />
        <Route path="/registroUsuario" element={user?<Home/>:<RegistroUsuario />} />
        <Route path="/registroRestaurante" element={user?<Home/>:<RegistroRestaurante />} />
        <Route
          path="/dashboardRestaurante"
          element={<DashboardRestaurante />}
        />
        <Route path="/dashboardUsuario" element={<DashboardUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
