/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
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
    imagen: null,
    idRestaurante: user?.id,
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

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

      navigate("/panelRestaurante/editarMenu");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    <div>
      <Title text="Crear un nuevo Menu" />
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-s  m-4 border border-t-4 border-t-[#DC493A]">
        <h2 className="title"> Nuevo Menú</h2>

        {/* Mostrar error si ocurre */}
        {error && <p className="text-[#DC493A]">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="Nombre del Menú"
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
              label="Tipo de Menú"
              placeholder="Tipo"
              value={formData.tipo}
              onChange={(e) =>
                setFormData({ ...formData, tipo: e.target.value })
              }
              required
              errorMessage={errors.tipo?.[0] || ""}
            />
          </div>

          <div className="mb-4">
            <FormInput
              label="Imagen del Menú"
              type="file"
              accept={"image/*"}
              onChange={(e) => setFile(e.target.files[0])
              }
              required
            />
          </div>

          <div className="flex justify-center">
            <Button  disabled={loading} texto={loading ? "Creando..." : "Crear Menú"} type={"submit"}/>
          </div>
        </form>
      </div>
      <LinkVolver color={"[#DC493A]"} colorHover={"[#B6C6B9]"} ruta={"/panelRestaurante/editarMenu"} />
      </div>
    </>
  );
}
