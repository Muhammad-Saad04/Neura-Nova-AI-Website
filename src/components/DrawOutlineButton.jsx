import React from "react";

const DrawOutlineButtonExample = ({ buttonName, textColor, hoverTextColor, bgColor }) => {
  return (
    <div className="w-fit inline-block">
      <DrawOutlineButton textColor={textColor} hoverTextColor={hoverTextColor} bgColor={bgColor}>{buttonName}</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children,textColor, hoverTextColor, bgColor, ...rest }) => {
  return (
    <button
      {...rest}
      className={`text-sm group relative px-4 py-2 font-bold text-[#${textColor}] uppercase transition-colors duration-[400ms] hover:text-[#${hoverTextColor}]`}
    >
      <span>{children}</span>

      {/* TOP */}
      <span className={`absolute left-0 top-0 h-[2px] w-0 bg-[#${bgColor}] transition-all duration-100 group-hover:w-full group-hover:delay-100 group-hover-out:delay-400`} />
      
      {/* RIGHT */}
      <span className={`absolute right-0 top-0 h-0 w-[2px] bg-[#${bgColor}] transition-all duration-100 group-hover:h-full group-hover:delay-200 group-hover-out:delay-300`} />
      
      {/* BOTTOM */}
      <span className={`absolute bottom-0 right-0 h-[2px] w-0 bg-[#${bgColor}] transition-all duration-100 group-hover:w-full group-hover:delay-300 group-hover-out:delay-200`} />
      
      {/* LEFT */}
      <span className={`absolute bottom-0 left-0 h-0 w-[2px] bg-[#${bgColor}] transition-all duration-100 group-hover:h-full group-hover:delay-400 group-hover-out:delay-100`} />
    </button>
  );
};

export default DrawOutlineButtonExample;
