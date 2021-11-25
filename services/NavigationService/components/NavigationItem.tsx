import { NavigationModulItemBase } from "./NavigationItemBase";
import { NavigationModulLink } from "./NavigationLink";
import { NavigationModulDropdown } from "./NavigationModulDropdown/NavigationModulDropdown";

export interface NavItem {
  label?: string;
  items?: NavItem[];
  link?: { internalLink?: string; externalLink?: string } | null;
  [key: string]: any;
}
const NavigationItem: React.FC<NavItem> = (props) => {
  const { label, items, link } = props;

  const hasItems = !!items && items.length > 0;
  const hasLink = !!link && !!(link.internalLink || link.externalLink);

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
