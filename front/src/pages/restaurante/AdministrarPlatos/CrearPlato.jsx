import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";

export default function CrearMenu() {
  const { user, token } = useContext(AppContext);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tipo: "",
    informacionNutricional: "",
    tags: [],
    nuevaTag: "",
    precio: "",
    categoria: "",
    imagen: null,
    idRestaurante: user?.id,
    idMenu: "",
  });
  const idRestaurante = user?.id;
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  // traer las tags del soap
  const fetchTags = async () => {
    try {
      const res = await fetch(`/api/dish-tags`);
      if (!res.ok) {
        throw new Error("Error al cargar las etiquetas");
      }
      const data = await res.json();

      setTags(data.tag || []);
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

    // Verificar y agregar nueva tag si es necesario
    if (
      formData.nuevaTag &&
      !tags.some((tag) => tag.name === formData.nuevaTag)
    ) {
      try {
        const res = await fetch("/api/insertTag", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: formData.nuevaTag }),
        });
        const newTag = await res.json();

        if (!res.ok) {
          throw new Error("Error al agregar la nueva tag");
        }

        // Actualiza las etiquetas y el formData
        setTags((prevTags) => [...prevTags, newTag.tag]);

      } catch (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
    }

    const data = {
      nombre: formData.nombre,
      descripcion: formData.descripcion,

      informacionNutricional: formData.informacionNutricional,
      precio: formData.precio,
      categoria: formData.categoria,
      imagen: imagen,
      idRestaurante: user?.id,
      idMenu: formData.idMenu === "" ? null : formData.idMenu,
      tags: [...new Set([...formData.tags, formData.nuevaTag].filter(tag => tag))]
    };

    console.log(" es la info a enviar:", data);

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
        const errorData = await res.json();
        alert("Error al crear el plato");
        setErrors(errorData.errors || {});
      }

      const dat = await res.json();
      console.log("Plato creado:", dat);

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
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="title">Crear Nuevo Plato</h2>

      {/* Mostrar error si ocurre */}
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre del Plato
          </label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.nombre && <p className="error">{errors.nombre[0]}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Descripción
          </label>
          <textarea
            value={formData.descripcion}
            onChange={(e) =>
              setFormData({ ...formData, descripcion: e.target.value })
            }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
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
            value={formData.informacionNutricional}
            onChange={(e) =>
              setFormData({
                ...formData,
                informacionNutricional: e.target.value,
              })
            }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.informacionNutricional && (
            <p className="error">{errors.informacionNutricional[0]}</p>
          )}
        </div>

        {/*aca creo los check para que pueda selecionar las etiquetas */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Selecciones las tags
          </label>
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <div key={index} className="mr-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={tag.name}
                    checked={formData.tags.includes(tag.name)}
                    onChange={(e) => {
                      const { checked } = e.target;
                      setFormData((prev) => {
                        const newTags = checked
                          ? [...new Set([...prev.tags, tag.name])]
                          : prev.tags.filter((t) => t !== tag.name);
                        return { ...prev, tags: newTags };
                      });
                    }}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{tag.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/*aca se da la opcion de agregar un nueva tag */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Agrega una Nueva Tag si no existe
          </label>
          <input
            type="text"
            value={formData.nuevaTag}
            onChange={(e) =>
              setFormData({ ...formData, nuevaTag: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Nueva tag"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Precio
          </label>
          <input
            type="text"
            value={formData.precio}
            onChange={(e) =>
              setFormData({ ...formData, precio: e.target.value })
            }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            {loading ? "Creando..." : "Crear Plato"}
          </button>
        </div>
      </form>
    </div>
  );
}
