import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MostClaimed } from '../../../components/home/MostClaimed';
import { MostClaimedPoapsHandler } from '../../data/handlers';

export default {
  title: 'Home/MostClaimed',
  component: MostClaimed,
} as ComponentMeta<typeof MostClaimed>;

const Template: ComponentStory<typeof MostClaimed> = () => {
  return <MostClaimed />;
};

export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [MostClaimedPoapsHandler],
  },
};
