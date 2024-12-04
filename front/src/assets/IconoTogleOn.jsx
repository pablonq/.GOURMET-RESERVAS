/* eslint-disable react/prop-types */
const IconoTogleOn = ({ width = "28", height = "28" , color }) => {
    return (
      <svg
        data-slot="icon"
        fill={color}
        strokeWidth="1"
        stroke="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width={width}
        height={height}
      >
        <path
          d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
        ></path>
      </svg>
    );
  };
  export default IconoTogleOn;

