/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";

import NavItem from "./NavItem";

describe("NavItem", () => {
  it("type click should render ", () => {
    render(<NavItem href="/test" label="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
  });
});
