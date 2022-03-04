import React, { useContext } from "react";

interface ILayoutContextState {
  homeRoute: { [k: string]: string } | null;
}

const defaultState: ILayoutContextState = {
  homeRoute: null,
};

const LayoutContext = React.createContext(defaultState);

interface LayoutContextProviderProps {
  homeRoute?: { [k: string]: string };
}

export const LayoutContextProvider: React.FC<LayoutContextProviderProps> = (
  props
) => {
  const { children, ...rest } = props;
  return (
    <LayoutContext.Provider value={{ ...defaultState, ...rest }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export const useHomeRoute = () => {
  const { homeRoute } = useLayoutContext();

  const parseRoute = (href: string) => {
    return href;
  };

  return { homeRoute, parseRoute };
};
