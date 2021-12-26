import { NavItem } from "../types";
import NavigationItemBase from "./NavigationItemBase";
import NavigationLink from "./NavigationLink";
import NavigationDropdown from "./NavigationModulDropdown/NavigationDropdown";

const NavigationItem: React.FC<NavItem> = (props) => {
  const { label, items, link } = props;

  const hasItems = !!items && items.length > 0;
  const hasLink = !!link && !!link.href;

  if (!hasItems && hasLink) {
    return <NavigationLink {...link}>{label}</NavigationLink>;
  }

  if (hasItems) {
    return <NavigationDropdown items={items}>{label}</NavigationDropdown>;
  }
  return <NavigationItemBase>{label}</NavigationItemBase>;
};

export default NavigationItem;
