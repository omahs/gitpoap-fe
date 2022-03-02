import Profile from '../../../pages/profile/[id]';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from '../../../components/Layout';
import { AllPOAPsHandler } from '../../data/handlers';

export default {
  title: 'Pages/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  msw: {
    handlers: [AllPOAPsHandler],
  },
};
