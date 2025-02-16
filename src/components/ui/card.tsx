import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> & {
  Footer: React.FC<CardProps>;
  Body: React.FC<CardProps>;
} = ({ children, className = "" }) => {
  return (
    <div
      className={`shadow-lg rounded-lg p-2 border-2 border-primaryDark ${className}`}
    >
      {children}
    </div>
  );
};

const Body: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`border-b pb-2 mb-4 text-xl font-semibold ${className}`}>
      {children}
    </div>
  );
};
Body.displayName = "Card.Body";

const Footer: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`border-t pt-2 mt-4 text-sm text-gray-600 ${className}`}>
      {children}
    </div>
  );
};
Footer.displayName = "Card.Footer";

Card.Body = Body;
Card.Footer = Footer;

export default Card;
