import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { BannerStats, Stats } from '../components/home/BannerStats';

export default {
  title: 'Home/BannerStats',
  component: BannerStats,
} as ComponentMeta<typeof BannerStats>;

const Template: ComponentStory<typeof BannerStats> = (args) => {
  return <BannerStats />;
};

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

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      graphql.query('GetAllStats', (req, res, ctx) => {
        return res(
          ctx.data({
            allStats: {
              stats,
            },
          }),
        );
      }),
    ],
  },
};
