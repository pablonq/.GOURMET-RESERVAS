import { useNavigate } from "react-router-dom";
import ListaCard from "../component/ListaCard/ListaCard";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import Loading from "../component/Loading/Loading";

const Home = () => {
  const { user, loading } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      const redirectPath =
        user.rol === "restaurante" ? "/panelRestaurante" : "/panelUsuario";
      navigate(redirectPath, { replace: true });
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <div><Loading/></div>;
  }

  if (user === null) {
    return (
      <div>
        <header
          className="relative bg-cover bg-center h-64 text-white"
          style={{ backgroundImage: "url('src/assets/bg7.png')" }}
        >
          <div className="absolute inset-0 bg-[#1A2F2A] bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl font-bold">
              Descubre tu próxima experiencia gastronómica
            </h1>
            <p className="text-lg mt-2">
              Reserva tu mesa en segundos, vive momentos inolvidables.
            </p>
          </div>
        </header>

        <section className="flex flex-row justify-around p-6 text-center text-[#1A2F2A]">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">
              ¿Eres dueño de un restaurante?
            </h2>
            <p className="mt-2">
              Únete a nuestra plataforma y conecta con más clientes.
            </p>
            <button
              className="mt-3 px-4 py-2 bg-[#DC493A] text-white rounded hover:bg-[#DC493A]"
              onClick={() => navigate("/registroRestaurante")}
            >
              Accede como Restaurante
            </button>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">¿Buscas tu lugar ideal?</h2>
            <p className="mt-2">
              Regístrate ahora y descubre los mejores restaurantes.
            </p>
            <button
              className="mt-3 px-4 py-2 bg-[#B6C6B9] text-white rounded hover:bg-[#B6C6B9]"
              onClick={() => navigate("/registroUsuario")}
            >
              Crear Cuenta
            </button>
          </div>
        </section>
        <section className="p-4">
          <ListaCard />
        </section>
      </div>
    );
  }
  return null;
};

export default Home;
