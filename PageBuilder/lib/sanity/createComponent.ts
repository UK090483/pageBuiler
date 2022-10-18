import { defaultEmptyArray } from "../../helper";
import { Config, SanityObjectDefinition, PageBuilderObject } from "../../types";

function createComponents(config: Config): SanityObjectDefinition[] {
  const result = [
    ...defaultEmptyArray(config.components).map((i) => createComponent(i)),
  ];

  if (config.hooks?.onCreateComponents) {
    return config.hooks.onCreateComponents({ config, result });
  }

  return result;
}

function createComponent(props: PageBuilderObject): SanityObjectDefinition {
  const { name, title, fields } = props;

  return { type: "object", name, title, fields } as SanityObjectDefinition;
}

export default createComponents;
