import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { BackgroundPanel2, ExtraHover, ExtraPressed, TextGray } from '../../colors';
import Link from 'next/link';

type Props = {
  text: string;
  href: string;
  className?: string;
  onClick?: React.MouseEventHandler;
};

const Item = styled.div`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: ${TextGray};
  background-color: ${BackgroundPanel2};
  border-radius: ${rem(6)};
  padding: ${rem(10)};
  transition: 150ms color ease;

  &:hover {
    color: ${ExtraHover};
  }
  &:active {
    color: ${ExtraPressed};
  }
`;

export const SearchItem = ({ className, onClick, text, href }: Props) => {
  return (
    <Link passHref href={href}>
      <Item className={className} onClick={onClick}>
        {text}
      </Item>
    </Link>
  );
};
