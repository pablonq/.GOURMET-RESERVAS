import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioData from "../../../api/UsuarioData";
import { uploadFileUsuarios } from "../../../firebase/config";
import axios from "axios";
import FormInput from "../../../component/FormInput/FormInput";
import Button from "../../../component/Button/Button";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";
import SelectInput from "../../../component/SelectInput/SelectInput";
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
      fechaNac: usuario.persona?.fechaNac
        ? usuario.persona.fechaNac.split(" ")[0]
        : "",
      email: usuario.persona?.email,
      telefono: usuario.persona?.telefono,
      calle: direccionUsuario?.[0]?.calle  || "",
      altura: direccionUsuario?.[0]?.altura  || "",
      ciudad: direccionUsuario?.[0]?.ciudad  || "",
      provincia: direccionUsuario?.[0]?.provincia  || "",
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
        const response = await axios.get(
          "https://apis.datos.gob.ar/georef/api/provincias"
        );
        setProvincias(response.data.provincias);

        const provinciaSeleccionada = response.data.provincias.find(
          (prov) =>
            prov.nombre.toLowerCase() === formData.provincia.toLowerCase()
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
      const response = await axios.get(
        "https://apis.datos.gob.ar/georef/api/localidades",
        {
          params: { provincia: provinciaId, max: 100 },
        }
      );
      setLocalidades(response.data.localidades);
    } catch (error) {
      console.error("Error al cargar las localidades:", error);
    }
  };

  const handleProvinciaChange = async (e) => {
    const provinciaNombre = e.target.options[e.target.selectedIndex].text;
    setFormData({ ...formData, provincia: provinciaNombre, ciudad: "" });

    const provinciaId = e.target.value;
    await cargarLocalidades(provinciaId);
  };

  async function handleUpdate(e) {
    e.preventDefault();

    if (
      formData.nuevaContrasenia &&
      formData.nuevaContrasenia !== formData.contrasenia_confirmation
    ) {
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
      contrasenia: formData.nuevaContrasenia || undefined,
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
    alert("Perfil actualizado exitosamente")
      navigate("/perfilUsuario");
    } else {
      console.error("Error al actualizar el usuario");
      setErrors(data.errors || {});
    }
  }

  return (
    <>
      <div className="bg-slate-400">
        <Title text="Editar perfil" />
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 bg-white p-6 rounded-s shadow-md m-4 border border-l-4 border-l-[#DC493A]">
          <h2 className="text-xl font-semibold mb-4 text-center text-[#242424]">
            Usuario
          </h2>
          <form onSubmit={handleUpdate} >
            <div className="mb-2">
              <FormInput
                placeholder="Nombre"
                label="Nombre"
                value={formData.nombre || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                required
                errorMessage={errors.nombre?.[0] || ""}
              />
            </div>
            <div className="mb-2">
              <FormInput
                placeholder="Apellido"
                label="Apellido"
                value={formData.apellido || ""}
                onChange={(e) =>
                  setFormData({ ...formData, apellido: e.target.value })
                }
                required
                errorMessage={errors.apellido?.[0] || ""}
              />
            </div>

            <div className="mb-2">
              <FormInput
                placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
                type="date"
                label="Fecha de Nacimiento"
                value={formData.fechaNac || ""}
                onChange={(e) =>
                  setFormData({ ...formData, fechaNac: e.target.value })
                }
                required
                errorMessage={errors.fechaNac?.[0] || ""}
              />
            </div>
            <div className="mb-2">
              <FormInput
                placeholder="Email"
                label="Email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                errorMessage={errors.email?.[0] || ""}
              />
            </div>

            <div className="mb-2">
              <FormInput
                placeholder="Telefono"
                label="Telefono"
                value={formData.telefono || ""}
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
                required
                errorMessage={errors.telefono?.[0] || ""}
              />
            </div>

            <div className="flex space-x-6 mb-2">
              <div className="flex-1">
                <FormInput
                  placeholder="Calle"
                  label="Calle"
                  value={formData.calle || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, calle: e.target.value })
                  }
                  required
                  errorMessage={errors.calle?.[0] || ""}
                />
              </div>
              <div className="flex-1">
                <FormInput
                  placeholder="Altura"
                  label="Altura"
                  value={formData.altura || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, altura: e.target.value })
                  }
                  required
                  errorMessage={errors.altura?.[0] || ""}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="mb-2">
                <SelectInput
                  label="Provincia"
                  name="provincia"
                  options={provincias}
                  value={
                    provincias.find(
                      (prov) => prov.nombre === formData.provincia
                    )?.id || ""
                  }
                  onChange={handleProvinciaChange}
                  placeholder="Selecciona una provincia"
                  error={errors.provincia}
                />
              </div>
              <div className="mb-2">
                <SelectInput
                  label="Localidad"
                  options={localidades}
                  keyField="nombre"
                  value={formData.ciudad || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, ciudad: e.target.value })
                  }
                  disabled={!formData.provincia}
                  placeholder="Selecciona una localidad"
                  error={errors.ciudad?.[0]}
                />
              </div>
            </div>

            <div className="mb-2">
              <FormInput
                placeholder="Nombre de Usuario"
                label="Nombre de Usuario"
                value={formData.nombreUsuario || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nombreUsuario: e.target.value })
                }
                required
                errorMessage={errors.nombreUsuario?.[0] || ""}
              />
            </div>
            <div className="mb-2">
              <FormInput
                placeholder="Nueva Contraseña"
                label="Nueva Contraseña"
                type="password"
                value={formData.nuevaContrasenia || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nuevaContrasenia: e.target.value })
                }
                errorMessage={errors.nuevaContrasenia?.[0] || ""}
              />
            </div>

            <div className="mb-2">
              <FormInput
                placeholder="Confirme Contraseña"
                label="Confirme Contraseña"
                type="password"
                value={formData.contrasenia_confirmation || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contrasenia_confirmation: e.target.value,
                  })
                }
                errorMessage={errors.contrasenia_confirmation?.[0] || ""}
              />
            </div>

            <div className="mb-2">
              <FormInput
               label="Cambiar Imagen de perfil"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                errorMessage={errors.avatarUrl?.[0] || ""}
              />
            </div>
            <Button texto={"Actualizar"} />
          </form>
        </div>
      </div>
      <LinkVolver
        color={"[#DC493A]"}
        colorHover={"[#B6C6B9]"}
        ruta={"/perfilUsuario"}
      />
    </>
  );
}
