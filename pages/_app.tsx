import "../styles/globals.scss";
import { AppProps } from "next/app";
import {closeContext} from '../context'
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  let [close,setclose] = useState(false)
  console.log(close)
  useEffect(() => {
    console.log('effect')

    const handleTabClose = event => {
      event.preventDefault();
            // event.defaultPrevented()

      console.log('beforeunload event triggered');
      setclose(true)

      return (event.returnValue =
        '.....');
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);


  return (
    <>
    <closeContext.Provider value={close}>
  <Component {...pageProps} />

    </closeContext.Provider>
  </>
  )
}

export default MyApp;
