import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClaimBlock } from '../components/ClaimBlock';
import badgeImg from './assets/badge1.png';

export default {
  title: 'Compounds/ClaimBlock',
  component: ClaimBlock,
} as ComponentMeta<typeof ClaimBlock>;

const Template: ComponentStory<typeof ClaimBlock> = (args) => {
  return <ClaimBlock {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  imgSrc: badgeImg as unknown as string,
  name: 'Polygon Genesis Creator',
  orgName: 'Polygon',
  description: 'To the creators of Polygon Network',
};
