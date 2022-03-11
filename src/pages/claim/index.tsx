import type { NextPage } from 'next';
import Head from 'next/head';
import { Gallery } from '../../components/Gallery';

const Claim: NextPage = () => {
  return (
    <div>
      <Head>
        <title>App | GitPOAP</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gallery />
    </div>
  );
};

export default Claim;
