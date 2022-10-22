import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white flex items-center justify-between w-full h-14">
      {children}
    </div>
  );
};
