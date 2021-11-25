import Svg from "@components/Svg";
import React, { useRef } from "react";
import NavItem, { NavItemProps } from "../NavItem/NavItem";
import MegaNavItem from "./MegaNavItem";

export interface NavItemMegaNavProps {
  _type?: "navigationMegaMenu";
  label?: string;
  className?: string;
  items?: any[];
}

const MegaNav: React.FC<NavItemMegaNavProps> = (props) => {
  const { label, className, items } = props;
  const [hover, setHover] = React.useState(false);
  const [bottom, setBottom] = React.useState<number | null>(null);

  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    checkButtonPosition();
    setHover(true);
  };
  const handleMouseLeave = () => setHover(false);
  const handleNavClick = () => setHover(false);

  const checkButtonPosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.bottom !== bottom) {
        setBottom(rect.bottom);
      }
    }
  };

  const NavItems = items
    ? items.filter((i) => i._type === "navigationItem")
    : [];

  return (
    <>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        className={`transition-colors px-6 py-3 ${hover ? "bg-white" : ""} `}
        ref={ref}
      >
        <span className="flex items-center justify-center text-base ">
          {label}{" "}
          <Svg
            className={` transition-transform ${
              hover ? "transform rotate-90 translate-x-1 scale-100" : "scale-75"
            } `}
            icon="chevronRight"
          />
        </span>
      </button>
      {hover && (
        <div
          style={{ top: bottom || 0 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed animate-fadeInFast left-[50%]  transform -translate-x-1/2  min-w-[80vw] p-10 flex items-center justify-between  bg-white"
        >
          {items &&
            items.map((item) => {
              if (item._type === "navigationMegaMenuItem") {
                return (
                  <div className="p-2" key={item._key}>
                    <MegaNavItem onClick={handleNavClick} {...item} />
                  </div>
                );
              }
            })}

          {NavItems && (
            <div className="flex flex-col">
              {NavItems.map((item) => {
                return (
                  <div className="" key={item._key}>
                    <NavItem
                      onClick={handleNavClick}
                      {...item}
                      {...item.link}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MegaNav;
