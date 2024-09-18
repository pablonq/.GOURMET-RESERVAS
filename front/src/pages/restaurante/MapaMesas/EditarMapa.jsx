import { useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import PlanoEditable from "../../../component/PlanoEditable/PlanoEditable";

const EditarMapa = () => {
  const [mesas, setMesas] = useState();

  async function getMesas() {
    const res = await fetch("/api/restaurantes/indexMesas");
    const data = await res.json();
    // console.log(data);

    if (res.ok) {
      setMesas(data || []);
    }
    console.log(data);
  }

  useEffect(() => {
    getMesas();
  }, []);

  return (
    <div className=" m-2">
      <Title text="Editar Mapa" />
      <div>
        <PlanoEditable mesas={mesas} setMesas={ setMesas}/>
      </div>
    </div>
  );
};

export default EditarMapa;
