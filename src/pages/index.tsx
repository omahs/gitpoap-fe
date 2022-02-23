import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Head from 'next/head';
import { MidnightBlue, TextLight } from '../colors';
import { BannerStats } from '../components/home/BannerStats';
import { Layout } from '../components/Layout';
import { Page } from './_app';

const App = styled.div`
  background-color: ${MidnightBlue};
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'PT Mono', monospace;
  min-height: 100vh;
  min-width: 300px;
  overflow-x: hidden;
`;

const HeaderStyled = styled.span`
  font-family: PT Mono;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(24)};
  line-height: ${rem(30)};
  text-align: center;
  letter-spacing: ${rem(1)};
  color: ${TextLight};

  margin-bottom: ${rem(60)};
`;

const Home: Page = () => {
  return (
    <App>
      <Head>
        <title>{'App | GitPOAP'}</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderStyled>{'Issue POAPs to your GitHub contributors'}</HeaderStyled>
      <BannerStats />
    </App>
  );
};

/* Custom layout function for this Home page */
Home.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Home;
