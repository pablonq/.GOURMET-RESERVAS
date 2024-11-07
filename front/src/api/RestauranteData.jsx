import { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function RestauranteData() {
  const [restaurante, setRestaurante] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [direccion, setDireccion] = useState([]);
  const[duenio, setDuenio] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  const { user, token } = useContext(AppContext);

  async function getDireccionRestaurante() {
    const res = await fetch(`/api/restaurantes/mostrarDireccionRestaurante/${user?.id}`);
    const data = await res.json();
    return res.ok ? data : Promise.reject("Error al obtener las direcciones");
  }

  async function getRestaurante() {
    const res = await fetch(`/api/restaurantes/mostrarRestaurante/${user?.id}`);
    const data = await res.json();
    return res.ok ? data : Promise.reject("Error al obtener el restaurante");
  }

  async function getImagenes() {
    const res = await fetch("/api/restaurantes/indexImagenesRestaurante");
    const data = await res.json();
    return res.ok ? data : Promise.reject("Error al obtener las imágenes");
  }
  async function getDuenio() {
    const res = await fetch(`/api/restaurantes/mostrarDuenio/${user?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
    const data = await res.json();
    
    return res.ok ? data : Promise.reject("Error al obtener el duenio");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [restauranteData, imagenesData, direccionData, duenioData] = await Promise.all([
          getRestaurante(),
          getImagenes(),
          getDireccionRestaurante(),
          getDuenio()
        ]);
        setRestaurante(restauranteData);
        setImagenes(imagenesData);
        setDireccion(direccionData);
        setDuenio(duenioData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };
    fetchData();
  }, []);

  return { restaurante, imagenes, direccion, duenio, loading };
}
