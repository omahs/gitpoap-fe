import React, { useState, useEffect } from 'react';
import { rem } from 'polished';
import Head from 'next/head';
import { Grid } from '@mantine/core';
import { isAddress } from 'ethers/lib/utils';
import { Page } from '../_app';
import { Layout } from '../../components/Layout';
import { AllPOAPs } from '../../components/profile/AllPOAPs';
import { GitPOAPs } from '../../components/profile/GitPOAPs';
import { useRouter } from 'next/router';
import { ProfileSidebar } from '../../components/profile/ProfileSidebar';
import { useWeb3Context } from '../../components/wallet/Web3ContextProvider';

const Profile: Page = () => {
  const router = useRouter();
  const [address, setAddress] = useState<string>('');
  const [ensName, setEnsName] = useState<string>('');
  const { web3Provider } = useWeb3Context();

  const nameOrAddress = router.query.id as string;

  /* This hook is used to set the name */
  useEffect(() => {
    const lookupName = async () => {
      if (isAddress(nameOrAddress)) {
        const address = nameOrAddress;
        setAddress(address);
        const ensName = await web3Provider?.lookupAddress(address);

        if (ensName) {
          setEnsName(ensName);
        }
      } else if (nameOrAddress.includes('.eth')) {
        const name = nameOrAddress;
        const address = await web3Provider?.resolveName(name);

        if (address) {
          setEnsName(name);
          setAddress(address);
        }
      }
    };

    if (router.isReady) {
      lookupName();
    }
  }, [nameOrAddress, web3Provider, router]);

  if (!(router.isReady && address)) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{'Profile | GitPOAP'}</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ color: 'white' }}>{'The Banner goes here'}</div>
      <Grid style={{ color: 'white' }} justify="center">
        <ProfileSidebar address={address} ensName={ensName} />
        <Grid justify="center">
          <Grid.Col span={11}>{'Featured POAPs'}</Grid.Col>
          <Grid.Col span={11}>
            <GitPOAPs address={nameOrAddress} />
          </Grid.Col>
          <Grid.Col span={11} style={{ marginBottom: rem(150) }}>
            <AllPOAPs address={nameOrAddress} />
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
