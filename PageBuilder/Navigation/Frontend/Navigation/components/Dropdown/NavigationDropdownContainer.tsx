import React from "react";
import Dropdown from "./Dropdown";
import prepareNavItems from "../../helper/prepareNavItems";
import { NavItem } from "../../types";

type NavigationModuleDropdownContainerProps = {
  items: NavItem[];
  show: boolean;
  targetX: number;
  targetY: number;
  handleMouseLeave: () => void;
  handleMouseEnter: () => void;
};

const Render: React.ForwardRefRenderFunction<
  HTMLDivElement,
  NavigationModuleDropdownContainerProps
> = (props, ref) => {
  const { items, show, targetX, targetY, handleMouseLeave, handleMouseEnter } =
    props;
  const prepared = React.useMemo(() => prepareNavItems(items), [items]);
  const valid = items && items.length > 0;
  if (!valid) return null;

  return (
    <>
      {show && (
        <div
          ref={ref}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          style={{
            top: targetY - 4,
            left: prepared.hasLists ? undefined : targetX,
          }}
          className={`fixed  animate-fadeInMenuItemFast flex items-center justify-between bg-white ${
            prepared.hasLists
              ? "left-[50%] transform -translate-x-1/2  min-w-[80vw] "
              : ""
          }  `}
        >
          <Dropdown
            onClick={handleMouseLeave}
            items={prepared.items}
            list={prepared.list}
          />
        </div>
      )}
    </>
  );
};

export const NavigationDropdownContainer = React.forwardRef<
  HTMLDivElement,
  NavigationModuleDropdownContainerProps
>(Render);
