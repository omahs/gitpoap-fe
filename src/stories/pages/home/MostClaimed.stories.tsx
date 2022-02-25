import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MostClaimed } from '../../../components/home/MostClaimed';
import { poaps } from '../../data';

export default {
  title: 'Home/MostClaimed',
  component: MostClaimed,
} as ComponentMeta<typeof MostClaimed>;

const Template: ComponentStory<typeof MostClaimed> = (args) => {
  return <MostClaimed {...args}>{'Exchanges'}</MostClaimed>;
};

export const Default = Template.bind({});

Default.args = {
  poaps: [...Array(10).keys()].map(() => poaps[0]),
};
