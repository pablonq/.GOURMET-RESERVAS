// eslint-disable-next-line react/prop-types
const Mesa6pers = ({ color = "green" }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75 75 h150 a15 15 0 0 1 15 15 v150 a15 15 0 0 1 -15 15 h-150 a15 15 0 0 1 -15 -15 v-150 a15 15 0 0 1 15 -15  Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
      />

      <path
        d="M135 45 h30 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
      />

      <path
        d="M135 240 h30 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
      />

      <path
        d="M45 105 h20 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-20 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
      />

      <path
        d="M45 180 h20  a10 10 0 0 1 10 10  v40 a10 10 0 0 1 -10 10 h-20 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
      />

      <path
        d="M245 105 h20 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-20 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
      />

      <path
        d="M245 180 h20 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-20 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
      />
    </svg>
  );
};
export default Mesa6pers;
