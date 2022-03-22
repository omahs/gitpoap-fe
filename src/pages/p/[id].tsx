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
import { FeaturedPOAPs } from '../../components/profile/FeaturedPOAPs';
import { useWeb3Context } from '../../components/wallet/Web3ContextProvider';
import { FeaturedPOAPsProvider } from '../../components/profile/FeaturedPOAPsContext';
import { ProfileProvider } from '../../components/profile/ProfileContext';
import { truncateAddress } from '../../helpers';

const Profile: Page = () => {
  const router = useRouter();
  const [profileAddress, setProfileAddress] = useState<string>('');
  const [ensName, setEnsName] = useState<string>('');
  const { web3Provider } = useWeb3Context();

  const nameOrAddress = router.query.id as string;

  /* This hook is used to set the address and/or ENS name resolved from the URL */
  useEffect(() => {
    const lookupName = async () => {
      if (isAddress(nameOrAddress)) {
        const profileAddress = nameOrAddress;
        setProfileAddress(profileAddress);
        const ensName = await web3Provider?.lookupAddress(profileAddress);

        if (ensName) {
          setEnsName(ensName);
        }
      } else if (nameOrAddress.includes('.eth')) {
        const name = nameOrAddress;
        const profileAddress = await web3Provider?.resolveName(name);

        if (profileAddress) {
          setEnsName(name);
          setProfileAddress(profileAddress);
        }
      }
    };

    if (router.isReady) {
      lookupName();
    }
  }, [nameOrAddress, web3Provider, router]);

  if (!(router.isReady && profileAddress)) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`${ensName ?? truncateAddress(profileAddress, 4)} | GitPOAP`}</title>
        <meta name="description" content="GitPOAP Frontend App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileProvider address={profileAddress}>
        <FeaturedPOAPsProvider address={profileAddress}>
          <Grid justify="center" style={{ marginTop: rem(40) }}>
            <Grid.Col span={2}>
              <ProfileSidebar address={profileAddress} ensName={ensName} />
            </Grid.Col>

            <Grid.Col span={8}>
              <Grid justify="center">
                <Grid.Col span={10} style={{ marginTop: rem(100) }}>
                  <FeaturedPOAPs />
                </Grid.Col>
                <Grid.Col span={10}>
                  <GitPOAPs address={nameOrAddress} />
                </Grid.Col>
                <Grid.Col span={10} style={{ marginBottom: rem(150) }}>
                  <AllPOAPs address={nameOrAddress} />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </FeaturedPOAPsProvider>
      </ProfileProvider>
    </>
  );
};

/* Custom layout function for this page */
Profile.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Profile;
