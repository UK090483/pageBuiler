import { type } from "os";
import React from "react";

interface ILayoutContextState {}

const defaultState: ILayoutContextState = {};

const LayoutContext = React.createContext(defaultState);

interface LayoutContextProviderProps {}

const LayoutContextProvider: React.FC<LayoutContextProviderProps> = (props) => {
  const { children } = props;
  return <LayoutContext.Provider value={{}}>{children}</LayoutContext.Provider>;
};
