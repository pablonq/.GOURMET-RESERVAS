/* eslint-disable react/prop-types */
const CardDashboard = ({ title, contenido }) => {
  return (
    <div className="rounded-2xl shadow-2xl m-4 flex flex-col justify-center min-w-[300px] max-w-[800px] min-h-[200px] max-h-[500px]">
      <h1 className="text-center p-2 font-semibold">{title}</h1>
      <div className="m-4">{contenido}</div>
    </div>
  );
};

export default CardDashboard;
