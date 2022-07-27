import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PageWithLayout } from "../types/PageWithLayout";
import { themeClass } from "../theme/theme.css";
function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);
  return (
    <div className={themeClass}>{getLayout(<Component {...pageProps} />)}</div>
  );
}

export default MyApp;
