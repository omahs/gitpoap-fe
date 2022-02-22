import React from 'react';
import styled from 'styled-components';
import { useGHAuthContext } from './GHAuthContext';
import { Button } from '../shared/elements/Button';

const TempContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const GHLogoutButton = () => {
  const { state, setState } = useGHAuthContext();
  const { user } = state;

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
    }

    setState({
      ...state,
      isLoggedIn: false,
      user: null,
      token: null,
    });
  };

  if (!state.isLoggedIn) {
    return null;
  }

  return (
    <TempContent>
      <Button onClick={handleLogout}>Logout</Button>
      <Img src={user?.avatar_url} alt="Avatar" />
      <span>{user?.name}</span>
      <span>{user?.public_repos} Repos</span>
      <span>{user?.followers} Followers</span>
      <span>{user?.following} Following</span>
    </TempContent>
  );
};
