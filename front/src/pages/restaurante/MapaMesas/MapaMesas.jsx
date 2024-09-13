import Title from "../../../component/Title/Title";
import { useState } from "react";
import InputMesa from "../../../component/InputMesa/InputMesa";
import PlanoMesa from "../../../component/PlanoMesa/PlanoMesa";

/**
 * crear ,  Visualizar gráficamente de la distribución de las mesas . y editar  disponibilidad?.
 */

const MapaMesas = () => {
  const [mesa2, setMesa2] = useState("");
  const [mesa4, setMesa4] = useState("");
  const [mesa6, setMesa6] = useState("");
  const [mesaMas6, setMesaMas6] = useState("");

  const numMesa2 = parseInt(mesa2, 10) || 0;
  const numMesa4 = parseInt(mesa4, 10) || 0;
  const numMesa6 = parseInt(mesa6, 10) || 0;
  const numMesaMas6 = parseInt(mesaMas6, 10) || 0;

  const handleGuardar = () => {
    console.log({
      mesa2,
      mesa4,
      mesa6,
      mesaMas6,
    });
  };

  return (
    <div className="">
      <Title text="Mapa de Mesas" />
      <div className=" flex ">
        <div className=" flex flex-col w-1/3 m-2 bg-gray-400">
         <h1 className=" text-center font-semibold"> Ingrese la cantidad de mesa según correspona</h1>
          <InputMesa
            id="mesa2"
            value={mesa2}
            onChange={(e) => setMesa2(e.target.value)}
            placeholder="Mesa 2 personas"
          />
          <InputMesa
            id="mesa4"
            value={mesa4}
            onChange={(e) => setMesa4(e.target.value)}
            placeholder="Mesa 4 personas"
          />
          <InputMesa
            id="mesa6"
            value={mesa6}
            onChange={(e) => setMesa6(e.target.value)}
            placeholder="Mesa 6 personas"
          />
          <InputMesa
            id="mesaMas6"
            value={mesaMas6}
            onChange={(e) => setMesaMas6(e.target.value)}
            placeholder="Mesa +6 personas"
          />

          <button
            className="w-28 m-3 rounded-md p-2 text-center text-cyan-50  bg-neutral-950 self-center "
            onClick={handleGuardar}
          >
            Guardar
          </button>
        </div>
        <PlanoMesa
          mesas2={numMesa2}
          mesas4={numMesa4}
          mesas6={numMesa6}
          mesasMas6={numMesaMas6}
        />
      </div>
    </div>
  );
};

export default MapaMesas;
