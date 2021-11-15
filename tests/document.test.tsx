/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Document from "../pages/_document";

const TestComponent: React.FC = () => {
  return <div>Test</div>;
};

describe("Document", () => {
  test("smoke", () => {
    //@ts-ignore
    // render(<Document inAmpMode={false} />);
  });
});
