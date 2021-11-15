import { mockClient } from "./testPrepare";
import { fetchPage } from "../fetchStaticProps";

describe.only("fetchPage", () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should work in development ", async () => {
    //@ts-ignore
    process.env.NODE_ENV = "development";

    await expect(
      fetchPage({
        query: "any",
        slug: "any",
        preview: false,
        sanityClient: mockClient({ fetchReturn: { test: "test" } })(),
      })
    ).resolves.toStrictEqual({ test: "test" });
  });

  it("should work in production ", async () => {
    //@ts-ignore
    process.env.NODE_ENV = "production";

    await expect(
      fetchPage({
        query: "any",
        slug: "any",
        sanityClient: mockClient({ fetchReturn: { test: "test" } })(),
      })
    ).resolves.toStrictEqual({ test: "test" });
  });
});
