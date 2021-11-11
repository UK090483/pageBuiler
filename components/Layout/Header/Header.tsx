import React from "react";
import Nav from "@components/Layout/Nav";
import { NavItemProps } from "@components/Layout/NavItem";

interface HeaderProps {
  navItems: NavItemProps[];
}

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return <Nav items={navItems} />;
};
