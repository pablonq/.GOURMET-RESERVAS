/* eslint-disable react/prop-types */
const VistaReserva = ({ reserva, mesas, usuario }) => {
  const totalMesas = mesas.length;
  const totalPersonas = mesas.reduce(
    (acc, mesa) => acc + mesa.cantidadPersonas,
    0
  );

  const conteoMesas = mesas.reduce((acc, mesa) => {
    acc[mesa.cantidadPersonas] = (acc[mesa.cantidadPersonas] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex items-center m-1 justify-between border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-md">
      <div className="flex-1 ">
        <p className="font-semibold">Fecha:</p>
        <p className="font-light text-sm">{reserva.fechaReserva}</p>
      </div>
      <div className="flex-1">
        <p className="font-semibold">Hora:</p>
        <p className="font-light text-sm">{reserva.horaReserva}</p>
      </div>
      <div className="flex-1">
        <p className="font-semibold">Estado De reserva:</p>
        <p
          className={`font-light text-sm ${
            reserva.estado === "cancelada"
              ? "text-red-500"
              : reserva.estado === "procesada"
              ? "text-green-500"
              : ""
          }`}
        >
          {reserva.estado}
        </p>
      </div>
      <div className="flex-1">
        <p className="font-semibold">Comentarios</p>
        <p className="font-light text-sm">{reserva.notaEspecial}</p>
      </div>

      <div className="mt-2">
        <h3 className="font-semibold">Resumen de Mesas:</h3>
        <p className="font-semibold text-sm ">Total Mesas: {totalMesas}</p>
        <p className="font-semibold  text-sm">
          Total Personas: {totalPersonas}
        </p>

        {Object.entries(conteoMesas).map(([cantidad, total]) => (
          <p className="font-light text-sm" key={cantidad}>
            {total} mesa(s) de {cantidad} persona(s)
          </p>
        ))}
      </div>

      <div className="mt-2">
        <h3 className="font-semibold">Datos del usuario:</h3>
        <p className="font-light text-sm ">
          {" "}
          <strong>Nombre:</strong>
          {usuario?.nombre}
        </p>
        <p className="font-light text-sm">
          <strong>email:</strong> {usuario?.email}
        </p>
        <p className="font-light  text-sm">
          <strong>Telefono: </strong>
          {usuario?.telefono}
        </p>
      </div>
    </div>
  );
};

export default VistaReserva;
