import Home from '../../../pages/index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { stats } from './BannerStats.stories';
import { Layout } from '../../../components/Layout';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const Default = Template.bind({});
Default.args = {};

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
