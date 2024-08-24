import React from "react";

const Badge = ({ children, emot, classname }) => {
  return (
    <button className="text-sm font-semibold  text-white border border-gray_300 px-3 py-[6px] rounded-full flex gap-[6px]">
      <p>{emot}</p>
      {children}
    </button>
  );
};

export default Badge;
