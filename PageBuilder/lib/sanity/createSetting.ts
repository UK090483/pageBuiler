import { defaultEmptyArray } from "../../helper";
import { Config, SanityDocumentDefinition } from "../../types";

function createSettings(config: Config): SanityDocumentDefinition[] {
  const items = [
    ...defaultEmptyArray(config.settings).map((i) => createSetting(i)),
  ];

  //   if (config.hooks?.onCreateComponents) {
  //     return config.hooks.onCreateComponents({ config, items });
  //   }

  return items;
}

function createSetting(
  props: Omit<SanityDocumentDefinition, "type">
): SanityDocumentDefinition {
  return { type: "document", ...props };
}

export default createSettings;
