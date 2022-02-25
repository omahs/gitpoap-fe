import { GitPoap } from '../../types';
import badgeImg from '../assets/badge1.png';
import { Project } from '../../types';

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
];
