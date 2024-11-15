import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFileUsuarios } from "../../../firebase/config";
import axios from "axios";

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
    provincia: { id: "", nombre: "" }, 
    pais: "Argentina",
    nombreUsuario: "",
    contrasenia: "",
    contrasenia_confirmation: "",
    avatarUrl: null,
  });
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // Indicador de subida de archivo
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvincias = async () => {
      try {
        const response = await axios.get("https://apis.datos.gob.ar/georef/api/provincias");
        setProvincias(response.data.provincias);
      } catch (error) {
        console.error("Error al cargar las provincias:", error);
      }
    };
    fetchProvincias();
  }, []);

  // Cargar las localidades al seleccionar una provincia
  const handleProvinciaChange = async (e) => {
    const provinciaId = e.target.value; // ID de la provincia seleccionada
    const provinciaNombre = e.target.options[e.target.selectedIndex].text; // Nombre de la provincia seleccionada

    setFormData({ 
      ...formData, 
      provincia: { id: provinciaId, nombre: provinciaNombre }, 
      ciudad: "" 
    }); // Guardar tanto el ID como el nombre de la provincia en el estado

    try {
      const response = await axios.get("https://apis.datos.gob.ar/georef/api/localidades", {
        params: { provincia: provinciaId, max: 100 },
      });
      setLocalidades(response.data.localidades);
    } catch (error) {
      console.error("Error al cargar las localidades:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      let avatarUrl = formData.avatarUrl;
      if (file) {
        avatarUrl = await uploadFileUsuarios(file);
        setFormData((prev) => ({ ...prev, avatarUrl }));
      }

      const data = { 
        ...formData, 
        provincia: formData.provincia.nombre, // Enviar solo el nombre de la provincia al backend
        avatarUrl 
      };
      
      const res = await fetch("/api/usuarios/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.errors) {
        setErrors(result.errors);
      } else {
        navigate("/LoginUsuario");
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error);
    } finally {
      setIsUploading(false);
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
          <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <select
              required
              className="input-style w-full"
              value={formData.provincia.id || ""}
              onChange={handleProvinciaChange}
            >
              <option value="" disabled>Provincia</option>
              {provincias.map((provincia) => (
                <option key={provincia.id} value={provincia.id}>
                  {provincia.nombre}
                </option>
              ))}
            </select>
            {errors.provincia && <p className="error">{errors.provincia[0]}</p>}
          </div>

          <div className="flex-1">
            <select
              required
              className="input-style w-full"
              value={formData.ciudad || ""}
              onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
              disabled={!formData.provincia.id}
            >
              <option value="" disabled>Ciudad</option>
              {localidades.map((localidad) => (
                <option key={localidad.id} value={localidad.nombre}>
                  {localidad.nombre}
                </option>
              ))}
            </select>
            {errors.ciudad && <p className="error">{errors.ciudad[0]}</p>}
          </div>
        </div>

          <div className="mt-2">
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
