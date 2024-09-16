/* eslint-disable react/prop-types */
const InputMesa = ({ id, value, onChange, placeholder }) => {
  return (
    <div className="p-2 flex justify-between">
      <label>{placeholder}</label>
      <input
        className="w-10 rounded-md"
        type="number"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default InputMesa;
