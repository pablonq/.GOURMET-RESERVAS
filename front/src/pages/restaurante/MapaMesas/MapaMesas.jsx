import Title from "../../../component/Title/Title";
import { useState } from "react";
import InputMesa from "../../../component/InputMesa/InputMesa";
import PlanoMesa from "../../../component/PlanoMesa/PlanoMesa";
import { useNavigate } from "react-router-dom";

/**
 * crear ,  Visualizar gráficamente de la distribución de las mesas . y editar  disponibilidad?.
 */

const MapaMesas = () => {
  const [mesas, setMesas] = useState({
    mesa2: "",
    mesa4: "",
    mesa6: "",
    mesaMas6: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMesas((prevMesas) => ({
      ...prevMesas,
      [id]: value,
    }));
  };

  const clearInput = () => {
    setMesas({
      mesa2: "",
      mesa4: "",
      mesa6: "",
      mesaMas6: "",
    });
  };

  const handleGuardar = async (e) => {
    e.preventDefault();

    // console.log(mesas)
    // console.log(mesas.mesa2);

    const idRestaurante = 1; //ver

    const tiposMesas = [
      { cantidadPersonas: 2, cantidad: mesas.mesa2 },
      { cantidadPersonas: 4, cantidad: mesas.mesa4 },
      { cantidadPersonas: 6, cantidad: mesas.mesa6 },
      { cantidadPersonas: 8, cantidad: mesas.mesaMas6 },
    ];

    let numeroMesa = 1;
    let mesasData = [];

    for (const tipo of tiposMesas) {
      for (let i = 0; i < tipo.cantidad; i++) {
        mesasData.push({
          numeroMesa: numeroMesa++,
          cantidadPersonas: tipo.cantidadPersonas,
          estado: 1,
          idRestaurante,
        });
      }
    }

    //console.log("Datos que se enviarán:", JSON.stringify(mesasData));
    try {
      const res = await fetch("/api/restaurantes/mesas", {
        method: "POST",
        body: JSON.stringify({ mesasData }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error en la respuesta:", data);
        setErrors(data.errors || { general: "Error al guardar los datos." });
      } else {
        console.log("Datos guardados exitosamente:", data);
        clearInput();
        navigate("/editarMapa");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="">
      <Title text="Mapa de Mesas" />

      <div className="flex">
        <form onSubmit={handleGuardar}>
          <div className=" flex flex-col w-2/3 m-2 rounded-md  bg-gray-400">
            <h1 className=" text-center font-semibold">
              Ingrese la cantidad de mesa según correspona
            </h1>
            <InputMesa
              id="mesa2"
              value={mesas.mesa2}
              onChange={handleChange}
              placeholder="Mesa 2 personas"
            />
            <InputMesa
              id="mesa4"
              value={mesas.mesa4}
              onChange={handleChange}
              placeholder="Mesa 4 personas"
            />
            <InputMesa
              id="mesa6"
              value={mesas.mesa6}
              onChange={handleChange}
              placeholder="Mesa 6 personas"
            />
            <InputMesa
              id="mesaMas6"
              value={mesas.mesaMas6}
              onChange={handleChange}
              placeholder="Mesa +6 personas"
            />

            <button className="w-28 m-3 rounded-md p-2 text-center text-cyan-50  bg-neutral-950 self-center ">
              Guardar
            </button>
          </div>
        </form>
        <PlanoMesa
          mesas2={mesas.mesa2}
          mesas4={mesas.mesa4}
          mesas6={mesas.mesa6}
          mesasMas6={mesas.mesaMas6}
        />
      </div>
      <p className="error">{errors.general}</p>
    </div>
  );
};

export default MapaMesas;
