import { PageResult } from "./ContentTypes/Page/page.types";
import React, { useContext } from "react";

interface IPageBuilderContextState {
  data?: PageResult | null;
}

const defaultState: IPageBuilderContextState = {
  data: null,
};

const PageBuilderContext = React.createContext(defaultState);

interface PageBuilderContextProviderProps {
  data: IPageBuilderContextState["data"];
  children?: React.ReactNode;
}

export function PageBuilderContextProvider(
  props: PageBuilderContextProviderProps
) {
  const { children, ...rest } = props;

  return (
    <PageBuilderContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </PageBuilderContext.Provider>
  );
}

export const usePageBuilderContext = () => {
  return useContext(PageBuilderContext);
};
