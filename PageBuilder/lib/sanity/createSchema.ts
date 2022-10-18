import { Config } from "PageBuilder/types";
import createContentTypes from "./createContentTypes";
import createObjects from "./createObjects";
import createRichtext from "./createRichtext";
import createSettings from "./createSetting";
import { withLocalization } from "./withLocalization";

const createSchemaA = (config: Config) => [
  ...createContentTypes(config),
  ...createSettings(config),
  ...createObjects(config),
  ...createRichtext(config),
];

const createSchema = (config: Config) =>
  //@ts-ignore
  withLocalization(config, createSchemaA(config));

export default createSchema;
