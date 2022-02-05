import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GitPOAPBadge } from '../components/elements/GitPOAPBadge';

const url =
  'https://s3-alpha-sig.figma.com/img/b518/bcca/25eeb427351cd564be419de8eaaed58e?Expires=1644796800&Signature=JjaV7mRbJwrA7dhpZFHmMUL0vs8RrvXlzf7GTdGrZ5Y8WqZceOjSnqZRyPltG8V0GfofJwpTO7CiE-cl2FhhOWA22RXMM662w~7EYQ4Hb6vc~qDrbfI3-AmXKN9xCGRpHijCs8YWEpFamceMcCCgK1j36ulaQxAE4im08KpT9OpoRu~emmRCDRV3Sd28HcIRCdXIeq4g1FGpQaadg36Nstr3CK995OJNZLMFq8aAMmuRgH415oL-xK6aKfQNtG1m9fNiiZ00IHLoq4cvnMjoc5Q6kNYGLaVlYwCSpf5hrNse51KXeYS6XXMz5iVUfSf679tNRAKB4g9PMWfMAELksg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
export default {
  title: 'Elements/GitPOAPBadge',
  component: GitPOAPBadge,
  argTypes: {},
} as ComponentMeta<typeof GitPOAPBadge>;

const Template: ComponentStory<typeof GitPOAPBadge> = (args: any) => {
  return <GitPOAPBadge {...args} />;
};

export const Default = Template.bind({});
Default.args = { imgUrl: url };

export const Disabled = Template.bind({});
Disabled.args = { imgUrl: url, disabled: true };
