import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InfoHexBase } from '../../components/shared/elements/InfoHexBase';
import { InfoHexMetric } from '../../components/home/InfoHexMetric';
import { InfoHexSummary } from '../../components/gitpoap/InfoHexSummary';
import { InfoHexProfileDetail } from '../../components/profile/InfoHexProfileDetail';
import { People } from '../../components/shared/elements/icons/People';
import profileImg from '../assets/profile1.png';
import profileImg6 from '../assets/profile6-large.png';
import { projectData } from '../data';

export default {
  title: 'Compounds/InfoHex',
  component: InfoHexBase,
  argTypes: {},
} as ComponentMeta<typeof InfoHexBase>;

const Template: ComponentStory<typeof InfoHexBase> = (args) => {
  return <InfoHexBase {...args}></InfoHexBase>;
};

export const Base = Template.bind({});
Base.args = {};

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

export const Profile: ComponentStory<typeof InfoHexBase> = (args) => {
  return (
    <InfoHexSummary
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

export const ProfileDetails: ComponentStory<typeof InfoHexBase> = (args) => {
  return (
    <InfoHexProfileDetail
      {...args}
      imgSrc={profileImg6 as unknown as string}
      name="miguelmota.eth"
      address="0xe4feb387cb1daff4bf9108581b116e5fa737bea2"
      bio="Passionate for Ethereum, Bitcoin, and client-side development."
      twitterHref="https://twitter.com/miguelmota"
      githubHref="github.com/miguelmota"
      websiteHref="https://miguelmota.com"
      projects={projectData.slice(0, 3)}
    />
  );
};
