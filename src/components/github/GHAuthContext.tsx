import { useRouter } from 'next/router';
import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { REACT_APP_PROXY_URL, REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } from '../../constants';

type GHState = {
  hasLoadedLocalStorage: boolean;
  isLoading: boolean;
  errorMessage: string;
  token: string | null;
  isLoggedIntoGitHub: boolean;
  user: any;
  randomString: string;
};

type GHAuthContextState = {
  githubAuthState: GHState;
  setGithubAuthState: (githubAuthState: GHState) => void;
  handleLogout: () => void;
  fetchUserData: (code: string) => void;
  authorize: () => void;
};

export const getInitialState = (): GHState => ({
  hasLoadedLocalStorage: false,
  isLoading: false,
  errorMessage: '',
  token: null,
  isLoggedIntoGitHub: false,
  user: null,
  randomString: Math.random().toString(36).substring(2, 5),
});

const GHAuthContext = createContext<GHAuthContextState>({
  githubAuthState: getInitialState(),
  setGithubAuthState: (_: GHState) => {},
  handleLogout: () => {},
  fetchUserData: (_: string) => {},
  authorize: () => {},
});

export const useGHAuthContext = () => {
  return useContext(GHAuthContext);
};

type Props = {
  children: React.ReactNode;
};

export const GHAuthProvider = ({ children }: Props) => {
  const [githubAuthState, setGithubAuthState] = useState<GHState>(getInitialState());
  const router = useRouter();
  console.log(router);
  const redirectUri = REACT_APP_REDIRECT_URI + router.asPath;
  // https://docs.github.com/en/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#1-request-a-users-github-identity
  const githubAuthURL = `https://github.com/login/oauth/authorize?scope=user&state=${githubAuthState.randomString}&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${redirectUri}`;

  const authorize = useCallback(() => router.push(githubAuthURL), [githubAuthURL, router]);

  const fetchUserData = useCallback(
    async (code: string) => {
      try {
        const res = await fetch(REACT_APP_PROXY_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        const tokenRes = await res.json();
        const access_token = tokenRes.token;

        const userRes = await fetch(`https://api.github.com/user`, {
          headers: {
            Authorization: `token ${access_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        const userData = await userRes.json();
        localStorage.setItem('token', JSON.stringify(access_token));
        localStorage.setItem('isLoggedIntoGitHub', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(userData));

        setGithubAuthState({
          ...githubAuthState,
          isLoggedIntoGitHub: true,
          user: userData,
          token: access_token,
        });
      } catch (err) {
        console.warn(err);
        setGithubAuthState({
          ...githubAuthState,
          isLoading: false,
          errorMessage: 'Sorry! Login failed',
        });
      }
    },
    [githubAuthState, setGithubAuthState],
  );

  const handleLogout = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIntoGitHub');
    }

    setGithubAuthState({
      ...githubAuthState,
      isLoggedIntoGitHub: false,
      user: null,
      token: null,
    });
  }, [githubAuthState]);

  useEffect(() => {
    const isLoggedIntoGitHub = Boolean(localStorage.getItem('isLoggedIntoGitHub'));
    const userData = localStorage.getItem('user');
    const user = userData ? JSON.parse(userData) : null;
    const token = localStorage.getItem('token');

    if (!githubAuthState.hasLoadedLocalStorage) {
      setGithubAuthState({
        ...githubAuthState,
        hasLoadedLocalStorage: true,
        token,
        isLoggedIntoGitHub,
        user,
      });
    }
  }, [githubAuthState]);

  /* After requesting Github access, Github redirects back to your app with a code parameter. */
  useEffect(() => {
    const url = router.asPath;
    const hasCode = url.includes('?code=');

    /* If Github API returns the code parameter */
    if (hasCode && githubAuthState.isLoading === false) {
      const newUrl = url.split('?code=');
      const code = newUrl[1];
      router.push(newUrl[0]);
      setGithubAuthState({
        ...githubAuthState,
        isLoading: true,
      });

      fetchUserData(code);
    }
  }, [githubAuthState, setGithubAuthState, fetchUserData, router]);

  return (
    <GHAuthContext.Provider
      value={{ githubAuthState, setGithubAuthState, fetchUserData, handleLogout, authorize }}
    >
      {children}
    </GHAuthContext.Provider>
  );
};
