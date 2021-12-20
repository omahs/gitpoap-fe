import styled from 'styled-components';
import { rem } from 'polished';
import { Gray3, Gray1, Slate1 } from '../../colors';
import { WalletStatus } from './WalletStatus';
import { useWeb3Context } from './Web3ContextProvider';

const ConnectWalletButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${rem(10)} ${rem(24)};
  font-size: ${rem(16)};
  color: ${Slate1};
  border-radius: ${rem(8)};
  border: 1px solid ${Gray3};
  transition: 250ms background ease;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${Gray1};
  }
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
