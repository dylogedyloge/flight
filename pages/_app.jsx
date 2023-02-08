import "@/styles/globals.css";

import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import ar from "../lang/ar.json";
import en from "../lang/en.json";
import fa from "../lang/fa.json";

const messages = {
  ar,
  en,
  fa,
};
function getDirection(locale) {
  if (locale === "ar" || locale === "fa") {
    return "rtl";
  }

  return "ltr";
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <Component {...pageProps} dir={getDirection(locale)} />
      </Layout>
    </IntlProvider>
  );
}
