/* eslint-disable react/prop-types */
const Mesa = ({ width = "28", height = "28" }) => {
  return (
    <svg
      width={width}
      height={height}

      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 50 h100 a10 10 0 0 1 10 10 v100 a10 10 0 0 1 -10 10 h-100 a10 10 0 0 1 -10 -10  v-100 a10 10 0 0 1 10 -10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />

      <path
        d="M30 90 h10 a5 5 0 0 1 5 5 v20 a5 5 0 0 1 -5 5 h-10 a5 5 0 0 1 -5 -5 v-20 a5 5 0 0 1 5 -5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />

      <path
        d="M160 90 h10 a5 5 0 0 1 5 5 v20 a5 5 0 0 1 -5 5 h-10 a5 5 0 0 1 -5 -5 v-20 a5 5 0 0 1 5 -5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  );
};
export default Mesa;
