import { PageResult } from "../ContentTypes/Page/page.types";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import usePreviewSubscription from "./Preview/previewSubscription";

interface IPageBuilderContextState {
  data?: PageResult | null;
}

const defaultState: IPageBuilderContextState = {
  data: null,
};

const PageBuilderContext = React.createContext(defaultState);

interface PageBuilderContextProviderProps {
  data: IPageBuilderContextState["data"];
  query?: string;
  children?: React.ReactNode;
}

export function PageBuilderContextProvider(
  props: PageBuilderContextProviderProps
) {
  const { children, query, data: serverData, ...rest } = props;
  const { isPreview } = useRouter();
  const { data } = usePreviewSubscription(query || "", {
    initialData: serverData,
    enabled: isPreview,
  });

  return (
    <PageBuilderContext.Provider value={{ data }}>
      {children}
    </PageBuilderContext.Provider>
  );
}

export const usePageBuilderContext = () => {
  return useContext(PageBuilderContext);
};
