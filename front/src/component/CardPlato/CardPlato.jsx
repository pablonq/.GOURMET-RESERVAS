import React from 'react'

export default function CardPlato({ imagen, nombre, menu, onView }) {
  return (
    <div className="relative max-w-72 h-px-auto overflow-hidden bg-gray-800 rounded-2xl shadow-2xl group">


      <div >
        <img
          src={imagen}
          alt={`Imagen de ${nombre}`}
          className="w-full h-40 object-cover"
        />
      </div>




      <div className=" text-white p-3">
        <h3 className="text-lg  font-bold text-center mb-1">{nombre}</h3>



        <p className="font-light p-2 text-center text-base">Menu: {menu}</p>


      </div>
      <div className="flex justify-center items-center m-4">
        <button className="w-20 m-1 rounded-md p-1 text-center text-cyan-50  bg-neutral-950 self-center " onClick={onView}>Ver</button>

      </div>
    </div>
  );
};


