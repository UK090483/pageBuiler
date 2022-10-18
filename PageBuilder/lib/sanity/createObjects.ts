import { Config, SanityObjectDefinition, PageBuilderObject } from "../../types";

import createComponents from "./createComponent";
import createDefaultObjects from "./createDefaultObjects";
import createPlugs from "./createPlugs";

const createObjects = (config: Config) => {
  const objects = resolveObjects(config);
  return objects;
};

export function resolveObjects(config: Config): PageBuilderObject[] {
  return [
    ...(config.objects ? config.objects.map((i) => createObject(i)) : []),
    ...createComponents(config),
    ...createPlugs(config),
    ...createDefaultObjects(config),
  ];
}

function createObject(props: PageBuilderObject): SanityObjectDefinition {
  return { type: "object", ...props } as SanityObjectDefinition;
}

export default createObjects;
