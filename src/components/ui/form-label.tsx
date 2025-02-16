import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
  labelSize?: "md" | "sm" | "lg";
}

const Label = ({
  children,
  className = "",
  labelSize = "sm",
  ...props
}: LabelProps) => {
  const clsx =
    labelSize === "sm"
      ? "text-sm"
      : labelSize === "md"
      ? "text-lg"
      : "text-2xl";

  return (
    <label
      className={`${className} font-hanldee ${clsx} text-primaryDark px-2 py-1 border-l-2 border-primaryDark`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
