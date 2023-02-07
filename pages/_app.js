import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Hana from "../public/hana.svg";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Head >
        <title >Hana | Home</title>
        <meta name="Home" content="Home" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://img.icons8.com/external-objects-color-edt.graphics/100/null/external-Flowers-winter-flowers-objects-color-edt.graphics-3.png"
        />
      </Head>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
