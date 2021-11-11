import type { SanityClient } from "@sanity/client/sanityClient";

type MockSanityClient = {
  fetchReturn: any;
};

export const mockGetClient = ({ fetchReturn }: MockSanityClient) => {
  return () =>
    ({
      fetch: () => Promise.resolve(fetchReturn),
    } as unknown as SanityClient);
};

export const mockClient = (props: MockSanityClient) => {
  return mockGetClient(props);
};
