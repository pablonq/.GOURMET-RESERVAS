import React, { useState, useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";

export default function CrearMenu() {
  const { user, token } = useContext(AppContext);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tipo: "",
    imagen: null,
    idRestaurante: user?.id,
  });
  
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();  // Para redirigir después de crear el menú

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
      tipo: formData.tipo,
      imagen: imagen,
      idRestaurante: user?.id,
    };

    try {
      const res = await fetch("/api/restaurantes/crearMenu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        alert("Error al crear el menú");
      }

      const dat = await res.json();
      console.log("Menu creado:", dat);
      
      // Redirigir al usuario a la lista de menús después de crear
      navigate("/panelRestaurante/editarMenu");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="title">Crear Nuevo Menú</h2>

      {/* Mostrar error si ocurre */}
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre del Menú
          </label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
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
            onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
           {errors.descripcion && <p className="error">{errors.descripcion[0]}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Tipo de Menú
          </label>
          <input
            type="text"
            value={formData.tipo}
            onChange={(e) => setFormData({...formData, tipo: e.target.value})}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
           {errors.tipo && <p className="error">{errors.tipo[0]}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Imagen del Menú
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
            {loading ? "Creando..." : "Crear Menú"}
          </button>
        </div>
      </form>
    </div>
  );
}

