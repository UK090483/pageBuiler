import { defaultEmptyArray } from "../../helper";
import {
  Config,
  SanityDocumentDefinition,
  PageBuilderSetting,
} from "../../types";

function createSettings(config: Config): SanityDocumentDefinition[] {
  const items = [
    ...defaultEmptyArray(config.settings).map((i) => createSetting(i)),
  ];

  //   if (config.hooks?.onCreateComponents) {
  //     return config.hooks.onCreateComponents({ config, items });
  //   }

  return items;
}

function createSetting(props: PageBuilderSetting): SanityDocumentDefinition {
  return { type: "document", ...props };
}

export default createSettings;
