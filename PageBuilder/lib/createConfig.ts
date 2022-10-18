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
      link: {
        query: `...(internal->{ 'internal': _type + '/' + slug.current})`,
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

  for (const conf of configs) {
    finalConfig.editor = [
      ...defaultEmptyArray(finalConfig.editor),
      ...defaultEmptyArray(conf.editor),
    ];
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
