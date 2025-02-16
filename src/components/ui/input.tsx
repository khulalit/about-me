import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputSize?: "md" | "sm" | "lg";
}

const Input = ({ className = "", inputSize = "sm", ...props }: InputProps) => {
  const clsx =
    inputSize === "sm"
      ? "text-sm"
      : inputSize === "md"
      ? "text-lg"
      : "text-2xl";

  return (
    <input
      className={`${className} font-hanldee ${clsx} text-primaryDark px-2 py-1 border-b-2 border-primaryDark  outline-none`}
      {...props}
    />
  );
};

export default Input;
