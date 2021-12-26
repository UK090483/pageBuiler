/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";

import NavigationItemBase from "./NavigationItemBase";

const label = "testLabel";

describe("NavigationLink", () => {
  it(" should render ", () => {
    render(<NavigationItemBase> {label}</NavigationItemBase>);
    expect(screen.getByText("testLabel"));
  });
  it(" should render bold ", () => {
    render(<NavigationItemBase bold> {label}</NavigationItemBase>);
    expect(screen.getByText("testLabel")).toHaveClass("font-bold");
  });
  it(" should render icon ", () => {
    render(<NavigationItemBase icon> {label}</NavigationItemBase>);
    expect(screen.getByTestId("navIcon")).toBeInTheDocument();
  });
  it(" should render icon ", () => {
    render(
      <NavigationItemBase icon hover>
        {label}
      </NavigationItemBase>
    );

    expect(screen.getByTestId("navIcon")).toHaveClass("rotate-90");
  });
});
