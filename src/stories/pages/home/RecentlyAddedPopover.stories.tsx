import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecentlyAddedPopover } from '../../../components/home/RecentlyAddedPopover';
import { Button } from '../../../components/shared/elements/Button';

export default {
  title: 'Home/RecentlyAddedPopover',
  component: RecentlyAddedPopover,
} as ComponentMeta<typeof RecentlyAddedPopover>;

const Template: ComponentStory<typeof RecentlyAddedPopover> = () => {
  return (
    <RecentlyAddedPopover isOpen={true} onClose={() => {}} target={<Button>Click me</Button>} />
  );
};

export const Default = Template.bind({});
Default.args = {};
