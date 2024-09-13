/* eslint-disable react/prop-types */
const ColumnaMesa = ({ title, numTables, MesaComponent }) => {
  return (
    <div className="w-1/4 p-2">
      <div className="bg-gray-400 text-center self-center ">
        <h2>{title}</h2>
      </div>
      {Array.from({ length: numTables }).map((_, index) => (
        <MesaComponent key={index} />
      ))}
    </div>
  );
};

export default ColumnaMesa;
