import styled from 'styled-components';
import { rem } from 'polished';
import { Slate1 } from '../../colors';
import { BREAKPOINTS } from '../../constants';

export const SubHeader = styled.div`
  font-family: 'JetBrains Mono', sans-serif;
  color: ${Slate1};
  font-weight: 700;
  font-size: ${rem(34)};
  line-height: ${rem(45)};

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: ${rem(30)};
    line-height: ${rem(40)};
  }
`;
