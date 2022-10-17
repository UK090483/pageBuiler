import { isArray } from "lodash";
import { defaultEmptyArray } from "../helper";
import { Config, Hooks } from "PageBuilder/types";

function createConfig(input: Config | Config[]): Config {
  if (isArray(input)) {
    return mergeConfig(input);
  }
  return input;
}

export default createConfig;

import HooksPubSub from "./Hooks/Hooks";

function mergeConfig(configs: Config[]): Config {
  const finalConfig: Config = {
    settings: [],
    components: [],
    contentTypes: [],
    objects: [],
    plugs: [],
    richText: [],
    hooks: {},
    options: {
      link: {
        query: `'internal': internal->slug.current`,
      },
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

  for (const conf of configs) {
    finalConfig.settings = [
      ...defaultEmptyArray(finalConfig.settings),
      ...defaultEmptyArray(conf.settings),
    ];
    finalConfig.components = [
      ...defaultEmptyArray(finalConfig.components),
      ...defaultEmptyArray(conf.components),
    ];
    finalConfig.contentTypes = [
      ...defaultEmptyArray(finalConfig.contentTypes),
      ...defaultEmptyArray(conf.contentTypes),
    ];
    finalConfig.objects = [
      ...defaultEmptyArray(finalConfig.objects),
      ...defaultEmptyArray(conf.objects),
    ];
    finalConfig.plugs = [
      ...defaultEmptyArray(finalConfig.plugs),
      ...defaultEmptyArray(conf.plugs),
    ];
    finalConfig.richText = [
      ...defaultEmptyArray(finalConfig.richText),
      ...defaultEmptyArray(conf.richText),
    ];

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
