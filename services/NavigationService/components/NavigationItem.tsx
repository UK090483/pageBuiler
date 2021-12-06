import { NavItem } from "../types";
import { NavigationModulItemBase } from "./NavigationItemBase";
import NavigationModulLink from "./NavigationLink";
import { NavigationModulDropdown } from "./NavigationModulDropdown/NavigationModulDropdown";

const NavigationItem: React.FC<NavItem> = (props) => {
  const { label, items, link } = props;

  const hasItems = !!items && items.length > 0;
  const hasLink = !!link && !!link.href;

  if (!hasItems && hasLink) {
    return <NavigationModulLink {...link}>{label}</NavigationModulLink>;
  }

  if (hasItems) {
    return (
      <NavigationModulDropdown items={items}>{label}</NavigationModulDropdown>
    );
  }
  return <NavigationModulItemBase>{label}</NavigationModulItemBase>;
};

export default NavigationItem;
