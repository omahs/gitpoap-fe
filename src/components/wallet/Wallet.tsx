import React from 'react';
import { WalletStatus } from './WalletStatus';
import { useWeb3Context } from './Web3ContextProvider';
import { Button } from '../shared/elements/Button';

export const Wallet = () => {
  const { isConnected, address, connect, disconnect } = useWeb3Context();

  return (
    <>
      {!isConnected && !address && <Button onClick={() => connect()}>{'Connect Wallet'}</Button>}
      {isConnected && address && (
        <WalletStatus
          onClick={() => {
            disconnect();
          }}
          account={address}
        />
      )}
    </>
  );
};
