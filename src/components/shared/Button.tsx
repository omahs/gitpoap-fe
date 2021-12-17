import React from "react";
import styled from "styled-components";
import MUButton from "@mui/material/Button";
import { rem } from "polished";
import { PrimaryBlue, PrimaryBlueHover } from "../../colors";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  endIcon?: React.ReactNode;
};

const StyledButton = styled(MUButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${PrimaryBlue};
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: white;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  width: ${rem(140)};
  height: ${rem(50)};
  border-radius: ${rem(6)};
  padding: ${rem(12)} ${rem(16)};
  text-transform: none;
  box-shadow: none;

  &:hover {
    box-shadow: none;
    background-color: ${PrimaryBlueHover};
  }

  &:active {
    background-color: #20457e;
  }
`;

export const Button = ({
  children,
  className,
  endIcon,
  onClick,
  disabled,
}: Props) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      endIcon={endIcon}
      onClick={onClick}
      variant="contained"
    >
      {children}
    </StyledButton>
  );
};
