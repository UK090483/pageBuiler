import { Link } from "@components/Link";
import { NavigationMegaMenuResult } from "@services/SanityService/siteQuery";
import React from "react";

export interface NavItemMegaNavProps extends NavigationMegaMenuResult {
  className?: string;
}

const MegaNavItem: React.FC<NavItemMegaNavProps> = (props) => {
  const { label, className, items } = props;
  return (
    <div className={` ${className}`}>
      <h3 className="font-bold ">{label}</h3>
      <ul>
        {items &&
          items.map((item) => {
            return (
              <li key={item.label}>
                <Link
                  className="text-base font-light hover:underline"
                  href={
                    item.link?.internalLink || item.link?.externalLink || "/"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MegaNavItem;
