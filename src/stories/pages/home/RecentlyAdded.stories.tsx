import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecentlyAdded } from '../../../components/home/RecentlyAdded';
import { projectData } from '../../data';
import { graphql } from 'msw';

export default {
  title: 'Home/RecentlyAdded',
  component: RecentlyAdded,
} as ComponentMeta<typeof RecentlyAdded>;

const Template: ComponentStory<typeof RecentlyAdded> = (args) => {
  return <RecentlyAdded />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Most honored contributors last week',
};

Default.parameters = {
  msw: {
    handlers: [
      graphql.query('recentProjects', (req, res, ctx) => {
        return res(
          ctx.data({
            recentProjects: {
              projects: projectData,
            },
          }),
        );
      }),
    ],
  },
};
