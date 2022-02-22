import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectHex } from '../components/shared/compounds/ProjectHex';

export default {
  title: 'Compounds/ProjectHex',
  component: ProjectHex,
} as ComponentMeta<typeof ProjectHex>;

const Template: ComponentStory<typeof ProjectHex> = (args) => {
  return <ProjectHex {...args} category={'Exchanges'} name={'SushiSwap'} />;
};

export const Default = Template.bind({});
Default.args = {
  category: 'Exchanges',
  name: 'SushiSwap',
  memberCount: 48,
  gitPoapCount: 20,
  stars: 984,
};
