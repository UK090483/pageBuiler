import clsx from "clsx";
import useIsActive from "../../helper/useIsActive";
import { NavItem } from "../../types";

export type NavItemBaseProps = {
  icon?: boolean;
  hover?: boolean;
  bold?: boolean;
  place?: "link" | "dropdown" | "header" | "dropdown/link";
  item: NavItem;
};

export const NavigationItemBase: React.FC<NavItemBaseProps> = (props) => {
  const { children, icon, hover, bold, place, item } = props;
  const active = useIsActive(item);

  return (
    <span
      className={clsx(
        "block w-full px-5 py-4 leading-none whitespace-nowrap transition-colors font-bold text-base-mobile xl:text-base truncate ",
        "hover:underline decoration-2  underline-offset-4",
        {
          "text-black hover:bg-black  hover:text-white ":
            place === "dropdown/link",
          "font-bold": bold,
          "underline ": active,
        }
      )}
    >
      {children}
      {icon && (
        <svg
          style={{ width: "1.5em", height: "1.5em" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`inline-block stroke-current transition-transform ${
            hover ? "rotate-90" : ""
          }`}
          fill="none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </span>
  );
};

export default NavigationItemBase;
