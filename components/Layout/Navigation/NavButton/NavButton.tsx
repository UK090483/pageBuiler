import Svg from "@components/Svg";
import React from "react";

type NavButtonProps = {
  className?: string;
  icon?: boolean;
  active?: boolean;
};

const NavButton: React.FC<NavButtonProps> = (props) => {
  const { className, children, icon = false, active = false } = props;
  return (
    <span className="flex items-center justify-center">
      {children}
      {icon && (
        <Svg
          className={`ml-3 transition-transform ${
            active ? "transform rotate-90" : ""
          } `}
          icon="chevronRight"
        />
      )}
    </span>
  );
};

export default NavButton;
