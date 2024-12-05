import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFileRestaurantes } from "../../../firebase/config";
import axios from "axios";
import PerfilRestauranteImagen from '../../../assets/PerfilRestaurante.png';
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
import NombreRestaurantImagen from '../../../assets/nombreRestaurant.png';
import CapacidadImagen from '../../../assets/capacidad.png';
import DescripcionImagen from '../../../assets/descripcion.png';
import TipoImagen from '../../../assets/tipo.png';
import DniImagen from '../../../assets/dni.png';


export default function RegistroRestaurante() {
  const [formData, setFormData] = useState({
    // Datos del Restaurante
    nombreRes: "",
    calle: "",
    altura: "",
    ciudad: "",
    provincia: "",
    pais: "Argentina",
    descripcion: "",
    tipo: "",
    telefono: "",
    email: "",
    contrasenia: "",
    contrasenia_confirmation: "",
    capacidadTotal: "",
    imagenUrl: null,
    aceptaEventos: "",

    // Datos del Dueño
    nombreDuenio: "",
    apellidoDuenio: "",
    fechaNacimientoDuenio: "",
    dniDuenio: "",
    emailDuenio: "",
    telefonoDuenio: "",

  });
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // Indicador de subida de archivo
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Cargar las provincias al montar el componente
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
    const provinciaId = e.target.value;
    setFormData({ ...formData, provincia: provinciaNombre, ciudad: "" });

    try {
      const response = await axios.get("https://apis.datos.gob.ar/georef/api/localidades", {
        params: { provincia: provinciaId, max: 100 }, // puedes ajustar el 'max' según la cantidad que necesites
      });
      setLocalidades(response.data.localidades);
    } catch (error) {
      console.error("Error al cargar las localidades:", error);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsUploading(true); // Establecer el indicador de subida de archivo en verdadero

    try {
      let imagenUrl = formData.imagenUrl;
      if (file) {
        imagenUrl = await uploadFileRestaurantes(file); // Inicializar la URL de la imagen con el valor actual del estado
        console.log(imagenUrl);
        setFormData((prev) => ({ ...prev, imagenUrl }));
      }

      const data = {
        // Datos del Restaurante
        nombreRes: formData.nombreRes,
        calle: formData.calle,
        altura: formData.altura,
        ciudad: formData.ciudad,
        provincia: formData.provincia,
        pais: formData.pais,

        descripcion: formData.descripcion,
        tipo: formData.tipo,
        telefono: formData.telefono,
        email: formData.email,
        contrasenia: formData.contrasenia,
        contrasenia_confirmation: formData.contrasenia_confirmation,
        capacidadTotal: formData.capacidadTotal,
        imagenUrl: imagenUrl,
        aceptaEventos: formData.aceptaEventos,

        // Datos del Dueño
        nombreDuenio: formData.nombreDuenio,
        apellidoDuenio: formData.apellidoDuenio,
        fechaNacimientoDuenio: formData.fechaNacimientoDuenio,
        dniDuenio: formData.dniDuenio,
        emailDuenio: formData.emailDuenio,
        telefonoDuenio: formData.telefonoDuenio,

      };

      /* try { */
      const res = await fetch("/api/restaurantes/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Asegúrate de que el servidor sepa que estás enviando JSON
        },
        body: JSON.stringify(data),
      });

      /* if (!res.ok)  */
      const result = await res.json();
      console.log(result);
      if (result.errors) {
        setErrors(result.errors);
        console.log(result);
      } else {
        console.log("Registro exitoso:", result);
        navigate("/LoginRestaurante");
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error);
    } finally {
      setIsUploading(false); // Restablecer el indicador de subida de archivo en falso
    }
  };

  return (
    <div className="relative z-10 flex justify-center mt-7">
      <div className="bg-[#242424] h-[770px] p-8 rounded-lg shadow-lg w-[650px] max-w-5xl flex">
        <div className="flex justify-center mb-16">
          <img src={PerfilRestauranteImagen} alt="Profile"
            className="absolute inset-y-0 ml-[570px] w-20 h-20 mt-10" />
        </div>

        <form onSubmit={handleRegister} className="w-1/2 mt-32 ml-10 space-y-6">
          <div className="flex space-x-4 mb-4">
            <div className="flex-1 relative">
              <img
                src={NombreRestaurantImagen}
                alt="Email Icon"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
              />
              <input
                required
                type="text"
                className="input-text pl-8"
                placeholder="Nombre Restaurante"
                value={formData.nombreRes || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nombreRes: e.target.value })
                }
              />
              {errors.nombreRes && <p className="error">{errors.nombreRes[0]}</p>}
            </div>
            <div className="flex-1 relative">
              <img
                src={CapacidadImagen}
                alt="Email Icon"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
              />
              <input
                required
                type="text"
                className="input-text pl-8"
                placeholder="Capacidad Total"
                value={formData.capacidadTotal || ""}
                onChange={(e) =>
                  setFormData({ ...formData, capacidadTotal: e.target.value })
                }
              />
              {errors.capacidadTotal && <p className="error">{errors.capacidadTotal[0]}</p>}
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
                value={formData.provincia || ""}
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
                disabled={!formData.provincia} // Deshabilita si no hay provincia seleccionada
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
                src={DescripcionImagen}
                alt="Email Icon"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
              />
              <input
                required
                type="text"
                className="input-text pl-8"
                placeholder="Descripción"
                value={formData.descripcion || ""}
                onChange={(e) =>
                  setFormData({ ...formData, descripcion: e.target.value })
                }
              />
              {errors.descripcion && <p className="error">{errors.descripcion[0]}</p>}
            </div>

            <div className="flex-1 relative">
              <img
                src={TipoImagen}
                alt="Email Icon"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
              />
              <select
                required
                className="input-provincia w-[245px] pl-8"
                value={formData.tipo || ""}
                onChange={(e) =>
                  setFormData({ ...formData, tipo: e.target.value })
                }
              >
                <option value="" disabled>Tipo de Restaurante</option>
                <option value="tematico">Temático</option>
                <option value="comida rapida">Comida rapida</option>
                <option value="buffet">Estilo buffet</option>
                <option value="gourmet">Gourmet</option>
                <option value="fusion">Fusión</option>
                <option value="familiar">familiar</option>
                <option value="de autor">De autor</option>
                <option value="bar restaurante">Bar restaurante</option>
                <option value="pizzeria">Pizzeria</option>
                <option value="parrilla">Parrilla</option>
                <option value="cafe restaurante">Cafe restaurante</option>


                {/* Agrega más opciones aquí según lo necesites */}
              </select>
              {errors.tipo && <p className="error">{errors.tipo[0]}</p>}
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="flex-1 relative">
              <img
                src={TelImagen}
                alt="Email Icon"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
              />
              <input
                required
                type="text"
                className="input-tel pl-8"
                placeholder="Teléfono Restaurante"
                value={formData.telefono || ""}
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
              />
              {errors.telefono && <p className="error">{errors.telefono[0]}</p>}
            </div>

            <div className="flex-1 relative">
              <img
                src={EmailImagen}
                alt="Email Icon"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
              />
              <input
                required
                type="email"
                className="input-text pl-8"
                placeholder="Email Restaurante"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && <p className="error">{errors.email[0]}</p>}
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="flex-1 relative">
              <img
                src={CandadoImagen}
                alt="Email Icon"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
              />
              <input
                required
                type="password"
                className="input-password pl-8"
                placeholder="Contraseña"
                value={formData.contrasenia || ""}
                onChange={(e) =>
                  setFormData({ ...formData, contrasenia: e.target.value })
                }
              />
              {errors.contrasenia && <p className="error">{errors.contrasenia[0]}</p>}
            </div>

            <div className="flex-1 relative">
              <img
                src={CandadoImagen}
                alt="Email Icon"
                className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
              />
              <input
                required
                type="password"
                className="input-password pl-8"
                placeholder="Confirmar Contraseña"
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

          <div className="flex space-x-4 mb-4">
              <div className="flex-1 relative">
              <img
                  src={NombreImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
            <input
              required
              type="text"
              className="input-text pl-8"
              placeholder="Nombre Dueño"
              value={formData.nombreDuenio || ""}
              onChange={(e) =>
                setFormData({ ...formData, nombreDuenio: e.target.value })
              }
            />
            {errors.nombreDuenio && <p className="error">{errors.nombreDuenio[0]}</p>}
          </div>

          <div className="flex-1 relative">
              <img
                  src={NombreImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
            <input
              required
              type="text"
              className="input-text pl-8"
              placeholder="Apellido Dueño"
              value={formData.apellidoDuenio || ""}
              onChange={(e) =>
                setFormData({ ...formData, apellidoDuenio: e.target.value })
              }
            />
            {errors.apellidoDuenio && <p className="error">{errors.apellidoDuenio[0]}</p>}
          </div>
          </div>

          <div className="flex space-x-4 mb-4">
                <div className="flex-1 relative">
                    <img
                        src={DniImagen}
                        alt="Email Icon"
                        className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                      />
                  <input
                    required
                    type="text"
                    className="input-text pl-8"
                    placeholder="DNI"
                    value={formData.dniDuenio || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, dniDuenio: e.target.value })
                    }
                  />
                  {errors.dniDuenio && <p className="error">{errors.dniDuenio[0]}</p>}
                </div>
          <div className="flex-1 relative">
              <img
                  src={CumpleImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
            <input
              required
              type="date"
              className="input-date pl-8"
              placeholder="Fecha de Nacimiento"
              value={formData.fechaNacimientoDuenio || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fechaNacimientoDuenio: e.target.value,
                })
              }
            />
            {errors.fechaNacimientoDuenio && <p className="error">{errors.fechaNacimientoDuenio[0]}</p>}
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
              required
              type="email"
              className="input-text pl-8"
              placeholder="Email Dueño"
              value={formData.emailDuenio || ""}
              onChange={(e) =>
                setFormData({ ...formData, emailDuenio: e.target.value })
              }
            />
            {errors.emailDuenio && <p className="error">{errors.emailDuenio[0]}</p>}
          </div>

          <div className="flex-1 relative">
              <img
                  src={TelImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
            <input
              required
              type="text"
              className="input-tel pl-8"
              placeholder="Teléfono Dueño"
              value={formData.telefonoDuenio || ""}
              onChange={(e) =>
                setFormData({ ...formData, telefonoDuenio: e.target.value })
              }
            />
            {errors.telefonoDuenio && <p className="error">{errors.telefonoDuenio[0]}</p>}
          </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="flex-1 relative mt-3">
              <label
                htmlFor="file-upload"
                className="cursor-pointer h-6 w-44   text-[#242424] font-verdana bg-white bg-opacity-50  px-4 rounded-lg hover:bg-opacity-100"
              >
                Imagen Restautante
              </label>
              <input
              id="file-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>


            <div className="flex-1 relative">
              <label className="ml-16 text-white ">¿Acepta eventos?</label>
              <div className="inline-flex items-center space-x-4 ml-20">
                <input
                  type="radio"
                  id="aceptaSi"
                  name="aceptaEventos"
                  value="si"
                  checked={formData.aceptaEventos === "si"}
                  onChange={(e) =>
                    setFormData({ ...formData, aceptaEventos: e.target.value })
                  }
                />
                <label htmlFor="aceptaSi" className="mr-4 text-white">Sí</label>

                <input
                  type="radio"
                  id="aceptaNo"
                  name="aceptaEventos"
                  value="no"
                  checked={formData.aceptaEventos === "no"}
                  onChange={(e) =>
                    setFormData({ ...formData, aceptaEventos: e.target.value })
                  }
                />
                <label htmlFor="aceptaNo" className="text-white">No</label>
              </div>
            </div>
          </div>

          {/* Sección de Datos del Dueño */}








          <div className="flex ml-[170px] mt-4">
            <button className="w-96 h-10 px-8 font-verdana cursor-pointer text-[#242424] rounded-lg bg-white bg-opacity-50 hover:bg-opacity-100" disabled={isUploading}>
              {isUploading ? "Guardando....." : "Registrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



