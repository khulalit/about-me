interface WrapperBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function WrapperBorder({
  children,
  className = "",
}: WrapperBorderProps) {
  return (
    <div
      className={`w-fit border-2 border-primaryDark p-4 m-12 relative ${className}`}
    >
      <div className="absolute -top-10 -left-12 w-12 h-10 border-b-2 border-r-2 border-primaryDark"></div>
      <div className="absolute -top-10 -right-12 w-12 h-10 border-b-2 border-l-2 border-primaryDark"></div>
      <div className="absolute -bottom-10 -left-12 w-12 h-10 border-t-2 border-r-2 border-primaryDark"></div>
      <div className="absolute -bottom-10 -right-12 w-12 h-10 border-t-2 border-l-2 border-primaryDark"></div>
      {children}
    </div>
  );
}
