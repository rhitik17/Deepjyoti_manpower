import React from "react";

const Button = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  rounded,
  text,
}) => {
  const variantStyles = {
    primary: "bg-primary-web hover:bg-gray-500 text-white",
    secondary: "bg-secondary-blue hover:bg-gray-600 text-white",
    danger: "bg-status-danger hover:bg-red-600 text-white",
    success: "bg-status-success hover:bg-green-600 text-white",
  };

  const sizeStyles = {
    small: "py-1 px-3 text-sm",
    medium: "py-2.5 px-5 text-lg",
    large: "py-5 px-8 text-lg",
  };

  const radius = {
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
    full: "rounded-full",
  };
  const textSize = {
    small: "text-sm",
    medium: "text-xs",
    large: "text-lg",
    extraLarge: "text-[27px]",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${
        radius[rounded]
      } ${
        textSize[text]
      }  text-[28] font-semibold font-inter transition duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
