import styled from 'styled-components';
import { rem } from 'polished';
import { WalletStatus } from './WalletStatus';
import { useWeb3Context } from './Web3ContextProvider';
import { Button } from '../shared/Button';

const ConnectWalletButton = styled(Button)`
  border-radius: ${rem(8)};
  transition: 250ms background ease;
  cursor: pointer;
`;

export const Wallet = () => {
  const { isConnected, address, connect, disconnect } = useWeb3Context();

  return (
    <>
      {!isConnected && !address && (
        <ConnectWalletButton onClick={() => connect()}>{'Connect Wallet'}</ConnectWalletButton>
      )}
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
