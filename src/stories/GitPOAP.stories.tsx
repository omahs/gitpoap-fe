import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GitPOAP } from '../components/shared/compounds/GitPOAP';
import badgeImg from './assets/badge1.png';

export default {
  title: 'Compounds/GitPOAP',
  component: GitPOAP,
} as ComponentMeta<typeof GitPOAP>;

const Template: ComponentStory<typeof GitPOAP> = (args) => {
  return <GitPOAP {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  imgSrc: badgeImg as unknown as string,
  name: 'Polygon Genesis Creator',
  orgName: 'Polygon',
  description: 'To the creators of Polygon Network',
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  imgSrc: badgeImg as unknown as string,
  name: 'Polygon Genesis Creator',
  orgName: 'Polygon',
};
