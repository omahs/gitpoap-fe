import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClaimBlock } from '../components/ClaimBlock';

export default {
  title: 'Components/ClaimBlock',
  component: ClaimBlock,
  argTypes: {},
} as ComponentMeta<typeof ClaimBlock>;

const Template: ComponentStory<typeof ClaimBlock> = (args: any) => {
  return <ClaimBlock {...args}>{'AAVE Core Contributor'}</ClaimBlock>;
};

export const Default = Template.bind({});
Default.args = {
  imgSrc:
    'https://s3-alpha-sig.figma.com/img/31a6/5faa/fff45853f401aa925b5a333b59a184a4?Expires=1645401600&Signature=WlDhrgQca1HQoyA31wXcBTejBdVaHLHEnn9h7owFxPcZ~Iyd-I6iEPB51HG3dEhZh11YPLqjRFknokamzE8kiL4Jd7Sk-VDmGYJRMT0YbY7mmqPO1Y5uF6ObaI-c0uWymK6dChABMs0ch1LDNvm~fdKkrAg118ugvhbuAkQXXSdlQjr5JQ-0Leetlv4SyFejQA6EoE0ankbnDd7pXwjEKTQyxr9jZ7PrqGIAvG12YzQQHpVhIgPXh-gKnuBLv6lYziz7g~HLiB5b1cNAgpwNqD-eY8x3soX4TIr1zA1QCdbLhC8roPoA82yfY4DwsPKtY3z9qjsfQfGeMLEG-HRHWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  name: 'Polygon Genesis Creator',
  orgName: 'Polygon',
  description: 'To the creators of Polygon Network',
};
