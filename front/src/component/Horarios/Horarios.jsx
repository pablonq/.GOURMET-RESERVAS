/* eslint-disable react/prop-types */
import { useState } from "react";
const Horarios = ({ horarios }) => {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const toggleMostrarTodos = () => setMostrarTodos(!mostrarTodos);

  return (
    <div className="p-2">
      {(mostrarTodos ? horarios : horarios.slice(0, 1)).map(
        (atencion, index) => (
          <div key={index} className="border-b border-gray-300 mb-4 pb-4 flex justify-evenly">
            <h3 className="font-semibold text-sm text-gray-700 text-center content-center">
              {atencion.dia}
            </h3>
            <div className="flex">
              {atencion.horarios.map(
                (horario, i) =>
                  horario.inicio &&
                  horario.fin && (
                    <div key={i} className="text-center flex flex-row mr-2  border-r">
                      <div className="bg-[#DC493A] text-white font-medium text-xs rounded-md mb-2 mx-2 p-1">
                        {horario.inicio}
                      </div>
                      <div className="bg-[#DC493A] text-white font-medium text-xs rounded-md mx-2  mb-2 p-1">
                        {horario.fin}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        )
      )}
      <div className="text-center">
        <button
          onClick={toggleMostrarTodos}
          className=" text-zinc-800  hover:text-[#DC493A]"
        >
          {mostrarTodos ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

export default Horarios;
