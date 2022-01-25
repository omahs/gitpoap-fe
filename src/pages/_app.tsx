import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/globalStyles';
import { Web3ContextProvider } from '../components/wallet/Web3ContextProvider';
import { GHAuthProvider } from '../components/github/GHAuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <GHAuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </GHAuthProvider>
    </Web3ContextProvider>
  );
}

export default MyApp;
