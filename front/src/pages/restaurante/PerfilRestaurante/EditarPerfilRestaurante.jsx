import { useContext, useState, useEffect } from "react";
import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import RestauranteData from "../../../api/RestauranteData";
import axios from "axios";
import FormInput from "../../../component/FormInput/FormInput";
import SelectInput from "../../../component/SelectInput/SelectInput";
import Button from "../../../component/Button/Button";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

export default function EditarPerfilRestaurante() {
  const navigate = useNavigate();
  const { user, token } = useContext(AppContext);
  const { restaurante, direccion, duenio } = RestauranteData();
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    nombreRes: "",
    calle: "",
    altura: "",
    ciudad: "",
    provincia: "",
    pais: "Argentina",
    descripcion: "",
    tipo: "",
    telefono: "",
    email: "",
    nuevaContrasenia: "",
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
  });
  useEffect(() => {
    setFormData({
      nombreRes: restaurante.restaurante?.nombreRes,
      calle: direccion?.[0]?.calle,
      altura: direccion?.[0]?.altura,
      ciudad: direccion?.[0]?.ciudad,
      provincia: direccion?.[0]?.provincia,
      pais: "Argentina",

      descripcion: restaurante.restaurante?.descripcion,
      tipo: restaurante.restaurante?.tipo,
      telefono: restaurante.restaurante?.telefono,
      email: restaurante.restaurante?.email,
      nuevaContrasenia: "",
      contrasenia_confirmation: "",
      capacidadTotal: restaurante.restaurante?.capacidadTotal,
      imagenUrl: null,
      aceptaEventos: restaurante.restaurante?.aceptaEventos,

      nombreDuenio: duenio.persona?.[0]?.nombre || "",
      apellidoDuenio: duenio.persona?.[0]?.apellido || "",

      fechaNacimientoDuenio: duenio.persona?.[0]?.fechaNac
        ? duenio.persona[0].fechaNac.split(" ")[0]
        : "",
      dniDuenio: duenio?.dni || "",
      emailDuenio: duenio.persona?.[0]?.email || "",
      telefonoDuenio: duenio.persona?.[0]?.telefono || "",
    });
  }, [restaurante, direccion, duenio.persona, duenio?.dni]);

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

    const updatedData = {
      ...formData,

      contrasenia: formData.nuevaContrasenia || undefined,
    };
    //console.log(updatedData);

    if (!formData.nuevaContrasenia) {
      delete updatedData.nuevaContrasenia;
      delete updatedData.contrasenia_confirmation;
    }

    const res = await fetch(
      `/api/restaurantes/actualizarRestaurante/${user?.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      }
    );

    const data = await res.json();
    // console.log(data);

    if (res.ok) {
      alert("Informacion actualizada con exito");
      //console.log("Restaurante actualizado:", data);
      navigate("/panelRestaurante/perfilRestaurante");
    } else {
      console.error("Error al actualizar el perfil");
      alert("Error al actualizar el perfil");
      setErrors(data.errors || {});
    }
  }

  return (
    <>
      <div>
        <Title text="Editar Perfil restaurante" />
      </div>
      <div className="container mx-auto p-8">
        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="flex justify-between space-x-8">
            {/* Sección de Datos del Restaurante */}
            <div className="w-1/2 bg-white p-6 rounded-s shadow-md m-4 border border-t-4 border-t-[#DC493A]">
              <h2 className="text-xl font-semibold mb-4 text-center text-[#242424]">
                Restaurante
              </h2>

              <div className="mb-2">
                <FormInput
                 placeholder="Nombre del Restaurante"
                   label="Nombre Restaurante"
                  value={formData.nombreRes || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, nombreRes: e.target.value })
                  }
                  required
                  errorMessage={errors.nombreRes?.[0] || ""}
                />
              </div>
              <div className="mb-2">
                {/* Primer grupo de dos inputs en una fila */}
                <div className="flex space-x-4 mb-2">
                  <div className="flex-1">
                    <FormInput
                      label="Calle"
                      placeholder="Calle"
                      value={formData.calle || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, calle: e.target.value })
                      }
                      required
                      errorMessage={errors.calle?.[0]}
                    />
                  </div>
                  <div className="flex-1">
                    <FormInput
                      label="Altura"
                      placeholder="Altura"
                      value={formData.altura || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, altura: e.target.value })
                      }
                      required
                      errorMessage={errors.altura?.[0]}
                    />
                  </div>
                </div>

                {/* Segundo grupo de tres inputs en una fila */}
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
              </div>

              <div className="mb-2">
                <FormInput
                  label="Descripción"
                  placeholder="Descripción del Restaurante"
                  value={formData.descripcion || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, descripcion: e.target.value })
                  }
                  required
                  errorMessage={errors.descripcion?.[0]}
                />
              </div>

              <div className="mb-2">
                <div className="flex items-center gap-4 ">
                  <label className="text-xs w-1/3">Tipo de Restaurante</label>
                  <select
                    required
                    className="input-style"
                    value={formData.tipo || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, tipo: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Tipo de restaurante
                    </option>
                    <option value="Tematico">Temático</option>
                    <option value="Comida rapida">Comida rapida</option>
                    <option value="Buffet">Estilo buffet</option>
                    <option value="Gourmet">Gourmet</option>
                    <option value="Fusion">Fusión</option>
                    <option value="Familiar">familiar</option>
                    <option value="De autor">De autor</option>
                    <option value="Bar restaurante">Bar restaurante</option>
                    <option value="Pizzeria">Pizzeria</option>
                    <option value="Parrilla">Parrilla</option>
                    <option value="Cafe restaurante">Cafe restaurante</option>

                    {/* Agrega más opciones aquí según lo necesites */}
                  </select>
                  {errors.tipo && <p className="error">{errors.tipo[0]}</p>}
                </div>
              </div>

              <div className="mb-2">
                <FormInput
                  label="Telefono"
                  placeholder="Teléfono del Restaurante"
                  value={formData.telefono || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  required
                  errorMessage={errors.telefono?.[0]}
                />
              </div>

              <div className="mb-2">
                <FormInput
                  label="Email"
                  placeholder="Email del Restaurante"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  errorMessage={errors.email?.[0]}
                />
              </div>

              <div className="mb-2">
                <FormInput
                  label="Nueva Contraseña"
                  type="password"
                  placeholder="Nueva Contraseña"
                  value={formData.nuevaContrasenia || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      nuevaContrasenia: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-2">
                <FormInput
                  label="Confirme Contraseña"
                  type="password"
                  placeholder="Confirme Password"
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
                <FormInput
                  label="Capacidad Total"
                  placeholder="Capacidad Total"
                  value={formData.capacidadTotal || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      capacidadTotal: e.target.value,
                    })
                  }
                  required
                  errorMessage={errors.capacidadTotal?.[0]}
                />
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-4 ">
                  <label className="mr-4 text-xs">¿Acepta eventos?</label>
                  <div className="inline-flex items-center space-x-4">
                    <input
                      type="radio"
                      id="aceptaSi"
                      name="aceptaEventos"
                      value="si"
                      checked={formData.aceptaEventos === "si"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          aceptaEventos: e.target.value,
                        })
                      }
                      className="accent-[#DC493A]"
                    />
                    <label htmlFor="aceptaSi" className="mr-2 text-xs">
                      Sí
                    </label>

                    <input
                      type="radio"
                      id="aceptaNo"
                      name="aceptaEventos"
                      value="no"
                      checked={formData.aceptaEventos === "no"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          aceptaEventos: e.target.value,
                        })
                      }
                      className="accent-[#DC493A]"
                    />
                    <label htmlFor="aceptaNo" className="mr-2 text-xs">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de Datos del Dueño */}
            <div className="w-1/2 bg-white p-6 rounded-lg shadow-md m-4 border border-t-4 border-t-[#DC493A]">
              <h2 className="text-xl font-semibold mb-4 text-center">Dueño</h2>

              <div className="mb-2">
                <FormInput
                  label="Nombre"
                  placeholder="Nombre del Dueño"
                  value={formData.nombreDuenio || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, nombreDuenio: e.target.value })
                  }
                  required
                  errorMessage={errors.nombreDuenio?.[0]}
                />
              </div>

              <div className="mb-2">
                <FormInput
                  label="Apellido"
                  placeholder="Apellido del Dueño"
                  value={formData.apellidoDuenio || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, apellidoDuenio: e.target.value })
                  }
                  required
                  errorMessage={errors.apellidoDuenio?.[0]}
                />
              </div>

              <div className="mb-2">
                <FormInput
                  label="Fecha de Nacimiento"
                  placeholder="Fecha de Nacimiento"
                  type="date"
                  value={formData.fechaNacimientoDuenio || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fechaNacimientoDuenio: e.target.value,
                    })
                  }
                  required
                  errorMessage={errors.fechaNacimientoDuenio?.[0]}
                />
              </div>

              <div className="mb-2">
                <FormInput
                  label="DNI"
                  placeholder="DNI"
                  value={formData.dniDuenio || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, dniDuenio: e.target.value })
                  }
                  required
                  errorMessage={errors.dniDuenio?.[0]}
                />
              </div>

              <div className="mb-2">
                <FormInput
                  label="Email"
                  placeholder="Email del Dueño"
                  value={formData.emailDuenio || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, emailDuenio: e.target.value })
                  }
                  required
                  errorMessage={errors.emailDuenio?.[0]}
                />
              </div>

              <div className="mb-2">
                <FormInput
                  label="Telefono"
                  placeholder="Teléfono del Dueño"
                  value={formData.telefonoDuenio || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, telefonoDuenio: e.target.value })
                  }
                  required
                  errorMessage={errors.telefonoDuenio?.[0]}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button texto={"Actualizar"} />
          </div>
        </form>
      </div>
      <LinkVolver color={"[#DC493A]"} colorHover={"[#B6C6B9]"} ruta={"/panelRestaurante"}/>
    </>
  );
}
