import type { NextPage } from 'next';
import Head from 'next/head';
import { StyledEngineProvider } from '@mui/material/styles';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>App | GitPOAP</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
    </div>
  );
};

export default Home;
