import React from 'react';
import { Web3ContextProvider } from '../../src/components/wallet/Web3ContextProvider';
import { GHAuthProvider } from '../../src/components/github/GHAuthContext';

export const withProviders = (storyFn: any) => {
  return (
    <Web3ContextProvider>
      <GHAuthProvider>{storyFn()}</GHAuthProvider>
    </Web3ContextProvider>
  );
};
