import { useContext, useState, useEffect } from "react";
import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import RestauranteData from "../../../api/RestauranteData";
export default function EditarPerfilRestaurante() {
  const navigate = useNavigate();
  const { user, token } = useContext(AppContext);
  const { restaurante, direccion, duenio } = RestauranteData();

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    // Datos del Restaurante
    nombreRes: "",
    calle: "",
    altura: "",
    ciudad: "",
    provincia: "",
    pais: "",
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
    ciudadDuenio: "",
  });
  useEffect(() => {
    setFormData({
      nombreRes: restaurante.restaurante?.nombreRes,
      calle: direccion?.[0]?.calle,
      altura: direccion?.[0]?.altura,
      ciudad: direccion?.[0]?.ciudad,
      provincia: direccion?.[0]?.provincia,
      pais: direccion?.[0]?.pais,

      descripcion: restaurante.restaurante?.descripcion,
      tipo: restaurante.restaurante?.tipo,
      telefono: restaurante.restaurante?.telefono,
      email: restaurante.restaurante?.email,
      nuevaContrasenia: "",
      contrasenia_confirmation: "",
      capacidadTotal: restaurante.restaurante?.capacidadTotal,
      imagenUrl: null,
      aceptaEventos: restaurante.restaurante?.aceptaEventos,

      // Datos del Dueño
      nombreDuenio: duenio.persona?.[0]?.nombre || "",
      apellidoDuenio: duenio.persona?.[0]?.apellido || "",

      fechaNacimientoDuenio: duenio.persona?.[0]?.fechaNac
        ? duenio.persona[0].fechaNac.split(" ")[0]
        : "",
      dniDuenio: duenio?.dni || "",
      emailDuenio: duenio.persona?.[0]?.email || "",
      telefonoDuenio: duenio.persona?.[0]?.telefono || "",
      ciudadDuenio: duenio.persona?.[0]?.ciudad || "",
    });
  }, [restaurante, direccion]);

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
    console.log(updatedData);

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
    console.log(data);

    if (res.ok) {
      console.log("Restaurante actualizado:", data);
      navigate("/panelRestaurante/perfilRestaurante");
    } else {
      console.error("Error al actualizar el perfil");
      setErrors(data.errors || {});
    }
  }
  return (
    <>
      <div className="bg-slate-400">
        <Title text="Editar Perfil restaurante" />
      </div>
      <div className="container mx-auto p-8">
        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="flex justify-between space-x-8">
            {/* Sección de Datos del Restaurante */}
            <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Restaurante
              </h2>

              <div className="mb-2">
                <label className="text-xs">Nombre Restaurante</label>
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
                {errors.nombreRes && (
                  <p className="error">{errors.nombreRes[0]}</p>
                )}
              </div>
              <div className="mb-2">
                {/* Primer grupo de dos inputs en una fila */}
                <div className="flex space-x-4 mb-2">
                  <div className="flex-1">
                    <label className="text-xs">Calle</label>
                    <input
                      required
                      type="text"
                      className="input-style w-full"
                      placeholder="Calle"
                      value={formData.calle || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, calle: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, altura: e.target.value })
                      }
                    />
                    {errors.altura && (
                      <p className="error">{errors.altura[0]}</p>
                    )}
                  </div>
                </div>

                {/* Segundo grupo de tres inputs en una fila */}
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="text-xs">Ciudad</label>
                    <input
                      required
                      type="text"
                      className="input-style w-full"
                      placeholder="Ciudad"
                      value={formData.ciudad || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, ciudad: e.target.value })
                      }
                    />
                    {errors.ciudad && (
                      <p className="error">{errors.ciudad[0]}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label className="text-xs">Provincia</label>
                    <input
                      required
                      type="text"
                      className="input-style w-full"
                      placeholder="Provincia"
                      value={formData.provincia || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, provincia: e.target.value })
                      }
                    />
                    {errors.provincia && (
                      <p className="error">{errors.provincia[0]}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label className="text-xs">Pais</label>
                    <input
                      required
                      type="text"
                      className="input-style w-full"
                      placeholder="Pais"
                      value={formData.pais || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, pais: e.target.value })
                      }
                    />
                    {errors.pais && <p className="error">{errors.pais[0]}</p>}
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <label className="text-xs">Descripción</label>
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
                {errors.descripcion && (
                  <p className="error">{errors.descripcion[0]}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="text-xs">Tipo de Restaurante</label>
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
                  <option value="comida rapida">Comida rapida</option>
                  <option value="Buffet">Estilo buffet</option>
                  <option value="Gourmet">Gourmet</option>
                  <option value="Fusion">Fusión</option>
                  <option value="Familiar">familiar</option>
                  <option value="De autor">De autor</option>
                  <option value="bar restaurante">Bar restaurante</option>
                  <option value="pizzeria">Pizzeria</option>
                  <option value="parrilla">Parrilla</option>
                  <option value="cafe restaurante">Cafe restaurante</option>

                  {/* Agrega más opciones aquí según lo necesites */}
                </select>
                {errors.tipo && <p className="error">{errors.tipo[0]}</p>}
              </div>

              <div className="mb-2">
                <label className="text-xs">Telefono</label>
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
                {errors.telefono && (
                  <p className="error">{errors.telefono[0]}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="text-xs">Email</label>
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

              <div className="mb-2">
                <label className="text-xs">Nueva Contraseña</label>
                <input
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

              <div className="mb-4">
                <label className="text-xs">Capacidad Total</label>
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
                {errors.capacidadTotal && (
                  <p className="error">{errors.capacidadTotal[0]}</p>
                )}
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
                      setFormData({
                        ...formData,
                        aceptaEventos: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="aceptaSi" className="mr-4">
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
                  />
                  <label htmlFor="aceptaNo">No</label>
                </div>
              </div>
            </div>

            {/* Sección de Datos del Dueño */}
            <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-center">Dueño</h2>

              <div className="mb-2">
                <label className="text-xs">Nombre</label>
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
                {errors.nombreDuenio && (
                  <p className="error">{errors.nombreDuenio[0]}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="text-xs">Apellido</label>
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
                {errors.apellidoDuenio && (
                  <p className="error">{errors.apellidoDuenio[0]}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="text-xs">Fecha de Nacimiento</label>
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
                {errors.fechaNacimientoDuenio && (
                  <p className="error">{errors.fechaNacimientoDuenio[0]}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="text-xs">DNI</label>
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
                {errors.dniDuenio && (
                  <p className="error">{errors.dniDuenio[0]}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="text-xs">Email</label>
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
                {errors.emailDuenio && (
                  <p className="error">{errors.emailDuenio[0]}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="text-xs">Telefono</label>
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
                {errors.telefonoDuenio && (
                  <p className="error">{errors.telefonoDuenio[0]}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="text-xs">Ciudad</label>
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
                {errors.ciudadDuenio && (
                  <p className="error">{errors.ciudadDuenio[0]}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="primary-btn">Actualizar</button>
          </div>
        </form>
      </div>
    </>
  );
}
