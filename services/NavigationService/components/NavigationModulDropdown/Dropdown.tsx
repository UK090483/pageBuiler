import { NavItem } from "../../types";
import React from "react";
import { NavigationModulItemBase } from "../NavigationItemBase";
import { NavigationModulLink } from "../NavigationLink";

interface DropdownProps {
  list?: NavItem[];
  items?: NavItem[];
  onClick?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, list, onClick }) => {
  return (
    <ul className="flex justify-between w-full">
      {list &&
        list.map((i) => (
          <List
            onClick={onClick}
            key={i.label}
            label={i.label}
            items={i.items}
          />
        ))}
      {items && <List onClick={onClick} items={items}></List>}
    </ul>
  );
};

export default Dropdown;

export const List: React.FC<{
  items?: NavItem[];
  label?: string;
  onClick?: () => void;
}> = ({ items, label, onClick }) => {
  return (
    <li>
      {label && <NavigationModulItemBase bold>{label}</NavigationModulItemBase>}
      <ul className="list-none">
        {items?.map(({ label, link }) => (
          <li key={label}>
            <NavigationModulLink onClick={onClick} {...link}>
              {label}
            </NavigationModulLink>
          </li>
        ))}
      </ul>
    </li>
  );
};
