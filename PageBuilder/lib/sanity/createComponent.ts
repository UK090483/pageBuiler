import { defaultEmptyArray } from "../../helper";
import { Config, SanityObjectDefinition } from "../../types";

function createComponents(config: Config): SanityObjectDefinition[] {
  const result = [
    ...defaultEmptyArray(config.components).map((i) => createComponent(i)),
  ];

  if (config.hooks?.onCreateComponents) {
    return config.hooks.onCreateComponents({ config, result });
  }

  return result;
}

function createComponent(
  props: Omit<SanityObjectDefinition, "type">
): SanityObjectDefinition {
  const { name, title, fields } = props;
  //@ts-ignore
  return { type: "object", name, title, fields };
}

export default createComponents;
