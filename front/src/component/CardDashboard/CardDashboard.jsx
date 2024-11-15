/* eslint-disable react/prop-types */
const CardDashboard = ({ title, contenido }) => {
  return (
    <div className="rounded-2xl shadow-lg m-6 flex flex-col justify-center min-w-[200px] max-w-[600px] min-h-[100px] max-h-[400px]">
      <h1 className="text-center p-2 font-semibold">{title}</h1>
      <div className="m-8">{contenido}</div>
    </div>
  );
};

export default CardDashboard;
