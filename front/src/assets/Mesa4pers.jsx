// eslint-disable-next-line react/prop-types
const Mesa4pers = ({ color = "#C19A69"}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 50 h100 a10 10 0 0 1 10 10 v100 a10 10 0 0 1 -10 10 h-100 a10 10 0 0 1 -10 -10  v-100 a10 10 0 0 1 10 -10 Z"
        fill={color}
        stroke="#000"
        strokeWidth="1"
      />

      <path
        d="M90 40 h20 a5 5 0 0 1 5 5 v10 a5 5 0 0 1 -5 5 h-20 a5 5 0 0 1 -5 -5 v-10 a5 5 0 0 1 5 -5 Z"
        fill={color}
        stroke="#000"
        strokeWidth="1"
      />

      <path
        d="M90 160 h20 a5 5 0 0 1 5 5 v10 a5 5 0 0 1 -5 5 h-20 a5 5 0 0 1 -5 -5 v-10 a5 5 0 0 1 5 -5 Z"
        fill={color}
        stroke="#000"
        strokeWidth="1"
      />

      <path
        d="M30 90 h10 a5 5 0 0 1 5 5 v20 a5 5 0 0 1 -5 5 h-10 a5 5 0 0 1 -5 -5 v-20 a5 5 0 0 1 5 -5 Z"
        fill={color}
        stroke="#000"
        strokeWidth="1"
      />

      <path
        d="M160 90 h10 a5 5 0 0 1 5 5 v20 a5 5 0 0 1 -5 5 h-10 a5 5 0 0 1 -5 -5 v-20 a5 5 0 0 1 5 -5 Z"
        fill={color}
        stroke="#000"
        strokeWidth="1"
      />
    </svg>
  );
};
export default Mesa4pers;
