import useIsActive from "../../helper/useIsActive";
import { useNavigation } from "../../NavigationContext";
import {
  NavigationItemBaseComponent,
  NavigationLinkComponent,
  NavItem,
} from "../../types";

import DropdownNavItem from "../Dropdown/DropdownNavItem";

export interface NavItemProps extends NavItem {
  NavigationLink?: NavigationLinkComponent;
  NavigationItemBase?: NavigationItemBaseComponent;
}

const NavigationItem: React.FC<NavItemProps> = (props) => {
  const { label, items, link, NavigationLink, NavigationItemBase } = props;
  const hasItems = !!items && items.length > 0;
  const hasLink = !!link && (!!link.href || !!link?.internal);

  const {
    NavItemBase: DefaultNavigationItemBase,
    NavItemLink: DefaultNavigationLink,
  } = useNavigation();

  const NavigationLinkComponent = NavigationLink
    ? NavigationLink
    : DefaultNavigationLink;

  const NavigationItemBaseComponent = NavigationItemBase
    ? NavigationItemBase
    : DefaultNavigationItemBase;

  if (!hasItems && hasLink) {
    return (
      <NavigationLinkComponent {...link}>
        <NavigationItemBaseComponent item={props} place="link">
          {label}
        </NavigationItemBaseComponent>
      </NavigationLinkComponent>
    );
  }

  if (hasItems) {
    return (
      <DropdownNavItem id={label || ""} items={items}>
        {label}
      </DropdownNavItem>
    );
  }
  return (
    <NavigationItemBaseComponent item={props}>
      {label}
    </NavigationItemBaseComponent>
  );
};

export default NavigationItem;
