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
import EditarMenu from "./pages/restaurante/EditarMenu/EditarMenu";
import PerfilRestaurante from "./pages/restaurante/PerfilRestaurante/PerfilRestaurante";
import MostrarMenu from "./pages/restaurante/EditarMenu/MostrarMenu";
import CrearMenu from "./pages/restaurante/EditarMenu/CrearMenu";
import ActualizarMenu from "./pages/restaurante/EditarMenu/ActualizarMenu";
import InfoReserva from "./pages/usuario/MisReservas/InfoReserva";
import AdministrarPlatos from "./pages/restaurante/AdministrarPlatos/AdministrarPlatos";
import CrearPlato from "./pages/restaurante/AdministrarPlatos/CrearPlato";
import MostrarPlato from "./pages/restaurante/AdministrarPlatos/MostrarPlato";
import EditarPlato from "./pages/restaurante/AdministrarPlatos/EditarPlato";

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

          {/* <Route
            path="/detalleRestaurante/:idRestaurante"
            element={
              <RutasProtegidasUsuario>

                <DetalleRestaurante />

              </RutasProtegidasUsuario>
            }
          /> */}

          <Route
            path="/reservar/:idRestaurante"
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

          <Route path="/infoReserva/:id" element={<InfoReserva />} />

          {/* Anidar aqui rutas hijas del panel usuario */}
          <Route
            path="/panelUsuario"
            element={
              <RutasProtegidasUsuario>
                <PanelUsuario />
              </RutasProtegidasUsuario>
            }
          >
            <Route index element={<DashboardUsuario />} />
            <Route path="dashboardUsuario" element={<DashboardUsuario />} />
            <Route path="dashboardUsuario/detalleRestaurante/:idRestaurante" element={<DetalleRestaurante />} />
            <Route path="confirmacionReserva" element={<ConfirmacionReserva />} />
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
            <Route index
              element={
                <DashboardRestaurante />} />
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
            <Route
              path="editarMenu"
              element={
                <RutasProtegidas>
                  <EditarMenu />
                </RutasProtegidas>
              }
            />
            <Route
              path="crearMenu"
              element={
                <RutasProtegidas>
                  <CrearMenu />
                </RutasProtegidas>
              }
            />
            <Route
              path="actualizarMenu/:menuId"
              element={
                <RutasProtegidas>
                  <ActualizarMenu />
                </RutasProtegidas>
              }
            />
            <Route
              path="mostrarMenu/:menuId"
              element={
                <RutasProtegidas>
                  <MostrarMenu />
                </RutasProtegidas>
              }
            />
            <Route
              path="administrarPlatos"
              element={
                <RutasProtegidas>
                  <AdministrarPlatos />
                </RutasProtegidas>
              }
            />
            <Route
              path="crearPlato"
              element={
                <RutasProtegidas>
                  <CrearPlato />
                </RutasProtegidas>
              }
            />
            <Route
              path="mostrarPlato/:platoId"
              element={
                <RutasProtegidas>
                  <MostrarPlato />
                </RutasProtegidas>
              }
            />
            <Route
              path="editarPlato/:platoId"
              element={
                <RutasProtegidas>
                  <EditarPlato />
                </RutasProtegidas>
              }
            />
            <Route
              path="perfilRestaurante"
              element={
                <RutasProtegidas>
                  <PerfilRestaurante />
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
