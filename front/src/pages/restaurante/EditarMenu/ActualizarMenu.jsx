import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";
import Title from "../../../component/Title/Title";
import FormInput from "../../../component/FormInput/FormInput";
import Button from "../../../component/Button/Button";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

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
      });
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
      imagen,
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
      setErrors(data.errors || {});
    }
  }
  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        <Title text={`Actualizar datos del menu: ${menuId}`} />
        <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-s  m-4 border border-t-4 border-t-[#DC493A]">
          <form onSubmit={handleUpdate} className=" mx-auto space-y-6">
            <div>
              <FormInput
                label="Nombre:"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                required
                errorMessage={errors.nombre?.[0] || ""}
              />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <label className="text-xs w-1/3">Descripción</label>
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
            <div>
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
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <Button texto={"Actualizar"} />
          </form>
        </div>
        <LinkVolver
          color={"[#DC493A]"}
          colorHover={"[#B6C6B9]"}
          ruta={`/panelRestaurante/mostrarMenu/${menuId}`}
        />
      </div>
    </>
  );
}
