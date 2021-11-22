import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-12 py-3 text-base rounded-full bg-yellow "
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
