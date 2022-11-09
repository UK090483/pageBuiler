import { fireEvent, render, screen as s } from "@testing-library/react";
import React from "react";
import Carousel from "./Carousel";

const items = ["1", "2", "3", "4"];

const customRender = (props?: {
  carouselProps?: Partial<React.ComponentProps<typeof Carousel>>;
  items?: string[];
}) => {
  return render(
    <Carousel {...props?.carouselProps}>
      {(props?.items || items).map((i) => {
        return (
          <div id="testId" className="testClassName" key={i}>
            {i}
          </div>
        );
      })}
    </Carousel>
  );
};

describe("<Carousel/>", () => {
  let unMount: () => void = () => {};
  beforeEach(() => {
    unMount = customRender().unmount;
  });
  it("should render ul ", () => {
    expect(s.getByRole("list")).toBeInTheDocument();
  });
  it("should render items as li", () => {
    expect(s.getAllByRole("listitem", { hidden: true })).toHaveLength(4);
  });
  it("should have right aria-hidden  li", () => {
    expect(s.getAllByRole("listitem")).toHaveLength(1);
  });
  it("should pass on classNames ", () => {
    s.getAllByRole("listitem", { hidden: true }).forEach((i) =>
      expect(i).toHaveClass("testClassName")
    );
  });
  it("should pass on props", () => {
    s.getAllByRole("listitem", { hidden: true }).forEach((i) =>
      expect(i).toHaveAttribute("id", "testId")
    );
  });
  it("should pass on props", () => {
    s.getAllByRole("listitem", { hidden: true }).forEach((i) =>
      expect(i).toHaveAttribute("id", "testId")
    );
  });

  it("should default initial item", () => {
    expect(s.getByRole("listitem")).toHaveTextContent("1");
  });
  it("should custom initial item", () => {
    unMount();
    customRender({ carouselProps: { initialActiveItem: 3 } });
    expect(s.getByRole("listitem")).toHaveTextContent("4");
  });

  it("should have navigation buttons", () => {
    expect(s.getByLabelText("carousel button next"));
    expect(s.getByLabelText("carousel button previous"));
  });
  it("should navigate forward ", () => {
    fireEvent.click(s.getByLabelText("carousel button next"));
    expect(s.getByRole("listitem")).toHaveTextContent("2");
    fireEvent.click(s.getByLabelText("carousel button next"));
    expect(s.getByRole("listitem")).toHaveTextContent("3");
    fireEvent.click(s.getByLabelText("carousel button next"));
    expect(s.getByRole("listitem")).toHaveTextContent("4");
    fireEvent.click(s.getByLabelText("carousel button next"));
    expect(s.getByRole("listitem")).toHaveTextContent("1");
  });
  it("should navigate backward ", () => {
    fireEvent.click(s.getByLabelText("carousel button previous"));
    expect(s.getByRole("listitem")).toHaveTextContent("4");
    fireEvent.click(s.getByLabelText("carousel button previous"));
    expect(s.getByRole("listitem")).toHaveTextContent("3");
  });
});
