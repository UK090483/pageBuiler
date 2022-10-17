import { Config } from "PageBuilder/types";
import createContentTypes from "./createContentTypes";
import createObjects from "./createObjects";
import createRichtext from "./createRichtext";
import createSettings from "./createSetting";

const createSchema = (config: Config) => [
  ...createContentTypes(config),
  ...createSettings(config),
  ...createObjects(config),
  ...createRichtext(config),
];

export default createSchema;
