import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Title as TitleUI } from '../elements/Title';
import { TextLight } from '../../../colors';

type Props = {
  imgSrc: string;
  name: string;
  href?: string;
};

const Badge = styled.div<{ imgSrc: string }>`
  width: ${rem(150)};
  height: ${rem(150)};
  border-radius: 50%;
  background: url('${(props) => props.imgSrc}') no-repeat center center, #ffffff;
  background-size: cover;
  transition: 150ms background-color ease-in-out, 150ms opacity ease-in-out;

  &:hover:not([disabled]) {
    opacity: 0.7;
    cursor: pointer;
  }
  &:active:not([disabled]) {
    opacity: 0.5;
  }
`;

const Title = styled(TitleUI)`
  margin-top: ${rem(18)};
  color: ${TextLight};
`;

export const POAPBadge = ({ imgSrc, name, href }: Props) => {
  return (
    <>
      <Badge imgSrc={imgSrc} />
      <Title>{name}</Title>
    </>
  );
};
