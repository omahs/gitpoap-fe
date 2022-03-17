import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchItem } from '../../components/search/SearchItem';

export default {
  title: 'Compounds/SearchItem',
  component: SearchItem,
} as ComponentMeta<typeof SearchItem>;

const Container = styled.div`
  width: ${rem(150)};
`;

const Template: ComponentStory<typeof SearchItem> = (args) => {
  return (
    <Container>
      <SearchItem {...args} />;
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: 'Search text',
  href: 'https://example.com',
};
