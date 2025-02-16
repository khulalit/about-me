import React from "react";

interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

export default function Heading1({ children, className }: Heading1Props) {
  return <h1 className={`font-semibold text-3xl ${className}`}>{children}</h1>;
}
