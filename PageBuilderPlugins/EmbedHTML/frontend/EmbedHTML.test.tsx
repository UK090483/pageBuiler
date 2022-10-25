import EmbedHTML from "./EmbedHTML";
import { render, screen } from "@testing-library/react";

const customRender = ({ html }: { html?: string }) => {
  render(
    //@ts-ignore
    <EmbedHTML
      index={0}
      isInline
      value={{
        ...(html ? { html } : {}),
      }}
    />
  );
};

describe("EmbedHTML", () => {
  it("EmbedHTML not render without html prop", async () => {
    customRender({});
  });

  it("EmbedHTML not render ", async () => {
    customRender({ html: "<div>testHTML</div>" });

    expect(screen.getByText("testHTML")).toBeInTheDocument();
  });
});
