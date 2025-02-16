import React from "react";

const getColors = (idx: number) => {
  if (idx === 0 || idx % 4 === 0) return "bg-yellow border-darkYellow";
  if (idx === 1 || idx % 5 === 0) return "bg-blue border-darkBlue";
  if (idx === 2 || idx % 6 === 0) return "bg-pink border-darkPink";
  if (idx === 3 || idx % 7 === 0) return "bg-green border-darkGreen";
};

interface UlProps {
  children: React.ReactNode;
  className?: string;
}

export default function List({ children, className = "" }: UlProps) {
  return <ul className={`${className} `}>{children}</ul>;
}

interface LiProps {
  idx: number;
  children: React.ReactNode;
  className?: string;
}

const Li: React.FC<LiProps> = ({ idx, children, className = "" }) => {
  return (
    <li className={`flex gap-4 ${className}`}>
      <div
        className={`${getColors(
          idx
        )} border-2 rounded-md font-hanldee text-3xl flex items-center justify-center w-12 h-12 shrink-0 mt-1`}
      >
        {idx + 1}
      </div>
      <div className="flex-1">{children}</div>
    </li>
  );
};

Li.displayName = "List.Li";

List.Li = Li;
