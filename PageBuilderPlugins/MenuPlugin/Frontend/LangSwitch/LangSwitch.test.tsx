import { LangSwitch, LangSwitchProps } from "./LangSwitch";

import { getByRole, render, screen } from "@testing-library/react";
import { serializeEnvelope } from "@sentry/utils";

jest.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
    locale: "test1",
  }),
}));

const customRender = (itemProps: LangSwitchProps) => {
  return render(<LangSwitch {...itemProps} />);
};

const getLang = (id: string) => {
  return { [id]: { link: "/" + id, title: "title_" + id } };
};
describe("<LangSwitch/>", () => {
  it("should not render if no props", () => {
    customRender({});
    expect(screen.findByTestId("langSwitch")).toBeFalsy;
  });
  it("should add className", () => {
    customRender({
      className: "testClassName",
      LangSwitcherResult: { ...getLang("test1") },
    });
    expect(screen.findByTestId("langSwitch")).toBeFalsy;
  });
  it("should show language key", () => {
    customRender({
      className: "testClassName",
      LangSwitcherResult: { ...getLang("test1") },
    });
    expect(screen.getByTestId("langSwitch_item_test1")).toHaveTextContent(
      "test1"
    );
  });
  it("should have language link", () => {
    customRender({
      className: "testClassName",
      LangSwitcherResult: { ...getLang("test1") },
    });
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test1");
  });

  it("should have language link", () => {
    customRender({
      className: "testClassName",
      LangSwitcherResult: { ...getLang("test1") },
    });
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test1");
  });

  it("should show Active language ", () => {
    customRender({
      className: "testClassName",
      LangSwitcherResult: { ...getLang("test1"), ...getLang("test2") },
    });
    expect(screen.getAllByRole("link")[0]).toHaveClass("border-2");
    screen.debug();
  });
});
