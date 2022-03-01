import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Grid } from '@mantine/core';
import { Page } from '../_app';
import { Layout } from '../../components/Layout';

const GitPOAP: Page = () => {
  return (
    <>
      <Head>
        <title>{'GitPOAP | GitPOAP'}</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid justify="center">
        <Grid.Col span={8}>{'The GitPOAP'}</Grid.Col>
      </Grid>
    </>
  );
};

/* Custom layout function for this page */
GitPOAP.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default GitPOAP;
