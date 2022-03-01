import { GitPoap } from '../../types';
import badgeImg from '../assets/badge1.png';
import { Project } from '../../types';
import { Stats } from '../../components/home/BannerStats';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';

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
