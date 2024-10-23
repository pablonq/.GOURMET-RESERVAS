import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function LoginUsuario() {
  const { setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    contrasenia: "",
  });

  const [errors, setErrors] = useState({});

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch("/api/usuarios/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.errors) {
      setErrors(data.errors);
      console.log(data.errors);
    } else {
      console.log(data);
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser(data.user);
      navigate("/");
    }
  }

  return (
    <div>
      <h1 className="title">Acceso de Usuario</h1>

      <form onSubmit={handleLogin} className="w-1/2 mx-auto space-y-6">
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

        <button className="primary-btn">Iniciar session</button>
      </form>
      <div className="flex w-1/2 mx-auto space-y-6 m-4 justify-end">
        <a href="/registroUsuario" className="text-gray-800 font-semibold hover:text-blue-600 text-sm">
          {" "}
          Registrate Aqui
        </a>
      </div>
    </div>
  );
}
