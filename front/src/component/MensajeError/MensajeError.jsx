/* eslint-disable react/prop-types */
import IconoError from "../../assets/IconoError";

const MensajeError = ({ mensaje }) => {
  return (
    <div className="flex space-x-2 text-[#DC493A] justify-center py-4 items-center mx-2">
      <IconoError width="30" height="30" />
      <p className="text-center  text-sm font-bold">{mensaje}</p>
    </div>
  );
};

export default MensajeError;
