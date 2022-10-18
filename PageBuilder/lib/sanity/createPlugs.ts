import { defaultEmptyArray } from "../../helper";
import { Config, PageBuilderObject, SanityObjectDefinition } from "../../types";

function createPlugs(config: Config): PageBuilderObject[] {
  const result = defaultEmptyArray(config.plugs).map(createPlug);

  return config.hooks?.onCreatePlugs
    ? config.hooks?.onCreatePlugs({ config, result })
    : result;
}

function createPlug(props: PageBuilderObject): SanityObjectDefinition {
  return { type: "object", ...props } as SanityObjectDefinition;
}

export default createPlugs;
