import type { SanityClient } from "@sanity/client";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { localizedQueryFn } from "../helper/withLocalization";

type fetchStaticPropsProps = {
  items: Record<string, { query: localizedQueryFn }>;
  sanityClient: SanityClient;
  context: GetStaticPropsContext;
};

const fetchStaticProps = async (
  props: fetchStaticPropsProps
): Promise<GetStaticPropsResult<any>> => {
  const { context, sanityClient, items } = props;

  const isHome = !context.params?.slug;
  const isOne = !!(context.params?.slug && context.params?.slug.length === 1);
  const isMulti = !!(context.params?.slug && context.params?.slug.length > 1);

  let query = "";

  if (isHome) {
    const q = items.page.query(context.locale);
    query = `*[ _id == 'siteConfig' ][0]{
      ...(indexPage->{${q}})
     }`;
  }

  if (isOne) {
    const q = items.page.query(context.locale);
    const s = context.params?.slug && context.params?.slug[0];
    query = `*[ _type == "page" && (slug.current == "${s}" || slug_${context.locale}.current == "${s}") ][0]{
      ${q}
     }`;
  }

  if (isMulti) {
    const t = context.params?.slug && context.params?.slug[0];
    const s = context.params?.slug && context.params?.slug[1];
    //@ts-ignore
    const q = items[t].query(context.locale);
    query = `*[ _type =="${t}" &&  (slug.current == "${s}" || slug_${context.locale}.current == "${s}") ][0]{
      ${q}
     }`;
  }

  console.time(context.params?.slug && context.params?.slug[1]);
  const res = await sanityClient.fetch(query);
  console.timeEnd(context.params?.slug && context.params?.slug[1]);

  if (res) {
    return { props: { data: res }, revalidate: 1 };
  }

  return { notFound: true };
};

export default fetchStaticProps;
