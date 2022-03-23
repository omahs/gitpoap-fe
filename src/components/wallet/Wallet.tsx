import React from 'react';
import { WalletStatus } from './WalletStatus';
import { useWeb3Context } from './Web3ContextProvider';
import { Button } from '../shared/elements/Button';
import { Tooltip } from '../shared/elements/Tooltip';

export const Wallet = () => {
  const { isConnected, address, connect, disconnect, ensName } = useWeb3Context();

  return (
    <>
      {!isConnected && <Button onClick={() => connect()}>{'Connect Wallet'}</Button>}
      {isConnected && (
        <Tooltip label={'Disconnect wallet'} withArrow>
          <WalletStatus
            onClick={() => {
              disconnect();
            }}
            address={address}
            ensName={ensName}
          />
        </Tooltip>
      )}
    </>
  );
};
