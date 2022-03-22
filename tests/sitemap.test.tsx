import { render } from "@testing-library/react";
import { getServerSideProps } from "../pages/sitemap.xml";

jest.mock("@lib/SanityService/sanity.server", () => ({
  fetch: () => Promise.resolve([{ slug: "test1" }, { slug: "test2" }]),
}));

describe("Sitemap", () => {
  it("should render ", () => {
    expect(getServerSideProps()).toMatchSnapshot();
  });
});
