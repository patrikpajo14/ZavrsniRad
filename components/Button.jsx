"use client";

import clsx from "clsx";

const Button = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "outline_btn" : "primary_btn",
        !secondary && "primary_btn"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
