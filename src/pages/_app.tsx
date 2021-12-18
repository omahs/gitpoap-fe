import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/globalStyles';
import { Web3ContextProvider } from '../wallet/Web3ContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </Web3ContextProvider>
  );
}

export default MyApp;
