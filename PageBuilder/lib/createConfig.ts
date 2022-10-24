import { isArray } from "lodash";
import { Config, Hooks, IConfigOptions } from "PageBuilder/types";

function createConfig(
  input: Config | Config[],
  options?: Partial<IConfigOptions>
): Config {
  if (typeof document !== "undefined") {
    console.error("nooooooo config in frontend");
  }

  if (isArray(input)) {
    return mergeConfig(input, options);
  }
  return input;
}

export default createConfig;

import {
  DEFAULT_IMAG_QUERY,
  DEFAULT_LINK_QUERY,
  DEFAULT_SLUG_QUERY,
} from "../constants";

function mergeConfig(
  configs: Config[],
  options?: Partial<IConfigOptions>
): Config {
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
      slug: {
        query: ({ locale }) => DEFAULT_SLUG_QUERY(locale),
      },
      image: { query: DEFAULT_IMAG_QUERY },
      link: {
        query: ({ locale }) => DEFAULT_LINK_QUERY(locale),
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
