import { useEffect, useState, useContext } from "react";
import Title from "../../../component/Title/Title";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import PlanoTiempoReal from "../../../component/PlanoEditable/PlanoTiempoReal";

const EditarMapa = () => {
  const [mesas, setMesas] = useState();
  const { token, user } = useContext(AppContext);
  const navigate = useNavigate();
  const [mesasReservadas, setMesasReservadas] = useState([]);

  async function getMesas() {
    try {
      const res = await fetch("/api/restaurantes/indexMesas", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          navigate("/loginRestaurante");
        } else {
          const data = await res.json();
          console.error(data.message || "Error al obtener las mesas.");
        }
        return;
      }
      const data = await res.json();
      setMesas(data || []);
    } catch (error) {
      console.error("Error al obtener las mesas:", error);
    }
  }

  const getMesasReservadas = async () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const currentTime = new Date().toLocaleTimeString("it-IT");
    const idRestaurante = user.id;

    try {
      const res = await fetch(
        `/api/restaurantes/mesasDisponibles?fecha=${currentDate}&hora=${currentTime}&idRestaurante=${idRestaurante}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const data = await res.json();
        console.error(data.message || "Error al obtener mesas reservadas.");
        return;
      }

      const data = await res.json();
      setMesasReservadas(data || []);
    } catch (error) {
      console.error("Error al obtener mesas reservadas:", error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      getMesas();
      getMesasReservadas();
    } else {
      navigate("/loginRestaurante");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, navigate]);

  return (
    <div className=" m-2">
      <Title text="Ocupar o Habilitar mesas" />
      <div>
        <PlanoTiempoReal
          mesas={mesas}
          setMesas={setMesas}
          mesasReservadas={mesasReservadas}
        />
      </div>
    </div>
  );
};

export default EditarMapa;
