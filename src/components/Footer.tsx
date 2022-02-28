import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Divider } from '@mantine/core';
import { GitPOAP } from './shared/elements/icons/GitPOAP';
import { BackgroundPanel2, TextGray } from '../colors';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${rem(45)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  letter-spacing: ${rem(0.5)};
  color: ${TextGray};
  padding: ${rem(20)} 0;
`;

export const Footer = () => {
  return (
    <Content>
      <Divider style={{ borderTopColor: BackgroundPanel2 }} />
      <Container>
        <div>
          <GitPOAP style={{ marginRight: rem(8) }} />
          {'GitPOAP 2022'}
        </div>
        <div>{'Get in touch team@gitpoap.io'}</div>
      </Container>
    </Content>
  );
};
