import React from "react";

interface PaperClipProps {
  children: React.ReactNode;
  className?: string;
  varient: "pink" | "blue" | "yellow" | "green";
  title?: string;
}

const getColors = (varient: string) => {
  switch (varient) {
    case "pink":
      return "bg-lightPink border-pink animate-swing2";
    case "yellow":
      return "bg-lightYellow border-yellow animate-swing";
    case "green":
      return "bg-lightGreen border-green animate-swing";
    case "blue":
      return "bg-lightBlue border-blue animate-swing";
    default:
      return "bg-lightPink border-pink animate-swing2";
  }
};

const getTitleBgColors = (varient: string) => {
  switch (varient) {
    case "pink":
      return "bg-lightYellow";
    case "yellow":
      return "bg-lightBlue";
    case "green":
      return "bg-lightYellow";
    case "blue":
      return "bg-lightPink";
    default:
      return "bg-lightPink";
  }
};

const PaperClip = ({
  children,
  className,
  varient,
  title = "",
}: PaperClipProps) => {
  return (
    <div
      className={`${className} ${getColors(
        varient
      )} border-2 rounded-lg w-52 px-2 py-8 `}
    >
      <div
        className={`font-hanldee text-sm font-semibold absolute right-0 translate-x-1/2 z-10 max-w-32 ${getTitleBgColors(
          varient
        )}`}
      >
        {title}
      </div>
      <div className="bg-white w-4 h-4 rounded-full absolute top-2 left-1/2 -translate-x-1/2 border border-primaryDark"></div>
      {children}
    </div>
  );
};

export default PaperClip;
