import buildSitemap from "./buildSitemap";

describe("buildSiteMap", () => {
  it("should render Pages ", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 3, 1));

    const res = buildSitemap({
      hostname: "https://testurl",
      pages: [
        { slug: "testPage1", slug_t: "testSlug1t" },
        { slug: "testPage2" },
      ],
    });

    console.log(res);
  });
});
