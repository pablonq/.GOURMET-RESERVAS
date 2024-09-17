import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import LoginUsuario from './pages/Login/LoginUsuario';
import LoginRestaurante from './pages/Login/LoginRestaurante';
import RegistroUsuario from './pages/usuario/RegistroUsuario/RegistroUsuario'
import Layout from './pages/Layout';
import RegistroRestaurante from './pages/restaurante/RegistroRestaurante/RegistroRestaurante';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} /> 
      <Route path='/loginResturante' element={<LoginRestaurante />} />
      <Route path="/registroRestaurante" element={<RegistroRestaurante />} /> 
      <Route path='/loginUsuario' element={<LoginUsuario />} />
      <Route path="/registroUsuario" element={<RegistroUsuario />} />


    </Routes>
      
    </BrowserRouter> 
  )
}

export default App;
