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
      tags: formData.tags.map(tag => parseInt(tag, 10)),
    };

    console.log("Datos enviados:", data);
    
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

        {/* Selección de tags */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Seleccione las tags
          </label>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <div key={tag.id} className="mr-4">
                <label className="inline-flex items-center">
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
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{tag.nombreTag}</span>
                </label>
              </div>
            ))}
          </div>
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
