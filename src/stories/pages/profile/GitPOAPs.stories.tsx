import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GitPOAPs } from '../../../components/profile/GitPOAPs';
import { FeaturedPOAPsProvider } from '../../../components/profile/FeaturedPOAPsContext';

export default {
  title: 'Profile/GitPOAPs',
  component: GitPOAPs,
} as ComponentMeta<typeof GitPOAPs>;

const Template: ComponentStory<typeof GitPOAPs> = (args) => {
  return (
    <FeaturedPOAPsProvider address={'0x1212423'}>
      <GitPOAPs {...args} />
    </FeaturedPOAPsProvider>
  );
};

export const Default = Template.bind({});
Default.args = { address: 'peebeejay.eth' };
