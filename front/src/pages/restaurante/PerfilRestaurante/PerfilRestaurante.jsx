import Title from "../../../component/Title/Title";
import { useState, useContext } from 'react'
import { AppContext } from "../../../Context/AppContext";

/**
 * Información del restaurante, horarios, menú, galería de fotos
 */

export default function PerfilRestaurante () {
  const { user, token } = useContext(AppContext);
  return (
    <div className="bg-slate-400">
      <Title text="Perfil restaurante" />
    </div>
  );
};

