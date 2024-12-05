import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFileUsuarios } from "../../../firebase/config";
import axios from "axios";
import PerfilImagen from '../../../assets/perfil.png';
import EmailImagen from '../../../assets/email.png';
import TelImagen from '../../../assets/phone.png';
import NombreImagen from '../../../assets/nombre.png';
import UsuarioImagen from '../../../assets/perfil.png';
import CumpleImagen from '../../../assets/cumple.png';
import CalleImagen from '../../../assets/calle.png';
import AlturaImagen from '../../../assets/altura.png';
import CiudadImagen from '../../../assets/ciudad.png';
import ProvinciaImagen from '../../../assets/provincia.png';
import CandadoImagen from '../../../assets/candado.png';
export default function RegistroUsuario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNac: "",
    email: "",
    telefono: "",
    calle: "",
    altura: "",
    ciudad: "",
    provincia: { id: "", nombre: "" },
    pais: "Argentina",
    nombreUsuario: "",
    contrasenia: "",
    contrasenia_confirmation: "",
    avatarUrl: null,
  });
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // Indicador de subida de archivo
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvincias = async () => {
      try {
        const response = await axios.get("https://apis.datos.gob.ar/georef/api/provincias");
        setProvincias(response.data.provincias);
      } catch (error) {
        console.error("Error al cargar las provincias:", error);
      }
    };
    fetchProvincias();
  }, []);

  // Cargar las localidades al seleccionar una provincia
  const handleProvinciaChange = async (e) => {
    const provinciaId = e.target.value; // ID de la provincia seleccionada
    const provinciaNombre = e.target.options[e.target.selectedIndex].text; // Nombre de la provincia seleccionada

    setFormData({
      ...formData,
      provincia: { id: provinciaId, nombre: provinciaNombre },
      ciudad: ""
    }); // Guardar tanto el ID como el nombre de la provincia en el estado

    try {
      const response = await axios.get("https://apis.datos.gob.ar/georef/api/localidades", {
        params: { provincia: provinciaId, max: 100 },
      });
      setLocalidades(response.data.localidades);
    } catch (error) {
      console.error("Error al cargar las localidades:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      let avatarUrl = formData.avatarUrl;
      if (file) {
        avatarUrl = await uploadFileUsuarios(file);
        setFormData((prev) => ({ ...prev, avatarUrl }));
      }

      const data = {
        ...formData,
        provincia: formData.provincia.nombre, // Enviar solo el nombre de la provincia al backend
        avatarUrl
      };

      const res = await fetch("/api/usuarios/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.errors) {
        setErrors(result.errors);
      } else {
        navigate("/LoginUsuario");
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
     <div className=" flex justify-center  items-center h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('src/assets/bg13.png')" }}>
      <div className="relative flex justify-center ">
        <div className="bg-[#242424] h-[600px] p-8 rounded-lg shadow-lg w-[650px] max-w-5xl flex">
        <div className="flex justify-center mb-16">
              <img src={PerfilImagen} alt="Profile"
                className="absolute inset-y-0 ml-[570px] w-20 h-20 mt-10" />
            </div>
          <form onSubmit={handleRegister} className="w-1/2 mt-32 ml-10 space-y-6">
            <div className="flex space-x-4 mb-4">
              <div className="flex-1 relative">
              <img
                  src={NombreImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-text pl-8"
                  type="text"
                  placeholder="Nombre"
                  value={formData.nombre || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
                {errors.nombre && <p className="error">{errors.nombre[0]}</p>}
              </div>

              <div className="flex-1 relative">
              <img
                  src={NombreImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-text pl-8"
                  type="text"
                  placeholder="Apellido"
                  value={formData.apellido || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, apellido: e.target.value })
                  }
                />
                {errors.apellido && <p className="error">{errors.apellido[0]}</p>}
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="flex-1 relative">
                <img
                  src={UsuarioImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-text pl-8"
                  type="text"
                  placeholder="Nombre de Usuario"
                  value={formData.nombreUsuario || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, nombreUsuario: e.target.value })
                  }
                />
                {errors.nombreUsuario && (
                  <p className="error">{errors.nombreUsuario[0]}</p>
                )}
              </div>
              <div className="flex-1 relative">
              <img
                  src={CumpleImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                
                  className="input-text pl-8"
                  type="date"
                  placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
                  value={formData.fechaNac || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, fechaNac: e.target.value })
                  }
                />
                {errors.fechaNac && <p className="error">{errors.fechaNac[0]}</p>}
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1 relative">
              <img
                  src={EmailImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-text pl-8"
                  type="text"
                  placeholder="Email"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && <p className="error">{errors.email[0]}</p>}
              </div>

              <div className="flex-1 relative">
              <img
                  src={TelImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-text pl-8"
                  type="text"
                  placeholder="Telefono"
                  value={formData.telefono || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                />
                {errors.telefono && <p className="error">{errors.telefono[0]}</p>}
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="flex-1 relative">
                <img
                  src={CalleImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input

                  required
                  type="text"
                  className="input-text pl-8"
                  placeholder="Calle"
                  value={formData.calle || ""}
                  onChange={(e) => setFormData({ ...formData, calle: e.target.value })}
                />
                {errors.calle && <p className="error">{errors.calle[0]}</p>}
              </div>
              <div className="flex-1 relative">
                <img
                  src={AlturaImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  required
                  type="text"
                  className="input-text pl-8"
                  placeholder="Altura"
                  value={formData.altura || ""}
                  onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
                />
                {errors.altura && <p className="error">{errors.altura[0]}</p>}
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1 relative">
                <img
                  src={ProvinciaImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <select
                  required
                  className="input-provincia w-[245px] pl-8"
                  value={formData.provincia.id || ""}
                  onChange={handleProvinciaChange}
                >
                  <option value="" disabled>Provincia</option>
                  {provincias.map((provincia) => (
                    <option key={provincia.id} value={provincia.id}>
                      {provincia.nombre}
                    </option>
                  ))}
                </select>
                {errors.provincia && <p className="error">{errors.provincia[0]}</p>}
              </div>

              <div className="flex-1 relative">
                <img
                  src={CiudadImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <select
                  required
                  className="input-ciudad pl-8 w-[245px]"
                  value={formData.ciudad || ""}
                  onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                  disabled={!formData.provincia.id}
                >
                  <option value="" disabled>Ciudad</option>
                  {localidades.map((localidad) => (
                    <option key={localidad.id} value={localidad.nombre}>
                      {localidad.nombre}
                    </option>
                  ))}
                </select>
                {errors.ciudad && <p className="error">{errors.ciudad[0]}</p>}
              </div>
            </div>



            <div className="flex space-x-4 mb-4">
              <div className="flex-1 relative">
              <img
                  src={CandadoImagen}
                  alt="password Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-password pl-8"
                  type="password"
                  placeholder="Password"
                  value={formData.contrasenia || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, contrasenia: e.target.value })
                  }
                />
                {errors.contrasenia && (
                  <p className="error">{errors.contrasenia[0]}</p>
                )}
              </div>

              <div className="flex-1 relative">
              <img
                  src={CandadoImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-password pl-8"
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
            </div>


            <div >
              <label
                htmlFor="file-upload"
                className="cursor-pointer h-7 w-44   text-[#242424] font-verdana bg-white bg-opacity-50 py-1 px-4 rounded-lg hover:bg-opacity-100"
              >
                Imagen Avatar
              </label>
              <input
                id="file-upload"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
              {errors.avatarUrl && <p className="error">{errors.avatarUrl[0]}</p>}
            </div>
            <div className="flex ml-[170px] mt-4">
              <button className="w-96 h-10 px-8 font-verdana cursor-pointer text-[#242424] rounded-lg bg-white bg-opacity-50 hover:bg-opacity-100" disabled={isUploading}>
                {isUploading ? "Guardando....." : "Registrarme"}
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );

}
