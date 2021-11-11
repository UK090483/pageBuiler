import type { SanityClient } from "@sanity/client/sanityClient";

type FetchPageProps = {
  query: string;
  slug: string;
  preview?: boolean;
  sanityClient: SanityClient;
};

export async function fetchPage<P>({
  query,
  slug,
  preview,
  sanityClient,
}: FetchPageProps) {
  let pageData: P | null = null;

  if (process.env.NODE_ENV === "development" && !preview) {
    pageData = await sanityClient.fetch<P>(query, {
      slug,
    });
  }

  if (process.env.NODE_ENV === "production") {
    pageData = await sanityClient.fetch<P>(query, {
      slug,
    });
  }

  return pageData;
}

export {};
