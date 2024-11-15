import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioData from "../../../api/UsuarioData";
import { uploadFileUsuarios } from "../../../firebase/config";
import axios from "axios";
export default function EditarPerfil() {
  const { user, token } = useContext(AppContext);
  const navigate = useNavigate();
  const { direccionUsuario, usuario } = UsuarioData();
  const [file, setFile] = useState(null);
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
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
    pais: "Argentina",
    nombreUsuario: "",
    nuevaContrasenia: "",
    contrasenia_confirmation: "",
    avatarUrl: null,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      nombre: usuario.persona?.nombre,
      apellido: usuario.persona?.apellido,
      fechaNac: usuario.persona?.fechaNac ? usuario.persona.fechaNac.split(" ")[0] : "",
      email: usuario.persona?.email,
      telefono: usuario.persona?.telefono,
      calle: direccionUsuario.calle,
      altura: direccionUsuario.altura,
      ciudad: direccionUsuario.ciudad,
      provincia: direccionUsuario.provincia,
      pais: "Argentina",
      nombreUsuario: usuario.usuario?.nombreUsuario,
      nuevaContrasenia: "",
      contrasenia_confirmation: "",
      avatarUrl: usuario.usuario?.avatarUrl,
    });
  }, [usuario, direccionUsuario]);

  useEffect(() => {
    const fetchProvincias = async () => {
      try {
        const response = await axios.get("https://apis.datos.gob.ar/georef/api/provincias");
        setProvincias(response.data.provincias);

        // Buscar la provincia seleccionada para cargar sus localidades
        const provinciaSeleccionada = response.data.provincias.find(
          (prov) => prov.nombre.toLowerCase() === formData.provincia.toLowerCase()
        );
        if (provinciaSeleccionada) {
          await cargarLocalidades(provinciaSeleccionada.id);
        }
      } catch (error) {
        console.error("Error al cargar las provincias:", error);
      }
    };
    fetchProvincias();
  }, [formData.provincia]);

  const cargarLocalidades = async (provinciaId) => {
    try {
      const response = await axios.get("https://apis.datos.gob.ar/georef/api/localidades", {
        params: { provincia: provinciaId, max: 100 },
      });
      setLocalidades(response.data.localidades);
    } catch (error) {
      console.error("Error al cargar las localidades:", error);
    }
  };

  // Al cambiar la provincia, almacenamos el nombre en lugar del ID
  const handleProvinciaChange = async (e) => {
    const provinciaNombre = e.target.options[e.target.selectedIndex].text;
    setFormData({ ...formData, provincia: provinciaNombre, ciudad: "" });

    // Cargar localidades basadas en el ID de la provincia seleccionada
    const provinciaId = e.target.value;
    await cargarLocalidades(provinciaId);
  };
  async function handleUpdate(e) {
    e.preventDefault();

    if (formData.nuevaContrasenia && formData.nuevaContrasenia !== formData.contrasenia_confirmation) {
      setErrors({ ...errors, contrasenia: "Las contraseñas no coinciden" });
      return;
    }

    let avatarUrl = formData.avatarUrl;
    if (file) {
      avatarUrl = await uploadFileUsuarios(file);
      setFormData((prev) => ({ ...prev, avatarUrl }));
    }

    const updatedData = {
      ...formData,
      avatarUrl,
      contrasenia: formData.nuevaContrasenia || undefined
    };
    console.log(updatedData);

    if (!formData.nuevaContrasenia) {
      delete updatedData.nuevaContrasenia;
      delete updatedData.contrasenia_confirmation;
    }

    const res = await fetch(`/api/usuarios/actualizarUsuario/${user?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("Usuario actualizado:", data);
      navigate("/panelUsuario/perfilUsuario");
    } else {
      console.error("Error al actualizar el menú");
      setErrors(data.errors || {});
    }
  }

  return (
    <>
      <div className="bg-slate-400">
        <Title text="Editar perfil" />
      </div>
      <div>

        <form onSubmit={handleUpdate} className="w-1/2 mx-auto space-y-6">
          <div className="mb-2">
            <label className="text-xs">Nombre</label>
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

          <div className="mb-2">
            <label className="text-xs">Apellido</label>
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

          <div className="mb-2">
            <label className="text-xs">Fecha de Nacimiento</label>
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

          <div className="mb-2">
            <label className="text-xs">Email</label>
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

          <div className="mb-2">
            <label className="text-xs">Telefono</label>
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

          <div className="flex space-x-4 mb-2">
            <div className="flex-1">
              <label className="text-xs">Calle</label>
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
              <label className="text-xs">Altura</label>
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
            <div className="mb-2">
              <label className="text-xs">Provincia</label>
              <select
                required
                className="input-style w-full"
                value={
                  provincias.find((prov) => prov.nombre === formData.provincia)?.id || ""
                }
                onChange={handleProvinciaChange}
              >
                <option value="" disabled>Selecciona una provincia</option>
                {provincias.map((provincia) => (
                  <option key={provincia.id} value={provincia.id}>
                    {provincia.nombre}
                  </option>
                ))}
              </select>
              {errors.provincia && <p className="error">{errors.provincia[0]}</p>}
            </div>
            <div className="mb-2">
              <label className="text-xs">Localidad</label>
              <select
                required
                className="input-style w-full"
                value={formData.ciudad || ""}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                disabled={!formData.provincia}
              >
                <option value="" disabled>Selecciona una localidad</option>
                {localidades.map((localidad) => (
                  <option key={localidad.id} value={localidad.nombre}>
                    {localidad.nombre}
                  </option>
                ))}
              </select>
              {errors.ciudad && <p className="error">{errors.ciudad[0]}</p>}
            </div>



          </div>

          <div className="mb-2">
            <label className="text-xs">Nombre de Usuario</label>
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

          <div className="mb-2">
            <label className="text-xs">Nuva Contraseña</label>
            <input
              type="password"
              placeholder="Nueva Contraseña"
              value={formData.nuevaContrasenia || ""}
              onChange={(e) =>
                setFormData({ ...formData, nuevaContrasenia: e.target.value })
              }
            />
            {errors.contrasenia && (
              <p className="error">{errors.contrasenia[0]}</p>
            )}
          </div>

          <div className="mb-2">
            <label className="text-xs">Confirme Contraseña</label>
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

          <div className="mb-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {errors.avatarUrl && <p className="error">{errors.avatarUrl[0]}</p>}
          </div>

          <button className="primary-btn">Actualizar</button>
        </form>
      </div>
    </>
  );
}