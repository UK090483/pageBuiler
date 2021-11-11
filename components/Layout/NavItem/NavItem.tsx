import { Link } from "@components/Link";
import useMenu from "@services/StoreService/hooks/useMenu";
import React from "react";
import clsx from "clsx";

export interface NavItemProps {
  href: string;
  label: string;
  size?: "s" | "m" | "l";
  divider?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  size = "m",
  divider = true,
  className,
}) => {
  const { closeMenu } = useMenu();
  return (
    <Link href={href}>
      <span
        onClick={closeMenu}
        className={
          clsx("inline-block ", {
            "text-base": size === "s",
            "text-xl": size === "m",
            "text-4xl": size === "l",
            "font-bold": size === "l",
          }) +
          " " +
          className
        }
      >
        <span
          className={clsx("hover:underline", {
            ["p-2"]: size === "s",
            ["p-6"]: size === "m",
          })}
        >
          {label}
        </span>
        {/* {divider && "/"} */}
      </span>
    </Link>
  );
};

export default NavItem;
