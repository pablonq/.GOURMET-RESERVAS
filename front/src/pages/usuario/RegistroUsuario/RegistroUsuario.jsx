import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFileUsuarios } from "../../../firebase/config";

export default function RegistroUsuario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNac: "",
    email: "",
    telefono: "",
    calle: "",
    altura: "",
    ciudad: "",
    provincia: "",
    pais: "",
    nombreUsuario: "",
    contrasenia: "",
    contrasenia_confirmation: "",
    avatarUrl: null,
  });

  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // Indicador de subida de archivo
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsUploading(true); // Establecer el indicador de subida de archivo en verdadero
    try {
      let avatarUrl = formData.avatarUrl; // URL del avatar predeterminado o la URL existente
      if (file) {
        avatarUrl = await uploadFileUsuarios(file);
        console.log(avatarUrl);
        // Actualizar la URL del avatar en el estado del formulario
        setFormData((prev) => ({ ...prev, avatarUrl }));
      }
      const data = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        fechaNac: formData.fechaNac,
        email: formData.email,
        telefono: formData.telefono,
        calle: formData.calle,
        altura: formData.altura,
        ciudad: formData.ciudad,
        provincia: formData.provincia,
        pais: formData.pais,
        nombreUsuario: formData.nombreUsuario,
        contrasenia: formData.contrasenia,
        contrasenia_confirmation: formData.contrasenia_confirmation,
        avatarUrl: avatarUrl, // Añadir la URL del avatar si está disponible
      };

      /* const form = new FormData();
    form.append("nombre", formData.nombre);
    form.append("apellido", formData.apellido);
    form.append("fechaNac", formData.fechaNac);
    form.append("email", formData.email);
    form.append("telefono", formData.telefono);
    form.append("ciudad", formData.ciudad);
    form.append("nombreUsuario", formData.nombreUsuario);
    form.append("contrasenia", formData.contrasenia);
    form.append("contrasenia_confirmation", formData.contrasenia_confirmation);
    if(avatarUrl) form.append("avatarUrl", avatarUrl); // Agregar el archivo de imagen al objeto FormData
     */
      /* for (let pair of form.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    } */

      const res = await fetch("/api/usuarios/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Establecer el encabezado JSON
        },
        body: JSON.stringify(data), // Convertir los datos a JSON
      });

      const result = await res.json();
      if (result.errors) {
        setErrors(result.errors);
        console.log(result);
      } else {
        console.log(result);
        navigate("/LoginUsuario");
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error);
    } finally {
      setIsUploading(false); // Restablecer el indicador de subida de archivo en falso
    }
  };
  return (
    <>
      <div>
        <h1 className="title">Registrar nueva cuenta</h1>
        <form onSubmit={handleRegister} className="w-1/2 mx-auto space-y-6">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              value={formData.nombre || ""}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />
            {errors.nombre && <p className="error">{errors.nombre[0]}</p>}
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Apellido"
              value={formData.apellido || ""}
              onChange={(e) =>
                setFormData({ ...formData, apellido: e.target.value })
              }
            />
            {errors.apellido && <p className="error">{errors.apellido[0]}</p>}
          </div>
          
          <div>
            <input
              type="date"
              placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
              value={formData.fechaNac || ""}
              onChange={(e) =>
                setFormData({ ...formData, fechaNac: e.target.value })
              }
            />
            {errors.fechaNac && <p className="error">{errors.fechaNac[0]}</p>}
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
              type="text"
              placeholder="Telefono"
              value={formData.telefono || ""}
              onChange={(e) =>
                setFormData({ ...formData, telefono: e.target.value })
              }
            />
            {errors.telefono && <p className="error">{errors.telefono[0]}</p>}
          </div>
  
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <input
                required
                type="text"
                className="input-style w-full"
                placeholder="Calle"
                value={formData.calle || ""}
                onChange={(e) => setFormData({ ...formData, calle: e.target.value })}
              />
              {errors.calle && <p className="error">{errors.calle[0]}</p>}
            </div>
            <div className="flex-1">
              <input
                required
                type="text"
                className="input-style w-full"
                placeholder="Altura"
                value={formData.altura || ""}
                onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
              />
              {errors.altura && <p className="error">{errors.altura[0]}</p>}
            </div>
          </div>
  
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                required
                type="text"
                className="input-style w-full"
                placeholder="Ciudad"
                value={formData.ciudad || ""}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
              />
              {errors.ciudad && <p className="error">{errors.ciudad[0]}</p>}
            </div>
            <div className="flex-1">
              <input
                required
                type="text"
                className="input-style w-full"
                placeholder="Provincia"
                value={formData.provincia || ""}
                onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}
              />
              {errors.provincia && <p className="error">{errors.provincia[0]}</p>}
            </div>
            <div className="flex-1">
              <input
                required
                type="text"
                className="input-style w-full"
                placeholder="Pais"
                value={formData.pais || ""}
                onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
              />
              {errors.pais && <p className="error">{errors.pais[0]}</p>}
            </div>
          </div>
  
          <div>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              value={formData.nombreUsuario || ""}
              onChange={(e) =>
                setFormData({ ...formData, nombreUsuario: e.target.value })
              }
            />
            {errors.nombreUsuario && (
              <p className="error">{errors.nombreUsuario[0]}</p>
            )}
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
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {errors.avatarUrl && <p className="error">{errors.avatarUrl[0]}</p>}
          </div>
  
          <button className="primary-btn" disabled={isUploading}>
            {isUploading ? "Guardando....." : "Registrarme"}
          </button>
        </form>
      </div>
    </>
  );
  
}
