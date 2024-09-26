/* eslint-disable react/prop-types */
const CardDashboard = ({ title, contenido }) => {
  return (
    <div className="bg-gray-400 rounded-lg drop-shadow-lg m-4 flex min-w-[200px] max-w-[400px] min-h-[150px] max-h-[300px]">
      <h1 className="text-center p-2 font-semibold">{title}</h1>
      <div>{contenido}</div>
    </div>
  );
};

export default CardDashboard;
