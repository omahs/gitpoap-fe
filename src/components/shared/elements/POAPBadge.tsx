import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Image from 'next/image';
import { Title as TitleUI } from '../elements/Title';
import { TextLight } from '../../../colors';

type Props = {
  className?: string;
  imgSrc: string;
  name: string;
  href?: string;
};

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const POAP = styled(Image)`
  width: ${rem(150)};
  height: ${rem(150)};
  border-radius: 50%;
  background: #ffffff;
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
  width: ${rem(170)};
`;

export const POAPBadge = ({ className, imgSrc, name, href }: Props) => {
  return (
    <Container className={className}>
      <ImgContainer>
        <POAP quality={100} height={150} width={150} src={imgSrc} />
      </ImgContainer>
      <Title>{name}</Title>
    </Container>
  );
};
