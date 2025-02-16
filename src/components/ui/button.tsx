import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  btnSize?: "md" | "sm" | "lg";
}

const Button = ({
  children,
  className = "",
  btnSize = "sm",
  ...props
}: ButtonProps) => {
  const clsx =
    btnSize === "sm"
      ? "px-4 py-1 text-sm"
      : btnSize === "md"
      ? "px-6 py-2 text-md"
      : "px-14 py-4 text-lg";

  return (
    <button
      className={`${className} ${clsx} bg-primaryDark text-white`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
