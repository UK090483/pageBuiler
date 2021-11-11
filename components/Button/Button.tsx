import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      // className="py-1 pl-3 pr-8 transition-colors border border-black hover:bg-black hover:text-white"

      className="btn"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
