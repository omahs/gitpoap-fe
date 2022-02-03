import React from 'react';
import styled from 'styled-components';
import { Button as MButton } from '@mantine/core';
import { rem } from 'polished';
import { PrimaryBlue, TextAccent } from '../../colors';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  leftIcon?: React.ComponentProps<typeof MButton>['leftIcon'];
};

const StyledButton = styled(MButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${PrimaryBlue};
  font-family: 'PT Mono', monospace;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  font-size: ${rem(12)};
  line-height: ${rem(18)};
  letter-spacing: ${rem(2)};
  transition: 200ms background ease;
  border-radius: ${rem(6)};
  padding: ${rem(8)} ${rem(14)};
  height: auto;

  &:hover {
    box-shadow: none;
    background-color: ${TextAccent};
  }

  &:active {
    background-color: #20457e;
  }
`;

export const Button = ({ children, className, onClick, disabled, leftIcon }: Props) => {
  return (
    <StyledButton
      compact
      className={className}
      size="md"
      disabled={disabled}
      onClick={onClick}
      leftIcon={leftIcon}
    >
      {children}
    </StyledButton>
  );
};
