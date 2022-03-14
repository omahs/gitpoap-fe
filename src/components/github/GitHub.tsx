import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { GoMarkGithub } from 'react-icons/go';
import { useQuery, gql } from 'urql';
import { useAuthContext } from './AuthContext';
import { Button } from '../shared/elements/Button';
import { ClaimCircle } from '../shared/elements/ClaimCircle';
import { ClaimModal } from '../ClaimModal';

type Props = {
  className?: string;
};

const OpenClaimsQuery = gql`
  query openClaims($githubId: Float!) {
    userClaims(githubId: $githubId) {
      claim {
        id
        gitPOAP {
          repo {
            Organization {
              name
            }
          }
        }
      }
      event {
        name
        image_url
        description
      }
    }
  }
`;

export type UserOpenClaimsRes = {
  userClaims: UserClaim[];
};

export type UserClaim = {
  claim: {
    id: number;
    gitPOAP: {
      repo: {
        Organization: {
          name: string;
        };
      };
    };
  };
  event: {
    name: string;
    image_url: string;
    description: string;
  };
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ConnectedButton = styled(Button)`
  min-width: ${rem(125)};
`;

export const GitHub = ({ className }: Props) => {
  const { authState, handleLogout, authorize } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [result] = useQuery<UserOpenClaimsRes>({
    query: OpenClaimsQuery,
    variables: {
      githubId: authState.user?.githubId,
    },
    pause: !authState.user,
  });

  const userClaims = result.data?.userClaims;

  const getGitHubButton = useCallback(() => {
    /* Not connected to GitHub */
    if (!authState.isLoggedIntoGitHub) {
      return (
        <Button onClick={authorize} leftIcon={<GoMarkGithub size={16} />}>
          {'CLAIM POAPS'}
        </Button>
      );
    } else if (userClaims && userClaims.length > 0) {
      /* Connected to GitHub, but HAS open claims */
      return (
        <>
          <Button
            onClick={() => setIsModalOpen(true)}
            leftIcon={<ClaimCircle value={userClaims.length} />}
          >
            {'VIEW & CLAIM'}
          </Button>
        </>
      );
    }

    /* Connected to GitHub, but NO open claims */
    return (
      <ConnectedButton
        onClick={handleLogout}
        variant="outline"
        leftIcon={<GoMarkGithub size={16} />}
      >
        {authState.user?.githubHandle}
      </ConnectedButton>
    );
  }, [authState.isLoggedIntoGitHub, userClaims, authState.user, handleLogout, authorize]);

  return (
    <Content className={className}>
      {getGitHubButton()}
      <ClaimModal
        claims={userClaims ?? []}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Content>
  );
};
