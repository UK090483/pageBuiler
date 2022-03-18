import { PageResult } from "pages/[[...slug]]";
import React, { useContext } from "react";

interface IAppContextState {
  data?: PageResult | null;
  preview: boolean;
}

const defaultState: IAppContextState = {
  data: null,
  preview: false,
};

const AppContext = React.createContext(defaultState);

interface AppContextProviderProps {
  data: IAppContextState["data"];
  children?: React.ReactNode;
  preview?: boolean;
}

export const AppContextProvider = (props: AppContextProviderProps) => {
  const { children, ...rest } = props;
  return (
    <AppContext.Provider value={{ preview: false, ...rest }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
