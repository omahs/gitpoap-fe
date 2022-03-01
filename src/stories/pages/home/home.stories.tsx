import Home from '../../../pages/index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LeadersHandler,
  GetAllStatsHandler,
  RecentProjectsHandler,
  MostClaimedPoapsHandler,
} from '../../data/handlers';
import { Layout } from '../../../components/Layout';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => {
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
    handlers: [RecentProjectsHandler, LeadersHandler, GetAllStatsHandler, MostClaimedPoapsHandler],
  },
};
