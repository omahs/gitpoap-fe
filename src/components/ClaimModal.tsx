import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Modal, Center } from '@mantine/core';
import { BackgroundPanel, TextGray, TextLight } from '../colors';
import { Button } from './shared/Button';

type Props = {
  isOpen: boolean;
  numClaims: number;
  onClose: () => void;
};

const StyledModal = styled(Modal)`
  .mantine-Modal-modal {
    background-color: ${BackgroundPanel};
  }
`;

const Content = styled(Center)`
  flex-direction: column;
`;

const Header = styled.div`
  font-family: VT323;
  font-size: ${rem(48)};
  text-align: center;
  color: ${TextLight};
`;

const GitPOAPs = styled(Center)`
  /* Temporary */
`;

const Claim = styled(Center)`
  display: inline-flex;
  flex-direction: column;
`;

const ClaimText = styled.div`
  font-size: ${rem(12)};
  text-align: center;
  letter-spacing: 0.5px;
  color: ${TextGray};
  margin-bottom: ${rem(12)};
`;

const getClaimText = (numClaims: number): string => {
  if (numClaims === 1) {
    return 'You have a new POAP to claim!';
  }

  return `You have ${numClaims} new POAPs to claim!`;
};

export const ClaimModal = ({ isOpen, numClaims, onClose }: Props) => {
  const claimText = getClaimText(numClaims);

  return (
    <StyledModal
      onClose={onClose}
      opened={isOpen}
      centered
      size="lg"
      closeButtonLabel="Close GitPOAP claim modal"
    >
      <Content>
        <Header>{claimText}</Header>
        <GitPOAPs>{'Badges will go here'}</GitPOAPs>
        <Claim>
          <ClaimText>{'Claiming is free, no transaction fee required'}</ClaimText>
          <Button>{'Claim all'}</Button>
        </Claim>
      </Content>
    </StyledModal>
  );
};
