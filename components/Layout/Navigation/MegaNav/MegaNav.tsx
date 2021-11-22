import Svg from "@components/Svg";
import { linkQuery, LinkResult } from "@services/SanityService/siteQuery";
import React from "react";
import { NavigationMegaMenu } from "studio/schema";
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

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        className={`transition-colors px-6 py-4 ${hover ? "bg-white" : ""} `}
      >
        <span className="flex items-center justify-center text-base">
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
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed animate-fadeInFast left-[50%] transform -translate-x-1/2  min-w-[80vw]  flex items-center justify-between top-[123px] bg-white"
        >
          {items &&
            items.map((item) => {
              return (
                <div className="p-20" key={item._key}>
                  <MegaNavItem {...item} />
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default MegaNav;
