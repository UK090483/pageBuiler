import { PageResult } from "pages/[[...slug]]";
import React, { useContext } from "react";

interface IAppContextState {
  data: PageResult | null;
}

const defaultState: IAppContextState = {
  data: null,
};

const AppContext = React.createContext(defaultState);

interface AppContextProviderProps {
  data: IAppContextState["data"];
  children?: React.ReactNode;
}

export const AppContextProvider = (props: AppContextProviderProps) => {
  const { children, ...rest } = props;
  return (
    <AppContext.Provider value={{ ...rest }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
