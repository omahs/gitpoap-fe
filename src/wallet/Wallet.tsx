import { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Gray3, Gray1, Slate1 } from '../colors';
import { WalletStatus } from './WalletStatus';
import { Web3Context } from './Web3ContextProvider';

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
  const web3Context = useContext(Web3Context);

  const active = web3Context?.onChainProvider.isConnected;
  const account = web3Context?.onChainProvider.address;

  return (
    <>
      {!active && !account && (
        <ConnectWalletButton onClick={() => web3Context?.onChainProvider.connect()}>
          {'Connect Wallet'}
        </ConnectWalletButton>
      )}
      {active && account && (
        <WalletStatus
          onClick={() => {
            web3Context.onChainProvider.disconnect();
          }}
          account={account}
        />
      )}
    </>
  );
};
