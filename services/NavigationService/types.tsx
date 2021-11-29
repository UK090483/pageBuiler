export interface NavItem {
  label?: string;
  items?: NavItem[];
  link?: {
    href?: string | null;
    external?: boolean;
  } | null;
  [key: string]: any;
}
