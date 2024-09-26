import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* import InputDiasAtencion from "../../../component/Inputs/InputDiasAtencion"; */
import { uploadFileRestaurantes } from "../../../firebase/config";

export default function RegistroRestaurante() {
  const [formData, setFormData] = useState({
    nombreRes: "",
    direccion: "",
    descripcion: "",
    tipo: "",
    telefono: "",
    email: "",
    contrasenia: "",
    contrasenia_confirmation: "",
    capacidadTotal: "",
    /* diasAtencion: [],
    horaApertura: "",
    horaCierre: "", */
    imagenUrl: null,
    /* latitud:"",
    longitud:"", */
    aceptaEventos: "",
  });

  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // Indicador de subida de archivo
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsUploading(true); // Establecer el indicador de subida de archivo en verdadero

    try {
      let imagenUrl = formData.imagenUrl;
      if (file) {
        imagenUrl = await uploadFileRestaurantes(file); // Inicializar la URL de la imagen con el valor actual del estado
        console.log(imagenUrl);
        setFormData((prev) => ({ ...prev, imagenUrl }));
      }

      const data = {
        nombreRes: formData.nombreRes,
        direccion: formData.direccion,
        descripcion: formData.descripcion,
        tipo: formData.tipo,
        telefono: formData.telefono,
        email: formData.email,
        contrasenia: formData.contrasenia,
        contrasenia_confirmation: formData.contrasenia_confirmation,
        capacidadTotal: formData.capacidadTotal,
        imagenUrl: imagenUrl,
        aceptaEventos: formData.aceptaEventos,
      };

      /* try { */
      const res = await fetch("/api/restaurantes/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Asegúrate de que el servidor sepa que estás enviando JSON
        },
        body: JSON.stringify(data),
      });

      /* if (!res.ok)  */
      const result = await res.json();
      console.log(result);
      if (data.errors) {
        setErrors(data.errors);
        console.log(data);
      } else {
        console.log("Registro exitoso:", result);
        navigate("/LoginRestaurante");
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error);
    } finally {
      setIsUploading(false); // Restablecer el indicador de subida de archivo en falso
    }
  };

  return (
    <div>
      <h1 className="title">Registre su Restaurante</h1>:
      <form onSubmit={handleRegister} className="w-1/2 mx-auto space-y-6">
        <div>
          <input
            type="text"
            placeholder="Nombre del Restaurante"
            value={formData.nombreRes || ""}
            onChange={(e) =>
              setFormData({ ...formData, nombreRes: e.target.value })
            }
          />
          {errors.nombreRes && <p className="error">{errors.nombreRes[0]}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Direccion del Restaurante"
            value={formData.direccion || ""}
            onChange={(e) =>
              setFormData({ ...formData, direccion: e.target.value })
            }
          />
          {errors.direccion && <p className="error">{errors.direccion[0]}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Descripcion del Restaurante"
            value={formData.descripcion || ""}
            onChange={(e) =>
              setFormData({ ...formData, descripcion: e.target.value })
            }
          />
          {errors.descripcion && (
            <p className="error">{errors.descripcion[0]}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Tipo de Restaurante (Ejemplo: Parrilla, Comida Rapida, etc.)"
            value={formData.tipo || ""}
            onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
          />
          {errors.tipo && <p className="error">{errors.tipo[0]}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Telefono"
            value={formData.telefono || ""}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
          />
          {errors.telefono && <p className="error">{errors.telefono[0]}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            value={formData.email || ""}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <p className="error">{errors.email[0]}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={formData.contrasenia || ""}
            onChange={(e) =>
              setFormData({ ...formData, contrasenia: e.target.value })
            }
          />
          {errors.contrasenia && (
            <p className="error">{errors.contrasenia[0]}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.contrasenia_confirmation || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                contrasenia_confirmation: e.target.value,
              })
            }
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Cantidad de Personas que puede atender el Restaurante"
            value={formData.capacidadTotal || ""}
            onChange={(e) =>
              setFormData({ ...formData, capacidadTotal: e.target.value })
            }
          />
          {errors.capacidadTotal && (
            <p className="error">{errors.capacidadTotal[0]}</p>
          )}
        </div>

        {/*  <InputDiasAtencion 
        onChange={handleDiasAtencionChange}
        value={formData.diasAtencion}
      />  */}

        {/* <div>
          <input
            type="time"
            name="horaApertura"
            placeholder="Hora de Apertura"
            value={formData.horaApertura || ""}
            onChange={(e) =>
              setFormData({ ...formData, horaApertura: e.target.value })
            }
          />
          {errors.horaApertura && <p className="error">{errors.horaApertura[0]}</p>}
        </div>

        <div>
          <input
            type="time"
            name="horaCierre"
            placeholder="Hora de Cierre"
            value={formData.horaCierre || ""}
            onChange={(e) =>
              setFormData({ ...formData, horaCierre: e.target.value })
            }
          />
          {errors.horaCierre && <p className="error">{errors.horaCierre[0]}</p>}
        </div> */}

        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {errors.imagenUrl && <p className="error">{errors.imagenUrl[0]}</p>}
        </div>
        {/* <div>
          <input
            type="number"
            name="latitud"
            placeholder="Latitud"
            value={formData.latitud || ""}
            step="any"
            onChange={(e) =>
              setFormData({ ...formData, latitud: e.target.value })
            }
          />
          {errors.latitud && <p className="error">{errors.latitud[0]}</p>}
        </div>

        <div>
          <input
            type="number"
            name="longitud"
            placeholder="Longitud"
            value={formData.longitud || ""}
            step="any"
            onChange={(e) =>
              setFormData({ ...formData, longitud: e.target.value })
            }
          />
          {errors.longitud && <p className="error">{errors.longitud[0]}</p>}
        </div> */}

        <div>
          <label>¿Acepta eventos?</label>
          <div>
            <input
              type="radio"
              id="aceptaSi"
              name="aceptaEventos"
              value="si"
              checked={formData.aceptaEventos === "si"}
              onChange={(e) =>
                setFormData({ ...formData, aceptaEventos: e.target.value })
              }
            />
            <label htmlFor="aceptaSi">Sí</label>

            <input
              type="radio"
              id="aceptaNo"
              name="aceptaEventos"
              value="no"
              checked={formData.aceptaEventos === "no"}
              onChange={(e) =>
                setFormData({ ...formData, aceptaEventos: e.target.value })
              }
            />
            <label htmlFor="aceptaNo">No</label>
          </div>
          {errors.aceptaEventos && (
            <p className="error">{errors.aceptaEventos[0]}</p>
          )}
        </div>
        <button className="primary-btn" disabled={isUploading}>
          {isUploading ? "Guardando....." : "Registrar"}
        </button>
      </form>
    </div>
  );
}
