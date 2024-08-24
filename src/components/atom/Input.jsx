import { useState } from "react";
import { home, user } from "../../assets";

const Input = ({ label, icon, name, type, placeholder }) => {
  const [isFocus, setIsFocus] = useState(false); // ubah default state ke false

  return (
    <>
      <div className="input-base text-base font-medium text-white flex flex-col gap-2">
        <label className="font-medium text-base text-white" for={name}>
          {label}
        </label>
        <div
          className={`${
            isFocus ? "outline-bluet outline " : ""
          } input-container px-4 py-3 bg-gray_200 rounded-full`}
        >
          <div className="input flex gap-3 items-center">
            <img className="w-6 h-6" src={icon} alt="" />
            <input
              onFocus={() => setIsFocus(true)} // set state ke true saat input di-focus
              onBlur={() => setIsFocus(false)} // set state ke false saat input kehilangan fokus
              type={type}
              id={name}
              placeholder={placeholder}
              className="bg-transparent w-full text-white font-semibold text-base outline-none placeholder:text-[#626262] placeholder:font-normal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
