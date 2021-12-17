import styled from "styled-components";
import { rem } from "polished";
import { Blue1, DarkBlue2, Gray4 } from "../../colors";

type Props = {
  className?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  value: string;
  error?: boolean;
};

const StyledInputBase = styled.input<{
  value: string;
  error?: boolean;
}>`
  border: 1px solid #acbed4;
  padding: ${rem(12)} ${rem(16)};
  max-width: ${rem(500)};
  border-radius: ${rem(8)};
  font-family: "Inter", sans-serif;
  font-size: ${rem(16)};
  outline: none;
  color: ${DarkBlue2};
  transition: 250ms border-color ease, 250ms background ease;
  caret-color: ${Blue1};
  box-sizing: border-box;

  &:focus {
    border-color: ${Blue1};
    background-color: white;
  }

  &::placeholder {
    color: ${Gray4};
    font-weight: 500;
  }

  ${(props) =>
    props.error
      ? `
    border-color: #F278A4;
    `
      : null}
`;

export const Input = ({
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
      onChange={onChange}
      placeholder={placeholder ?? "Placeholder Text"}
      disabled={disabled}
      value={value}
      error={error}
    />
  );
};
