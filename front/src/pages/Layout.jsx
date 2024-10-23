import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

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
            className="nav-link font-semibold text-lg text-orange-400"
          >
            .GourmetReservas
          </Link>

          {user ? (
            <div className="flex items-center font-light text-orange-400 space-x-4">
              Bienvenido{" "}
              {user.rol === "restaurante" ? user.nombreRes : user.nombreUsuario}
              <form onSubmit={handleLogout}>
                <button className="nav-link">Logout</button>
              </form>
            </div>
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
        </nav>
      </header>

      <main className="flex-1 w-full min-h-screen">
        <div className="p-4">
          <Outlet />
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 .GourmetReservas Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
