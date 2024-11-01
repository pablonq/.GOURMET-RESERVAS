import Title from "../../../component/Title/Title";
import { useState, useEffect } from "react";
import { useContext } from "react";
import InputMesa from "../../../component/InputMesa/InputMesa";
import PlanoMesa from "../../../component/PlanoMesa/PlanoMesa";
import { AppContext } from "../../../Context/AppContext";
import { obtenerMesasExistentes } from "../../../api/mesasAPI";
import PlanoEditable from "../../../component/PlanoEditable/PlanoEditable";

/**
 * cargar mesas para la creacion del plano editable.
 */

const MapaMesas = () => {
  const [mesas, setMesas] = useState({
    mesa2: "",
    mesa4: "",
    mesa6: "",
    mesaMas6: "",
  });

  const { user, token } = useContext(AppContext);
  const idRestaurante = user ? user.id : null;
  const [errors, setErrors] = useState({});
  const [numeroMesa, setNumeroMesa] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [mesasExistentes, setMesasExistentes] = useState([]);
  const [mesasEditable, setMesasEditable] = useState();

  const CAPACIDAD_MAXIMA = user?.capacidadTotal;

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
        const data = await res.json();
        console.error(data.message || "Error al obtener las mesas.");
      }
      const data = await res.json();
      setMesasEditable(data || []);
    } catch (error) {
      console.error("Error al obtener las mesas:", error);
    }
  }

  useEffect(() => {
    if (idRestaurante) {
      getUltimaMesaNumber();
      obtenerMesasExistentes(token, setMesasExistentes);
      getMesas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRestaurante, token]);

  const calcularTotalPersonasExistentes = () => {
    console.log("Mesas existentes:", mesasExistentes);
    let total = 0;
    for (let i = 0; i < mesasExistentes.length; i++) {
      total += mesasExistentes[i].cantidadPersonas || 0;
    }
    return total;
  };

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
    let totalPersonas = calcularTotalPersonasExistentes();
    let temporalNumeroMesa = numeroMesa;

    for (const tipo of tiposMesas) {
      totalPersonas += tipo.cantidadPersonas * tipo.cantidad;
      for (let i = 0; i < tipo.cantidad; i++) {
        mesasData.push({
          numeroMesa: temporalNumeroMesa,
          cantidadPersonas: tipo.cantidadPersonas,
          estado: 1,
          idRestaurante,
        });
        temporalNumeroMesa++;
      }
      if (totalPersonas > CAPACIDAD_MAXIMA) {
        setErrors({
          general: `La capacidad máxima de su restaurante es de ${CAPACIDAD_MAXIMA} personas. Puede eliminar mesas en Administrar mesas o aumentar su capacidad maxima`,
        });
        clearInput();
        // console.log("supera la cantidad de mesas");
        return;
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
        setSuccessMessage("Error al cargar las mesas");
      } else {
        // console.log("Datos guardados exitosamente:", data);
        setMesasEditable((prevMesas) => [...prevMesas, ...data]);
        getMesas();
        clearInput();
        setSuccessMessage("Mesas cargadas exitosamente");
        // obtenerMesasExistentes();
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <Title text="Cargar mesas" />

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
      {errors.general && (
        <div className="p-5 bg-amber-200 rounded-md border-2 border-red-600">
          <p className="error text-center font-semibold">{errors.general}</p>
        </div>
      )}
      {successMessage && (
        <div className="flex justify-center">
          <div className="text-white bg-green-700 p-1 w-1/3 rounded-md text-center">
            {successMessage}
          </div>
        </div>
      )}

      <div className=" m-2">
        <Title text="Editar Mapa mesas existentes" />
        <div>
          <PlanoEditable mesas={mesasEditable} setMesas={setMesasEditable} />
        </div>
      </div>
    </div>
  );
};

export default MapaMesas;
