import { defaultEmptyArray } from "../../helper";
import { Config, SanityObjectDefinition } from "../../types";

function createPlugs(config: Config): SanityObjectDefinition[] {
  const result = defaultEmptyArray(config.plugs).map(createPlug);

  return config.hooks?.onCreatePlugs
    ? config.hooks?.onCreatePlugs({ config, result })
    : result;
}

function createPlug(
  props: Omit<SanityObjectDefinition, "type">
): SanityObjectDefinition {
  const { name, title, fields } = props;

  //@ts-ignore
  return { type: "object", name, title, fields };
}

export default createPlugs;
