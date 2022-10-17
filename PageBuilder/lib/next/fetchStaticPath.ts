import { Config } from "../../types";
import { SanityClient } from "@sanity/client";
import { GetStaticPathsContext, GetStaticPathsResult } from "next";
import { defaultEmptyArray } from "../../helper";

type fetchStaticPathProps = {
  config: Config;
  sanityClient: SanityClient;
  context: GetStaticPathsContext;
};
const fetchStaticPath = async (
  props: fetchStaticPathProps
): Promise<GetStaticPathsResult<any>> => {
  const { sanityClient, context, config } = props;

  const pages = defaultEmptyArray(config.contentTypes).filter((t) => t.hasPage);

  const query = pages.reduce((acc, i, index) => {
    const prefix = index === 0 ? "*[ _type == " : "|| _type == ";
    const end = index === pages.length - 1 ? " ]" : "";
    return acc + prefix + '"' + i.name + '"' + end;
  }, "");

  const r = `{
    'slug': select(
      _type != "page" => _type +'/'+slug.current,
      slug.current
    )
  }`;

  const res = await sanityClient.fetch<{ slug: string }[]>(query + r);
  return { fallback: "blocking", paths: [] };
  return { fallback: true, paths: res.map((i) => i.slug) };
};

export default fetchStaticPath;
