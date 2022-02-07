import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components/elements/Input';

export default {
  title: 'Elements/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const StyledInput = styled(Input)`
  min-width: 300px;
`;

const Template: ComponentStory<typeof Input> = (args: any) => {
  return <StyledInput {...args} />;
};

export const Default = Template.bind({});
Default.args = { label: 'GitHub Repo Url', placeholder: 'github.com/stake-house/wagyu' };

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'GitHub Repo Url',
  placeholder: 'github.com/stake-house/wagyu',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'GitHub Repo Url',
  placeholder: 'github.com/stake-house/wagyu',
  error: 'Incorrect URL',
  value: '123456',
};
