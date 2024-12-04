/* eslint-disable react/prop-types */
const ButtonPaginacion = ({ page, isActive, onClick }) => {
    return (
      <button
        className={`border rounded-full w-8 h-8 text-center mx-1 ${
          isActive
            ? "bg-[#DC493A] text-white"
            : "border-[#DC493A] text-[#DC493A] hover:bg-[#DC493A] hover:text-white"
        }`}
        onClick={() => onClick(page)}
      >
        {page}
      </button>
    );
  };
  
  export default ButtonPaginacion;
  