import Svg from "@components/Svg";

type NavItemBaseProps = {
  icon?: boolean;
  hover?: boolean;
  bold?: boolean;
};

const NavigationItemBase: React.FC<NavItemBaseProps> = ({
  children,
  icon,
  hover,
  bold,
}) => {
  return (
    <span
      className={`block px-5 py-3 leading-none  text-base hover:underline  ${
        bold ? " font-bold " : ""
      } `}
    >
      {children}
      {icon && (
        <Svg
          data-testid="navIcon"
          className={` transition-transform  ${
            hover ? "transform rotate-90 translate-x-1 scale-100" : "scale-75"
          }`}
          icon="chevronRight"
        />
      )}
    </span>
  );
};

interface NavigationButton {
  variant: "listHeader" | "Link" | "Button";
}

export const NavigationListHeader: React.FC<NavigationButton> = ({
  children,
}) => {
  return <NavigationItemBase>{children}</NavigationItemBase>;
};

export default NavigationItemBase;
