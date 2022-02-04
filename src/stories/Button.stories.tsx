import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/shared/Button';

export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = { children: 'Connect Wallet' };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = { children: 'Connect Wallet', disabled: true };

export const Outline = Template.bind({});
Outline.args = { children: 'Connect Wallet', variant: 'outline' };

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = { children: 'Connect Wallet', variant: 'outline', disabled: true };
