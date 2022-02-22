import styled from 'styled-components';
import { rem } from 'polished';
import { ExtraHover, ExtraPressed, TextAccent, TextDarkGray } from '../../../colors';

export const Title = styled.span`
  display: inline-block;
  font-family: 'PT Mono', monospace;
  font-weight: 700;
  font-size: ${rem(13)};
  line-height: ${rem(17)};
  letter-spacing: 0.5px;
  text-align: center;
  color: ${TextAccent};
  transition: color 150ms ease-in-out;
  cursor: pointer;

  &:hover:not([disabled]) {
    color: ${ExtraHover};
  }
  &:active:not([disabled]) {
    color: ${ExtraPressed};
  }
  &[disabled] {
    color: ${TextDarkGray};
    cursor: not-allowed;
  }
`;
