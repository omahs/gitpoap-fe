import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InfoHexBase } from '../components/shared/elements/InfoHexBase';
import { InfoHexMetric } from '../components/home/InfoHexMetric';
import { InfoHexProfile } from '../components/InfoHexProfile';
import { People } from '../components/shared/elements/icons/People';
import profileImg from './assets/profile1.png';

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
  return (
    <InfoHexProfile
      {...args}
      imgSrc={profileImg as unknown as string}
      name="nd-certora"
      blurb="Recovering physicist turned programmer. Soccer aficionado."
      twitterHref="https://twitter.com/nd_certora"
      githubHref="github.com/nd_certora"
      gitpoapId={10}
      numGitPOAPs={12}
    />
  );
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
