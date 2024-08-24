import React from "react";

const NavMenu = ({ children, icon, classname }) => {
  return (
    <>
      <button className={`${classname} flex gap-4 items-center`}>
        <img src={icon} alt="icon-image" className="w-[28px] h-[28px]" />
        <span className="text-xl font-poppins text-white font-normal">
          {children}
        </span>
      </button>
    </>
  );
};

export default NavMenu;
