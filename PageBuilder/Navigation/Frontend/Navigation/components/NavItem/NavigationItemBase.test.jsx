import { render } from "@testing-library/react";

import NavigationItemBase from "./NavigationItemBase";

const useRouter = jest.spyOn(require("next/router"), "useRouter");



describe("NavigationModulItemBase", () => {

  it("smoke  ", () => {
    useRouter.mockImplementation(() => ({
      query: { locale: "de" },
      asPath: "",
    }));
    render(<NavigationItemBase item={{link:{internal:'/'}}}/>)
  });
});
