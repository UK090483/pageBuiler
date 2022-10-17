import { defaultEmptyArray } from "../../helper";
import { Config, contentType } from "../../types";
import { resolveContentType } from "../sanity/createContentTypes";
import {
  fieldsToQuery,
  schemaItemToQuery,
  contentTypeQuery,
} from "./fieldsToQuery";

export const contentTypesQuery = (config: Config) => {
  return defaultEmptyArray(config.contentTypes).map((i) => {
    return contentTypeQuery(config, i);
  });
};

export const getContentTypeQuery = (config: Config, contentType: string) => {
  const _contentType = defaultEmptyArray(config.contentTypes).find(
    (i) => i.name === contentType
  );
  if (_contentType) {
    const q = contentTypeQuery(config, _contentType);

    let query = "_id,_type, " + q;

    if (config.hooks?.onContentTypeQuery) {
      query = config.hooks.onContentTypeQuery({
        config,
        result: query,
      });
    }

    return query;
  }
  console.warn("unable to find contentType for queryGeneration");
  return "";
};
