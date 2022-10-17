import { Config, SanityObjectDefinition, SomePartial } from "../../types";
import createComponents from "./createComponent";
import createDefaultObjects from "./createDefaultObjects";
import createPlugs from "./createPlugs";

const createObjects = (config: Config) => {
  const objects = resolveObjects(config);
  return objects;
};

export function resolveObjects(config: Config): SanityObjectDefinition[] {
  return [
    ...(config.objects ? config.objects.map((i) => createObject(i)) : []),
    ...createComponents(config),
    ...createPlugs(config),
    ...createDefaultObjects(config),
  ];
}

function createObject(
  props: SomePartial<SanityObjectDefinition, "type">
): SanityObjectDefinition {
  return { type: "object", ...props };
}

export default createObjects;
