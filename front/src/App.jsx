import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginUsuario from "./pages/Login/LoginUsuario";
import LoginRestaurante from "./pages/Login/LoginRestaurante";
import RegistroUsuario from "./pages/usuario/RegistroUsuario/RegistroUsuario";
import Layout from "./pages/Layout";
import MapaMesas from "./pages/restaurante/MapaMesas/MapaMesas";
import EditarMapa from "./pages/restaurante/MapaMesas/EditarMapa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/registerMesa" element={<MapaMesas />} />
        <Route path="/editarMapa" element={<EditarMapa />} />
        <Route path="/loginResturante" element={<LoginRestaurante />} />
        <Route path="/loginUsuario" element={<LoginUsuario />} />
        <Route path="/registroUsuario" element={<RegistroUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
