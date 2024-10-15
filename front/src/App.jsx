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
import DashboardUsuario from "./pages/DashboardUsuario";
import DashboardRestaurante from "./pages/DashboardRestaurante";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import RutasProtegidas from "./component/RutasProtegidas/RutasProtegidas";
import RutasProtegidasUsuario from "./component/RutasProtegidas/RutasProtegidasUsuario";
import PanelRestaurante from "./pages/PanelRestaurante";
import PanelUsuario from "./pages/PanelUsuario";
import DiasHorarios from "./pages/restaurante/PerfilRestaurante/DiasHorarios";
import ReservarMesa from "./pages/usuario/ReservarMesa/ReservarMesa";
import DetalleReserva from "./pages/usuario/ReservarMesa/DetalleReserva";
import DetalleRestaurante from "./pages/DetalleRestaurante";
import ConfirmacionReserva from "./pages/usuario/ConfirmacionReserva/ConfirmacionReserva";

function App() {
  const { user } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/loginRestaurante"
            element={user ? <Home /> : <LoginRestaurante />}
          />
          <Route
            path="/loginUsuario"
            element={user ? <Home /> : <LoginUsuario />}
          />
          <Route
            path="/registroUsuario"
            element={user ? <Home /> : <RegistroUsuario />}
          />
          <Route
            path="/registroRestaurante"
            element={user ? <Home /> : <RegistroRestaurante />}
          />

          <Route path="/detalleRestaurante" element={<DetalleRestaurante />} />

          <Route
            path="/reservar"
            element={
              <RutasProtegidasUsuario>
                <ReservarMesa />
              </RutasProtegidasUsuario>
            }
          />
               <Route
              path="/detalleReserva"
              element={
                <RutasProtegidasUsuario>
                  <DetalleReserva />
                </RutasProtegidasUsuario>
              }
            />

          {/* Anidar aqui rutas hijas del panel usuario */}
          <Route path="/panelUsuario" element={<PanelUsuario />}>
            <Route index element={<DashboardUsuario />} />
            <Route path="dashboardUsuario" element={<DashboardUsuario />} />
            <Route path="confirmacionReserva" element={<ConfirmacionReserva/>} />
          </Route>

          {/* Anidar aqui rutas hijas del panel Restaurante*/}
          <Route
            path="/panelRestaurante"
            element={
              <RutasProtegidas>
                <PanelRestaurante />
              </RutasProtegidas>
            }
          >
            <Route index element={<DashboardRestaurante />} />
            <Route
              path="dashboardRestaurante"
              element={<DashboardRestaurante />}
            />
            <Route
              path="registerMesa"
              element={
                <RutasProtegidas>
                  <MapaMesas />
                </RutasProtegidas>
              }
            />
            <Route
              path="editarMapa"
              element={
                <RutasProtegidas>
                  <EditarMapa />
                </RutasProtegidas>
              }
            />
            <Route
              path="diasHorarios"
              element={
                <RutasProtegidas>
                  <DiasHorarios />
                </RutasProtegidas>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
