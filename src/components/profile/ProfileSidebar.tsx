import React from 'react';
import { Grid } from '@mantine/core';
import { InfoHexProfileDetail } from './InfoHexProfileDetail';
import { truncateAddress } from '../../helpers';
import { useProfileContext } from './ProfileContext';

type Props = {
  address: string;
  ensName?: string;
};

export const ProfileSidebar = ({ address, ensName }: Props) => {
  const { profileData, avatarURI, showEditProfileButton, setIsUpdateModalOpen } =
    useProfileContext();

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
        onClickEditProfile={() => setIsUpdateModalOpen(true)}
        showEditProfileButton={showEditProfileButton}
      />
    </Grid.Col>
  );
};
