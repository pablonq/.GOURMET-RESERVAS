/* eslint-disable react/prop-types */
import { useState } from "react";
import Title from "../../../component/Title/Title";
import { uploadFileUsuarios } from "../../../firebase/config";

const EscribirResenia = ({ reserva, closeModal }) => {
  const [calificacion, setCalificacion] = useState(1);
  const [comentario, setComentario] = useState("");
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imagenUrl = "";
      if (imagen) {
        imagenUrl = await uploadFileUsuarios(imagen);
      }

      console.log(imagenUrl);

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
          imagen:imagenUrl,
  
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
      <div className="bg-white p-6 rounded">
        <Title text="Deja tu Reseña" />
        {error && <p className="text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="number"
            name="calificacion"
            min="1"
            max="5"
            value={calificacion}
            onChange={(e) => setCalificacion(Number(e.target.value))}
            required
            placeholder="Calificación (1-5)"
            className="border p-2 mb-2 w-full"
          />
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Deja tu comentario..."
            required
            className="border p-2 mb-2 w-full"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
            className="mb-2"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-slate-400 hover:bg-orange-400 text-white px-4 py-2 rounded"
            >
              Enviar Reseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EscribirResenia;
