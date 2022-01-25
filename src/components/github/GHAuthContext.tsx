import React, { createContext, useState, useContext } from 'react';
import {
  REACT_APP_CLIENT_ID,
  REACT_APP_REDIRECT_URI,
  REACT_APP_CLIENT_SECRET,
  REACT_APP_PROXY_URL,
} from '../../constants';

type GHUser = {
  avatar_url: string;
  name: string;
  public_repos: any; // @TODO
  followers: any; // @TODO
  following: any; // @TODO
};

type State = {
  token: string | null;
  isLoggedIn: boolean;
  user: GHUser | null;
  client_id: string;
  redirect_uri: string;
  client_secret: string;
  proxy_url: string;
};

type GHAuthContextState = {
  state: State;
  setState: (state: State) => void;
};

export const getInitialState = (): State => {
  let isLoggedIn = false;
  let user = null;
  let token = null;

  if (typeof window !== 'undefined') {
    try {
      isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
      const userData = localStorage.getItem('user');
      user = userData ? JSON.parse(userData) : null;
      token = localStorage.getItem('token');
    } catch (err) {
      console.warn('invalid local storage');
    }
  }

  return {
    token,
    isLoggedIn,
    user,
    client_id: REACT_APP_CLIENT_ID,
    redirect_uri: REACT_APP_REDIRECT_URI,
    client_secret: REACT_APP_CLIENT_SECRET,
    proxy_url: REACT_APP_PROXY_URL,
  };
};

const GHAuthContext = createContext<GHAuthContextState>({
  state: getInitialState(),
  setState: (_: State) => {},
});

export const useGHAuthContext = () => {
  return useContext(GHAuthContext);
};

export const GHAuthProvider = (props: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>(getInitialState());

  return (
    <GHAuthContext.Provider value={{ state, setState }}>{props.children}</GHAuthContext.Provider>
  );
};
