export interface NavItem {
  label?: string;
  items?: NavItem[];
  link?: { internalLink?: string; externalLink?: string } | null;
  [key: string]: any;
}
