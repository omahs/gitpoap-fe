import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Modal, Center } from '@mantine/core';
import { BackgroundPanel, TextGray, TextLight } from '../colors';
import { Button } from './shared/elements/Button';
import { Claim } from '../types';
import { ClaimBlock } from './ClaimBlock';

type Props = {
  isOpen: boolean;
  claims: Claim[];
  onClose: () => void;
};

const StyledModal = styled(Modal)`
  .mantine-Modal-modal {
    background-color: ${BackgroundPanel};
  }
`;

const Content = styled(Center)`
  flex-direction: column;
  padding: ${rem(30)} ${rem(70)};
`;

const Header = styled.div`
  font-family: VT323;
  font-size: ${rem(48)};
  text-align: center;
  color: ${TextLight};
`;

const GitPOAPs = styled(Center)`
  margin-top: ${rem(60)};
  > div:not(:last-child) {
    margin-right: ${rem(30)};
  }
`;

const Claims = styled(Center)`
  display: inline-flex;
  flex-direction: column;
  margin-top: ${rem(54)};
`;

const ClaimText = styled.div`
  font-size: ${rem(12)};
  text-align: center;
  letter-spacing: ${rem(0.5)};
  color: ${TextGray};
  margin-bottom: ${rem(12)};
`;

const getClaimText = (numClaims: number): string => {
  if (numClaims < 1) {
    return 'You have no new POAPs to claim.';
  } else if (numClaims === 1) {
    return 'You have a new POAP to claim!';
  }

  return `You have ${numClaims} new POAPs to claim!`;
};

export const ClaimModal = ({ isOpen, claims, onClose }: Props) => {
  const claimText = getClaimText(claims.length);

  return (
    <StyledModal
      onClose={onClose}
      opened={isOpen}
      centered
      size="xl"
      closeButtonLabel="Close GitPOAP claim modal"
    >
      <Content>
        <Header>{claimText}</Header>
        <GitPOAPs>
          {claims.map((claim: Claim) => {
            if (claim.gitPoap) {
              return (
                <ClaimBlock
                  imgSrc={claim.gitPoap?.imgSrc}
                  name={claim.gitPoap?.name}
                  orgName={claim.gitPoap?.orgName}
                  description={claim.gitPoap?.description}
                />
              );
            }
          })}
        </GitPOAPs>
        <Claims>
          <ClaimText>{'Claiming is free, no transaction fee required'}</ClaimText>
          <Button>{'Claim all'}</Button>
        </Claims>
      </Content>
    </StyledModal>
  );
};
