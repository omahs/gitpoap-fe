import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClaimModal } from '../components/ClaimModal';
import { Claim, ClaimStatus } from '../types';
import badgeImg1 from './assets/gitPOAPs/badge1.png';
import badgeImg2 from './assets/gitPOAPs/badge2.png';
import badgeImg3 from './assets/gitPOAPs/badge3.png';

const claims: Claim[] = [
  {
    id: '1',
    status: ClaimStatus.UNCLAIMED,
    poapTokenId: '1',
    address: '0x1',
    userId: '1',
    gitPoapId: '1',
    gitPoap: {
      id: '1',
      name: 'Polygon Genesis Creator',
      orgName: 'Polygon',
      description: 'To the creators of Polygon Network',
      imgSrc: badgeImg1 as unknown as string,
    },
  },
  {
    id: '2',
    status: ClaimStatus.UNCLAIMED,
    poapTokenId: '2',
    address: '0x1',
    userId: '2',
    gitPoapId: '2',
    gitPoap: {
      id: '2',
      name: 'AAVE Contributor 2021',
      orgName: 'AAVE',
      description: 'For all our valuable contributors in 2021',
      imgSrc: badgeImg2 as unknown as string,
    },
  },
  {
    id: '3',
    status: ClaimStatus.UNCLAIMED,
    poapTokenId: '3',
    address: '0x1',
    userId: '3',
    gitPoapId: '3',
    gitPoap: {
      id: '3',
      name: 'AAVE Core Contributor',
      orgName: 'AAVE',
      description: 'Issued to core contributors of AAVE protocol',
      imgSrc: badgeImg3 as unknown as string,
    },
  },
];

export default {
  title: 'Modals/Claim',
  component: ClaimModal,
  argTypes: {},
} as ComponentMeta<typeof ClaimModal>;

const Template: ComponentStory<typeof ClaimModal> = (args) => {
  return <ClaimModal {...args} />;
};

export const SingleClaim = Template.bind({});
SingleClaim.args = { claims: claims.slice(0, 1), isOpen: true };

export const TwoClaims = Template.bind({});
TwoClaims.args = { claims: claims.slice(0, 2), isOpen: true };

export const MultipleClaims = Template.bind({});
MultipleClaims.args = { claims: claims, isOpen: true };

export const NoClaims = Template.bind({});
NoClaims.args = { claims: [], isOpen: true };
