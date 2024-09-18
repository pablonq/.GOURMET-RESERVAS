import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function LoginRestaurante() {
  /* const { setToken } = useContext(AppContext); */
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    contrasenia: "",
  });

  const [errors, setErrors] = useState({});

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch("/api/restaurantes/login", {
      method: "post",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.errors) {
      setErrors(data.errors);
      console.log(data.errors);
    } else {
      console.log(data);
      /* localStorage.setItem("token", data.token);
      setToken(data.token);
      navigate("/"); */
    }
  }

  return (
    <>
      <h1 className="title">Accedé a tu Cuenta</h1>

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
          {errors.contrasenia && <p className="error">{errors.contrasenia[0]}</p>}
        </div>

        <button className="primary-btn">Login</button>
      </form>
    </>
  );
}