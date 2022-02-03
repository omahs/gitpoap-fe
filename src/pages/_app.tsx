import type { AppProps } from 'next/app';
import { createClient, Provider as URQLProvider } from 'urql';
import { MantineProvider } from '@mantine/core';
import { GlobalStyles } from '../styles/globalStyles';
import { Web3ContextProvider } from '../components/wallet/Web3ContextProvider';
import { GHAuthProvider } from '../components/github/GHAuthContext';

const client = createClient({
  url: 'http://localhost:3001/graphql',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <URQLProvider value={client}>
        <Web3ContextProvider>
          <GHAuthProvider>
            <GlobalStyles />
            <Component {...pageProps} />
          </GHAuthProvider>
        </Web3ContextProvider>
      </URQLProvider>
    </MantineProvider>
  );
}

export default MyApp;
