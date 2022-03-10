import React, { useState, useEffect } from 'react';
import { Grid } from '@mantine/core';
import { useQuery, gql } from 'urql';
import { InfoHexProfileDetail } from './InfoHexProfileDetail';
import { truncateAddress } from '../../helpers';
import { useWeb3Context } from '../../components/wallet/Web3ContextProvider';
import { AvatarResolver } from '@ensdomains/ens-avatar';

type Props = {
  address: string;
  ensName?: string;
};

const ProfileQuery = gql`
  query profile($address: String!) {
    profileData(address: $address) {
      id
      bio
      name
      twitterHandle
      personalSiteUrl
    }
  }
`;

export type UserPOAPsQueryRes = {
  profileData: {
    id: string;
    bio: string;
    name: string;
    twitterHandle?: string;
    personalSiteUrl?: string;
  } | null;
};

export const ProfileSidebar = ({ address, ensName }: Props) => {
  const { web3Provider } = useWeb3Context();
  const [profileData, setProfileData] = useState<UserPOAPsQueryRes['profileData']>();
  const [avatarURI, setAvatarURI] = useState<string>();
  const [result] = useQuery<UserPOAPsQueryRes>({
    query: ProfileQuery,
    variables: {
      address,
    },
  });

  /* Hook to set profile data to state */
  useEffect(() => {
    setProfileData(result.data?.profileData);
  }, [result.data]);

  useEffect(() => {
    const getAvatar = async () => {
      if (web3Provider && ensName) {
        const avt = new AvatarResolver(web3Provider);
        const resolvedAvatarURI = await avt.getAvatar(ensName, {});

        if (resolvedAvatarURI) {
          setAvatarURI(resolvedAvatarURI);
        }
      }
    };

    getAvatar();
  }, [ensName, web3Provider]);

  return (
    <Grid.Col span={12}>
      <InfoHexProfileDetail
        imgSrc={avatarURI}
        name={ensName ? ensName : truncateAddress(address, 10)}
        address={address}
        bio={profileData?.bio}
        twitterHref={
          profileData?.twitterHandle
            ? `https://twitter.com/${profileData.twitterHandle}`
            : undefined
        }
        websiteHref={profileData?.personalSiteUrl}
      />
    </Grid.Col>
  );
};
