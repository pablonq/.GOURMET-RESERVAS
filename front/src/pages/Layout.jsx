import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ImagenPerfil from "../component/ImagenPerfil/ImagenPerfil";
import defaultAvatar from "../assets/default-avatar.jpg";

export default function Layout() {
  const { user, token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  //console.log(user);
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
      <header>
        <nav>
          <Link
            to="/"
            className="nav-link font-semibold text-lg text-[#B7C7BA]"
          >
            .GourmetReservas
          </Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.rol === "usuario" && (
                  <>
                    <Link
                      to="/misReservas"
                      className={`hover:text-blue-300 ${
                        isActive("/misReservas")
                          ? "text-orange-400"
                          : "text-white"
                      }`}
                    >
                      Mis Reservas
                    </Link>
                    <Link
                      to="panelUsuario/perfilUsuario"
                      className={`hover:text-blue-300 ${
                        isActive("/perfilUsuario")
                          ? "text-orange-400"
                          : "text-white"
                      }`}
                    >
                      Mi Perfil
                    </Link>
                  </>
                )}
                <div className="flex items-center justify-center mx-8 font-light text-gray-400 ">
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
                  <button className="nav-link text-white">Logout</button>
                </form>
              </>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/loginRestaurante"
                  className={`hover:text-blue-300 ${
                    isActive("/loginRestaurante")
                      ? "text-orange-400"
                      : "text-white"
                  }`}
                >
                  Restaurantes
                </Link>

                <Link
                  to="/loginUsuario"
                  className={`hover:text-blue-300 ${
                    isActive("/loginUsuario") ? "text-orange-400" : "text-white"
                  }`}
                >
                  Usuarios
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-1 w-full min-h-screen">
        <div className="p-4 bg-[#B7C7BA]">
          <Outlet />
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 .GourmetReservas Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
