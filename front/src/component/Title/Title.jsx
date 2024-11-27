/* eslint-disable react/prop-types */
const Title = ({ text }) => {
  return (
    <div className="items-center gap-4 border p-4 shadow-md rounded-s text-center text-sm font-semibold bg-white"  >
      {text}
    </div>
  );
};

export default Title;
