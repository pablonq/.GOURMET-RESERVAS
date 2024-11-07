import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioData from "../../../api/UsuarioData";
import { uploadFileUsuarios } from "../../../firebase/config";
export default function EditarPerfil() {
  const { user, token } = useContext(AppContext);
  const navigate = useNavigate();
  const { direccionUsuario, usuario } = UsuarioData();
  const [file, setFile] = useState(null);
  
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
      pais: direccionUsuario.pais,
      nombreUsuario: usuario.usuario?.nombreUsuario,
      nuevaContrasenia: "",
      contrasenia_confirmation: "",
      avatarUrl: usuario.usuario?.avatarUrl,
    });
  }, [usuario, direccionUsuario]);
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
        <div className="flex-1">
          <label className="text-xs">Ciudad</label>
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
          <label className="text-xs">Provincia</label>
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
          <label className="text-xs">Pais</label>
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