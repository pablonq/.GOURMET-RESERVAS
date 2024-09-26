import { useEffect, useState, useContext } from "react";
import Title from "../../../component/Title/Title";
import PlanoEditable from "../../../component/PlanoEditable/PlanoEditable";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

const EditarMapa = () => {
  const [mesas, setMesas] = useState();
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

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
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las mesas:", error);
    }
  }

  useEffect(() => {
    if (token) {
      getMesas();
    } else {
      navigate("/loginRestaurante");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, navigate]);

  return (
    <div className=" m-2">
      <Title text="Editar Mapa" />
      <div>
        <PlanoEditable mesas={mesas} setMesas={setMesas} />
      </div>
    </div>
  );
};

export default EditarMapa;
