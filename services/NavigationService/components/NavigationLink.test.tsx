/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";

import NavigationLink from "./NavigationLink";

const label = "testLabel";

describe("NavigationLink", () => {
  it(" should render ", () => {
    render(<NavigationLink> {label}</NavigationLink>);
    expect(screen.getByText("testLabel"));
  });

  // it("type click should show label", () => {
  //   render(<Button onClick={() => {}}>test</Button>);
  //   expect(screen.getByText("test"));
  // });
  // it("type click should handle click", () => {
  //   const handleClick = jest.fn();
  //   render(<NavigationLink onClick={handleClick}>test</NavigationLink>);

  //   fireEvent.click(screen.getByText("test"));
  //   expect(handleClick).toBeCalledTimes(1);
  // });
});
