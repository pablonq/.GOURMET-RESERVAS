/* eslint-disable react/prop-types */
const ColumnaMesa = ({ title, numTables, MesaComponent }) => {
  return (
    <div className="w-1/4 p-2">
      <div className="bg-[#DC493A] rounded-sm p-2 text-sm text-center self-center ">
        <h2 className="text-white text-sm">{title}</h2>
      </div>
      {Array.from({ length: numTables }).map((_, index) => (
        <MesaComponent key={index} />
      ))}
    </div>
  );
};

export default ColumnaMesa;
