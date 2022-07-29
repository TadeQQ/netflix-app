import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PageWithLayout } from "../types/PageWithLayout";
import { themeClass } from "../theme/theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <div className={themeClass}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
