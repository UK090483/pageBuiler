import React from "react";
import NavigationItemBase from "./components/NavItem/NavigationItemBase";
import Dropdown from "./components/Dropdown/Dropdown";
import prepareNavItems from "./helper/prepareNavItems";
import { NavItem } from "./types";

interface Props {
  items: NavItem[];
  className?: string;
}

const NavOverview: React.FC<Props> = (props) => {
  const { list, hasLists } = prepareNavItems(props.items || []);
  return (
    <ul
      className={`flex flex-wrap w-full justify-between ${
        props.className ? props.className : ""
      }`}
    >
      {hasLists &&
        list.map((item, index) => {
          const { list, items } = prepareNavItems(item.items || []);

          return (
            <li key={item.label} className="m-2 ">
              <NavigationItemBase item={item} bold icon hover>
                {item.label}
              </NavigationItemBase>
              <Dropdown list={list} items={items} />
            </li>
          );
        })}
    </ul>
  );
};

export default NavOverview;
