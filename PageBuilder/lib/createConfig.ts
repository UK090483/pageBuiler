import { isArray } from "lodash";
import { defaultEmptyArray } from "../helper";
import { Config, Hooks } from "PageBuilder/types";

function createConfig(
  input: Config | Config[],
  options?: Config["options"]
): Config {
  if (isArray(input)) {
    return mergeConfig(input, options);
  }
  return input;
}

export default createConfig;

import HooksPubSub from "./Hooks/Hooks";

function mergeConfig(configs: Config[], options?: Config["options"]): Config {
  const finalConfig: Config = {
    settings: [],
    components: [],
    contentTypes: [],
    objects: [],
    plugs: [],
    editor: [],
    richText: [],
    hooks: {},
    options: {
      image: {
        query: `alt,crop,hotspot,'url':asset->url,
        "id": asset->assetId,
      "type": asset->mimeType,
      "aspectRatio": asset->metadata.dimensions.aspectRatio,
      "lqip": asset->metadata.lqip,
      'width': asset->metadata.dimensions.width,
      'height': asset->metadata.dimensions.height,`,
      },
      link: {
        query: `...(internal->{ 'internal': select( _type != 'page' => _type + '/' + slug.current, '/' + slug.current ) })`,
      },
      ...options,
    },
  };

  type HookList = {
    [Property in keyof Hooks]: Hooks[Property][];
  };

  const hooks: HookList = {
    onCreateComponents: [],
    onCreateContentTypes: [],
    onCreateObjects: [],
    onCreatePlugs: [],
    onCreateRichText: [],
    onContentTypeQuery: [],
  };

  const mergeArrays: (keyof Omit<Config, "hooks" | "options">)[] = [
    "components",
    "editor",
    "settings",
    "contentTypes",
    "objects",
    "plugs",
    "richText",
  ];

  for (const conf of configs) {
    for (const key of mergeArrays) {
      const a = finalConfig[key];
      const b = conf[key];
      if (Array.isArray(a) && Array.isArray(b)) {
        //@ts-ignore
        finalConfig[key] = [...a, ...b];
      }
    }
  }

  for (const conf of configs) {
    if (conf.hooks) {
      Object.entries(conf.hooks).forEach(([key, fn]) => {
        //@ts-ignore
        hooks[key as keyof Hooks]?.push(fn);
      });
    }
  }

  if (finalConfig.hooks) {
    Object.entries(hooks).forEach(([key, entries]) => {
      if (entries.length > 0 && finalConfig.hooks) {
        const _key = key as keyof Hooks;

        finalConfig.hooks[_key] = (props) =>
          (hooks && hooks[_key]
            ? //@ts-ignore
              hooks[_key]?.reduce(
                //@ts-ignore
                (acc, fn) => (fn ? { ...acc, result: fn(acc) } : acc),
                props
              )
            : props
          ).result;
      }
    });
  }

  return finalConfig;
}
