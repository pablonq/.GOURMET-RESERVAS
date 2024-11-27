import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import PerfilImagen from '../../assets/perfil.png';
import EmailImagen from '../../assets/email.png';
import CandadoImagen from '../../assets/candado.png';
import LogoImagen from '../../assets/LOGO-GOURMETReserva.png';
import VolverImagen from '../../assets/volver.png';

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
    <>
      <div className="relative z-10 mt-40 flex  items-center">
        <div className="bg-[#242424] h-[450px] p-8 rounded-lg shadow-lg w-full max-w-5xl flex">
          <div class="w-1/2 ml-6 pt-20">
            <div className="flex justify-center mb-16">
              <img src={PerfilImagen} alt="Profile"
                className="absolute inset-y-0 left-30 w-20 h-20 mt-14" />
            </div>

            <form onSubmit={handleLogin} className="w-64 mx-auto space-y-6">
              <div className="relative">
                <img
                  src={EmailImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-text pl-8"
                  required
                  type="text"
                  placeholder="Email"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && <p className="error">{errors.email[0]}</p>}
              </div>

              <div className="relative">
                <img
                  src={CandadoImagen}
                  alt="Email Icon"
                  className="absolute inset-y-0 left-0 w-5 h-5 my-auto"
                />
                <input
                  className="input-password pl-8"
                  required
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

              <button className="font-verdana cursor-pointer text-[#242424] px-16 rounded-lg bg-white bg-opacity-50 hover:bg-opacity-100 w-30 h-10">Iniciar session</button>
            </form>
            <div className="flex w-1/2 mx-auto space-y-6 m-4 justify-end">
              <a href="/registroUsuario" className="text-[#B6C6B9] font-verdana hover:text-[#DC493A] text-sm">
                {" "}
                Registrate Aqui
              </a>
            </div>
          </div>
          <div class="w-1/2 text-center flex flex-col justify-center px-6 text-white">
            <h2 class="text-7xl font-verdana mb-8">Bienvenido</h2>
            <img src={LogoImagen} alt="Logo" className="w-60 ml-20" />

          </div>

          <div className="absolute top-96 left-[500px] transform -translate-x-1/2 -translate-y-1/2">
            <a
              href="/"
              className="flex items-center text-white hover:text-[#DC493A] text-sm"
            >
              <img src={VolverImagen} alt="Volver" className="w-6 h-6 mr-3" />
              <span>Volver</span>
            </a>
          </div>
        </div>
      </div>
    </>

  );
}
