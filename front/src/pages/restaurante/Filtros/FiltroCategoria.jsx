/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const FiltroCategoria = ({ filtroTags, setFiltroTags }) => {
  const [tags, setTags] = useState([]);
  const [mostrarTodas, setMostrarTodas] = useState(false);

  useEffect(() => {
    async function obtenerTags() {
      const res = await fetch("/api/restaurantes/traerTags");
      const data = await res.json();
      if (res.ok) {
        setTags(data);
      }
    }
    obtenerTags();
  }, []);

  const handleTagChange = (tagId) => {
    if (filtroTags.includes(tagId)) {
      setFiltroTags(filtroTags.filter((id) => id !== tagId));
    } else {
      setFiltroTags([...filtroTags, tagId]);
    }
  };

  const tagsAMostrar = mostrarTodas ? tags : tags.slice(0, 5);

  return (
    <div className="w-3/4">
      <div className="w-full p-2 font-medium text-neutral-700">Categoría</div>
      {tagsAMostrar.map((tag) => (
        <label key={tag.id} className=" ml-4 last:flex items-center">
          <input
            type="checkbox"
            checked={filtroTags.includes(tag.id)}
            onChange={() => handleTagChange(tag.id)}
          />
          <span className="ml-2">{tag.nombreTag}</span>
        </label>
      ))}
      <button
        className="text-orange-400 ml-2 "
        onClick={() => setMostrarTodas(!mostrarTodas)}
      >
        {mostrarTodas ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default FiltroCategoria;
