import React from "react";

const Info = ({ children, image }) => {
  return (
    <span className="text-paragraph text-base font-normal flex gap-[6px]">
      <img src={image} alt="" />
      {children}
    </span>
  );
};

export default Info;
