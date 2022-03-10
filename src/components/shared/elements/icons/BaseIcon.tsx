import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { TextGray, ExtraHover, ExtraPressed } from '../../../../colors';

export const IconStyles = css`
  text-decoration: none;
  stroke: ${TextGray};
  transition: 200ms fill ease, 200ms stroke ease;
  height: ${rem(18)};
  width: ${rem(18)};

  path {
    transition: 200ms fill ease;
    fill: ${TextGray};
  }
  &:hover {
    cursor: pointer;
    stroke: ${ExtraHover};
    path {
      fill: ${ExtraHover};
    }
  }
  &:active {
    stroke: ${ExtraPressed};
    path {
      fill: ${ExtraPressed};
    }
  }
`;

export const Icon = styled.svg`
  ${IconStyles}
`;
