import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";

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
    categoria: "",
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
      console.log("Menus:", data);
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
    console.log(data.nombrePlato);

    if (res.ok) {
      setFormData({
        nombrePlato: data.nombrePlato,
        descripcion: data.descripcion,
        precio: data.precio,
        informacionNutricional: data.informacionNutricional,
        tags: Array.isArray(data.tag) ? data.tag : JSON.parse(data.tag || "[]"),
        imagen: data.imagen,
        categoria: data.categoria,
        idRestaurante: user?.id,
        idMenu: data.idMenu || "",
      });
    }
  }

  // traer las tags del soap
  const fetchTags = async () => {
    try {
      const res = await fetch(`/api/dish-tags`);
      if (!res.ok) {
        throw new Error("Error al cargar las etiquetas");
      }
      const data = await res.json();
      setTags(data);
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

    console.log(data);

    if (res.ok) {
      console.log("Plato actualizado:", data);
      navigate("/panelRestaurante/administrarPlatos");
    } else {
      console.error("Error al actualizar el plato");
      setErrors(data.errors || {}); // Mostrar los errores si ocurren
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
      <div className="title">Actualizar {platoId}</div>

      <form onSubmit={handleUpdate} className="w-1/2 mx-auto space-y-6">
        <div className="mb-4">
          <label htmlFor="block text-gray-700 font-semibold mb-2">
            Nombre del plato:
          </label>
          <input
            type="text"
            placeholder="Nombre del plato"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.nombrePlato}
            onChange={(e) =>
              setFormData({ ...formData, nombrePlato: e.target.value })
            }
          />
          {errors.nombrePlato && (
            <p className="error">{errors.nombrePlato[0]}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Descripción:
          </label>
          <textarea
            rows="4"
            placeholder="Descripción"
            value={formData.descripcion}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={(e) =>
              setFormData({ ...formData, descripcion: e.target.value })
            }
          ></textarea>
          {errors.descripcion && (
            <p className="error">{errors.descripcion[0]}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Información Nutricional
          </label>
          <input
            type="text"
            placeholder="Información Nutricional"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.informacionNutricional}
            onChange={(e) =>
              setFormData({
                ...formData,
                informacionNutricional: e.target.value,
              })
            }
          />
          {errors.informacionNutricional && (
            <p className="error">{errors.informacionNutricional[0]}</p>
          )}
        </div>

        {/* Checkboxes para las tags */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Seleccione las tags
          </label>
          <div className="flex flex-wrap">
            {allTags.map((tag, index) => (
              <div key={index} className="mr-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={tag}
                    checked={formData.tags.includes(tag)}
                    onChange={(e) => {
                      const { checked } = e.target;
                      setFormData((prev) => {
                        const newTags = checked
                          ? [...prev.tags, tag]
                          : prev.tags.filter((t) => t !== tag);
                        return { ...prev, tags: newTags };
                      });
                    }}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{tag}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Precio:
          </label>
          <input
            type="text"
            placeholder="Precio"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.precio}
            onChange={(e) =>
              setFormData({ ...formData, precio: e.target.value })
            }
          />
          {errors.precio && <p className="error">{errors.precio[0]}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Categoria
          </label>
          <input
            type="text"
            value={formData.categoria}
            onChange={(e) =>
              setFormData({ ...formData, categoria: e.target.value })
            }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.categoria && <p className="error">{errors.categoria[0]}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Menú</label>
          <select
            value={formData.idMenu}
            onChange={(e) =>
              setFormData({ ...formData, idMenu: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
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

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Imagen del Plato
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button className="primary-btn">Actualizar</button>
      </form>
    </>
  );
}
