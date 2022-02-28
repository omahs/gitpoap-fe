import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SuggestionForm } from '../../../components/home/SuggestionForm';

export default {
  title: 'Home/SuggestionForm',
  component: SuggestionForm,
} as ComponentMeta<typeof SuggestionForm>;

const Template: ComponentStory<typeof SuggestionForm> = () => {
  return <SuggestionForm />;
};

export const Default = Template.bind({});

Default.args = {};
