import useMenu from "@services/StoreService/hooks/useMenu";
import useAnimationDelay from "@hooks/useAnimationDelay";
import React from "react";

export const Dropdown: React.FC = ({ children }) => {
  const { menuOpen } = useMenu();

  const r = useAnimationDelay({
    delay: 300,
    listener: menuOpen,
  });

  const { render, animation } = r;

  return (
    <>
      {render && (
        <div
          className={`fixed inset-0 bg-grey-light  z-10 flex justify-center items-center transition-opacity transform duration-300 ${
            animation ? "opacity-100 " : " opacity-0"
          }`}
        >
          <div
            className={`   flex justify-center items-center transition-transform transform duration-300 ${
              animation ? " translate-y-0" : "-translate-y-96 "
            }`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
