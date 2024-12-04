import Title from "../../../component/Title/Title";
import { useContext, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import RestauranteData from "../../../api/RestauranteData";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/Button/Button";
import IconoEliminar from "../../../assets/IconoEliminar";
import TooltipCustom from "../../../component/TooltipCustom/TooltipCustom";
import defaultAvatar from "../../../assets/default-avatar.jpg";
import IconoTelefono from "../../../assets/IconoTelefono";
import IconoEmail from "../../../assets/IconoEmail";
import PerfilRestauranteImagen from "../../../assets/PerfilRestaurante.png";
import IconoDescripcion from "../../../assets/IconoDescripcion";
import IconoPinMapa from "../../../assets/IconoPinMapa";
import IconoCalle from "../../../assets/IconoCalle";
import IconoTexto2 from "../../../component/IconoTexto2/IconoTexto2";
import IconoPais from "../../../assets/IconoPais";
import IconoProvincia from "../../../assets/IconoProvincia";
import IconoPastel from "../../../assets/IconoPastel";
import PersonasGroup from "../../../assets/PersonasGroup";
import IconoUsuario from "../../../assets/IconoUsuario";
import IconoDni from "../../../assets/IconoDni";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

export default function PerfilRestaurante() {
  const { restaurante, direccion, loading, duenio } = RestauranteData();

  const { user, token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function handleDelete(e) {
    e.preventDefault();
    const res = await fetch(`/api/restaurantes/borrarRestaurante/${user?.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setUser(null);
      setToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.reload();
    } else {
      setError(data.message || "Error al eliminar el restaurante");
    }
  }

  const handleDeleteWithConfirmation = (e) => {
    if (
      window.confirm(
        "¿Estás seguro de que deseas eliminar su perfil? Esta acción no se puede deshacer."
      )
    ) {
      handleDelete(e);
    }
  };

  if (loading) return <p>Cargando datos...</p>;

  return (
    <>
      <Title text="Perfil restaurante" />
      <div className="flex h-screen">
        <div className="text-center m-4 w-1/3 flex flex-col bg-white rounded-s shadow-md p-4 border border-t-4 border-t-[#DC493A] space-y-4">
          <div className="flex justify-center my-2 ">
            <img
              className="rounded-lg shadow-md "
              src={restaurante.imagen[0].imagenUrl || defaultAvatar}
              alt="imagen perfil restaurante"
            />
          </div>
          <h1 className="text-xl font-bold text-[#242424] mb-8">
            {restaurante.restaurante?.nombreRes || "Nombre no disponible"}
          </h1>
          <div className="mx-4  space-y-6 ">
            <div className="flex flex-col text-base text-left ">
              <div className="flex space-x-2 items-center">
                <IconoDescripcion width={"30"} height={"30"} />
                <strong> Descripcion: </strong>
              </div>
              <p className="ml-10">
                {restaurante.restaurante?.descripcion ||
                  "Descripcion no disponible"}
              </p>
            </div>
            <IconoTexto2
              icono={
                <img
                  src={PerfilRestauranteImagen}
                  alt="Profile"
                  className="w-6 h-6"
                />
              }
              titulo={"Tipo:"}
              descripcion={
                restaurante.restaurante?.tipo || "Tipo no disponible"
              }
            />
            <IconoTexto2
              icono={<IconoTelefono width={"24"} height={"24"} />}
              titulo={"Telefono:"}
              descripcion={
                restaurante.restaurante?.telefono || "Celular no disponible"
              }
            />
            <IconoTexto2
              icono={<IconoEmail width={"28"} height={"28"} />}
              titulo={"Email:"}
              descripcion={
                restaurante.restaurante?.email || "Email no disponible"
              }
            />
          </div>
        </div>
        <div className="w-2/3 bg-white flex flex-col">
          <div className="h-1/6 bg-white flex items-center justify-center rounded-s shadow-md p-2 m-4 border border-t-4 border-t-[#DC493A] ">
            <div className="flex justify-center items-center m-4 space-x-10">
              <Button
                onClick={() => navigate(`../editarRestaurante/${user?.id}`)}
                texto={"Editar Perfil"}
              />
              <TooltipCustom text="Eliminar">
                <button onClick={handleDeleteWithConfirmation}>
                  <IconoEliminar width={"24"} height={"24"} />
                </button>
              </TooltipCustom>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="w-2/3 bg-white flex flex-col items-center justify-center rounded-s shadow-md text-base m-4 border border-l-4 border-l-[#DC493A]">
              <h3 className="font-semibold mb-8 text-lg text-[#242424]">
                Detalles de la dirección
              </h3>
              <div className="grid grid-cols-2 gap-x-10 gap-y-4 ">
                <IconoTexto2
                  icono={<IconoCalle width="20" height="20" />}
                  titulo={"Calle:"}
                  descripcion={direccion[0]?.calle || "Calle no disponible"}
                />
                <IconoTexto2
                  icono={<IconoPinMapa width="20" height="20" />}
                  titulo={"Ciudad:"}
                  descripcion={direccion[0]?.ciudad || "Ciudad no disponible"}
                />
                <IconoTexto2
                  icono={<IconoProvincia width="22" height="22" />}
                  titulo={"Provincia:"}
                  descripcion={
                    direccion[0]?.provincia || "Provincia no disponible"
                  }
                />
                <IconoTexto2
                  icono={<IconoPais width="20" height="20" />}
                  titulo={" Pais:"}
                  descripcion={direccion[0]?.pais || "Pais no disponible"}
                />
              </div>
            </div>
            <div className="w-1/3 bg-white flex flex-col items-center justify-center rounded-s shadow-md p-4 m-4 border border-r-4 border-r-[#DC493A]">
              <h3 className="font-semibold mb-4  text-lg text-[#242424]">
                Información sobre el espacio
              </h3>
              <div className="p-4 space-y-4 ">
                <IconoTexto2
                  icono={<PersonasGroup  width="20" height="20"/>}
                  titulo={"Capacidad:"}
                  descripcion={
                    restaurante.restaurante?.capacidadTotal ||
                    "capacidad no disponible"
                  }
                />
                <IconoTexto2
                  icono={<IconoPastel width="20" height="20"/>}
                  titulo={"Acepta Eventos:"}
                  descripcion={
                    restaurante.restaurante?.aceptaEventos ||
                    "sin comentar"
                  }
                />
              </div>
            </div>
          </div>
          <div className="h-1/2 bg-white flex flex-col items-center rounded-s shadow-md p-4 m-4 border border-b-4 border-b-[#DC493A]">
            <h1 className="text-xl font-bold text-[#242424] mt-2">
              Datos del Dueño
            </h1>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-20">
              <IconoTexto2
                icono={<IconoUsuario width="20" height="20" />}
                titulo={"Nombre:"}
                descripcion={`${duenio.persona?.[0]?.nombre || ""} ${
                  duenio.persona?.[0]?.apellido || ""
                }`}
              />
              <IconoTexto2
                icono={<IconoDni width="20" height="20"/>}
                titulo={"DNI: "}
                descripcion={duenio?.dni || "DNI no disponible"}
              />
              <IconoTexto2
                icono={<IconoEmail width="20" height="20"/>}
                titulo={"Email: "}
                descripcion={
                  duenio.persona?.[0]?.email || "Email no disponible"
                }
              />
              <IconoTexto2
                icono={<IconoTelefono width="20" height="20"/>}
                titulo={"Telefono: "}
                descripcion={
                  duenio.persona?.[0]?.telefono || "Celular no disponible"
                }
              />
            </div>
          </div>
          {error && (
            <div className="text-center text-red-500 mt-2">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
      <LinkVolver color={"[#DC493A]"} colorHover={"[#B6C6B9]"} ruta={"/panelRestaurante/perfilRestaurante"} />
    </>
  );
}
