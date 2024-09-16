import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistroUsuario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNac: "",
    email: "",
    telefono: "",
    ciudad: "",
    nombreUsuario: "",
    contrasenia: "",
    contrasenia_confirmation: "",
    avatar: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    
    /* Object.keys(formData).forEach(key => {
      if (key !== 'avatar' || formData[key]) {
        form.append(key, formData[key]);
      }
    }); */

    /* try { */
      const res = await fetch("/api/usuarios/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      /* if (!res.ok)  */
        const data = await res.json();
        if (data.errors) {
          setErrors(data.errors); 
          console.log(data);

        }
  }

  

  return (
    <>
      <h1 className="title">Registrar nueva cuenta</h1>:

      <form onSubmit={handleRegister} className="w-1/2 mx-auto space-y-6">
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={formData.nombre || ""}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          />
          {errors.nombre && <p className="error">{errors.nombre[0]}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Apellido"
            value={formData.apellido || ""}
            onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
          />
          {errors.apellido && <p className="error">{errors.apellido[0]}</p>}
        </div>
        <div>
          <input
            type="date"
            placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
            value={formData.fechaNac || ""}
            onChange={(e) => setFormData({ ...formData, fechaNac: e.target.value })}
          />
          {errors.fechaNac && <p className="error">{errors.fechaNac[0]}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            value={formData.email || ""}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <p className="error">{errors.email[0]}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Telefono"
            value={formData.telefono || ""}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
          />
          {errors.telefono && <p className="error">{errors.telefono[0]}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Ciudad"
            value={formData.ciudad || ""}
            onChange={(e) =>
              setFormData({ ...formData, ciudad: e.target.value })
            }
          />
          {errors.ciudad && <p className="error">{errors.ciudad[0]}</p>}
        </div>
            <div>
        <input
            type="text"
            placeholder="Nombre de Usuario"
            value={formData.nombreUsuario || ""}
            onChange={(e) =>
              setFormData({ ...formData, nombreUsuario: e.target.value })
            }
          />
          {errors.nombreUsuario && <p className="error">{errors.nombreUsuario[0]}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={formData.contrasenia || ""}
            onChange={(e) =>
              setFormData({ ...formData, contrasenia: e.target.value })
            }
          />
          {errors.contrasenia && <p className="error">{errors.contrasenia[0]}</p>}
        </div>

        <div>
          <input
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

        <div>
          <input
            type="file"
            accept="image/*"
            
            onChange={(e) =>
              setFormData({ ...formData, avatar: e.target.files[0] })
            }
          />
          {errors.avatar && <p className="error">{errors.avatar[0]}</p>}
        </div> 

        <button className="primary-btn">Registrarme</button>
      </form>
    </>
  );
}