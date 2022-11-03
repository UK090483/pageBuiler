import { useRouter } from "next/router";
import { NavItem } from "../types";
interface useIsActiveProps extends NavItem {}
const useIsActive = (props: useIsActiveProps) => {
  const { items, link } = props;
  const { asPath } = useRouter();

  const cleanAsPath = asPath.split("?")[0];

  if (link) {
    return link.internal === cleanAsPath;
  }
  if (items) {
    const res = items.find((i) => i.link?.internal === cleanAsPath);
    return !!res;
  }
};
export default useIsActive;
