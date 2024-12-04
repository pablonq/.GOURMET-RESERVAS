/* eslint-disable react/prop-types */
import { useState } from "react";
import { uploadFileUsuarios } from "../../../firebase/config";
import IconoResenia from "../../../assets/IconoResenia";
import Button from "../../../component/Button/Button";

const EscribirResenia = ({ reserva, closeModal }) => {
  const [calificacion, setCalificacion] = useState(1);
  const [comentario, setComentario] = useState("");
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(null);

  const handleStarClick = (rating) => {
    setCalificacion(rating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imagenUrl = "";
      if (imagen) {
        imagenUrl = await uploadFileUsuarios(imagen);
      }

      //console.log(imagenUrl);

      const response = await fetch("/api/restaurantes/crearUnaResenia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          calificacion,
          comentario,
          idRestaurante: reserva.idRestaurante,
          idUsuario: reserva.idUsuario,
          idReserva: reserva.id,
          imagen: imagenUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }

      closeModal();
    } catch {
      setError("Error al enviar la reseña. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded border-l-[#DC493A] border-l-4">
        <div className="flex space-x-2 items-center justify-center">
          <IconoResenia width={"24"} height={"24"} />
          <h3 className="font-semibold text-lg">Deja tu Reseña</h3>
        </div>
        {error && <p className="text-[#DC493A]">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4">
          <p className="font-normal text-[#242424]">Calificacion</p>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                className={`text-2xl ${
                  star <= calificacion ? "text-[#DC493A]" : "text-gray-400"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Deja tu comentario..."
            required
            className="p-2 mb-2 w-full input-style"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
            className="mb-2"
          />
          <div className="flex justify-between p-2">
            <button
              type="button"
              onClick={closeModal}
              className="text-white text-center rounded-md bg-[#DC493A]  px-4 hover:bg-[#B6C6B9]"
            >
              Cancelar
            </button>
            <Button texto={"Enviar Reseña"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EscribirResenia;
