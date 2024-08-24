import React, { useEffect } from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-poppins font-bold rounded-full focus:outline-none transition-colors trasition-all duration-200 bg-bluet  font-bold  hover:shadow-primary rounded-full";
  const variantClasses = {
    secondary:
      "font-poppins font-bold rounded-full focus:outline-none transition-colors trasition-all duration-200 bg-white text-dark  font-bold  hover:shadow-primary rounded-full hover:bg-bluet hover:text-white font-bold rounded-full",
    primary:
      "font-poppins font-bold rounded-full focus:outline-none  transition-colors trasition-all duration-200 bg-bluet  font-bold  hover:shadow-primary rounded-full text-white rounded-full",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  };

  const sizeClasses = {
    sm: "px-2 py-[6px] px-4 text-sm",
    md: "px-4 py-2 text-base py-3",
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <div>
      <button className={classes} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
