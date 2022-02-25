import styled from 'styled-components';
import { rem } from 'polished';
import { TextLight } from '../../../colors';

export const Header = styled.span`
  font-family: VT323;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(48)};
  line-height: ${rem(48)};
  color: ${TextLight};
`;
