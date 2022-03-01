import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BannerStats } from '../../../components/home/BannerStats';
import { GetAllStatsHandler } from '../../data/handlers';

export default {
  title: 'Home/BannerStats',
  component: BannerStats,
} as ComponentMeta<typeof BannerStats>;

const Template: ComponentStory<typeof BannerStats> = () => {
  return <BannerStats />;
};

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [GetAllStatsHandler],
  },
};
