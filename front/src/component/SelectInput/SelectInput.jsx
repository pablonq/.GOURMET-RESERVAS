/* eslint-disable react/prop-types */
const SelectInput = ({
  label,
  options = [],
  value,
  onChange,
  error,
  placeholder = "Selecciona una opción",
  name,
  disabled,
  keyField = "id",
}) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor={name} className="text-xs font-semibold w-1/3">
        {label}
      </label>
      <div className="flex flex-col w-full">
      <select
        required
        className="input-style w-full"
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="" disabled>
          {placeholder || "Selecciona una opción"}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option[keyField]}>
            {option.nombre}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default SelectInput;
