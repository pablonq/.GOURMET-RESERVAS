/* eslint-disable react/prop-types */
const FormInput = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  accept,
  errorMessage = "",
  inputClassName = "input-style",
  labelClassName = "text-xs w-1/3 ",
}) => {
  return (
    <div className="flex items-center gap-4 ">
      <label className={labelClassName}>{label}</label>
      <div className="flex flex-col w-full">
        <input
          required={required}
          type={type}
          accept={accept}
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default FormInput;
