import { render } from "@testing-library/react";
import SanityImage from "./SanityImage";

describe.only("<SanityImage />", () => {
  it("should render", () => {
    render(<SanityImage />);
  });
});
