import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import ReactGA from "react-ga";
import Cookies from "js-cookie";

interface IAnalyticsContextState {
  setConsent: () => void;
  consent: Consents;
}

const defaultState: IAnalyticsContextState = {
  setConsent: () => console.log("No AnalyticsContext found"),
  consent: {},
};

const AnalyticsContext = React.createContext(defaultState);

interface AnalyticsContextProviderProps {
  id: string;

  children?: React.ReactNode;
}

const DefaultCookieName = "consent";

type Consents = { [k: string]: string | undefined };

export const AnalyticsContextProvider = (
  props: AnalyticsContextProviderProps
) => {
  const { id } = props;

  const router = useRouter();
  const [consent, _setConsent] = useState<Consents>({
    [DefaultCookieName]: Cookies.get(DefaultCookieName),
  });

  useEffect(() => {
    const hasCookie = Cookies.get(DefaultCookieName);

    if (!hasCookie) return;
    console.log("init ga");

    ReactGA.initialize(id, { debug: false });
  }, [id, consent]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log("pageView ga");
      ReactGA.pageview(window.location.pathname + window.location.search);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const setConsent = () => {
    Cookies.set(DefaultCookieName, "allow");
    //_setConsent((i) => ({ ...i, [DefaultCookieName]: "allow" }));
  };

  const { children, ...rest } = props;

  return (
    <AnalyticsContext.Provider value={{ consent, setConsent, ...rest }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsContext = () => {
  return useContext(AnalyticsContext);
};

export const useConsent = () => {
  const { setConsent, consent } = useContext(AnalyticsContext);

  return { setConsent, consent };
};
