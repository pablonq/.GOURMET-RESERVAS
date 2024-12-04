/* eslint-disable react/prop-types */
const CardDashboard = ({ title, contenido,texto }) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-md m-6 flex flex-col justify-center items-center w-auto border">
      <div className="relative bg-white shadow-sm w-2/3 justify-center -translate-y-2 rounded-lg border border-t-4 border-t-[#DC493A] border-r-4 border-r-[#DC493A]">
        {" "}
        <h1 className="text-center p-2 font-semibold text-sm">{title}</h1>
      </div>
      <div className="flex flex-grow m-2 overflow-auto w-full max-w-full justify-center items-center ">
        <div className="flex flex-wrap justify-center items-center max-h-[300px] max-w-[600px]">
          {contenido}
        </div>
      </div>
     <div className="flex justify-center text-center m-2 text-sm text-[#242424]">* {texto}</div>
    </div>
  );
};

export default CardDashboard;
