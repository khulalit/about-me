import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  btnSize?: "md" | "sm" | "lg";
  varient: "pink" | "blue" | "yellow" | "green";
}

const getColors = (varient: string) => {
  switch (varient) {
    case "pink":
      return "bg-pink border-darkPink";
    case "yellow":
      return "bg-yellow border-darkYellow";
    case "green":
      return "bg-green border-darkGreen";
    case "blue":
      return "bg-blue border-darkBlue";
    default:
      return "bg-pink border-darkPink";
  }
};

const Button2 = ({
  children,
  className = "",
  btnSize = "sm",
  varient = "pink",
  ...props
}: ButtonProps) => {
  const clsx =
    btnSize === "sm"
      ? "px-2 py-1 text-sm"
      : btnSize === "md"
      ? "px-4 py-2 text-md"
      : "px-8 py-4 text-lg";

  return (
    <button
      className={`${className} ${clsx} ${getColors(
        varient
      )} text-white rounded-r-full rounded-bl-full border rounded-tl-lg min-w-20`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button2;
