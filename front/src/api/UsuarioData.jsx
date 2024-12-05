
import { AppContext } from "../Context/AppContext";
import { useState, useEffect, useContext } from 'react'

export default function UsuarioData() {
  const [direccionUsuario, setDireccionUsuario] = useState([]);
  const { user, token } = useContext(AppContext);
  const [usuario, setUsuario] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

  async function getUsuario() {
    try {
      const res = await fetch(`/api/usuarios/traerUsuario/${user?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,  
          "Content-Type": "application/json"
        }
      });
      
      const data = await res.json();

      if (res.ok) {
        setUsuario(data);
        
      } else {
        console.error("Error al obtener el usuario:", data);
        setError(data.errors || "Error desconocido");  
      }
    } catch (err) {
      console.error("Error de red:", err);
      setError("Error de conexión");  
    }
  }
  async function getDireccionUsuario() {
    const res = await fetch(`/api/usuarios/indexDireccionUsuario/${user?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
  
    const data = await res.json();
  
    if (res.ok) {
      setDireccionUsuario(data);
    }
    
  }
  
  useEffect(() => {
    /* getCards();
    getImagenes(); */
    getDireccionUsuario();
    getUsuario();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    direccionUsuario, 
    usuario}
}

