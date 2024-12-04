import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";
import Title from "../../../component/Title/Title";
import FormInput from "../../../component/FormInput/FormInput";
import Button from "../../../component/Button/Button";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

export default function CrearMenu() {
  const { user, token } = useContext(AppContext);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tipo: "",
    informacionNutricional: "",
    tags: [],
    precio: "",
    imagen: null,
    idRestaurante: user?.id,
    idMenu: "",
  });
  const idRestaurante = user?.id;
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});
  const [menus, setMenus] = useState([]);
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  async function getMenus() {
    try {
      const res = await fetch(`/api/restaurantes/indexMenu/${idRestaurante}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setMenus(data);
      setLoading(false);
      console.log("Menus:", data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
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
      setTags(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imagen = formData.imagen;
    if (file) {
      imagen = await uploadFileRestaurantes(file);
      setFormData((prev) => ({ ...prev, imagen }));
    }

    const data = {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      informacionNutricional: formData.informacionNutricional,
      precio: formData.precio,
      imagen: imagen,
      idRestaurante: user?.id,
      idMenu: formData.idMenu === "" ? null : formData.idMenu,
      tags: formData.tags.map((tag) => parseInt(tag, 10)),
    };

    try {
      const res = await fetch("/api/restaurantes/crearPlato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        alert("Error al crear el plato");
      }
      alert("Plato creado con exito");
      navigate("/panelRestaurante/administrarPlatos");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMenus();
    fetchTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <div>
      <Title text="Crear Nuevo Plato" />
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-s m-4 border border-t-4 border-t-[#DC493A]">
        {error && <p className="text-[#DC493A]">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="Nombre del Plato"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              required
              errorMessage={errors.nombre?.[0] || ""}
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-4">
              <label className="text-xs w-1/3">Descripción</label>
              <div className="flex flex-col w-full">
                <textarea
                  value={formData.descripcion}
                  onChange={(e) =>
                    setFormData({ ...formData, descripcion: e.target.value })
                  }
                  required
                  className="w-full input-style px-3 py-2"
                />
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

          {/* Selección de tags */}
          <div className="mb-4">
            <label className="text-xs my-2">Seleccione las tags</label>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <div key={tag.id} className="mr-4">
                  <label className="inline-flex items-center text-sm font-normal">
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
              label="Imagen del Plato"
              type="file"
              accept={"image/*"}
              onChange={(e) => setFile(e.target.files[0])
              }
              required
            />
          </div>

          <div className="flex justify-center">
          <Button  disabled={loading} texto={loading ? "Creando..." : "Crear Plato"} type={"submit"}/>
          </div>
        </form>
      </div>
      <LinkVolver color={"[#DC493A]"} colorHover={"[#B6C6B9]"} ruta={"/panelRestaurante/administrarPlatos"} />
    </div>
    </>
  );
}
