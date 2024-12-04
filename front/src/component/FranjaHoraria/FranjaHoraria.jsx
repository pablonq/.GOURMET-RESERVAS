/* eslint-disable react/prop-types */
const FranjaHoraria = ({
  title = "Franja horaria",
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
}) => {
  return (
    <div className="space-y-2 border-dotted border-2 p-2 mx-2">
      <h5 className="text-sm font-semibold text-[#DC493A] text-center">
        {title}
      </h5>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm text-gray-600">Inicio</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => onStartTimeChange(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-[#DC493A]  focus:border-[#DC493A]"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Fin</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => onEndTimeChange(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-[#DC493A]  focus:border-[#DC493A] "
          />
        </div>
      </div>
    </div>
  );
};

export default FranjaHoraria;
