import { SanityClient } from "@sanity/client";
import { GetStaticPathsContext, GetStaticPathsResult } from "next";

type fetchStaticPathProps = {
  items: { name: string }[];
  sanityClient: SanityClient;
  context: GetStaticPathsContext;
};
const fetchStaticPath = async (
  props: fetchStaticPathProps
): Promise<GetStaticPathsResult<any>> => {
  const { sanityClient, context, items } = props;

  const query = items.reduce((acc, i, index) => {
    const prefix = index === 0 ? "*[ _type == " : "|| _type == ";
    const end = index === items.length - 1 ? " ]" : "";
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
