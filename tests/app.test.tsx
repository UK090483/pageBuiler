/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import App from "../pages/_app";

const TestComponent: React.FC = () => {
  return <div>Test</div>;
};

describe("App", () => {
  test("smoke", () => {
    // //@ts-ignore
    // render(<App Component={TestComponent} pageProps={{}} />);
  });
});
