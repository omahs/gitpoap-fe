import styled from 'styled-components';
import { rem } from 'polished';
import { TextLight } from '../../../colors';

export const OrgName = styled.div`
  font-family: PT Mono;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(11)};
  line-height: ${rem(18)};
  text-align: center;
  letter-spacing: ${rem(1.2)};
  text-transform: uppercase;
  color: ${TextLight};
`;
