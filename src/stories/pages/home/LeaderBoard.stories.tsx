import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeaderBoard } from '../../../components/home/LeaderBoard';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';
import profile4 from '../../assets/profile4.png';
import profile5 from '../../assets/profile5.png';

export default {
  title: 'Home/LeaderBoard',
  component: LeaderBoard,
} as ComponentMeta<typeof LeaderBoard>;

const Template: ComponentStory<typeof LeaderBoard> = (args) => {
  return <LeaderBoard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Most honored contributors last week',
  data: [
    {
      name: 'nd-certora',
      imgSrc: profile1 as unknown as string,
      count: 12,
    },
    {
      name: 'matthewlilley',
      imgSrc: profile2 as unknown as string,
      count: 11,
    },
    {
      name: 'chefnomi',
      imgSrc: profile3 as unknown as string,
      count: 9,
    },
    {
      name: 'clearwood.eth',
      imgSrc: profile4 as unknown as string,
      count: 5,
    },
    {
      name: 'levx-io',
      imgSrc: profile5 as unknown as string,
      count: 5,
    },
  ],
};
