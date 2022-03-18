import { AppContextProvider } from "@components/AppContext";
import { render, RenderOptions } from "@testing-library/react";
import { PageResult } from "pages/[[...slug]]";

// Add in any providers here if necessary:
const Wrap: React.FC<{ data?: PageResult }> = ({ children, data }) => {
  return (
    <>
      <AppContextProvider data={data}>{children}</AppContextProvider>
    </>
  );
};

type CustomRenderOptions = {
  data?: PageResult;
  jest?: RenderOptions;
};

const useRouter = jest.spyOn(require("next/router"), "useRouter");

jest.mock("@components/Link", () => {
  return {
    __esModule: true,
    //@ts-ignore
    default: ({ children, ...rest }) => {
      return <a {...rest}>{children}</a>;
    },
  };
});

jest.mock("@components/Link", () => {
  return {
    __esModule: true,
    //@ts-ignore
    default: ({ children, href }) => {
      return <a href={href}>{children}</a>;
    },
  };
});

jest.mock("@lib/SanityService/sanity.server", () => {
  return {
    __esModule: true,
    sanityClient: jest.fn(),
    previewClient: jest.fn(),
  };
});

const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
) => {
  useRouter.mockImplementation(() => ({ route: "/" }));

  return render(ui, {
    wrapper: ({ children }) => <Wrap data={options?.data}>{children}</Wrap>,
    ...jest,
  });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender };
