import styled from 'styled-components';
import { rem } from 'polished';
import { Jazzicon as JazzIconReact } from '@ukstv/jazzicon-react';
import { Button } from '../shared/elements/Button';
import { shortenAddress } from '../../helpers';

type Props = {
  address: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  ensName: string | null;
};

const Container = styled(Button)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const JazzIcon = styled(JazzIconReact)`
  border-radius: 50%;
  margin-left: ${rem(5)};
  height: ${rem(16)};
  width: ${rem(16)};
`;

export const WalletStatus = (props: Props) => {
  const { address, onClick, ensName } = props;

  return (
    <Container leftIcon={<JazzIcon address={address} />} onClick={onClick} variant="outline">
      {ensName ? ensName : shortenAddress(address)}
    </Container>
  );
};
