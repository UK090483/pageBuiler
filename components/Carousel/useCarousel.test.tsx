import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCarousel } from "./useCarousel";

const customRender = (props?: Partial<Parameters<typeof useCarousel>[0]>) => {
  const { result, rerender } = renderHook(() =>
    useCarousel({ items: 5, ...props })
  );
  return { ...result.current, result, rerender };
};

describe("useCarousel", () => {
  it("should have item count from number", () => {
    expect(customRender().itemCount).toBe(5);
  });
  it("should have item count from array", () => {
    expect(customRender({ items: new Array(23) }).itemCount).toBe(23);
  });
  it("should have right default initial active Item", () => {
    expect(customRender().activeItemIndex).toBe(0);
  });
  it("should have right custom initial active Item", () => {
    expect(customRender({ initialActiveItem: 3 }).activeItemIndex).toBe(3);
  });
  it("should handle next() active Item", () => {
    const { next, result } = customRender({ initialActiveItem: 3 });
    act(() => {
      next();
    });
    expect(result.current.lastActiveItemIndex).toBe(3);
    expect(result.current.activeItemIndex).toBe(4);
    act(() => {
      next();
    });
    expect(result.current.lastActiveItemIndex).toBe(4);
    expect(result.current.activeItemIndex).toBe(0);
  });

  it("should handle prev() active Item", () => {
    const { prev, result } = customRender({ initialActiveItem: 1 });
    act(() => {
      prev();
    });
    expect(result.current.activeItemIndex).toBe(0);
    expect(result.current.lastActiveItemIndex).toBe(1);
    act(() => {
      prev();
    });
    expect(result.current.activeItemIndex).toBe(4);
    expect(result.current.lastActiveItemIndex).toBe(0);
  });
  it("should handle set() active Item", () => {
    const { set, result } = customRender({ initialActiveItem: 1 });
    act(() => {
      set(3);
    });
    expect(result.current.activeItemIndex).toBe(3);
    expect(result.current.lastActiveItemIndex).toBe(1);
    act(() => {
      set(0);
    });
    expect(result.current.activeItemIndex).toBe(0);
    expect(result.current.lastActiveItemIndex).toBe(3);
  });
  it("should handle reset() active Item", () => {
    const { set, reset, result } = customRender({ initialActiveItem: 2 });
    act(() => {
      set(3);
    });
    act(() => {
      reset();
    });
    expect(result.current.activeItemIndex).toBe(2);
    expect(result.current.lastActiveItemIndex).toBe(null);
  });
});
