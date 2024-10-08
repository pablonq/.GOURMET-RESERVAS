import Title from "../../../component/Title/Title";
import { useState, useContext } from 'react'
import { AppContext } from "../../../Context/AppContext";

/**
 * Formulario para agregar, editar o eliminar platos, categorías y opciones especiales
 */
export default function EditarMenu () {
  const { user, token } = useContext(AppContext);
  return (
    <>
    
    <div className="bg-slate-400">
      <Title text="Editar Menu" />
    </div>
    </>
  );
};

