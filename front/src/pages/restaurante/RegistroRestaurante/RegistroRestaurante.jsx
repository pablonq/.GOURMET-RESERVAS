import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";

export default function RegistroRestaurante() {
  const [formData, setFormData] = useState({
    // Datos del Restaurante
    nombreRes: "",
    direccion: "",
    descripcion: "",
    tipo: "",
    telefono: "",
    email: "",
    contrasenia: "",
    contrasenia_confirmation: "",
    capacidadTotal: "",
    imagenUrl: null,
    aceptaEventos: "",

    // Datos del Dueño
    nombreDuenio: "",
    apellidoDuenio: "",
    fechaNacimientoDuenio: "",
    dniDuenio: "",
    emailDuenio: "",
    telefonoDuenio: "",
    ciudadDuenio: ""
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
        // Datos del Restaurante
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

        // Datos del Dueño
        nombreDuenio: formData.nombreDuenio,
        apellidoDuenio: formData.apellidoDuenio,
        fechaNacimientoDuenio: formData.fechaNacimientoDuenio,
        dniDuenio: formData.dniDuenio,
        emailDuenio: formData.emailDuenio,
        telefonoDuenio: formData.telefonoDuenio,
        ciudadDuenio: formData.ciudadDuenio
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
      if (result.errors) {
        setErrors(result.errors);
        console.log(result);
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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Registro de Restaurante</h1>

      <form onSubmit={handleRegister} className="space-y-6">
        <div className="flex justify-between space-x-8">
          {/* Sección de Datos del Restaurante */}
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Datos del Restaurante</h2>

            <div className="mb-4">
              <input
              required
                type="text"
                className="input-style"
                placeholder="Nombre del Restaurante"
                value={formData.nombreRes || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nombreRes: e.target.value })
                }
              />
              {errors.nombreRes && <p className="error">{errors.nombreRes[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Dirección del Restaurante"
                value={formData.direccion || ""}
                onChange={(e) =>
                  setFormData({ ...formData, direccion: e.target.value })
                }
              />
              {errors.direccion && <p className="error">{errors.direccion[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Descripción del Restaurante"
                value={formData.descripcion || ""}
                onChange={(e) =>
                  setFormData({ ...formData, descripcion: e.target.value })
                }
              />
              {errors.descripcion && <p className="error">{errors.descripcion[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Tipo de Restaurante"
                value={formData.tipo || ""}
                onChange={(e) =>
                  setFormData({ ...formData, tipo: e.target.value })
                }
              />
              {errors.tipo && <p className="error">{errors.tipo[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Teléfono del Restaurante"
                value={formData.telefono || ""}
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
              />
              {errors.telefono && <p className="error">{errors.telefono[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="email"
                className="input-style"
                placeholder="Email del Restaurante"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && <p className="error">{errors.email[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="password"
                className="input-style"
                placeholder="Contraseña"
                value={formData.contrasenia || ""}
                onChange={(e) =>
                  setFormData({ ...formData, contrasenia: e.target.value })
                }
              />
              {errors.contrasenia && <p className="error">{errors.contrasenia[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="password"
                className="input-style"
                placeholder="Confirmar Contraseña"
                value={formData.contrasenia_confirmation || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contrasenia_confirmation: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Capacidad Total"
                value={formData.capacidadTotal || ""}
                onChange={(e) =>
                  setFormData({ ...formData, capacidadTotal: e.target.value })
                }
              />
              {errors.capacidadTotal && <p className="error">{errors.capacidadTotal[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                type="file"
                className="block w-full text-sm text-gray-500"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div className="mb-4">
              <label className="mr-4">¿Acepta eventos?</label>
              <div className="inline-flex items-center space-x-4">
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
                <label htmlFor="aceptaSi" className="mr-4">Sí</label>

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
            </div>
          </div>

          {/* Sección de Datos del Dueño */}
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Datos del Dueño</h2>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Nombre del Dueño"
                value={formData.nombreDuenio || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nombreDuenio: e.target.value })
                }
              />
              {errors.nombreDuenio && <p className="error">{errors.nombreDuenio[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Apellido del Dueño"
                value={formData.apellidoDuenio || ""}
                onChange={(e) =>
                  setFormData({ ...formData, apellidoDuenio: e.target.value })
                }
              />
              {errors.apellidoDuenio && <p className="error">{errors.apellidoDuenio[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="date"
                className="input-style"
                placeholder="Fecha de Nacimiento"
                value={formData.fechaNacimientoDuenio || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fechaNacimientoDuenio: e.target.value,
                  })
                }
              />
              {errors.fechaNacimientoDuenio && <p className="error">{errors.fechaNacimientoDuenio[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="DNI"
                value={formData.dniDuenio || ""}
                onChange={(e) =>
                  setFormData({ ...formData, dniDuenio: e.target.value })
                }
              />
              {errors.dniDuenio && <p className="error">{errors.dniDuenio[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="email"
                className="input-style"
                placeholder="Email del Dueño"
                value={formData.emailDuenio || ""}
                onChange={(e) =>
                  setFormData({ ...formData, emailDuenio: e.target.value })
                }
              />
              {errors.emailDuenio && <p className="error">{errors.emailDuenio[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Teléfono del Dueño"
                value={formData.telefonoDuenio || ""}
                onChange={(e) =>
                  setFormData({ ...formData, telefonoDuenio: e.target.value })
                }
              />
              {errors.telefonoDuenio && <p className="error">{errors.telefonoDuenio[0]}</p>}
            </div>

            <div className="mb-4">
              <input
                required
                type="text"
                className="input-style"
                placeholder="Ciudad del Dueño"
                value={formData.ciudadDuenio || ""}
                onChange={(e) =>
                  setFormData({ ...formData, ciudadDuenio: e.target.value })
                }
              />
              {errors.ciudadDuenio && <p className="error">{errors.ciudadDuenio[0]}</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-32 rounded-md text-sm hover:bg-blue-600" disabled={isUploading}>
            {isUploading ? "Guardando....." : "Registrar"}
          </button>
        </div>
      </form>
    </div>
  );
}



