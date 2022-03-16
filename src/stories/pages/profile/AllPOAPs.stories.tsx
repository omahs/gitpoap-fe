import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AllPOAPs } from '../../../components/profile//AllPOAPs';
import { FeaturedPOAPsProvider } from '../../../components/profile/FeaturedPOAPsContext';

export default {
  title: 'Profile/AllPOAPs',
  component: AllPOAPs,
} as ComponentMeta<typeof AllPOAPs>;

const Template: ComponentStory<typeof AllPOAPs> = (args) => {
  return (
    <FeaturedPOAPsProvider address={'0x1212423'}>
      <AllPOAPs {...args} />
    </FeaturedPOAPsProvider>
  );
};

export const Default = Template.bind({});
Default.args = { address: 'peebeejay.eth' };
