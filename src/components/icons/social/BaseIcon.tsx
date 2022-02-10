import styled from 'styled-components';
import { TextGray, ExtraHover, ExtraPressed } from '../../../colors';

export const Icon = styled.svg`
  path {
    transition: 200ms fill ease;
    fill: ${TextGray};
  }
  &:hover {
    path {
      fill: ${ExtraHover};
    }
  }
  &:active {
    path {
      fill: ${ExtraPressed};
    }
  }
`;
