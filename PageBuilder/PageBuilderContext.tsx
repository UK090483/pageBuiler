import React, { useContext } from "react";
import { PageBuilderContentType } from "./types";

interface IPageBuilderContextState {
  data?: PageBuilderContentType | null;
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
