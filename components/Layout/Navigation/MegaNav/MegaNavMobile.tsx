import Svg from "@components/Svg";
import React from "react";
import NavButton from "../NavButton/NavButton";
import NavItem from "../NavItem/NavItem";

export interface NavItemMegaNavProps {
  _type?: "navigationMegaMenu";
  label?: string;
  className?: string;
  items?: { label: string; _key: string; items: any[] }[];
}

const MegaNavMobile: React.FC<NavItemMegaNavProps> = (props) => {
  const { label, className, items } = props;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState<null | string>(null);
  const handleClick = () => setHover((i) => !i);

  const setActiveItem = (item: string) => {
    setActive(item);
  };
  const activeItem =
    items && active && items.find((item) => item._key === active);

  return (
    <>
      <button
        onClick={handleClick}
        className={`transition-colors px-6 py-4 ${hover ? "bg-white" : ""} `}
      >
        <span className="flex items-center justify-center">
          {label}{" "}
          <Svg
            className={`ml-3 transition-transform ${
              hover ? "transform rotate-90" : ""
            } `}
            icon="chevronRight"
          />
        </span>
      </button>
      {hover && (
        <div className="absolute inset-0 flex flex-col justify-center bg-blue-300 animate-fadeInFast">
          {items &&
            items.map((item) => {
              return (
                <button
                  key={item._key}
                  onClick={() => setActiveItem(item._key)}
                >
                  <NavButton icon>{item.label}</NavButton>
                </button>
              );
            })}
        </div>
      )}

      {activeItem && (
        <div className="absolute inset-0 flex flex-col justify-center bg-green-400 animate-slideInRight">
          {activeItem.items &&
            activeItem.items.map((item) => {
              return (
                <NavItem
                  className="mx-auto "
                  key={item._key}
                  {...item}
                ></NavItem>
              );
            })}
        </div>
      )}
    </>
  );
};

export default MegaNavMobile;
