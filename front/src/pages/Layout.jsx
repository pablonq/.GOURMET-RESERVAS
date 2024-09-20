import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function Layout() {
  const { user, token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
 console.log(user);
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
          <Link to="/" className="nav-link">
            Home
          </Link>

          {user ? (
            <div className="flex items-center text-orange-400 space-x-4">
             Bienvenido {user.nombreRes ? user.nombreRes : user.nombreUsuario}

              {user.nombreRes  ? (
                <Link to="/dashboardRestaurante" className="nav-link">
                  Dashboard Restaurante
                </Link>
              ) : (
                <Link to="/dashboardUsuario" className="nav-link">
                  Dashboard Usuario
                </Link>
              )}

              <form onSubmit={handleLogout}>
                <button className="nav-link">Logout</button>
              </form>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/loginResturante" className="nav-link">
                Restaurantes
              </Link>
              <Link to="/loginUsuario" className="nav-link">
                Usuarios
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
