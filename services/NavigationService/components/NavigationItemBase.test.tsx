/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";

import { NavigationModulItemBase } from "./NavigationItemBase";

const label = "testLabel";

describe("NavigationLink", () => {
  it(" should render ", () => {
    render(<NavigationModulItemBase> {label}</NavigationModulItemBase>);
    expect(screen.getByText("testLabel"));
  });
  it(" should render bold ", () => {
    render(<NavigationModulItemBase bold> {label}</NavigationModulItemBase>);
    expect(screen.getByText("testLabel")).toHaveClass("font-bold");
  });
  it(" should render icon ", () => {
    render(<NavigationModulItemBase icon> {label}</NavigationModulItemBase>);
    expect(screen.getByTestId("navIcon")).toBeInTheDocument();
  });
  it(" should render icon ", () => {
    render(
      <NavigationModulItemBase icon hover>
        {label}
      </NavigationModulItemBase>
    );

    expect(screen.getByTestId("navIcon")).toHaveClass("rotate-90");
  });
});
