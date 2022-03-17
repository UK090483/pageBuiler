import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Script from "next/script";
import Head from "next/head";

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

  const hasCookie = consent[DefaultCookieName];

  useEffect(() => {
    const hasCookie = Cookies.get(DefaultCookieName);
    if (!hasCookie) return;
  }, [id, consent]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const setConsent = () => {
    Cookies.set(DefaultCookieName, "allow");
    _setConsent((i) => ({ ...i, [DefaultCookieName]: "allow" }));
  };

  const { children, ...rest } = props;

  return (
    <AnalyticsContext.Provider value={{ consent, setConsent, ...rest }}>
      {hasCookie && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
          </Script>
        </>
      )}

      {children}
    </AnalyticsContext.Provider>
  );
};

const pageView = (url: string) => {
  if (!window || !window.gtag) return;
  console.log("ga pageView");

  window.gtag("set", "page_path", url);
  window.gtag("event", "page_view");
};

export const useAnalyticsContext = () => {
  return useContext(AnalyticsContext);
};

export const useConsent = () => {
  const { setConsent, consent } = useContext(AnalyticsContext);

  return { setConsent, consent };
};
