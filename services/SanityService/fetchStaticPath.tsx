import type { SanityClient } from "@sanity/client/sanityClient";

const getAllDocSlugs: (
  doc: string,
  client: () => SanityClient
) => Promise<null | { slug: string; pageType: null | string }[]> = async (
  doc,
  client
) => {
  return client().fetch(
    `*[_type == "${doc}"]{ 'pageType': pageType->name , 'slug': slug.current }`
  );
};

export type FetchStaticPathsResult = {
  paths: string[];
  fallback: boolean;
};

export const fetchStaticPaths = async (
  doc: string,
  client: () => SanityClient
): Promise<FetchStaticPathsResult> => {
  const allPages = await getAllDocSlugs(doc, client);

  if (!allPages || !Array.isArray(allPages)) {
    throw new Error("No Path returned");
  }

  return {
    paths:
      allPages.reduce((acc, page, index) => {
        if (!page.slug) return [...acc];
        const pageType = page.pageType && page.pageType.toLowerCase();
        const slug = page.slug.toLowerCase();
        return [
          ...acc,
          // ...(index === 0 ? [{ params: { slug: [""] } }] : []),
          { params: { slug: pageType ? [pageType, slug] : [slug] } },
        ];
      }, [] as any[]) || [],
    fallback: false,
  };
};

export {};
