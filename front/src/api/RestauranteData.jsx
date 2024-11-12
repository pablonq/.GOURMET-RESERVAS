import { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function RestauranteData() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [restaurante, setRestaurante] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [direccion, setDireccion] = useState([]);
  const [direcciones, setDirecciones] = useState([]);
  const[duenio, setDuenio] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  const { user, token } = useContext(AppContext);
  async function getRestaurantes() {
    const res = await fetch(`/api/restaurantes/indexRestaurantes`);
    const data = await res.json();
    
    return res.ok ? data : Promise.reject("Error al obtener los restaurantes");
  }
  async function getDireccionesRestaurantes() {
    const res = await fetch(`/api/restaurantes/indexDireccionesRestaurantes`);
    const data = await res.json();
    
    return res.ok ? data : Promise.reject("Error al obtener las direcciones");
  }
  async function getDireccionRestaurante() {
    const res = await fetch(`/api/restaurantes/mostrarDireccionRestaurante/${user?.id}`);
    const data = await res.json();
    
    return res.ok ? data : Promise.reject("Error al obtener la direccion");
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
        const [restaurantesData, restauranteData, imagenesData, direccionData, duenioData, direccionesData] = await Promise.all([
          getRestaurantes(),
          getRestaurante(),
          getImagenes(),
          getDireccionRestaurante(),
          getDuenio(),
          getDireccionesRestaurantes(),
        ]);

        setRestaurantes(restaurantesData);
        setRestaurante(restauranteData);
        setImagenes(imagenesData);
        setDireccion(direccionData);
        setDuenio(duenioData);
        setDirecciones(direccionesData);
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };
    fetchData();
  }, []);

  return {  restaurantes, restaurante, imagenes, direccion, duenio, loading, direcciones };
}
