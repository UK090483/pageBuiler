import {
  customRender,
  screen,
  testImage,
  testText,
} from "../../../__test__/test-utils";
import SectionBlock from "./SectionBlock";

describe("SectionBlock", () => {
  it("smoke", () => {
    customRender(<SectionBlock _key="testKey" />);
    expect(screen.getByTestId("sectionBlock"));
  });
  it("renders title to id", () => {
    customRender(<SectionBlock _key="testKey" title="testTitle" />);
    expect(screen.getByTestId("sectionBlock")).toHaveAttribute(
      "id",
      "testTitle"
    );
  });
  it("renders Image", () => {
    customRender(<SectionBlock _key="testKey" image={testImage()} />);
    expect(screen.getByAltText("testImage"));
  });
  it("renders Image l", () => {
    customRender(
      <SectionBlock _key="testKey" image={testImage()} content={testText()} />
    );
    expect(screen.getByAltText("testImage"));
  });
  it("renders Image r", () => {
    customRender(
      <SectionBlock
        _key="testKey"
        image={testImage()}
        content={testText()}
        imagePosition="r"
      />
    );
    expect(screen.getByAltText("testImage"));
  });
  it("renders content", () => {
    customRender(<SectionBlock _key="testKey" content={testText()} />);
    expect(screen.getByText("testText"));
  });
});
