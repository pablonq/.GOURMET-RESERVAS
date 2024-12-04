// eslint-disable-next-line react/prop-types
const TooltipCustom = ({ text, children }) => (
    <div className="relative inline-block group">
      {children}
      <div className="absolute right-0 top-full mt-2 bg-white text-black text-xs px-2 py-2  border border-[#DC493A] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        {text}
      </div>
    </div>
  );
  
  export default TooltipCustom;
  