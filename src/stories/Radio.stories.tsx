import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from '../components/elements/Radio';

export default {
  title: 'Elements/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return <Radio {...args}>{'Contributor'}</Radio>;
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
