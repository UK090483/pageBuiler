import { Config } from "PageBuilder/types";
import createLinkObject from "./defaultObjects/createLinkObject";

const createDefaultObjects = (config: Config) => {
  return [createLinkObject(config)];
};

export default createDefaultObjects;
