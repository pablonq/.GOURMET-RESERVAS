import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";
import Title from "../../../component/Title/Title";
import FormInput from "../../../component/FormInput/FormInput";
import Button from "../../../component/Button/Button";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

export default function EditarPlato() {
  const { user, token } = useContext(AppContext);
  const { platoId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombrePlato: "",
    descripcion: "",
    precio: "",
    informacionNutricional: "",
    tags: [],
    imagen: null,
    idRestaurante: user?.id,
    idMenu: "",
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [menus, setMenus] = useState([]);
  const [allTags, setTags] = useState([]);

  async function getMenus() {
    try {
      const res = await fetch(`/api/restaurantes/indexMenu/${user?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setMenus(data);

      //console.log("Menus:", data);
    } catch (error) {
      setErrors(error.message);
    }
  }

  async function getPlato() {
    /* e.preventDefault(); */
    const res = await fetch(`/api/restaurantes/mostrarPlato/${platoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    //console.log(data.nombrePlato);
    //console.log("soy la nueva taga", data.tags);

    if (res.ok) {
      setFormData({
        nombrePlato: data.nombrePlato,
        descripcion: data.descripcion,
        precio: data.precio,
        informacionNutricional: data.informacionNutricional,
        tags: data.tags.map((tag) => parseInt(tag.id, 10)),
        imagen: data.imagen,
        idRestaurante: user?.id,
        idMenu: data.idMenu || "",
      });
    }
  }

  // traer las tags
  const fetchTags = async () => {
    try {
      const res = await fetch(`/api/restaurantes/traerTags`);
      if (!res.ok) {
        throw new Error("Error al cargar las etiquetas");
      }
      const data = await res.json();
      setTags(data.map((tag) => ({ id: tag.id, nombreTag: tag.nombreTag })));
    } catch (error) {
      setErrors(error.message);
    }
  };

  async function handleUpdate(e) {
    e.preventDefault();
    let imagen = formData.imagen;
    if (file) {
      imagen = await uploadFileRestaurantes(file);
      setFormData((prev) => ({ ...prev, imagen }));
    }
    const updatedData = {
      ...formData,
      imagen,
      // Actualiza la imagen si fue modificada
    };

    const res = await fetch(`/api/restaurantes/editarPlato/${platoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Plato actualizado");
      navigate("/panelRestaurante/administrarPlatos");
    } else {
      console.error("Error al actualizar el plato");
      setErrors(data.errors || {});
    }
  }
  useEffect(() => {
    getPlato();
    getMenus();
    fetchTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Title text="Editar informacion del plato" />
        <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-s  m-4 border border-t-4 border-t-[#DC493A]">
          <div className="title">Actualizar plato: {platoId}</div>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <FormInput
                label="Nombre del plato"
                placeholder="Nombre del plato"
                value={formData.nombrePlato}
                onChange={(e) =>
                  setFormData({ ...formData, nombrePlato: e.target.value })
                }
                required
                errorMessage={errors.nombrePlato?.[0] || ""}
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <label className="text-xs w-1/3">Descripción:</label>
                <div className="flex flex-col w-full">
                  <textarea
                    rows="4"
                    placeholder="Descripción"
                    value={formData.descripcion}
                    onChange={(e) =>
                      setFormData({ ...formData, descripcion: e.target.value })
                    }
                    className="w-full input-style px-3 py-2"
                  ></textarea>
                  {errors.descripcion && (
                    <p className="error">{errors.descripcion[0]}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <FormInput
                label="Información Nutricional"
                placeholder="Información Nutricional"
                value={formData.informacionNutricional}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    informacionNutricional: e.target.value,
                  })
                }
                required
                errorMessage={errors.informacionNutricional?.[0] || ""}
              />
            </div>

            <div className="mb-4">
              <label className="text-xs my-2">Seleccione tags</label>
              <div className="flex flex-wrap">
                {allTags.map((tag) => (
                  <div key={tag.id} className="mr-4">
                    <label className="inline-flex items-center  text-sm font-normal">
                      <input
                        type="checkbox"
                        value={tag.id}
                        checked={formData.tags.includes(tag.id)}
                        onChange={(e) => {
                          const { checked } = e.target;
                          setFormData((prev) => {
                            const newTags = checked
                              ? [...prev.tags, tag.id]
                              : prev.tags.filter((t) => t !== tag.id);
                            return { ...prev, tags: newTags };
                          });
                        }}
                        className="form-checkbox h-5 w-5 accent-[#DC493A]"
                      />
                      <span className="ml-2">{tag.nombreTag}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <FormInput
                label="Precio"
                placeholder="Precio"
                value={formData.precio}
                onChange={(e) =>
                  setFormData({ ...formData, precio: e.target.value })
                }
                required
                errorMessage={errors.precio?.[0] || ""}
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <label className="text-xs w-1/3">Menú</label>
                <div className="flex flex-col w-full">
                  <select
                    value={formData.idMenu}
                    onChange={(e) =>
                      setFormData({ ...formData, idMenu: e.target.value })
                    }
                    className="w-full input-style"
                  >
                    <option value="">Ninguno</option>{" "}
                    {/* Opción para no seleccionar ningún menú */}
                    {menus.map((menu) => (
                      <option key={menu.id} value={menu.id}>
                        {menu.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <FormInput
                label=" Imagen del Plato"
                type="file"
                accept={"image/*"}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <Button texto={"Actualizar"} />
          </form>
        </div>
        <LinkVolver
          color={"[#DC493A]"}
          colorHover={"[#B6C6B9]"}
          ruta={`/panelRestaurante/mostrarPlato/${platoId}`}
        />
      </div>
    </>
  );
}
