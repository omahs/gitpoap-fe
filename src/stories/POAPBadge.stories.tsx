import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { POAPBadge } from '../components/shared/elements/POAPBadge';
import poap4 from './assets/poap4.png';

export default {
  title: 'Elements/POAPBadge',
  component: POAPBadge,
} as ComponentMeta<typeof POAPBadge>;

const Template: ComponentStory<typeof POAPBadge> = (args) => {
  return <POAPBadge {...args}>{'Exchanges'}</POAPBadge>;
};

export const Default = Template.bind({});
Default.args = {
  imgSrc: poap4 as unknown as string,
  name: 'Float Capital AMA',
};
