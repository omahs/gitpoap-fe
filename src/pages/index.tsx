import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Head from 'next/head';
import { Grid } from '@mantine/core';
import { Page } from './_app';
import { TextLight } from '../colors';
import { BannerStats } from '../components/home/BannerStats';
import { Layout } from '../components/Layout';
import { MostClaimed } from '../components/home/MostClaimed';
import { LeaderBoard } from '../components/home/LeaderBoard';
import { RecentlyAdded } from '../components/home/RecentlyAdded';
import { SuggestionForm } from '../components/home/SuggestionForm';

const HeaderStyled = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
    <>
      <Head>
        <title>{'App | GitPOAP'}</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid justify="center">
        <Grid.Col span={8}>
          <HeaderStyled>{'Issue POAPs to your GitHub contributors'}</HeaderStyled>
        </Grid.Col>
        <Grid.Col span={8}>
          <BannerStats />
        </Grid.Col>
      </Grid>
      <Grid justify="center" style={{ marginTop: rem(100), marginBottom: rem(100) }}>
        <Grid.Col span={7}>
          <MostClaimed />
        </Grid.Col>
        <Grid.Col span={3}>
          <LeaderBoard />
        </Grid.Col>
      </Grid>
      <Grid justify="center" style={{ marginBottom: rem(100) }}>
        <Grid.Col span={10}>
          <RecentlyAdded />
        </Grid.Col>
      </Grid>
      <Grid justify="center" style={{ marginBottom: rem(100) }}>
        <Grid.Col span={10}>
          <SuggestionForm />
        </Grid.Col>
      </Grid>
    </>
  );
};

/* Custom layout function for this Home page */
Home.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Home;
