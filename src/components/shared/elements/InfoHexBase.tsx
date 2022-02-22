import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { BackgroundPanel, BackgroundPanel2 } from '../../../colors';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Body = styled.div`
  margin-top: ${rem(50)};
  margin-bottom: ${rem(50)};
  background-color: ${BackgroundPanel};
  position: relative;
  min-height: ${rem(100)};
  transition: 150ms background-color ease;
  &:before {
    position: absolute;
    content: '';
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    width: 100%;
    height: ${rem(50)};
    background-color: ${BackgroundPanel};
    top: ${rem(-50)};
    transition: 150ms background-color ease;
  }
  &:after {
    content: '';
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    position: absolute;
    width: 100%;
    height: ${rem(50)};
    background-color: ${BackgroundPanel};
    bottom: ${rem(-50)};
    transition: 150ms background-color ease;
  }

  &:hover {
    background-color: ${BackgroundPanel2};
    cursor: pointer;
    &::before,
    &::after {
      background-color: ${BackgroundPanel2};
    }
  }

  &:active {
    background-color: ${BackgroundPanel};
    cursor: pointer;
    &::before,
    &::after {
      background-color: ${BackgroundPanel};
    }
  }
`;

const Hex = styled.div`
  display: inline-flex;
  flex-direction: column;
  min-width: ${rem(250)};
`;

export const InfoHexBase = ({ className, children }: Props) => {
  return (
    <Hex className={className}>
      <Body>{children}</Body>
    </Hex>
  );
};
