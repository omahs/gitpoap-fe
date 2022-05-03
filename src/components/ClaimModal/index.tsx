import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Modal, Center, Group } from '@mantine/core';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Pagination } from '../shared/elements/Pagination';
import { BackgroundPanel, TextDarkGray, TextGray, TextLight } from '../../colors';
import { Button } from '../shared/elements/Button';
import { TwitterShareButton } from '../shared/elements/TwitterShareButton';
import { ClaimBlock } from '../shared/compounds/ClaimBlock';
import { UserClaim } from '../../types';
import { useFeatures } from '../FeaturesContext';
import { useWeb3Context } from '../wallet/Web3ContextProvider';

type Props = {
  isConnected: boolean;
  isOpen: boolean;
  claims: UserClaim[];
  claimedIds: number[];
  loadingClaimIds?: number[];
  onClose: () => void;
  onClickClaim: (claimIds: number[]) => void;
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
  margin-top: ${rem(30)};
`;

const ClaimText = styled.div`
  font-size: ${rem(12)};
  text-align: center;
  letter-spacing: ${rem(0.5)};
  color: ${TextGray};
  margin-top: ${rem(18)};
`;

const getClaimText = (isConnected: boolean, numClaims: number, numClaimed: number): string => {
  const netClaims = numClaims - numClaimed;
  if (!isConnected && netClaims > 0) return 'Connect your wallet to mint!';

  if (netClaims < 1) {
    return 'You have no new POAPs to mint.';
  } else if (netClaims === 1) {
    return 'You have a new POAP to mint!';
  }

  return `You have ${netClaims} new POAPs to mint!`;
};

export const ClaimModal = ({
  isConnected,
  isOpen,
  claims,
  claimedIds,
  loadingClaimIds,
  onClose,
  onClickClaim,
}: Props) => {
  const [page, setPage] = useState(1);
  const { hasClaimAllButton } = useFeatures();
  const perPage = 3;
  const numPages = Math.ceil(claims.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;

  const { connect } = useWeb3Context();
  const hasClaimedAll = claimedIds.length === claims.length;
  const isClaimingAll = loadingClaimIds && loadingClaimIds.length === claims.length;
  const claimText = getClaimText(isConnected, claims.length, claimedIds.length);

  /* All claimIds in view, not all */
  const allClaimIds = claims.slice(start, end).map((userClaim) => userClaim.claim.id);

  return (
    <StyledModal
      onClose={onClose}
      opened={isOpen}
      centered
      size="xl"
      closeButtonLabel="Close GitPOAP mint modal"
    >
      <Content>
        <Header>{claimText}</Header>
        {claims.length > 0 && (
          <>
            <GitPOAPClaims>
              {claims.slice(start, end).map((userClaim: UserClaim) => {
                return (
                  <ClaimBlock
                    key={userClaim.claim.id}
                    gitPOAPId={userClaim.claim.gitPOAP.id}
                    imgSrc={userClaim.event.image_url}
                    name={userClaim.event.name}
                    orgName={userClaim.claim.gitPOAP.repo.organization.name}
                    description={userClaim.event.description}
                    onClickClaim={() =>
                      isConnected ? onClickClaim([userClaim.claim.id]) : connect()
                    }
                    onClickBadge={onClose}
                    isClaimed={claimedIds?.includes(userClaim.claim.id)}
                    isLoading={loadingClaimIds?.includes(userClaim.claim.id)}
                  />
                );
              })}
            </GitPOAPClaims>
            {claims.length > perPage && (
              <Pagination
                style={{ padding: rem(5) }}
                page={page}
                onChange={setPage}
                total={numPages}
                withControls={false}
              />
            )}
          </>
        )}

        {hasClaimAllButton && claims.length > 1 && !hasClaimedAll && (
          <ClaimAll>
            <Button
              onClick={() => onClickClaim(allClaimIds)}
              disabled={
                loadingClaimIds &&
                loadingClaimIds.length > 0 &&
                loadingClaimIds.length < allClaimIds.length
              }
              loading={isClaimingAll}
            >
              {'Mint all'}
            </Button>
          </ClaimAll>
        )}
        {claims.length === 0 && (
          <Group style={{ marginTop: rem(50), marginBottom: rem(50) }}>
            <BsFillMoonStarsFill color={TextDarkGray} size={rem(74)} />
          </Group>
        )}
        <ClaimText>{'Minting is free, no transaction fee required'}</ClaimText>
        {claimedIds?.length > 0 && <TwitterShareButton claimedCount={claimedIds.length} />}
      </Content>
    </StyledModal>
  );
};
