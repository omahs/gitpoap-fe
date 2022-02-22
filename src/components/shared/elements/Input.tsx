import styled from 'styled-components';
import { rem } from 'polished';
import {
  TextGray,
  DarkGray,
  BackgroundPanel,
  TextDarkGray,
  TextLight,
  BackgroundPanel2,
  ExtraRed,
} from '../../../colors';
import { TextInput } from '@mantine/core';

type Props = {
  className?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  value: string;
  error?: React.ComponentProps<typeof TextInput>['error'];
  size?: React.ComponentProps<typeof TextInput>['size'];
  label?: React.ComponentProps<typeof TextInput>['label'];
};

const StyledInputBase = styled(TextInput)<{ disabled?: boolean }>`
  display: inline-block;

  .mantine-TextInput-label {
    font-family: 'PT Mono', monospace;
    color: ${TextLight};
    font-weight: 700;
    font-size: ${rem(11)};
    text-transform: uppercase;
    letter-spacing: 1.2px;
    line-height: ${rem(18)};
    margin-bottom: ${rem(11)};
    ${(props) => props.disabled && `color: ${TextGray}`};
  }

  .mantine-TextInput-input {
    border-radius: ${rem(6)};
    font-family: 'PT Mono', monospace;
    font-weight: 400;
    font-size: ${rem(14)};
    color: white;
    background-color: ${BackgroundPanel};
    padding-top: ${rem(10)};
    padding-bottom: ${rem(12)};
    transition: 150ms background-color ease;
    letter-spacing: 0.2px;

    &:hover:not(:disabled):not(:focus) {
      background-color: ${BackgroundPanel2};
    }
    &:focus {
      background-color: ${BackgroundPanel};
      /* Must use !important since Mantine is using it */
      border: ${rem(1)} solid ${DarkGray} !important;
    }
    &::placeholder {
      color: ${TextDarkGray};
    }
    &.mantine-TextInput-invalid {
      color: ${ExtraRed};
    }
  }

  .mantine-TextInput-error {
    font-family: 'PT Mono', monospace;
    font-size: ${rem(10)};
    letter-spacing: 1.2px;
    padding-left: ${rem(16)};

    /* Must !important since Mantine is using it */
    color: ${ExtraRed} !important;
  }
`;

export const Input = ({
  label,
  className,
  onChange,
  placeholder,
  disabled,
  value,
  error,
}: Props) => {
  return (
    <StyledInputBase
      className={className}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      error={error}
    />
  );
};
