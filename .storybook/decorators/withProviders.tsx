import React from 'react';
import { Web3ContextProvider } from '../../src/components/wallet/Web3ContextProvider';
import { GHAuthProvider } from '../../src/components/github/GHAuthContext';
import { createClient, Provider as URQLProvider } from 'urql';

const client = createClient({
  url: 'http://localhost:3001/graphql',
  requestPolicy: 'network-only',
});

export const withProviders = (storyFn) => {
  return (
    <URQLProvider value={client}>
      <Web3ContextProvider>
        <GHAuthProvider>{storyFn()}</GHAuthProvider>
      </Web3ContextProvider>
    </URQLProvider>
  );
};
