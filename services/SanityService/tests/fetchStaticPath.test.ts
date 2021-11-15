import { fetchStaticPaths } from "../fetchStaticPaths";
import { mockClient } from "./testPrepare";
describe("fetchStaticPath", () => {
  it("should trow error if fetch result is not [] ", async () => {
    await expect(
      fetchStaticPaths("", mockClient({ fetchReturn: null })())
    ).rejects.toThrow();
    await expect(
      fetchStaticPaths("", mockClient({ fetchReturn: "string" })())
    ).rejects.toThrow();
    await expect(
      fetchStaticPaths("", mockClient({ fetchReturn: [] })())
    ).resolves.toStrictEqual({ fallback: false, paths: [] });
  });

  it("should return right data ", async () => {
    await expect(
      fetchStaticPaths("", mockClient({ fetchReturn: [] })())
    ).resolves.toStrictEqual({ fallback: false, paths: [] });

    await expect(
      fetchStaticPaths(
        "",
        mockClient({
          fetchReturn: [
            { slug: "test1" },
            { slug: "CAPITAL" },
            { slug: "test3", pageType: "test-page-type" },
            { slug: "test4", pageType: "CAPITAL" },
            { slug: "", pageType: "test5" },
          ],
        })()
      )
    ).resolves.toStrictEqual({
      fallback: false,
      paths: [
        { params: { slug: ["test1"] } },
        { params: { slug: ["capital"] } },
        { params: { slug: ["test-page-type", "test3"] } },
        { params: { slug: ["capital", "test4"] } },
      ],
    });
  });
});
