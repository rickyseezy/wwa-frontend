import "../styles/globals.scss";
import { AppProps } from "next/app";
import { closeContext } from "../context";
import { useEffect, useState } from "react";
import {fireApp} from '../firebase/configApp'

function MyApp({ Component, pageProps }: AppProps) {

console.log(fireApp,'firebase')
  let [close, setclose] = useState(false);
  console.log(close);
  useEffect(() => {
    console.log("effect");

    const handleTabClose = (event: { preventDefault: () => void; returnValue: string; }) => {
  

      console.log("beforeunload event triggered");
      setclose(true);

      return (event.returnValue = "are you sure you want to leave ? ");
    };

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  return (
    <>
      <closeContext.Provider value={close}>
        <Component {...pageProps} />
      </closeContext.Provider>
    </>
  );
}

export default MyApp;
