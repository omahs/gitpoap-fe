import type { NextPage } from 'next';
import Head from 'next/head';
import { StyledEngineProvider } from '@mui/material/styles';
import { Navbar } from '../../components/Navbar';
import { Gallery } from '../../components/Gallery';
import { GHLogin } from '../../components/github/GHLogin';
import { GHLogoutButton } from '../../components/github/GHLogoutButton';

const Claim: NextPage = () => {
  return (
    <div>
      <Head>
        <title>App | GitPOAP</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Gallery />
        <GHLogin />
        <GHLogoutButton />
      </StyledEngineProvider>
    </div>
  );
};

export default Claim;
