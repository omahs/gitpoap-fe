import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBox } from '../../components/search/SearchBox';

export default {
  title: 'Compounds/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => {
  return <SearchBox />;
};

export const Default = Template.bind({});
Default.args = {};
