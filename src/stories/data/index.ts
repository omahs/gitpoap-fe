import { GitPoap, POAP } from '../../types';
import badgeImg from '../assets/badge1.png';
import { Project } from '../../types';
import { Stats } from '../../components/home/BannerStats';

/* Profile Pictures */
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';

/* POAPs */
import poap1 from '../assets/poaps/poap1.png';
import poap2 from '../assets/poaps/poap2.png';
import poap3 from '../assets/poaps/poap3.png';
import poap4 from '../assets/poaps/poap4.png';
import poap5 from '../assets/poaps/poap5.png';
import poap6 from '../assets/poaps/poap6.png';
import poap7 from '../assets/poaps/poap7.png';
import poap8 from '../assets/poaps/poap8.png';
import poap9 from '../assets/poaps/poap9.png';
import poap10 from '../assets/poaps/poap10.png';
import poap11 from '../assets/poaps/poap11.png';
import poap12 from '../assets/poaps/poap12.png';
import poap13 from '../assets/poaps/poap13.png';
import poap14 from '../assets/poaps/poap14.png';
import poap15 from '../assets/poaps/poap15.png';

export const poaps: GitPoap[] = [
  {
    id: '1',
    imgSrc: badgeImg as unknown as string,
    name: 'Polygon Genesis Creator',
    orgName: 'Polygon',
    description: 'To the creators of Polygon Network',
  },
  {
    id: '2',
    imgSrc: badgeImg as unknown as string,
    name: 'Polygon Genesis Creator',
    orgName: 'Polygon',
    description: 'To the creators of Polygon Network',
  },
  {
    id: '3',
    imgSrc: badgeImg as unknown as string,
    name: 'Polygon Genesis Creator',
    orgName: 'Polygon',
    description: 'To the creators of Polygon Network',
  },
];

export const rawPOAPs: POAP[] = [
  {
    id: '1',
    imgSrc: poap1 as unknown as string,
    name: '2 LIVES NFT art exhibition',
  },
  {
    id: '2',
    imgSrc: poap2 as unknown as string,
    name: 'DevOps Summit Canada 2021: Speaker',
  },
  {
    id: '3',
    imgSrc: poap3 as unknown as string,
    name: 'Mojito at Somewhere Nowhere party',
  },
  {
    id: '4',
    imgSrc: poap4 as unknown as string,
    name: 'Artifact Technology',
  },
  {
    id: '5',
    imgSrc: poap5 as unknown as string,
    name: 'Deadfellaz Halloween Happy Hour',
  },

  {
    id: '6',
    imgSrc: poap6 as unknown as string,
    name: 'DODO 1 year celebration event',
  },
  {
    id: '7',
    imgSrc: poap7 as unknown as string,
    name: 'Crypto something lecture',
  },
  {
    id: '8',
    imgSrc: poap8 as unknown as string,
    name: 'Float Capital AMA',
  },
  {
    id: '9',
    imgSrc: poap9 as unknown as string,
    name: 'NFTs + Philantropy lecture',
  },
  {
    id: '10',
    imgSrc: poap10 as unknown as string,
    name: 'Shapeshift DAO weekly sprint participant',
  },

  {
    id: '11',
    imgSrc: poap11 as unknown as string,
    name: '2 LIVES NFT art exhibition',
  },
  {
    id: '12',
    imgSrc: poap12 as unknown as string,
    name: 'Mojito at Somewhere Nowhere party',
  },
  {
    id: '13',
    imgSrc: poap13 as unknown as string,
    name: 'Artifact Technology exhibition',
  },
  {
    id: '14',
    imgSrc: poap14 as unknown as string,
    name: 'Deadfellaz Halloween event',
  },
  {
    id: '15',
    imgSrc: poap15 as unknown as string,
    name: 'Bitcoin crypto something event',
  },
];

export const projectData: Project[] = [
  {
    id: '1',
    name: 'Acala',
    memberCount: 80,
    gitPoapCount: 15,
    stars: 1507,
    category: 'Exchanges',
  },
  {
    id: '2',
    name: 'ACDX',
    memberCount: 44,
    gitPoapCount: 8,
    stars: 240,
    category: 'Blockchain',
  },
  {
    id: '3',
    name: 'Aegis',
    memberCount: 9,
    gitPoapCount: 5,
    stars: 15,
    category: 'DAPP',
  },
  {
    id: '4',
    name: 'YFValue',
    memberCount: 6,
    gitPoapCount: 2,
    stars: 912,
    category: 'DAPP',
  },
  {
    id: '5',
    name: 'Celo',
    memberCount: 17,
    gitPoapCount: 3,
    stars: 492,
    category: 'Blockchain',
  },
  {
    id: '6',
    name: 'Liquidity Vision',
    memberCount: 9,
    gitPoapCount: 3,
    stars: 95,
    category: 'Investing',
  },
  {
    id: '7',
    name: 'Curve',
    memberCount: 36,
    gitPoapCount: 10,
    stars: 1024,
    category: 'Exchanges',
  },
  {
    id: '8',
    name: 'SushiSwap',
    memberCount: 48,
    gitPoapCount: 20,
    stars: 984,
    category: 'Exchanges',
  },
  {
    id: '9',
    name: 'Polygon',
    memberCount: 80,
    gitPoapCount: 15,
    stars: 1507,
    category: 'Blockchain',
  },
  {
    id: '10',
    name: 'AAVE',
    memberCount: 44,
    gitPoapCount: 8,
    stars: 973,
    category: 'Blockchain',
  },
  {
    id: '11',
    name: 'Subspace',
    memberCount: 6,
    gitPoapCount: 2,
    stars: 85,
    category: 'DApp',
  },
];

export const leaderData = [
  {
    name: 'nd-certora',
    imgSrc: profile1 as unknown as string,
    count: 12,
  },
  {
    name: 'matthewlilley',
    imgSrc: profile2 as unknown as string,
    count: 11,
  },
  {
    name: 'chefnomi',
    imgSrc: profile3 as unknown as string,
    count: 9,
  },
  {
    name: 'clearwood.eth',
    imgSrc: profile4 as unknown as string,
    count: 5,
  },
  {
    name: 'levx-io',
    imgSrc: profile5 as unknown as string,
    count: 5,
  },
];

export const stats: Stats[] = [
  {
    value: '17545',
    unit: 'contributors',
    rate: '+345 / past week ',
    icon: 'people',
  },
  {
    value: '1015',
    unit: 'GitPOAPs',
    rate: '+154 / past week ',
    icon: 'gitPOAP',
  },
  {
    value: '549',
    unit: 'projects',
    rate: '+17 / past week ',
    icon: 'project',
  },
];
