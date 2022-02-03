import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Navbar } from '../components/Navbar';
import { MidnightBlue } from '../colors';

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

const Home: NextPage = () => {
  return (
    <App>
      <Head>
        <title>App | GitPOAP</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </App>
  );
};

export default Home;
