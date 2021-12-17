import styled from 'styled-components';
import { rem } from 'polished';
import { Slate1 } from '../../colors';

export const Text = styled.div`
  font-family: 'Inter', sans-serif;
  color: ${Slate1};
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: ${rem(28)};
`;
