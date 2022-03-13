import defaultImage from "./defaultImage";
import link from "./link";
import pageHeader from "./pageHeader";
import Seo from "./Seo";
import Navigation from "./navigation";
import localeString from "./localeString";
import Logo from "./Logo";

const Objects = [
  Logo,
  defaultImage,
  link,
  pageHeader,
  Seo,
  ...Navigation,
  localeString,
];

export default Objects;
