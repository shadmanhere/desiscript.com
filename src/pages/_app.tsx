import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
    
  return <Component {...pageProps} />;
}
