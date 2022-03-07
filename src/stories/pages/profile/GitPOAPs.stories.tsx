import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GitPOAPs } from '../../../components/profile/GitPOAPs';
import { gitPOAPs } from '../../data';

export default {
  title: 'Profile/GitPOAPs',
  component: GitPOAPs,
} as ComponentMeta<typeof GitPOAPs>;

const Template: ComponentStory<typeof GitPOAPs> = (args) => {
  return <GitPOAPs {...args} />;
};

export const Default = Template.bind({});
Default.args = { gitPOAPs: gitPOAPs };
