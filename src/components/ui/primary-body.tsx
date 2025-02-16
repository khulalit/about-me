import React from "react";

interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryBody({ children, className }: Heading1Props) {
  return <p className={`text-md ${className}`}>{children}</p>;
}
