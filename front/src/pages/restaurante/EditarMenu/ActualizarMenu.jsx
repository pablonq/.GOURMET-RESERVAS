import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";

export default function ActualizarMenu() {
  const { user, token } = useContext(AppContext);
  const { menuId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tipo: "",
    imagen: null,
    idRestaurante: user?.id,
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  async function getMenu() {
    /* e.preventDefault(); */
    const res = await fetch(`/api/restaurantes/mostrarMenu/${menuId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data.nombre);

    if (res.ok) {
      setFormData({
        nombre: data.nombre,
        descripcion: data.descripcion,
        tipo: data.tipo,
        imagen: data.imagen,
        idRestaurante: data.idRestaurante, 
      })
    }
  }

      async function handleUpdate(e) {
        e.preventDefault();
        let imagen = formData.imagen;
        if (file) {
          imagen = await uploadFileRestaurantes(file);
          setFormData((prev) => ({ ...prev, imagen }));
        }
        const updatedData = {
          ...formData,
          imagen,  // Actualiza la imagen si fue modificada
        };    
        const res = await fetch(`/api/restaurantes/actualizarMenu/${menuId}`, {
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
         console.log("Menu actualizado:", data);
         navigate("/panelRestaurante/editarMenu");
       } else {
         console.error("Error al actualizar el menú");
         setErrors(data.errors || {});  // Mostrar los errores si ocurren
       } 
      }
        useEffect(() => {
          getMenu();
        }, []);
  return (
    <>
    <div className="title">Actualizar {menuId}</div>

    <form onSubmit={handleUpdate} className="w-1/2 mx-auto space-y-6">
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
        
          value={formData.nombre}
          onChange={(e) =>
            setFormData({ ...formData, nombre: e.target.value })
          }
        />
        {errors.nombre && <p className="error">{errors.nombre[0]}</p>}
      </div>
      <div>
        <textarea
        rows="4"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={(e) =>
          setFormData({ ...formData, descripcion: e.target.value })}
        ></textarea>
        {errors.descripcion && <p className="error">{errors.descripcion[0]}</p>}
      </div>
      <div>
        <label htmlFor="tipo">Tipo:</label>
        <input
          type="text"
          placeholder="Tipo"
        
          value={formData.tipo}
          onChange={(e) =>
            setFormData({ ...formData, tipo: e.target.value })
          }
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
            /* required */
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="primary-btn">Actualizar</button>
        </form>
</>
  );
}