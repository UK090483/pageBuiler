import { Link } from "@components/Link";
import { NavigationModulItemBase } from "./NavigationItemBase";

export const NavigationModulLink: React.FC<{
  internalLink?: string;
  externalLink?: string;
  onClick?: () => void;
}> = ({ children, internalLink, externalLink, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className="flex items-center font-normal leading-none "
      href={internalLink || externalLink || "/"}
    >
      <NavigationModulItemBase>{children}</NavigationModulItemBase>
    </Link>
  );
};
