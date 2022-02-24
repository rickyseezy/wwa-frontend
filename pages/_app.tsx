import "../styles/globals.scss";
import { AppProps } from "next/app";
import HomeLayout from "@components/layout/HomeLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
