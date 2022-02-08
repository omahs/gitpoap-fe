import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InfoHexBase } from '../components/elements/InfoHexBase';
import { InfoHexMetric } from '../components/elements/InfoHexMetric';
import { People } from '../components/icons/People';

export default {
  title: 'Elements/InfoHex',
  component: InfoHexBase,
  argTypes: {},
} as ComponentMeta<typeof InfoHexBase>;

const Template: ComponentStory<typeof InfoHexBase> = (args) => {
  return <InfoHexBase {...args}></InfoHexBase>;
};

export const Base = Template.bind({});
Base.args = {};

export const Profile: ComponentStory<typeof InfoHexBase> = (args) => {
  return <InfoHexBase {...args}></InfoHexBase>;
};

export const Metrics: ComponentStory<typeof InfoHexMetric> = (args) => {
  return (
    <InfoHexMetric
      {...args}
      value={Number('17545').toLocaleString()}
      unit={'contributors'}
      rate={'+345 / past week '}
      icon={<People />}
    />
  );
};
