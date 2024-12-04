import Title from "../../../component/Title/Title";
import { AppContext } from "../../../Context/AppContext";
import { useContext, useState } from "react";
import UsuarioData from "../../../api/UsuarioData";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/Button/Button";
import TooltipCustom from "../../../component/TooltipCustom/TooltipCustom";
import IconoEliminar from "../../../assets/IconoEliminar";
import IconoTexto2 from "../../../component/IconoTexto2/IconoTexto2";
import IconoUsuario from "../../../assets/IconoUsuario";
import IconoEmail from "../../../assets/IconoEmail";
import IconoTelefono from "../../../assets/IconoTelefono";
import IconoPinMapa from "../../../assets/IconoPinMapa";
import IconoMapa from "../../../assets/IconoMapa";
import IconoProvincia from "../../../assets/IconoProvincia";
import IconoPais from "../../../assets/IconoPais";
import LinkVolver from "../../../component/LinkVolver/LinkVolver";

const Perfil = () => {
  const { user, token, setUser, setToken } = useContext(AppContext);

  const [error, setError] = useState(null);
  const { direccionUsuario, usuario } = UsuarioData();
  const navigate = useNavigate();

  async function handleDelete(e) {
    e.preventDefault();

    const res = await fetch(`/api/usuarios/borrarUsuario/${user?.id}`, {
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
      setError(data.message || "Error al eliminar el usuario");
    }
  }
  const handleDeleteWithConfirmation = (e) => {
    if (
      window.confirm(
        "¿Estás seguro de que deseas eliminar tu perfil? Esta acción no se puede deshacer."
      )
    ) {
      handleDelete(e);
    }
  };

  return (
    <>
      <div className="mx-4">
        <Title text="Mi perfil" />
      </div>
      <div className="flex justify-center">
      <div className="flex justify-around items-center m-4 bg-white w-2/3 rounded-s shadow-md p-4  border border-t-4 border-t-[#DC493A]">
        <div className="flex w-60 h-60 justify-center">
          {usuario?.usuario?.avatarUrl && (
            <img
              src={usuario.usuario.avatarUrl}
              alt={`Imagen de ${usuario.usuario.nombreUsuario}`}
              className="rounded-lg shadow-md "
            />
          )}
        </div>
        <div className="text-center mt-4 space-y-6">
          <h1 className="text-xl font-bold">
            {usuario.persona?.nombre || "Nombre no disponible"}{" "}
            {usuario.persona?.apellido || ""}
          </h1>
          <IconoTexto2
            icono={<IconoUsuario width="20" height="20" />}
            titulo={"Usuario:"}
            descripcion={
              usuario?.usuario?.nombreUsuario || "Usuario no disponible"
            }
          />
          <IconoTexto2
            icono={<IconoEmail width="20" height="20" />}
            titulo={"Email:"}
            descripcion={usuario.persona?.email || "Email no disponible"}
          />
          <IconoTexto2
            icono={<IconoTelefono width="20" height="20" />}
            titulo={"Telefono:"}
            descripcion={usuario.persona?.telefono || "Celular no disponible"}
          />
          <IconoTexto2
            icono={<IconoMapa width="20" height="20" />}
            titulo={"Dirección:"}
            descripcion={` ${direccionUsuario?.calle || "Calle no disponible"}
              ${direccionUsuario?.altura || ""}`}
          />
          <IconoTexto2
            icono={<IconoPinMapa width="20" height="20" />}
            titulo={"Ciudad:"}
            descripcion={direccionUsuario?.ciudad || "Ciudad no disponible"}
          />
          <IconoTexto2
            icono={<IconoProvincia width="20" height="20" />}
            titulo={"Provincia:"}
            descripcion={
              direccionUsuario?.provincia || "Provincia no disponible"
            }
          />
          <IconoTexto2
            icono={<IconoPais width="20" height="20" />}
            titulo={"Pais:"}
            descripcion={direccionUsuario?.pais || "Pais no disponible"}
          />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <Button
            onClick={() => navigate(`/editarUsuario/${user?.id}`)}
            texto={"Editar Perfil"}
          />
          <TooltipCustom text="Eliminar">
            <button onClick={handleDeleteWithConfirmation}>
              <IconoEliminar width={"24"} height={"24"} />
            </button>
          </TooltipCustom>
        </div>

        {error && (
          <div className="text-center text-red-500 mt-2">
            <p>{error}</p>
          </div>
        )}
      </div>
      </div>
      <div className="p-4">
      <LinkVolver
          color={"[#DC493A]"}
          colorHover={"[#B6C6B9]"}
          ruta={`/panelUsuario`}
        />
        </div>
    </>
  );
};

export default Perfil;
