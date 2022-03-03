import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';
import { useGHAuthContext } from './GHAuthContext';
import { Button } from '../shared/elements/Button';

type Props = {
  className?: string;
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const GitHub = ({ className }: Props) => {
  const { githubAuthState, handleLogout, authorize } = useGHAuthContext();

  return (
    <Content className={className}>
      {!githubAuthState.isLoggedIntoGitHub && (
        <Button onClick={authorize} leftIcon={<GoMarkGithub size={16} />}>
          {'CLAIM POAPS'}
        </Button>
      )}
      {githubAuthState.isLoggedIntoGitHub && (
        <Button onClick={handleLogout} variant="outline" leftIcon={<GoMarkGithub size={16} />}>
          {'GitHub Connected'}
        </Button>
      )}
    </Content>
  );
};
