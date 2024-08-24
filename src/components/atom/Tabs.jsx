import React from "react";

const Tabs = ({ children, id, setTabs, tabs }) => {
  return (
    <button
      onClick={() => setTabs(id)}
      className={`${
        tabs == id ? "border-bluet" : "border-transparent"
      } px-[10px] pb-[14px] border-b-4  font-bold text-base text-white `}
    >
      {children}
    </button>
  );
};

export default Tabs;
