import { Link } from "@components/Link";
import useMenu from "@services/StoreService/hooks/useMenu";
import React from "react";
import clsx from "clsx";

export interface NavItemProps {
  _type?: string;

  href?: string;
  external?: boolean;
  internalLink?: string;
  externalLink?: string;
  label?: string;
  size?: "s" | "m" | "l";
  divider?: boolean;
  className?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const {
    href = "#",
    external,
    label,
    size = "m",
    divider = true,
    internalLink,
    externalLink,
    className,
    onClick,
  } = props;

  const { closeMenu } = useMenu();

  const link = internalLink || externalLink || href;
  const isExternal = external && !!externalLink;

  return (
    <Link
      onClick={onClick}
      href={link}
      external={isExternal}
      className="flex items-center justify-center"
    >
      <span
        onClick={closeMenu}
        className={
          clsx("inline-block", {
            " text-sm": size === "s",
            "text-base font-normal": size === "m",
            "text-4xl": size === "l",
          }) +
          " " +
          className
        }
      >
        <span
          className={clsx("block hover:underline", {
            ["p-2"]: size === "s",
            ["p-3"]: size === "m",
          })}
        >
          {label}
        </span>
      </span>
    </Link>
  );
};

export default NavItem;
