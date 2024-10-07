 // Función para obtener TODAS la mesas exixtente de un restuaurante
 export const obtenerMesasExistentes = async (token, setMesasExistentes) => {
  try {
    const res = await fetch(`/api/restaurantes/indexMesas`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("Error al obtener las mesas existentes.");
      return;
    }

    const data = await res.json();
    setMesasExistentes(data || []);
  } catch (error) {
    console.error("Error al obtener las mesas:", error);
  }
};

