import React from 'react';
import { rem } from 'polished';
import { useQuery, gql } from 'urql';
import Head from 'next/head';
import { Grid } from '@mantine/core';
import { Page } from '../_app';
import { Layout } from '../../components/Layout';
import { AllPOAPs } from '../../components/profile/AllPOAPs';
import { GitPOAPs } from '../../components/profile/GitPOAPs';
import { POAP } from '../../types';

const AllPOAPsQuery = gql`
  query allPOAPs {
    userPOAPs(address: "peebeejay.eth") {
      poaps {
        event {
          name
          image_url
        }
        tokenId
      }
    }
  }
`;

export type UserPOAPsQueryRes = {
  userPOAPs: {
    poaps: POAP[];
  };
};

const Profile: Page = () => {
  const [result] = useQuery<UserPOAPsQueryRes>({
    query: AllPOAPsQuery,
  });

  return (
    <>
      <Head>
        <title>{'Profile | GitPOAP'}</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ color: 'white' }}>{'The Banner goes here'}</div>
      <Grid style={{ color: 'white' }} justify="center">
        <Grid.Col span={12}>{'The Profile Hex'}</Grid.Col>
        <Grid justify="center">
          <Grid.Col span={12}>{'Featured POAPs'}</Grid.Col>
          <Grid.Col span={12}>{/* <GitPOAPs /> */}</Grid.Col>
          <Grid.Col span={12} style={{ marginBottom: rem(150) }}>
            <AllPOAPs poaps={result.data?.userPOAPs.poaps} />
          </Grid.Col>
        </Grid>
      </Grid>
    </>
  );
};

/* Custom layout function for this page */
Profile.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Profile;
