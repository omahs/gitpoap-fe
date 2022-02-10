import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InfoHexBase } from '../components/elements/InfoHexBase';
import { InfoHexMetric } from '../components/elements/InfoHexMetric';
import { InfoHexProfile } from '../components/elements/InfoHexProfile';
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
  return (
    <InfoHexProfile
      {...args}
      imgSrc="https://s3-alpha-sig.figma.com/img/69b9/6e34/cfadaaa6702e7f16cfe798e66952c215?Expires=1645401600&Signature=dvsU9Lu793v4-y7XUDDCGDkU0Rrc1nPdlnIQlFpjG8QxzRViwZgKK589hC3nP3kdHN9-xwc5ADiC5BzTAuKkGAiL1hgRR8g8xlKRe8UAhU-u-gs89t7kXgD~5f1k7sHaYKiwrD1WjKM8B62e21pC43y9qQsRnNO8kGq-jviu8NYCErD9BSPp-5u8TQv1Ehx7xUPIltJJ5KMlhY30BEVqReTdM4FQlwA9MaMBEzRSe9rihskuhR3L1lsx38kinASQGqIsha5Pva5amvNFrJkzwvOzPIG-Hmoh0wTyuNiSK9U83zPG6fo~5SKmUonR0vLfZMPAjyZneI36p2i4r0PYLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
