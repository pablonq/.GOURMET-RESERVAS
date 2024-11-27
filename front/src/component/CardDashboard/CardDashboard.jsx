/* eslint-disable react/prop-types */
const CardDashboard = ({ title, contenido }) => {
  return (
    <div className="bg-white bg-opacity-70 rounded-lg shadow-lg m-6 flex flex-col justify-center items-center w-full">
      <div className="relative bg-white shadow-sm w-2/3 justify-center -translate-y-2 rounded-lg">
        {" "}
        <h1 className="text-center p-2 font-semibold text-sm">{title}</h1>
      </div>
      <div className="flex flex-grow m-4 overflow-auto w-full max-w-full justify-center items-center ">
        <div className="flex flex-wrap justify-center items-center max-h-[300px] max-w-[600px]">
          {contenido}
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
