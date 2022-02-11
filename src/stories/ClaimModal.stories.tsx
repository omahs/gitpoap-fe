import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClaimModal } from '../components/ClaimModal';
import { Claim, ClaimStatus } from '../types';

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
      imgSrc:
        'https://s3-alpha-sig.figma.com/img/31a6/5faa/fff45853f401aa925b5a333b59a184a4?Expires=1645401600&Signature=WlDhrgQca1HQoyA31wXcBTejBdVaHLHEnn9h7owFxPcZ~Iyd-I6iEPB51HG3dEhZh11YPLqjRFknokamzE8kiL4Jd7Sk-VDmGYJRMT0YbY7mmqPO1Y5uF6ObaI-c0uWymK6dChABMs0ch1LDNvm~fdKkrAg118ugvhbuAkQXXSdlQjr5JQ-0Leetlv4SyFejQA6EoE0ankbnDd7pXwjEKTQyxr9jZ7PrqGIAvG12YzQQHpVhIgPXh-gKnuBLv6lYziz7g~HLiB5b1cNAgpwNqD-eY8x3soX4TIr1zA1QCdbLhC8roPoA82yfY4DwsPKtY3z9qjsfQfGeMLEG-HRHWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
      imgSrc:
        'https://s3-alpha-sig.figma.com/img/009a/a570/cd83ef773790e1bc64e2096c0cbc4f6d?Expires=1645401600&Signature=KMJLq4UjRVlbmSIiUMJxfbUhQFilinM~2a2XfDnivHkjAua9f6ZFfBEo9H~hbC7taz49WoYKLkmebF3n0sahCRPEpQzEZ8OYj~Rp5WvfWbPHdj2ZDxsibtyaMOZjDNZNEegFyV4cDPfMBhtLqZGaoCfdZD4nbTTwISo4pMiW7~Ule1KXTqxpAUfFeINm9MOeIE5MC~3UK7bmxq8mun3~yoz2AntBr7qd1obJDma6SAsUTvibs5DTCW5A5pbMr4Okow0eizjWpQdm1cmNIAawasWOsMAdjyD53XqlnyY4eILjueWWjLy5YuFNoprUDvIbFyJOf9v73VbF44lv1qJoIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
      imgSrc:
        'https://s3-alpha-sig.figma.com/img/b518/bcca/25eeb427351cd564be419de8eaaed58e?Expires=1645401600&Signature=RXiq8TnfREf7r5pi-eLLbToKxb4HpaeUCRKyyGetQdQK8zTFjzK53jnuQBm477vRvsOnhqzfo5fBc6phDhl82XUjAuKKB0ivkhLbDamujAQ9IKSDLpF8V99QiMukXpeICN237Bs-yiuAk~oH5JsnEaIBugpBJYPMsIZPhO~H1gBVDf4rmKgDKdeNHdmW1bO1vz7ONnU9qoyq5Gq14w9tx8L5hvpPZNZX7olNLq7QorRcpyq7rDrwPp~FTofTbVLZRCueGtznahB3tZ~oomzsKIHWq4nDwc-D5hxgHTP491MhF6PZXO9txTWEJzXaY7DsH-WcfJmVg5C2Ew~Psyc05Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
