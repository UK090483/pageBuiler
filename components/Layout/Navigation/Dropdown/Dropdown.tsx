import useMenu from "@services/StoreService/hooks/useMenu";
import useAnimationDelay from "@hooks/useAnimationDelay";
import React from "react";
import Portal from "@components/Portal";

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
        <Portal>
          <div className={`fixed inset-0  z-10 `}>
            <div
              className={`transition-all transform duration-300 ${
                animation
                  ? " translate-y-0 opacity-100 "
                  : "-translate-y-96  opacity-0"
              }`}
            >
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
