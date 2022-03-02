import React, { useEffect, useState } from 'react';
import { WalletStatus } from './WalletStatus';
import { useWeb3Context } from './Web3ContextProvider';
import { Button } from '../shared/elements/Button';

export const Wallet = () => {
  const [resolvedName, setResolvedName] = useState<string>('');
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const { isConnected, address, connect, disconnect, web3Provider } = useWeb3Context();

  /**
   * Update component specific connection state & ENS name on CONNECT. Fetch the ENS name prior to
   * setting the wallet state as connected. This prevents a sudden flash of an address that changes to an
   * ENS name.
   */
  useEffect(() => {
    const lookupNameAndConnect = async () => {
      const name = await web3Provider?.lookupAddress(address);
      if (name) {
        setResolvedName(name);
      }
      if (isConnected && !isWalletConnected) {
        setIsWalletConnected(true);
      }
    };

    lookupNameAndConnect();
  }, [address, web3Provider, isWalletConnected, isConnected]);

  /* Update component specific connection state on DISCONNECT */
  useEffect(() => {
    if (isWalletConnected && !isConnected) {
      setIsWalletConnected(false);
    }
  }, [isWalletConnected, isConnected]);

  return (
    <>
      {!isWalletConnected && <Button onClick={() => connect()}>{'Connect Wallet'}</Button>}
      {isWalletConnected && (
        <WalletStatus
          onClick={() => {
            disconnect();
          }}
          account={address}
          name={resolvedName}
        />
      )}
    </>
  );
};
