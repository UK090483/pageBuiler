/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { getSanityClient } from "@services/SanityService/sanity.server";
import PageComponent, { getStaticPaths } from "../pages/[[...slug]]";

jest.mock("@services/SanityService/sanity.server", () => {
  return {
    getSanityClient: jest.fn(() => {
      return {
        fetch: () => Promise.resolve([{ slug: "test" }]),
      };
    }),
  };
});

describe("Page", () => {
  test("smoke", () => {
    render(<PageComponent page={null} />);
  });
});

describe("getStaticPaths", () => {
  test("smoke", async () => {
    expect(getStaticPaths({})).resolves.toEqual({
      fallback: false,
      paths: [{ params: { slug: ["test"] } }],
    });
  });
});
