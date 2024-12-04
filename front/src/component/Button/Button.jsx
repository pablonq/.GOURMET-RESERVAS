/* eslint-disable react/prop-types */
const Button = ({ onClick, texto, type ,disabled}) => {
  return (
    <div className="flex justify-center p-2">
      <button
      type={ type }
        onClick={onClick}
        disabled={disabled}
        className="text-white text-center rounded-md bg-[#242424] py-1 px-4 hover:bg-[#DC493A]"
      >
        {texto}
      </button>
    </div>
  );
};
export default Button;
