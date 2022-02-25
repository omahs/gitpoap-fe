import React from 'react';
import styled from 'styled-components';
import { Button as ButtonUI } from '@mantine/core';
import { rem } from 'polished';
import {
  PrimaryBlue,
  TextGray,
  ExtraHover,
  ExtraActive,
  DarkGray,
  ExtraPressed,
} from '../../../colors';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  leftIcon?: React.ComponentProps<typeof ButtonUI>['leftIcon'];
  rightIcon?: React.ComponentProps<typeof ButtonUI>['rightIcon'];
  size?: React.ComponentProps<typeof ButtonUI>['size'];
  variant?: 'filled' | 'outline';
};

const StyledButton = styled(ButtonUI)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'PT Mono', monospace;
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${rem(12)};
  line-height: ${rem(18)};
  letter-spacing: ${rem(2)};
  transition: 150ms background ease, 150ms color ease, 150ms border ease;
  border-radius: ${rem(6)};
  padding: ${rem(8)} ${rem(14)};
  height: auto;

  &.mantine-Button-filled {
    background-color: ${PrimaryBlue};
    color: white;
    &:hover:not(:disabled) {
      background-color: ${ExtraHover};
    }
    &:active:not(:disabled) {
      background-color: ${ExtraActive};
    }
    &:disabled {
      background-color: ${DarkGray};
      .mantine-Button-label {
        color: ${TextGray};
      }
    }
  }

  &.mantine-Button-outline {
    border-color: ${TextGray};
    color: white;
    background-color: transparent;
    &:hover:not(:disabled) {
      border-color: ${ExtraHover};
      color: ${ExtraHover};
    }
    &:active:not(:disabled) {
      border-color: ${ExtraPressed};
      color: ${ExtraPressed};
    }
    &:disabled {
      background-color: transparent;
      border-color: ${TextGray};
      .mantine-Button-label {
        color: ${TextGray};
      }
    }
  }
`;

export const Button = ({
  children,
  className,
  onClick,
  disabled,
  leftIcon,
  rightIcon,
  variant,
  size,
}: Props) => {
  return (
    <StyledButton
      className={className}
      size={size}
      disabled={disabled}
      onClick={onClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};
