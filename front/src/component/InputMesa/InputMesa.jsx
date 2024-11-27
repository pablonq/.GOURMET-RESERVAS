/* eslint-disable react/prop-types */
const InputMesa = ({ id, value, onChange, placeholder }) => {
  return (
    <div className="p-2 flex justify-between items-center">
      <label className="text-sm font-light">{placeholder}</label>
      <input
        className="w-12 rounded-md border p-1 text-[#DC493A] border-[#DC493A] hover:bg-[#DC493A] hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-[#242424]"
        type="number"
        id={id}
        min="1"
        max="300"
        step="1"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default InputMesa;
