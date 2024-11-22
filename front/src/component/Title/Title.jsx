/* eslint-disable react/prop-types */
const Title = ({ text }) => {
  return (
    <div className="items-center gap-4 border p-4 bg-white shadow-md rounded-s text-center text-sm font-semibold ">
      {text}
    </div>
  );
};

export default Title;
