import React from 'react';
import Head from 'next/head';

import { Grid } from '@mantine/core';
import { Page } from '../_app';
import { Layout } from '../../components/Layout';

const GitPOAP: Page = () => {
  return (
    <>
      <Head>
        <title>{'GitPOAP | GitPOAP'}</title>
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
