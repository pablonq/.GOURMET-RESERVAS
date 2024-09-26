import Title from "../../../component/Title/Title";
import { useState, useEffect } from "react";
import { useContext } from "react";
import InputMesa from "../../../component/InputMesa/InputMesa";
import PlanoMesa from "../../../component/PlanoMesa/PlanoMesa";
import { AppContext } from "../../../Context/AppContext";

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

  const { user, token } = useContext(AppContext);
 // const navigate = useNavigate();
  const idRestaurante = user ? user.id : null;
  const [errors, setErrors] = useState({});
  const [numeroMesa, setNumeroMesa] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");


  // Función para obtener el último número de mesa
  const getUltimaMesaNumber = async () => {
    try {
      const res = await fetch(`/api/restaurantes/ultimaMesa/${idRestaurante}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error("Error al obtener el último número de mesa.");
        return;
      }

      const data = await res.json();
      //console.log("Datos de la respuesta:", data);

      if (data.ultimaMesa !== undefined) {
        setNumeroMesa(data.ultimaMesa + 1);
      } else {
        console.error("La propiedad 'ultimaMesa' no existe en la respuesta.");
      }
    } catch (error) {
      console.error("Error al obtener el último número de mesa:", error);
    }
  };

  useEffect(() => {
    if (idRestaurante) {
      getUltimaMesaNumber();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRestaurante]);

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
    if (!idRestaurante) {
      console.error("No se pudo obtener el ID del restaurante.");
      return;
    }

    const tiposMesas = [
      { cantidadPersonas: 2, cantidad: mesas.mesa2 },
      { cantidadPersonas: 4, cantidad: mesas.mesa4 },
      { cantidadPersonas: 6, cantidad: mesas.mesa6 },
      { cantidadPersonas: 8, cantidad: mesas.mesaMas6 },
    ];

    let mesasData = [];
    let temporalNumeroMesa = numeroMesa;
    for (const tipo of tiposMesas) {
      for (let i = 0; i < tipo.cantidad; i++) {
        mesasData.push({
          numeroMesa: temporalNumeroMesa,
          cantidadPersonas: tipo.cantidadPersonas,
          estado: 1,
          idRestaurante,
        });
        temporalNumeroMesa++;
      }
    }

    //console.log("Datos que se enviarán:", JSON.stringify(mesasData));
    try {
      const res = await fetch("/api/restaurantes/mesas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mesasData }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error en la respuesta:", data);
        setErrors(data.errors || { general: "Error al guardar los datos." });
        setSuccessMessage("")
      } else {
        console.log("Datos guardados exitosamente:", data);
        clearInput();
        setSuccessMessage("Mesas cargadas exitosamente");;
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setSuccessMessage("")
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto">
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

      {successMessage && <div className="text-green-600 p-4  text-center">{successMessage}</div>}
    </div>
  );
};

export default MapaMesas;
