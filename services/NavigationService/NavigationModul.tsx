import React from "react";
import NavigationItem from "./components/NavigationItem";
import { NavItem } from "./types";

interface Props {
  items: NavItem[];
}

export const NavigationModul = (props: Props) => {
  const { items } = props;
  const hasItems = !!items && items.length > 0;

  if (!hasItems) return <div>Missing NavItems</div>;

  return (
    <ul className="flex" role={"menu"}>
      {items.map((i, index) => (
        <NavigationItem key={index} {...i} />
      ))}
    </ul>
  );
};
