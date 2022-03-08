import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecentlyAdded } from '../../../components/home/RecentlyAdded';

export default {
  title: 'Home/RecentlyAdded',
  component: RecentlyAdded,
} as ComponentMeta<typeof RecentlyAdded>;

const Template: ComponentStory<typeof RecentlyAdded> = () => {
  return <RecentlyAdded />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Most honored contributors last week',
};
