import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import GithubIcon from 'mdi-react/GithubIcon';
import { useGHAuthContext } from './GHAuthContext';
import { REACT_APP_PROXY_URL, REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } from '../../constants';
import { useRouter } from 'next/router';

const LoginLink = styled.a`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;

  > span:nth-child(2) {
    margin-left: 5px;
  }
`;

const LoginContainer = styled.div`
  background-color: #000;
  width: 300px;
  border-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GHLogin = () => {
  const router = useRouter();
  const { state, setState } = useGHAuthContext();
  const [data, setData] = useState({ errorMessage: '', isLoading: false });
  // @TODO: Generate a random string to guard against forgery and attach as 'state' param in the below URL
  // https://docs.github.com/en/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#1-request-a-users-github-identity
  const githubAuthURL = `https://github.com/login/oauth/authorize?scope=user&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}`;

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

        console.log(access_token);

        const userRes = await fetch(`https://api.github.com/user`, {
          headers: {
            Authorization: `token ${access_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        const userData = await userRes.json();
        localStorage.setItem('token', JSON.stringify(access_token));
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(userData));

        setState({
          ...state,
          isLoggedIn: true,
          user: userData,
          token: access_token,
        });
      } catch (err) {
        console.warn(err);
        setData({
          isLoading: false,
          errorMessage: 'Sorry! Login failed',
        });
      }
    },
    [state, setState],
  );

  /* After requesting Github access, Github redirects back to your app with a code parameter. */
  useEffect(() => {
    const url = router.asPath;
    const hasCode = url.includes('?code=');

    // If Github API returns the code parameter
    if (hasCode && data.isLoading === false) {
      const newUrl = url.split('?code=');
      const code = newUrl[1];
      router.push(newUrl[0]);

      setData({ ...data, isLoading: true });
      fetchUserData(code);
    }
  }, [state, setState, data, fetchUserData, router]);

  return (
    <Content>
      {!state.isLoggedIn && (
        <LoginContainer>
          <LoginLink
            href={githubAuthURL}
            onClick={() => {
              setData({ ...data, errorMessage: '' });
            }}
          >
            <GithubIcon />
            <span>Login with GitHub</span>
          </LoginLink>
        </LoginContainer>
      )}
      <span>{data.errorMessage}</span>
      <div>{`Client ID: ${REACT_APP_CLIENT_ID}`}</div>
      <div>{`Redirect URI: ${REACT_APP_REDIRECT_URI}`}</div>
    </Content>
  );
};
