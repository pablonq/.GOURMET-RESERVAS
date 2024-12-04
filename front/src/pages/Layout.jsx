import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ImagenPerfil from "../component/ImagenPerfil/ImagenPerfil";
import defaultAvatar from "../assets/default-avatar.jpg";
import logoImagen from '../assets/logo-gourmet.png';

export default function Layout() {
  const { user, token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  async function handleLogout(e) {
    e.preventDefault();

    const logoutEndpoint =
      user.rol === "restaurante"
        ? "/api/logout/restaurante"
        : "/api/logout/usuario";

    const res = await fetch(logoutEndpoint, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  }

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <header>
        <nav>
          <Link
            to="/"
            className="font-semibold text-lg text-[#DC493A]"
          >
            <img src={logoImagen} className="h-8"/>
          </Link>
          <div className="flex  items-center  space-x-4">
            {user ? (
              <>
                {user.rol === "usuario" && (
                  <>
                    <Link
                      to="/misReservas"
                      className={`px-4 ${
                        isActive("/misReservas")
                          ? " text-[#DC493A] bg-white rounded-md "
                          : "text-white"
                      } hover:text-[#B6C6B9]`}
                    >
                      Mis Reservas
                    </Link>
                    <Link
                      to="/perfilUsuario"
                      className={`px-4 ${
                        isActive("/perfilUsuario")
                          ? "text-[#DC493A] bg-white rounded-md"
                          : "text-white"
                      } hover:text-[#B6C6B9]`}
                    >
                      Mi Perfil
                    </Link>
                  </>
                )}
                <div className="flex items-center justify-center mx-8 font-light text-[#B6C6B9]">
                  Bienvenido{" "}
                  {user.rol === "restaurante"
                    ? user.nombreRes
                    : user.nombreUsuario}
                  {user.rol === "usuario" && (
                    <ImagenPerfil
                      src={user?.avatarUrl || defaultAvatar}
                      textAlt={"imagen perfil usuario"}
                      isSmall={true}
                    />
                  )}
                </div>
                <form onSubmit={handleLogout}>
                  <button className="nav-link text-white hover:text-[#B6C6B9] hover:bg-[#DC493A]">Logout</button>
                </form>
              </>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/loginRestaurante"
                  className={`px-4 py-2 ${
                    isActive("/loginRestaurante")
                      ? "bg-white  text-[#DC493A] rounded-md "
                      : "text-white"
                  } hover:text-[#B6C6B9]`}
                >
                  Restaurantes
                </Link>

                <Link
                  to="/loginUsuario"
                  className={`px-4 py-2 ${
                    isActive("/loginUsuario") ? "bg-white text-[#DC493A] rounded-md " : "text-white "
                  }hover:text-[#B6C6B9]`}
                >
                  Usuarios
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-grow w-full overflow-y-auto">
      <div className="max-h-[calc(100vh-200px)]">
          <Outlet />
        </div>
      </main>
      <footer className="bg-[#242424] text-white p-4 text-center">
        <p>© 2024 .GourmetReservas Todos los derechos reservados </p>
      </footer>
      </div>
    </>
  );
}
