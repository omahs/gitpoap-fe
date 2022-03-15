import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Modal, Center, Pagination } from '@mantine/core';
import { BackgroundPanel, TextGray, TextLight } from '../colors';
import { Button } from './shared/elements/Button';
import { ClaimBlock } from './shared/compounds/ClaimBlock';
import { UserClaim } from '../types';

type Props = {
  isOpen: boolean;
  claims: UserClaim[];
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

const GitPOAPClaims = styled.div`
  display: flex;
  margin-top: ${rem(60)};
  margin-bottom: ${rem(20)};

  > div:not(:last-child) {
    margin-right: ${rem(30)};
  }
`;

const ClaimAll = styled(Center)`
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
  const [page, setPage] = useState(1);
  const claimText = getClaimText(claims.length);
  const perPage = 3;
  const numPages = Math.ceil(claims.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;

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
        <GitPOAPClaims>
          {claims.slice(start, end).map((userClaim: UserClaim) => {
            return (
              <ClaimBlock
                key={userClaim.claim.id}
                imgSrc={userClaim.event.image_url}
                name={userClaim.event.name}
                orgName={userClaim.claim.gitPOAP.repo.Organization.name}
                description={userClaim.event.description}
              />
            );
          })}
        </GitPOAPClaims>
        <Pagination style={{ padding: rem(5) }} page={page} onChange={setPage} total={numPages} />
        <ClaimAll>
          <ClaimText>{'Claiming is free, no transaction fee required'}</ClaimText>
          <Button>{'Claim all'}</Button>
        </ClaimAll>
      </Content>
    </StyledModal>
  );
};
