import Portal from "@components/Portal";
import Svg from "@components/Svg";
import useAnimationDelay from "@hooks/useAnimationDelay";
import React from "react";
import NavigationModulItemBase from "./components/NavigationItemBase";
import NavigationModulLink from "./components/NavigationLink";
import { NavItem } from "./types";

export interface NavigationMobileProps {
  label?: string;
  className?: string;
  open?: boolean;
  items?: NavItem[];
  closeMenu?: () => void;
}

const NavigationMobile: React.FC<NavigationMobileProps> = ({
  open,
  items,
  closeMenu,
}) => {
  const { render, animation } = useAnimationDelay({
    delay: 300,
    listener: open,
  });

  const [overlays, setOverlays] = React.useState<NavItem[]>([]);

  React.useEffect(() => {
    if (!open) {
      setOverlays([]);
    }
  }, [open]);

  const handleClick = (type: string, item: NavItem) => {
    if (type === "link" && closeMenu) {
      return closeMenu();
    }
    setOverlays((i) => [...i, item]);
  };

  const handleBackClick = () => {
    setOverlays((i) => i.slice(0, -1));
  };

  return (
    <>
      {render && (
        <Portal>
          <div
            className={`flex flex-col items-center justify-center h-screen bg-white fixed inset-0  z-10  transition-all transform duration-300 ${
              animation
                ? " translate-y-0 opacity-100 "
                : "-translate-y-96  opacity-0"
            }`}
          >
            {items &&
              items.map((item, index) => {
                return (
                  <ConditionalButton
                    onClick={(type) => handleClick(type, item)}
                    key={item.label}
                    {...item}
                  />
                );
              })}

            {overlays &&
              overlays.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center bg-white animate-fadeInFast"
                  >
                    <button
                      className="absolute transform rotate-180 top-32 right-6 "
                      onClick={handleBackClick}
                    >
                      <Svg icon="chevronRight" />
                    </button>

                    {item.items &&
                      item.items.map((item) => {
                        return (
                          <ConditionalButton
                            key={item.label}
                            onClick={(type) => handleClick(type, item)}
                            {...item}
                          />
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </Portal>
      )}
    </>
  );
};

const ConditionalButton: React.FC<
  NavItem & { onClick: (type: "link" | "item") => void }
> = (props) => {
  const { label, onClick } = props;
  const hasChildren = props.items && props.items.length > 0;
  return hasChildren ? (
    <button onClick={() => onClick("item")}>
      <NavigationModulItemBase icon {...props}>
        {label}
      </NavigationModulItemBase>
    </button>
  ) : (
    <NavigationModulLink onClick={() => onClick("link")} {...props.link}>
      {label}
    </NavigationModulLink>
  );
};

export default NavigationMobile;
