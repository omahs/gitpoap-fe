import React from 'react';
import styled, { css } from 'styled-components';
import { Button as ButtonUI, ButtonProps } from '@mantine/core';
import { rem } from 'polished';
import { PrimaryBlue, TextGray, ExtraHover, ExtraPressed, DarkGray } from '../../../colors';

type Props = ButtonProps & {
  className?: string;
  onClick?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  disabled?: boolean;
  id?: string;
  variant?: 'filled' | 'outline';
};

export const FilledButtonStyles = css`
  background-color: ${PrimaryBlue};
  border: none;
  color: white;
  &:hover:not(:disabled) {
    background-color: ${ExtraHover};
  }
  &:active:not(:disabled) {
    background-color: ${ExtraPressed};
  }
  &:disabled {
    background-color: ${DarkGray};
    .mantine-Button-label {
      color: ${TextGray};
    }
  }
  &.mantine-Button-loading {
    background-color: ${PrimaryBlue};
    .mantine-Button-label {
      color: white;
    }
  }
`;

export const OutlineButtonStyles = css`
  border: ${rem(2)} solid ${TextGray};
  color: white;
  background-color: transparent;
  padding: ${rem(6)} ${rem(12)}; /* Adjusted for border */
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
  &.mantine-Button-loading {
    &:before {
      top: ${rem(-2)};
      left: ${rem(-2)};
      right: ${rem(-2)};
      bottom: ${rem(-2)};
    }
    .mantine-Button-label {
      color: white;
    }
  }
`;

const StyledButton = styled(ButtonUI)<React.ComponentProps<typeof Button>>`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'PT Mono', monospace !important;
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${rem(12)};
  line-height: ${rem(18)};
  letter-spacing: ${rem(2)};
  transition: 150ms background ease, 150ms color ease, 150ms border ease;
  border-radius: ${rem(6)};
  padding: ${rem(8)} ${rem(14)};
  height: fit-content;

  ${(props) => props.variant === 'filled' && FilledButtonStyles}
  ${(props) => props.variant === 'outline' && OutlineButtonStyles}
`;

export const Button = ({ variant = 'filled', ...props }: Props) => {
  return (
    <StyledButton {...props} variant={variant} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};
