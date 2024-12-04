import { useNavigate } from "react-router-dom";
import ListaCard from "../component/ListaCard/ListaCard";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import Loading from "../component/Loading/Loading";
import Logo from "../assets/Logo.png"

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
          className="relative bg-cover bg-center h-80 text-white"
          style={{ backgroundImage: "url('src/assets/bg7.png')" }}
        >
          <div className="absolute inset-0 bg-[#1A2F2A] bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <img className="h-20 w-20" src={Logo}></img>
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
              Crear una cuenta Restaurante
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
        <section    className="relative bg-cover bg-center h-20 text-white "
          style={{ backgroundImage: "url('src/assets/bg7.png')" }}>
         <div className="absolute inset-0 bg-[#1A2F2A] bg-opacity-40 flex justify-center items-center"><h2 className="text-xl font-semibold">Explora un mundo de restaurantes y vive nuevas experiencias.</h2></div>
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
